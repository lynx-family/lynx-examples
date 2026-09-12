import config from "./rsbuild.config.mjs";

config.environments = { web: {} };
delete config.source.entry["relative"];

config.output ??= {};
config.output.cleanDistPath = false;

export default config;
