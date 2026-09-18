import {
  presetPalettesRgba,
} from "./colorPalette.js";

// 只使用RGBA和HSLA格式的调色板，因为Lynx只支持这些格式
export const lynxColors: Record<string, Record<string, string>> = {};

// 添加RGBA颜色
Object.entries(presetPalettesRgba).forEach(([colorName, palette]: [string, string[] & { primary?: string }]) => {
  if (!lynxColors[colorName]) {
    lynxColors[colorName] = {};
  }

  // 添加10个等级的颜色
  palette.forEach((color: string, index: number) => {
    lynxColors[colorName][index + 1] = color;
  });

  // 如果有主色，也添加
  if (palette.primary) {
    lynxColors[colorName].DEFAULT = palette.primary;
  }
});
