async function randomizeAndSet(el, mail) {
  var value = Math.random().toString(36).substring(2);
  if (mail === undefined) {
      mail = ''
  }
  return await (await el).setValue(value + mail)
}

async function click(el) {
  await (await el).click()
}

async function waitForClickableAndClick(el) {
  await (await el).waitForClickable()
  await browser.pause(500)
  await (await el).click()
}

async function waitForDisplayedInVP(el) {
  await browser.waitUntil(async() => await (await el).isDisplayedInViewport(),{timeoutMsg:'Element isnt displayed in viewport'})
}

async function inputSetValue(el,value) {
  return await (await el).setValue(value)
}

module.exports.randomizeAndSet = randomizeAndSet;
module.exports.click = click;
module.exports.waitForClickableAndClick = waitForClickableAndClick;
module.exports.waitForDisplayedInVP = waitForDisplayedInVP;
module.exports.inputSetValue = inputSetValue;