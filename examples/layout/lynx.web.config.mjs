import config from "./lynx.config.mjs";

config.environments = { web: {} };
delete config.source.entry["relative"];

config.output ??= {};
config.output.cleanDistPath = false;
config.output.filename = "[name].[platform].bundle";

export default config;
