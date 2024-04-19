import { test } from './smart-id.fixture' // test runner
import {identityCode} from "../../../../../resources/testdata";
import {mockAuthSmartIdControlCode, mockAuthSmartIdStatusError} from "../../../../../mocks/auth/mock-smart-id";


test.describe("login with smart id", () => {

  test.beforeEach( async ( { authPage, context } ) => {

  })



  test('check control code', async ({ authPage, context }) => {
    await mockAuthSmartIdControlCode(context);
    await authPage.open();
    await authPage.clickButtonByText("Save settings");
    await authPage.clickSmartIdTab();

    await authPage.fillElement(authPage.identityCodeInput, identityCode.validCode)
    await authPage.clickButtonByText("Log in");
    await authPage.checkElementIsVisible(authPage.controlCodeBlock);
  });

  test.only('check error message mocked', async ({ authPage, context }) => {
    await mockAuthSmartIdControlCode(context);
    await mockAuthSmartIdStatusError(context);
    await authPage.open();
    await authPage.clickButtonByText("Save settings");
    await authPage.clickSmartIdTab();

    await authPage.fillElement(authPage.identityCodeInput, identityCode.anotherValidCode)
    await authPage.clickButtonByText("Log in");
    await authPage.checkElementIsVisible(authPage.error);

  });




} )


