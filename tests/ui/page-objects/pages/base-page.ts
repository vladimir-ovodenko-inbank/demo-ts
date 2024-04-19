import {expect, Locator, Page, test} from "@playwright/test";


export class BasePage {
    public url: string;
    public readonly page: Page;

    // Page is part of Playwright
    constructor(page: Page) {
        this.page = page;
        this.url = "";
    }

    public async open(directUrl = this.url): Promise<void> {
        await test.step('Open page', async () => {
            await this.page.goto(directUrl)
        })
    }

    public async clickButtonByText(name: string): Promise<void> {
        await test.step(`Click button ${name}`, async () => {
            await this.page.getByRole('button', { name }).waitFor({ state: 'visible' })
            await this.page.getByText(name).click()
        })
    }

    public async fillElement(
        element: Locator,
        text: string,
    ): Promise<void> {
        await test.step("fill element", async () => {
            await element.fill(text)
        })
    }

    public async checkElementIsVisible(
        element: Locator,
        isVisible = true,
    ): Promise<void> {
        const stepName = `Check if element ${
            isVisible ? 'visible' : 'not visible'
        }`
        await test.step(stepName, async () => {
            await expect
                .soft(async () => {
                    expect(await element.isVisible()).toBe(isVisible)
                })
                .toPass()
        })
    }

}