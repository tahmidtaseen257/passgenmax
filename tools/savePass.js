const fs = require("fs");
const path = require("path");
const os = require("os");
const log = require("log-beautify");

const savePass = (password) => {
  const DEST = path.join(__dirname, "../../", "passwords.txt");
  const pass = password;
  fs.open(DEST, "a", 666, (e, id) => {
    fs.write(id, pass + os.EOL, null, "utf-8", () => {
      fs.close(id, () => {
        log.info_(`Password successfully saved to ${DEST}`);
      });
    });
  });
};

module.exports = savePass;
