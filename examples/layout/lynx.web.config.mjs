import config from "./lynx.config.mjs";

delete config.source.entry["relative"];

config.output ??= {};
config.output.cleanDistPath = false;

export default config;
