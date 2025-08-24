import config from "./eslint.config";

export default {
    concurrency: "auto",
    overrideConfig: config, // may include non-cloneable values
    overrideConfigFile: true,
    stats: true,
};