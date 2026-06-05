import { access, readdir, readFile, stat } from "node:fs/promises";
import { dirname, join, normalize } from "node:path";

const root = new URL("..", import.meta.url).pathname;

const requiredFiles = [
  "README.md",
  "LICENSE",
  "NOTICE.md",
  "CONTRIBUTING.md",
  "ROADMAP.md",
  "docs/iteration-story.md",
  "docs/gallery.md",
  "docs/method.md",
  "skills/xhs-cover-committee/SKILL.md"
];

const requiredDirs = [
  "assets/iteration-panels",
  "assets/debug-panels",
  "assets/edge-evidence",
  "assets/current-covers"
];

const fail = [];

async function exists(path) {
  try {
    await access(join(root, path));
    return true;
  } catch {
    return false;
  }
}

for (const file of requiredFiles) {
  if (!(await exists(file))) fail.push(`missing file: ${file}`);
}

for (const dir of requiredDirs) {
  if (!(await exists(dir))) fail.push(`missing directory: ${dir}`);
}

async function jpgCount(dir) {
  const entries = await readdir(join(root, dir));
  return entries.filter((name) => name.endsWith(".jpg") || name.endsWith(".jpeg")).length;
}

const iterationCount = await jpgCount("assets/iteration-panels");
const debugCount = await jpgCount("assets/debug-panels");
const currentCount = await jpgCount("assets/current-covers");
const edgeCount = await jpgCount("assets/edge-evidence");

if (iterationCount < 70) fail.push(`expected at least 70 iteration panels, found ${iterationCount}`);
if (debugCount < 65) fail.push(`expected at least 65 debug panels, found ${debugCount}`);
if (currentCount < 5) fail.push(`expected 5 current covers, found ${currentCount}`);
if (edgeCount < 5) fail.push(`expected at least 5 edge evidence images, found ${edgeCount}`);

const readme = await readFile(join(root, "README.md"), "utf8");
for (const phrase of ["74+ iterations", "100+ process images", "not a \"perfect cover generator\"", "region", "contour"]) {
  if (!readme.includes(phrase)) fail.push(`README missing phrase: ${phrase}`);
}

const skill = await readFile(join(root, "skills/xhs-cover-committee/SKILL.md"), "utf8");
for (const phrase of ["name: xhs-cover-committee", "Inspect the image first", "Review Gates"]) {
  if (!skill.includes(phrase)) fail.push(`SKILL missing phrase: ${phrase}`);
}

const forbiddenAssetDirs = ["atutun-case-screenshots", "normalized-jpg"];
for (const dir of forbiddenAssetDirs) {
  if (await exists(join("assets", dir))) fail.push(`forbidden public screenshot directory present: assets/${dir}`);
}

const noticeInfo = await stat(join(root, "NOTICE.md"));
if (noticeInfo.size < 100) fail.push("NOTICE.md is too short");

for (const file of requiredFiles.filter((path) => path.endsWith(".md"))) {
  const body = await readFile(join(root, file), "utf8");
  const imageRefs = [...body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
  for (const ref of imageRefs) {
    if (/^https?:\/\//.test(ref)) continue;
    const normalized = normalize(join(dirname(file), ref));
    if (!(await exists(normalized))) fail.push(`broken image reference in ${file}: ${ref}`);
  }
}

if (fail.length > 0) {
  console.error("Package check failed:");
  for (const item of fail) console.error(`- ${item}`);
  process.exit(1);
}

console.log(JSON.stringify({
  status: "pass",
  iterationPanels: iterationCount,
  debugPanels: debugCount,
  currentCovers: currentCount,
  edgeEvidence: edgeCount
}, null, 2));
