import { existsSync } from "node:fs";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

async function listFiles(dir, predicate = () => true) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(fullPath, predicate));
    } else if (predicate(fullPath)) {
      files.push(fullPath);
    }
  }
  return files;
}

function assertExists(relativePath) {
  const fullPath = path.join(root, relativePath);
  if (!existsSync(fullPath)) {
    errors.push(`Missing required path: ${relativePath}`);
  }
}

async function assertMinFiles(relativeDir, minCount) {
  const fullDir = path.join(root, relativeDir);
  if (!existsSync(fullDir)) {
    errors.push(`Missing required directory: ${relativeDir}`);
    return;
  }
  const files = await listFiles(fullDir, async () => true);
  if (files.length < minCount) {
    errors.push(`Expected at least ${minCount} files in ${relativeDir}, found ${files.length}`);
  }
}

function normalizeMarkdownTarget(rawTarget) {
  let target = rawTarget.trim();
  if (!target || target.startsWith("#")) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(target)) return null;
  if (target.startsWith("<") && target.endsWith(">")) {
    target = target.slice(1, -1);
  }
  target = target.split("#")[0];
  target = target.replace(/^\.?\//, "");
  const titleIndex = target.search(/\s+["']/);
  if (titleIndex !== -1) {
    target = target.slice(0, titleIndex);
  }
  try {
    target = decodeURI(target);
  } catch {
    errors.push(`Could not decode Markdown target: ${rawTarget}`);
  }
  return target;
}

async function checkMarkdownLinks() {
  const markdownFiles = await listFiles(root, (file) => file.endsWith(".md"));
  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;
  for (const file of markdownFiles) {
    const source = await readFile(file, "utf8");
    const sourceDir = path.dirname(file);
    for (const match of source.matchAll(linkPattern)) {
      const target = normalizeMarkdownTarget(match[1]);
      if (!target) continue;
      const fullTarget = path.resolve(sourceDir, target);
      if (!fullTarget.startsWith(root)) {
        errors.push(`Markdown link escapes package: ${path.relative(root, file)} -> ${target}`);
        continue;
      }
      if (!existsSync(fullTarget)) {
        errors.push(`Broken Markdown link: ${path.relative(root, file)} -> ${target}`);
      }
    }
  }
}

async function checkNonEmptyAssets() {
  const imageFiles = await listFiles(path.join(root, "assets"), (file) => /\.(jpg|jpeg|png|webp)$/i.test(file));
  for (const image of imageFiles) {
    const info = await stat(image);
    if (info.size === 0) {
      errors.push(`Empty image file: ${path.relative(root, image)}`);
    }
  }
}

await Promise.all([
  assertMinFiles("assets/iteration-panels", 74),
  assertMinFiles("assets/debug-panels", 73),
  assertMinFiles("assets/final-covers", 5),
  assertMinFiles("assets/current-covers", 5),
  assertMinFiles("assets/layout-schemes", 6),
  assertMinFiles("assets/edge-evidence", 6),
]);

[
  "README.md",
  "README.zh-CN.md",
  "docs/iteration-story.md",
  "docs/iteration-story.zh-CN.md",
  "docs/gallery.md",
  "docs/gallery.zh-CN.md",
  "docs/project-plan.md",
  "docs/method.md",
  "docs/method.zh-CN.md",
  "docs/layout-schemes.md",
  "docs/reproduce.md",
  "skills/xhs-cover-committee/SKILL.md",
  "src/hyperframes/ai-theme-cover-preview.html",
  "src/scripts/check-zoned-cover-layout.mjs",
  "src/scripts/export-ai-theme-cover-sculpt-v5.mjs",
  "CONTRIBUTING.md",
  "ROADMAP.md",
  "LICENSE",
  "NOTICE/ASSET_RIGHTS.md",
  "assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v59.jpg",
  "assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v73.jpg",
  "assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v74.jpg",
  "assets/iteration-panels/ai-cover-title-layout-comparison-sculpt-v75.jpg",
  "assets/debug-panels/ai-cover-title-layout-sculpt-v59-map-debug.jpg",
  "assets/debug-panels/ai-cover-title-layout-sculpt-v73-map-debug.jpg",
  "assets/debug-panels/ai-cover-title-layout-sculpt-v74-map-debug.jpg",
  "assets/debug-panels/ai-cover-title-layout-sculpt-v75-map-debug.jpg",
  "assets/current-covers/ai-coding-xhs-cover-sculpt-v75-1080x1440.jpg",
  "assets/current-covers/ai-agent-xhs-cover-sculpt-v75-1080x1440.jpg",
  "assets/layout-schemes/01-headline-crown-v75.jpg",
  "assets/layout-schemes/02-straight-axis-no-frame-v59.jpg",
  "assets/layout-schemes/03-object-carrier-v17.jpg",
  "assets/layout-schemes/04-side-pocket-v73.jpg",
  "assets/layout-schemes/05-lower-information-band-v75.jpg",
  "assets/layout-schemes/06-article-card-prototype.svg",
  "assets/edge-evidence/edge-board.jpg"
].forEach(assertExists);

await checkMarkdownLinks();
await checkNonEmptyAssets();

const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
if (packageJson.private !== false) {
  errors.push("package.json should keep private=false for the open-source package");
}
if (!packageJson.license) {
  errors.push("package.json missing license");
}

if (errors.length > 0) {
  console.error("Package check failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Package check passed.");
