const Networks = require('./../../../src/networks.json');
const url = require('url');

function verifySharePopup (expectedUrl) {
  return function (result) {
    var newWindow = result.value[1];

    this.verify.equal(result.value.length, 2, 'There should be an open window popup');
    this.switchWindow(newWindow);
    this.verify.urlContains(expectedUrl);
  };
}

const Tests = {};

for (const network in Networks) {
  if (Networks[network].type === 'direct') {
    continue;
  }

  const parsedUrl = url.parse(Networks[network].sharer);

  Tests[`share on ${network}`] = function (browser) {
    browser
      .url('http://localhost:8080/examples/vue2-example.html')
      .click(`#${network}`)
      .windowHandles(verifySharePopup(`${parsedUrl.hostname}`))
      .end();
  };
}

module.exports = Tests;
