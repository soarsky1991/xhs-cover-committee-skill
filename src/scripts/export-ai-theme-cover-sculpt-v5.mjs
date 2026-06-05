import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { tmpdir } from "node:os";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";

const root = resolve(".");
const renderer = resolve(
  root,
  "assets/publish/hyperframes-2026-05-31/cover-committee/work/ai-theme-cover-preview.html"
);
const outDir = resolve(
  root,
  "assets/publish/hyperframes-2026-05-31/cover-committee/theme-previews"
);
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const version = process.argv[2] || "v5";
const variantName = `sculpt-${version}`;

const requestedThemes = new Set(
  (process.env.COVER_EXPORT_THEME_IDS || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
);

const themes = [
  ["coding", `ai-coding-xhs-cover-${variantName}-1080x1440.jpg`],
  ["paper", `ai-paper-xhs-cover-${variantName}-1080x1440.jpg`],
  ["video", `ai-video-workflow-xhs-cover-${variantName}-1080x1440.jpg`],
  ["workbench", `ai-workbench-xhs-cover-${variantName}-1080x1440.jpg`],
  ["agent", `ai-agent-xhs-cover-${variantName}-1080x1440.jpg`],
].filter(([theme]) => requestedThemes.size === 0 || requestedThemes.has(theme));

async function captureCover(tmp, theme, variant, file) {
  const pngPath = resolve(tmp, `${theme}-${variant}.png`);
  const url = `${pathToFileURL(renderer).href}?theme=${encodeURIComponent(theme)}&variant=${variant}`;
  let lastError = null;
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      execFileSync(chromePath, [
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--allow-file-access-from-files",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=1800",
        "--force-device-scale-factor=1",
        "--window-size=1080,1440",
        `--screenshot=${pngPath}`,
        url,
      ], { stdio: "ignore" });
      lastError = null;
      break;
    } catch (error) {
      lastError = error;
      await new Promise((resolveRetry) => setTimeout(resolveRetry, attempt * 1200));
    }
  }
  if (lastError) throw lastError;
  const outFile = resolve(outDir, file);
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "94", pngPath, "--out", outFile], {
    stdio: "ignore",
  });
  return outFile;
}

async function captureBoard(tmp, variant, files, outFileName, title, bg = "#202020", fg = "#fff") {
  const figures = files.map(([theme, file]) => `
    <figure>
      <figcaption>${theme === "video" ? "video-workflow" : theme}</figcaption>
      <img src="${pathToFileURL(resolve(outDir, file)).href}">
    </figure>
  `).join("");
  const isDebug = variant.endsWith("debug");
  const html = `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 24px;
            background: ${bg};
            color: ${fg};
            font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
          }
          h1 { font-size: 28px; margin: 0 0 16px; }
          .grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
          figure { margin: 0; }
          figcaption { font-weight: 900; font-size: 16px; margin: 0 0 8px; }
          img {
            display: block;
            width: ${isDebug ? 210 : 270}px;
            height: ${isDebug ? 280 : 360}px;
            object-fit: cover;
            border: 2px solid rgba(255,255,255,.25);
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <section class="grid">${figures}</section>
      </body>
    </html>`;
  const htmlPath = resolve(tmp, `${variant}-board.html`);
  const pngPath = resolve(tmp, `${variant}-board.png`);
  await writeFile(htmlPath, html, "utf8");
  execFileSync(chromePath, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=1800",
    "--force-device-scale-factor=1",
    `--window-size=${isDebug ? "1180,430" : "1460,560"}`,
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: "ignore" });
  const outFile = resolve(outDir, outFileName);
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "94", pngPath, "--out", outFile], {
    stdio: "ignore",
  });
  return outFile;
}

await mkdir(outDir, { recursive: true });
const tmp = await mkdtemp(resolve(tmpdir(), `cover-${version}-`));
try {
  const normalFiles = [];
  const debugFiles = [];
  for (const [theme, file] of themes) {
    const outFile = await captureCover(tmp, theme, variantName, file);
    normalFiles.push([theme, file]);
    console.log(`${theme} -> ${outFile}`);
    const debugVariant = `${variantName}-debug`;
    const debugFile = file.replace(`-${variantName}-`, `-${debugVariant}-`);
    const debugOutFile = await captureCover(tmp, theme, debugVariant, debugFile);
    debugFiles.push([theme, debugFile]);
    console.log(`${theme} debug -> ${debugOutFile}`);
  }
  const board = await captureBoard(
    tmp,
    variantName,
    normalFiles,
    `ai-cover-title-layout-comparison-${variantName}.jpg`,
    `${variantName}: contour-aware title systems`
  );
  console.log(`board -> ${board}`);
  const debugBoard = await captureBoard(
    tmp,
    `${variantName}-debug`,
    debugFiles,
    `ai-cover-title-layout-${variantName}-map-debug.jpg`,
    `${variantName} map debug`,
    "#f6f4ef",
    "#111827"
  );
  console.log(`debug board -> ${debugBoard}`);
} finally {
  await rm(tmp, { recursive: true, force: true });
}
