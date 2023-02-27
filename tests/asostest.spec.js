const { expect } = require("@playwright/test");
const { test } = require("./../utils/testfixtures");
const dataModel = JSON.parse(
  JSON.stringify(require("./../data/products.json"))
);

// 1.   Navigate to www.google.co.uk
// 2.	Clear the search field
// 3.	Search for Asos & Click Search
// 4.	Click ASOS.co.uk
// 5.	Verify you have arrived at the ASOS site
// 6.	Search for Belt
// 7.	Verify the title of the page
// 8.	Select the first result
// 9.	Get the title of the page
// 10.	Verify text on page
// 11.	Take screenshot of page

test("Asos test -Assesment ", async ({ page, oPageObjectManager, oWebUtils }, testInfo) => {
  let productname = "";

  await test.step("user is Navigate to www.google.co.uk ,Clear the search field and Search for Asos & Click Search  ", async () => {
    await oPageObjectManager.getGooglePage().clickAcceptCookies();
    await oPageObjectManager.getGooglePage().EnterSearchValue("asos");
    await oPageObjectManager.getGooglePage().clickOnSearch();
    await oWebUtils.waitFoLoadState();
  });

  await test.step("user clciks on Click ASOS.co.uk  ", async () => {
    await oPageObjectManager.getGooglePage().clickOnAsosLink();
    await oWebUtils.waitFoLoadState();
  });

  await test.step(" Verify user is on ASOS site ", async () => {
    await expect(page).toHaveURL(/asos.com/);
    await page.getByRole("button", { name: "That's ok" });
  });

  //     read product from json
  //     search for belt

  await test.step("Search for Belt", async () => {
    const product = dataModel.name;
    await oPageObjectManager.getASOSHomePage().searchProductName(product);
    await oWebUtils.waitFoLoadState();
    await oWebUtils.takeFullPageScreenShot(testInfo, "PLP Page");
  });

  //  Get the prodcut name to validate on PDP and Select the first result
  // verify the title

  await test.step("Verify the title of the page", async () => {
    productname = await oPageObjectManager
      .getASOSPLPPage()
      .captureFirstProductDetails();

    const title = await page.title();
    console.log(title);

    if (title.includes("Search")) {
      expect(title).toBeTruthy();
    }

    await oPageObjectManager.getASOSPLPPage().clickOnFirstProduct();
  });

  await test.step("Get the title of the oage and Verify text on page and Take screenshot of page", async () => {
    const title1 = await page.title();
    console.log(title1);
    await oWebUtils.waitFoLoadState();
    await oPageObjectManager
      .getASOSPDPPage()
      .validateProductNameOnPDP(productname);
    await oWebUtils.takeFullPageScreenShot(testInfo, "PDP Page");
  });
});
