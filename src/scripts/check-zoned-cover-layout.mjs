import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import vm from "node:vm";

const renderer = resolve(
  "assets/publish/hyperframes-2026-05-31/cover-committee/work/ai-theme-cover-preview.html"
);

const html = await readFile(renderer, "utf8");

function extractObjectLiteral(source, offset) {
  const open = source.indexOf("{", offset);
  if (open === -1) throw new Error("zonedLayouts object start not found");
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = open; i < source.length; i += 1) {
    const ch = source[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === quote) {
        quote = null;
      }
      continue;
    }
    if (ch === "\"" || ch === "'" || ch === "`") {
      quote = ch;
      continue;
    }
    if (ch === "{") depth += 1;
    if (ch === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(open, i + 1);
    }
  }
  throw new Error("zonedLayouts object end not found");
}

function extractLayouts(name, context = {}) {
  const marker = `const ${name} = `;
  const start = html.indexOf(marker);
  if (start === -1) return null;
  const literal = extractObjectLiteral(html, start + marker.length);
  return vm.runInNewContext(`(${literal})`, context);
}

const extractedLayouts = {
  zoned: extractLayouts("zonedLayouts"),
  sculpt: extractLayouts("sculptLayouts"),
  sculptV2: extractLayouts("sculptV2Layouts"),
  sculptV3: extractLayouts("sculptV3Layouts"),
  sculptV4: extractLayouts("sculptV4Layouts"),
  sculptV5: extractLayouts("sculptV5Layouts"),
  sculptV6: extractLayouts("sculptV6Layouts"),
  sculptV7: extractLayouts("sculptV7Layouts"),
  sculptV8: extractLayouts("sculptV8Layouts"),
};
extractedLayouts.sculptV9 = extractLayouts("sculptV9Layouts", {
  sculptV8Layouts: extractedLayouts.sculptV8,
});
extractedLayouts.sculptV10 = extractLayouts("sculptV10Layouts", {
  sculptV9Layouts: extractedLayouts.sculptV9,
});
extractedLayouts.sculptV11 = extractLayouts("sculptV11Layouts", {
  sculptV10Layouts: extractedLayouts.sculptV10,
});
extractedLayouts.sculptV12 = extractLayouts("sculptV12Layouts", {
  sculptV11Layouts: extractedLayouts.sculptV11,
});
extractedLayouts.sculptV13 = extractLayouts("sculptV13Layouts", {
  sculptV12Layouts: extractedLayouts.sculptV12,
});
extractedLayouts.sculptV14 = extractLayouts("sculptV14Layouts", {
  sculptV13Layouts: extractedLayouts.sculptV13,
});
extractedLayouts.sculptV15 = extractLayouts("sculptV15Layouts", {
  sculptV14Layouts: extractedLayouts.sculptV14,
});
extractedLayouts.sculptV16 = extractLayouts("sculptV16Layouts", {
  sculptV15Layouts: extractedLayouts.sculptV15,
});
extractedLayouts.sculptV17 = extractLayouts("sculptV17Layouts", {
  sculptV16Layouts: extractedLayouts.sculptV16,
});
extractedLayouts.sculptV18 = extractLayouts("sculptV18Layouts", {
  sculptV17Layouts: extractedLayouts.sculptV17,
});
extractedLayouts.sculptV19 = extractLayouts("sculptV19Layouts", {
  sculptV18Layouts: extractedLayouts.sculptV18,
});
extractedLayouts.sculptV20 = extractLayouts("sculptV20Layouts", {
  sculptV19Layouts: extractedLayouts.sculptV19,
});
extractedLayouts.sculptV21 = extractLayouts("sculptV21Layouts", {
  sculptV20Layouts: extractedLayouts.sculptV20,
});
extractedLayouts.sculptV22 = extractLayouts("sculptV22Layouts", {
  sculptV21Layouts: extractedLayouts.sculptV21,
});
extractedLayouts.sculptV23 = extractLayouts("sculptV23Layouts", {
  sculptV22Layouts: extractedLayouts.sculptV22,
});
extractedLayouts.sculptV24 = extractLayouts("sculptV24Layouts", {
  sculptV23Layouts: extractedLayouts.sculptV23,
});
extractedLayouts.sculptV25 = extractLayouts("sculptV25Layouts");
extractedLayouts.sculptV26 = extractLayouts("sculptV26Layouts");
extractedLayouts.sculptV27 = extractLayouts("sculptV27Layouts", {
  sculptV26Layouts: extractedLayouts.sculptV26,
});
extractedLayouts.sculptV28 = extractLayouts("sculptV28Layouts", {
  sculptV27Layouts: extractedLayouts.sculptV27,
});
extractedLayouts.sculptV29 = extractLayouts("sculptV29Layouts");
extractedLayouts.sculptV30 = extractLayouts("sculptV30Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
});
extractedLayouts.sculptV31 = extractLayouts("sculptV31Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
});
extractedLayouts.sculptV32 = extractLayouts("sculptV32Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
});
extractedLayouts.sculptV33 = extractLayouts("sculptV33Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
});
extractedLayouts.sculptV34 = extractLayouts("sculptV34Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
});
extractedLayouts.sculptV35 = extractLayouts("sculptV35Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
});
extractedLayouts.sculptV36 = extractLayouts("sculptV36Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
});
extractedLayouts.sculptV37 = extractLayouts("sculptV37Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
});
extractedLayouts.sculptV38 = extractLayouts("sculptV38Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
});
extractedLayouts.sculptV39 = extractLayouts("sculptV39Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
});
extractedLayouts.sculptV40 = extractLayouts("sculptV40Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
  sculptV39Layouts: extractedLayouts.sculptV39,
});
extractedLayouts.sculptV41 = extractLayouts("sculptV41Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
  sculptV39Layouts: extractedLayouts.sculptV39,
  sculptV40Layouts: extractedLayouts.sculptV40,
});
extractedLayouts.sculptV42 = extractLayouts("sculptV42Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
  sculptV39Layouts: extractedLayouts.sculptV39,
  sculptV40Layouts: extractedLayouts.sculptV40,
  sculptV41Layouts: extractedLayouts.sculptV41,
});
extractedLayouts.sculptV43 = extractLayouts("sculptV43Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
  sculptV39Layouts: extractedLayouts.sculptV39,
  sculptV40Layouts: extractedLayouts.sculptV40,
  sculptV41Layouts: extractedLayouts.sculptV41,
  sculptV42Layouts: extractedLayouts.sculptV42,
});
extractedLayouts.sculptV44 = extractLayouts("sculptV44Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
  sculptV39Layouts: extractedLayouts.sculptV39,
  sculptV40Layouts: extractedLayouts.sculptV40,
  sculptV41Layouts: extractedLayouts.sculptV41,
  sculptV42Layouts: extractedLayouts.sculptV42,
  sculptV43Layouts: extractedLayouts.sculptV43,
});
extractedLayouts.sculptV45 = extractLayouts("sculptV45Layouts", {
  sculptV29Layouts: extractedLayouts.sculptV29,
  sculptV30Layouts: extractedLayouts.sculptV30,
  sculptV31Layouts: extractedLayouts.sculptV31,
  sculptV32Layouts: extractedLayouts.sculptV32,
  sculptV33Layouts: extractedLayouts.sculptV33,
  sculptV34Layouts: extractedLayouts.sculptV34,
  sculptV35Layouts: extractedLayouts.sculptV35,
  sculptV36Layouts: extractedLayouts.sculptV36,
  sculptV37Layouts: extractedLayouts.sculptV37,
  sculptV38Layouts: extractedLayouts.sculptV38,
  sculptV39Layouts: extractedLayouts.sculptV39,
  sculptV40Layouts: extractedLayouts.sculptV40,
  sculptV41Layouts: extractedLayouts.sculptV41,
  sculptV42Layouts: extractedLayouts.sculptV42,
  sculptV43Layouts: extractedLayouts.sculptV43,
  sculptV44Layouts: extractedLayouts.sculptV44,
});
extractedLayouts.sculptV46 = extractLayouts("sculptV46Layouts", {
  sculptV44Layouts: extractedLayouts.sculptV44,
  sculptV45Layouts: extractedLayouts.sculptV45,
});
extractedLayouts.sculptV47 = extractLayouts("sculptV47Layouts", {
  sculptV45Layouts: extractedLayouts.sculptV45,
  sculptV46Layouts: extractedLayouts.sculptV46,
});
extractedLayouts.sculptV48 = extractLayouts("sculptV48Layouts", {
  sculptV47Layouts: extractedLayouts.sculptV47,
});
extractedLayouts.sculptV49 = extractLayouts("sculptV49Layouts", {
  sculptV48Layouts: extractedLayouts.sculptV48,
});
extractedLayouts.sculptV50 = extractLayouts("sculptV50Layouts", {
  sculptV49Layouts: extractedLayouts.sculptV49,
});
extractedLayouts.sculptV51 = extractLayouts("sculptV51Layouts", {
  sculptV50Layouts: extractedLayouts.sculptV50,
});
extractedLayouts.sculptV52 = extractLayouts("sculptV52Layouts", {
  sculptV51Layouts: extractedLayouts.sculptV51,
});
extractedLayouts.sculptV53 = extractLayouts("sculptV53Layouts", {
  sculptV16Layouts: extractedLayouts.sculptV16,
  sculptV19Layouts: extractedLayouts.sculptV19,
});
extractedLayouts.sculptV54 = extractLayouts("sculptV54Layouts", {
  sculptV53Layouts: extractedLayouts.sculptV53,
});
extractedLayouts.sculptV55 = extractLayouts("sculptV55Layouts", {
  sculptV54Layouts: extractedLayouts.sculptV54,
});
extractedLayouts.sculptV56 = extractLayouts("sculptV56Layouts", {
  sculptV55Layouts: extractedLayouts.sculptV55,
});
extractedLayouts.sculptV57 = extractLayouts("sculptV57Layouts", {
  sculptV56Layouts: extractedLayouts.sculptV56,
});
extractedLayouts.sculptV58 = extractLayouts("sculptV58Layouts", {
  sculptV57Layouts: extractedLayouts.sculptV57,
});
extractedLayouts.sculptV59 = extractLayouts("sculptV59Layouts", {
  sculptV58Layouts: extractedLayouts.sculptV58,
});
extractedLayouts.sculptV60 = extractLayouts("sculptV60Layouts", {
  sculptV59Layouts: extractedLayouts.sculptV59,
});
extractedLayouts.sculptV61 = extractLayouts("sculptV61Layouts", {
  sculptV59Layouts: extractedLayouts.sculptV59,
});
extractedLayouts.sculptV62 = extractLayouts("sculptV62Layouts", {
  sculptV59Layouts: extractedLayouts.sculptV59,
});
extractedLayouts.sculptV63 = extractLayouts("sculptV63Layouts", {
  sculptV62Layouts: extractedLayouts.sculptV62,
});
extractedLayouts.sculptV64 = extractLayouts("sculptV64Layouts", {
  sculptV42Layouts: extractedLayouts.sculptV42,
});
extractedLayouts.sculptV65 = extractLayouts("sculptV65Layouts", {
  sculptV63Layouts: extractedLayouts.sculptV63,
});
extractedLayouts.sculptV66 = extractLayouts("sculptV66Layouts", {
  sculptV63Layouts: extractedLayouts.sculptV63,
});
extractedLayouts.sculptV67 = extractLayouts("sculptV67Layouts", {
  sculptV66Layouts: extractedLayouts.sculptV66,
});
extractedLayouts.sculptV68 = extractLayouts("sculptV68Layouts", {
  sculptV67Layouts: extractedLayouts.sculptV67,
});
extractedLayouts.sculptV69 = extractLayouts("sculptV69Layouts", {
  sculptV68Layouts: extractedLayouts.sculptV68,
});
extractedLayouts.sculptV70 = extractLayouts("sculptV70Layouts", {
  sculptV69Layouts: extractedLayouts.sculptV69,
});
extractedLayouts.sculptV71 = extractLayouts("sculptV71Layouts", {
  sculptV70Layouts: extractedLayouts.sculptV70,
});
extractedLayouts.sculptV72 = extractLayouts("sculptV72Layouts", {
  sculptV71Layouts: extractedLayouts.sculptV71,
});
extractedLayouts.sculptV73 = extractLayouts("sculptV73Layouts", {
  sculptV72Layouts: extractedLayouts.sculptV72,
});
extractedLayouts.sculptV74 = extractLayouts("sculptV74Layouts", {
  sculptV73Layouts: extractedLayouts.sculptV73,
});
extractedLayouts.sculptV75 = extractLayouts("sculptV75Layouts", {
  sculptV73Layouts: extractedLayouts.sculptV73,
  sculptV74Layouts: extractedLayouts.sculptV74,
  makeV75Theme: (theme) => {
    const base = extractedLayouts.sculptV73[theme];
    const crown = (extractedLayouts.sculptV74[theme].elements || []).find(
      (item) => item.type === "arcText" && item.id?.includes("crown-title")
    );
    return {
      ...base,
      checkArcTextAsText: true,
      safeZones: [
        (() => {
          const zone = (extractedLayouts.sculptV74[theme].safeZones || [])[0];
          return zone ? { ...zone, id: zone.id.replace("v74", "v75") } : null;
        })(),
        ...(base.safeZones || []).filter((zone) => !zone.id.includes("crown-title-corridor"))
      ].filter(Boolean),
      densityZones: base.densityZones,
      alignmentGroups: base.alignmentGroups,
      scaleGroups: base.scaleGroups,
      elements: [
        crown
          ? {
              ...crown,
              id: crown.id.replace("v74", "v75"),
              region: crown.region.replace("v74", "v75"),
              semanticAnchor: "v75-main-title-follows-human-crown"
            }
          : (base.elements || [])[0],
        ...(base.elements || []).filter((item) => item.type !== "arcText")
      ]
    };
  },
});

const layoutGroups = Object.fromEntries(
  Object.entries(extractedLayouts).filter(([, layouts]) => layouts)
);

function sculptVersion(group) {
  const match = /^sculptV(\d+)$/.exec(group);
  return match ? Number(match[1]) : 0;
}

function sculptAtLeast(group, version) {
  const currentVersion = sculptVersion(group);
  return currentVersion >= version && currentVersion !== 64;
}

function textUnits(text) {
  return [...text].reduce((sum, char) => {
    if (/[A-Za-z0-9]/.test(char)) return sum + 0.62;
    if (/[|:：/ -]/.test(char)) return sum + 0.35;
    return sum + 1;
  }, 0);
}

function resolveDynamicBox(item, layout) {
  if (item.boxFrom === "line-points" && item.linePoints?.length >= 2) {
    const first = item.linePoints[0];
    const last = item.linePoints[item.linePoints.length - 1];
    const dx = last[0] - first[0];
    const dy = last[1] - first[1];
    const length = Math.max(1, Math.hypot(dx, dy));
    const ux = dx / length;
    const uy = dy / length;
    const nx = -uy;
    const ny = ux;
    const t = item.t ?? 0;
    const parallel = item.parallelOffset ?? 0;
    const normal = item.normalOffset ?? 0;
    const x = first[0] + dx * t + ux * parallel + nx * normal + (item.xOffset || 0);
    const y = first[1] + dy * t + uy * parallel + ny * normal + (item.yOffset || 0);
    return {
      ...item,
      x: Math.round(x),
      y: Math.round(y),
      rot: Number(((Math.atan2(dy, dx) * 180) / Math.PI + (item.rotOffset || 0)).toFixed(2))
    };
  }
  if (item.boxFrom === "contour-points" && item.contourPoints?.length) {
    const xs = item.contourPoints.map((point) => point[0]);
    const ys = item.contourPoints.map((point) => point[1]);
    const size = item.size || 96;
    const padX = item.padX ?? 18;
    const topPad = item.topPad ?? Math.round(size * 0.82);
    const bottomPad = item.bottomPad ?? Math.round(size * 0.3);
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const minY = Math.min(...ys);
    const maxY = Math.max(...ys);
    return {
      ...item,
      x: Math.round(minX - padX),
      y: Math.round(minY - topPad),
      w: Math.round(maxX - minX + padX * 2),
      h: Math.round(maxY - minY + topPad + bottomPad)
    };
  }
  if (item.boxFrom !== "head-top") return item;
  const zone = (layout?.avoidZones || []).find(
    (entry) => entry.id === (item.anchorZone || "human-face")
  );
  if (!zone) return item;
  const w = item.w || Math.round(zone.w * (item.widthScale || 1.85));
  const h = item.h || 156;
  const centerX = zone.x + zone.w / 2 + (item.anchorXOffset || 0);
  const x = Math.round(centerX - w / 2);
  const y = Math.round(zone.y - h - (item.anchorGap || 10) + (item.anchorYOffset || 0));
  return { ...item, x, y, w, h };
}

function estimateBox(item, layout) {
  item = resolveDynamicBox(item, layout);
  const pad = 14;
  if (item.type === "word") {
    if (item.className?.includes("v5-vertical")) {
      return {
        x: item.x,
        y: item.y,
        w: item.size * 1.15 + pad,
        h: textUnits(item.text) * item.size * 0.94 + pad * 2
      };
    }
    const width = textUnits(item.text) * item.size * 0.92 + pad * 2;
    const height = item.size * 1.02 + pad;
    return { x: item.x, y: item.y, w: width, h: height };
  }
  if (item.type === "beam") {
    return { x: item.x, y: item.y - 10, w: item.w, h: 26 };
  }
  if (item.type === "underline" || item.type === "arrow") {
    return { x: item.x, y: item.y - 12, w: item.w, h: 32 };
  }
  if (item.type === "contour") {
    return { x: item.x, y: item.y, w: item.w || 150, h: item.h || 120 };
  }
  if (item.type === "path") {
    return { x: item.x, y: item.y, w: item.w || 160, h: item.h || 120 };
  }
  if (item.type === "arcText") {
    if (!layout?.checkArcTextAsText) {
      return { x: item.x, y: item.y, w: item.w || 300, h: item.h || 120 };
    }
    const size = item.size || 64;
    const stroke = item.stroke || 8;
    const textWidth = textUnits(item.text) * size * 0.92 + stroke * 2;
    const textHeight = size * 1.08 + stroke * 2;
    return {
      x: item.x,
      y: item.y,
      w: Math.min(item.w || textWidth, textWidth),
      h: Math.min(item.h || textHeight, textHeight)
    };
  }
  if (item.type === "checks") {
    const rows = Math.ceil((item.items || []).length / 2);
    return { x: item.x, y: item.y, w: item.w || 380, h: rows * 52 + 12 };
  }
  if (item.type === "chips") {
    const rows = Math.ceil((item.items || []).length / 3);
    return { x: item.x, y: item.y, w: item.w || 360, h: rows * 48 + 12 };
  }
  if (item.type === "token") {
    return { x: item.x, y: item.y, w: 78, h: 78 };
  }
  if (item.type === "bubble") {
    const size = item.size || 26;
    const width = Math.max(76, textUnits(item.text) * size * 0.9 + 32);
    return { x: item.x, y: item.y, w: width, h: Math.max(76, size * 1.35 + 36) };
  }
  if (item.type === "badge") {
    return { x: item.x, y: item.y, w: textUnits(item.text) * 23 * 0.9 + 44, h: 54 };
  }
  if (item.type === "kicker") {
    const size = item.size || 23;
    return { x: item.x, y: item.y, w: textUnits(item.text) * size * 0.9 + 44, h: Math.max(54, size * 1.35 + 22) };
  }
  if (item.type === "note") {
    return { x: item.x, y: item.y, w: textUnits(item.text) * 28 * 0.86 + 44, h: 64 };
  }
  if (item.type === "stamp") {
    const size = item.size || 30;
    return { x: item.x, y: item.y, w: textUnits(item.text) * size * 0.9 + 44, h: Math.max(70, size * 1.35 + 28) };
  }
  return { x: item.x ?? 0, y: item.y ?? 0, w: item.w ?? 0, h: item.h ?? 0 };
}

function estimateContourBox(item, layout) {
  const resolved = resolveDynamicBox(item, layout);
  if (
    resolved.type === "arcText" &&
    layout?.checkArcTextAsText &&
    resolved.semanticAnchor?.includes("crown")
  ) {
    return { x: resolved.x, y: resolved.y, w: resolved.w || 300, h: resolved.h || 120 };
  }
  return estimateBox(item, layout);
}

function intersects(a, b, inset = 0) {
  return !(
    a.x + a.w <= b.x + inset ||
    b.x + b.w - inset <= a.x ||
    a.y + a.h <= b.y + inset ||
    b.y + b.h - inset <= a.y
  );
}

function contains(a, b, tolerance = 0) {
  return (
    a.x >= b.x - tolerance &&
    a.y >= b.y - tolerance &&
    a.x + a.w <= b.x + b.w + tolerance &&
    a.y + a.h <= b.y + b.h + tolerance
  );
}

function overlapArea(a, b) {
  const x = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const y = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return x * y;
}

function intersectionArea(a, b) {
  return overlapArea(a, b);
}

function contourGap(box, zone, side = "right-to-left") {
  if (side === "left-to-right") return box.x - (zone.x + zone.w);
  if (side === "bottom-to-top") return zone.y - (box.y + box.h);
  if (side === "top-to-bottom") return box.y - (zone.y + zone.h);
  return zone.x - (box.x + box.w);
}

const findings = [];
for (const [group, layouts] of Object.entries(layoutGroups)) {
  for (const [theme, layout] of Object.entries(layouts)) {
    const checkedItems = (layout.elements || []).filter((item) => item.check !== false);
    for (const item of checkedItems) {
      if (item.check === false) continue;
      const box = estimateBox(item, layout);
      if (item.region) {
        const region = (layout.safeZones || []).find((zone) => zone.id === item.region);
        if (!region) {
          findings.push({
            group,
            theme,
            element: item.text || item.type,
            type: item.type,
            issue: "missing-region",
            region: item.region
          });
        } else if (!contains(box, region, 18)) {
          findings.push({
            group,
            theme,
            element: item.text || item.type,
            type: item.type,
            issue: "outside-region",
            region: item.region,
            box: Object.fromEntries(Object.entries(box).map(([key, value]) => [key, Math.round(value)])),
            zone: region
          });
        }
      }
      if (item.contourZone) {
        const zone = (layout.avoidZones || []).find((entry) => entry.id === item.contourZone);
        if (!zone) {
          findings.push({
            group,
            theme,
            element: item.text || item.type,
            type: item.type,
            issue: "missing-contour-zone",
            contourZone: item.contourZone
          });
        } else {
          const contourBox = estimateContourBox(item, layout);
          const gap = contourGap(contourBox, zone, item.contourSide);
          const maxGap = item.maxContourGap ?? 120;
          const minGap = item.minContourGap ?? -45;
          if (gap > maxGap || gap < minGap) {
            findings.push({
              group,
              theme,
              element: item.text || item.type,
              type: item.type,
              issue: "contour-gap",
              contourZone: item.contourZone,
              gap: Math.round(gap),
              allowed: { min: minGap, max: maxGap },
              box: Object.fromEntries(Object.entries(contourBox).map(([key, value]) => [key, Math.round(value)])),
              zone
            });
          }
        }
      }
      for (const zone of layout.avoidZones || []) {
        if (item.allowZones?.includes(zone.id)) continue;
        if (intersects(box, zone, 10)) {
          findings.push({
            group,
            theme,
            element: item.text || item.type,
            type: item.type,
            avoidZone: zone.id,
            box: Object.fromEntries(Object.entries(box).map(([key, value]) => [key, Math.round(value)])),
            zone
          });
        }
      }
    }
    if (sculptAtLeast(group, 45)) {
      for (let i = 0; i < checkedItems.length; i += 1) {
        const a = checkedItems[i];
        if (a.allowOverlap) continue;
        const aBox = estimateBox(a, layout);
        for (let j = i + 1; j < checkedItems.length; j += 1) {
          const b = checkedItems[j];
          if (b.allowOverlap) continue;
          const bBox = estimateBox(b, layout);
          const area = overlapArea(aBox, bBox);
          const ratio = area / Math.max(1, Math.min(aBox.w * aBox.h, bBox.w * bBox.h));
          if (area > 600 && ratio > 0.03) {
            findings.push({
              group,
              theme,
              element: `${a.text || a.type} / ${b.text || b.type}`,
              issue: "element-overlap",
              area: Math.round(area),
              ratio: Number(ratio.toFixed(3)),
              boxes: [
                Object.fromEntries(Object.entries(aBox).map(([key, value]) => [key, Math.round(value)])),
                Object.fromEntries(Object.entries(bBox).map(([key, value]) => [key, Math.round(value)]))
              ]
            });
          }
        }
      }
    }
    if (sculptAtLeast(group, 51)) {
      for (const zone of layout.densityZones || []) {
        const coverageArea = checkedItems
          .filter((item) => item.type === "word" || item.type === "bubble" || (sculptAtLeast(group, 68) && item.type === "arcText") || (sculptAtLeast(group, 56) && item.type === "stamp"))
          .map((item) => estimateBox(item, layout))
          .reduce((sum, box) => sum + intersectionArea(box, zone), 0);
        const ratio = coverageArea / Math.max(1, zone.w * zone.h);
        if (ratio < zone.minCoverage) {
          findings.push({
            group,
            theme,
            issue: "title-density-low",
            densityZone: zone.id,
            ratio: Number(ratio.toFixed(3)),
            required: zone.minCoverage,
            zone
          });
        }
      }
    }
    if (sculptAtLeast(group, 52)) {
      for (const alignGroup of layout.alignmentGroups || []) {
        const groupItems = checkedItems.filter((item) => item.alignGroup === alignGroup.id);
        if (groupItems.length < (alignGroup.minItems || 2)) {
          findings.push({
            group,
            theme,
            issue: "alignment-group-too-small",
            alignmentGroup: alignGroup.id,
            count: groupItems.length,
            required: alignGroup.minItems || 2
          });
          continue;
        }
        const resolvedGroupItems = groupItems.map((item) => resolveDynamicBox(item, layout));
        const xValues = resolvedGroupItems.map((item) => item.x ?? 0);
        const rotValues = resolvedGroupItems.map((item) => item.rot ?? 0);
        const xDelta = Math.max(...xValues) - Math.min(...xValues);
        const rotDelta = Math.max(...rotValues) - Math.min(...rotValues);
        if (xDelta > (alignGroup.maxXDelta ?? 16)) {
          findings.push({
            group,
            theme,
            issue: "alignment-x-drift",
            alignmentGroup: alignGroup.id,
            xDelta: Math.round(xDelta),
            allowed: alignGroup.maxXDelta ?? 16,
            elements: groupItems.map((item) => item.text || item.type)
          });
        }
        if (rotDelta > (alignGroup.maxRotDelta ?? 0.5)) {
          findings.push({
            group,
            theme,
            issue: "alignment-rotation-drift",
            alignmentGroup: alignGroup.id,
            rotDelta: Number(rotDelta.toFixed(2)),
            allowed: alignGroup.maxRotDelta ?? 0.5,
            elements: groupItems.map((item) => item.text || item.type)
          });
        }
      }
    }
    for (const scaleGroup of layout.scaleGroups || []) {
      const scaleItems = checkedItems.filter(
        (item) => item.type === "word" && item.scaleGroup === scaleGroup.id
      );
      if (scaleItems.length < (scaleGroup.minItems || 2)) {
        findings.push({
          group,
          theme,
          issue: "scale-group-too-small",
          scaleGroup: scaleGroup.id,
          count: scaleItems.length,
          required: scaleGroup.minItems || 2
        });
        continue;
      }
      const sizes = scaleItems.map((item) => item.size || 0).filter((size) => size > 0);
      const minSize = Math.min(...sizes);
      const maxSize = Math.max(...sizes);
      const ratio = maxSize / Math.max(1, minSize);
      if (ratio > (scaleGroup.maxRatio || 1.5)) {
        findings.push({
          group,
          theme,
          issue: "title-size-fragmented",
          scaleGroup: scaleGroup.id,
          ratio: Number(ratio.toFixed(2)),
          allowed: scaleGroup.maxRatio || 1.5,
          elements: scaleItems.map((item) => `${item.text}:${item.size}`)
        });
      }
    }
    if (sculptAtLeast(group, 53)) {
      const anchoredTitleCount = checkedItems.filter(
        (item) => (item.type === "word" || (sculptAtLeast(group, 74) && item.type === "arcText")) && item.contourZone
      ).length;
      const requiredAnchors = sculptAtLeast(group, 62) ? 4 : 2;
      if (anchoredTitleCount < requiredAnchors) {
        findings.push({
          group,
          theme,
          issue: "too-few-contour-anchored-titles",
          anchoredTitleCount,
          required: requiredAnchors
        });
      }
    }
    if (sculptAtLeast(group, 56)) {
      const semanticAnchorCount = (layout.elements || []).filter((item) => item.semanticAnchor).length;
      if (semanticAnchorCount < 2) {
        findings.push({
          group,
          theme,
          issue: "too-few-semantic-anchors",
          semanticAnchorCount,
          required: 2
        });
      }
      if (sculptAtLeast(group, 57)) {
        for (const item of (layout.elements || [])) {
          if (item.semanticAnchor && item.type === "word" && (item.size || 0) < 40) {
            findings.push({
              group,
              theme,
              element: item.text,
              issue: "semantic-anchor-too-small",
              size: item.size,
              required: 40,
              semanticAnchor: item.semanticAnchor
          });
        }
      }
    }
    if (sculptAtLeast(group, 70)) {
      for (const item of layout.elements || []) {
        if (item.type === "arcText" && item.contourPath === "points") {
          if (!item.evidence) {
            findings.push({
              group,
              theme,
              element: item.text,
              issue: "missing-edge-evidence",
              required: "edge evidence source for contour-points title"
            });
          }
          if (!item.contourPoints || item.contourPoints.length < 3) {
            findings.push({
              group,
              theme,
              element: item.text,
              issue: "too-few-contour-points",
              count: item.contourPoints?.length || 0,
              required: 3
            });
          }
        }
        if (sculptAtLeast(group, 71) && item.type === "word" && item.boxFrom === "line-points") {
          if (!item.evidence) {
            findings.push({
              group,
              theme,
              element: item.text,
              issue: "missing-line-evidence",
              required: "edge evidence source for line-points title"
            });
          }
          if (!item.linePoints || item.linePoints.length < 2) {
            findings.push({
              group,
              theme,
              element: item.text,
              issue: "too-few-line-points",
              count: item.linePoints?.length || 0,
              required: 2
            });
          }
        }
      }
    }
  }
}
}

if (findings.length) {
  console.error(JSON.stringify({ status: "fail", findings }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  status: "pass",
  checkedGroups: Object.fromEntries(
    Object.entries(layoutGroups).map(([group, layouts]) => [group, Object.keys(layouts).length])
  )
}, null, 2));
