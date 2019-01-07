'use strict';
module.exports = function () {
  const secret = Math.floor(Math.random() * 1000000) + 1;
  let generateSecret = () => {
    return secret;
  };
  return generateSecret;
};