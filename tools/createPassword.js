//importing
const generator = require("generate-password");
const savePass = require("./savePass");

const createPassword = (length, hasNum, hasSymbol, save) => {
  const setOptions = {
    length: length,
    numbers: hasNum,
    symbols: hasSymbol,
  };

  const password = generator.generate(setOptions);
  const returnMater = password.toString();

  if (save) savePass(returnMater);

  return returnMater;
};

module.exports = createPassword;
