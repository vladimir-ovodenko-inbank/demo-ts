import {BasePage} from "./base-page";
import {Page, test} from "@playwright/test";
import playwrightConfig from "../../../../playwright.config";

export class AuthPage extends BasePage {

    // locators
    public readonly smartIdTab = this.page.locator("[role='tab']").nth(0);
    public readonly identityCodeInput = this.page.locator("[id='identity-code']")
    public readonly controlCodeBlock = this.page.locator(("[role='tabpanel'] h1"));
    public readonly error = this.page.getByText("Please try again");

    constructor(page: Page) {
        super(page);
        this.url = `${playwrightConfig.use.baseURL}/login`
    }

    public async clickSmartIdTab(): Promise<void> {
        await test.step('Click to mock-smart-id.ts tab', async () => {
            await this.smartIdTab.click();
        })
    }

}