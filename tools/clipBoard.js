const util = require("util");
const child_process = require("child_process");

const clipboardy = (content) => {
  child_process.spawn("clip").stdin.end(util.inspect(content));
};

module.exports = clipboardy;
