import {AuthPage} from "../../../../page-objects/pages/auth-page";
import { test as base } from '@playwright/test';

type TestFixtures = {
    authPage: AuthPage;
}

export const test = base.extend<TestFixtures>({
    authPage: async ({ page}, use) => {
        const authPage = new AuthPage(page)
        await use(authPage)
    },
})