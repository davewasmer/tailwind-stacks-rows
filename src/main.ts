import plugin from "tailwindcss/plugin";

export default plugin(function ({ addUtilities, theme }) {
  const spacing = theme("spacing");

  if (!spacing)
    throw new Error(
      "No spacing values found in your Tailwind theme - cannot construct stack/row utilities without spacing values.",
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const layoutUtiliites: Record<string, any> = {};

  Object.keys(spacing).forEach((level) => {
    const value = spacing[level];
    layoutUtiliites[`.row-${level.replace("/", "\\/")}`] = {
      display: "flex",
      "flex-direction": "row",
      gap: value,
    };
    layoutUtiliites[`.stack-${level.replace("/", "\\/")}`] = {
      display: "flex",
      "flex-direction": "column",
      gap: value,
    };
  });
  layoutUtiliites[".row"] = layoutUtiliites[".row-0"];
  layoutUtiliites[".stack"] = layoutUtiliites[".stack-0"];
  addUtilities(layoutUtiliites);
});
