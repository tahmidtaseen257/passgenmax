#!/usr/bin/env node
//importings
const app = require("commander");
const createPassword = require("./tools/createPassword");
const log = require("log-beautify");
const clipboardy = require("./tools/clipBoard");
const figlet = require("figlet");
const savePass = require("./tools/savePass");
//version setup
app
  .version("1.0.0", "-v , --version", "prints the current version !")
  .description("Just a modern password generator to keep you safe !");

//options
app
  .option("-l, --length <numbers>", "specify the length of the password", "8")
  .option("-s , --save", "save password to an external file", false)
  .option("-nn , --no-numbers", "remove numbers from the password", false)
  .option("-ns , --no-symbols", "remove symbols from the password", false);

//commander
app.parse();

const figletOption = {
  horizontalLayout: "default",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
};

figlet("PassGenMax", figletOption, function (err, data) {
  if (err) {
    console.log("Something went wrong...Can't Show Image");
    console.dir(err);
    return;
  }
  console.log(data);
});

const { length, save, numbers, symbols } = app.opts();

const genPass = createPassword(length, numbers, symbols, save);

log.success("Successfully password generated !");
log.show();
log.ok("Password: ", genPass);
log.show();

clipboardy(genPass);

log.info("Copied to clipboard !");
