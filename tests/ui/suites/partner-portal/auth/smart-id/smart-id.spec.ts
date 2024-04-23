import { test } from './smart-id.fixture' // test runner
import {identityCode} from "../../../../../resources/testdata";
import {mockAuthSmartIdControlCode, mockAuthSmartIdStatusError} from "../../../../../mocks/auth/mock-smart-id";


test.describe("login with smart id", () => {

  test.beforeEach( async ( { authPage, context } ) => {
    await mockAuthSmartIdControlCode(context);
    await mockAuthSmartIdStatusError(context);
    await authPage.open();
    await authPage.clickButtonByText("Save settings");
    await authPage.clickSmartIdTab();
  })


  test('when user insert a valid ID code and logging in then control code appeared', async ({ authPage, context }) => {
    await authPage.fillElement(authPage.identityCodeInput, identityCode.validCode)
    await authPage.clickButtonByText("Log in");
    await authPage.checkElementIsVisible(authPage.controlCodeBlock);
  });

  test('when user insert a valid ID code and logging in then error message shown', async ({ authPage, context }) => {
    await authPage.fillElement(authPage.identityCodeInput, identityCode.anotherValidCode)
    await authPage.clickButtonByText("Log in");
    await authPage.checkElementIsVisible(authPage.error);
  });




} )


