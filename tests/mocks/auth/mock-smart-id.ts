import {BrowserContext} from "@playwright/test";

const defaultResponse = {
    details: {message: ["verification_failed_expired_transaction"]},
    error: "Unknown Error",
    message: "Request failed",
    requestId: "fefa1c3d-689a-478d-8f1f-fe9025ea7f41",
    statusCode: 422
};

// control code
export const mockAuthSmartIdControlCode = async (context: BrowserContext): Promise<void> => {
    await context.route('**/api/auth/smartid', (route) => {
        void route.fulfill({
            contentType: 'application/json',
            status: 200,
            body: JSON.stringify({
                "controlCode": "7777"
            }),
        })
    })
}

// status mock
export const mockAuthSmartIdStatusError = async (context: BrowserContext): Promise<void> => {
    await context.route('**/api/auth/status/smartid', (route) => {
        void route.fulfill({
            contentType: 'application/json',
            status: 422,
            body: JSON.stringify({
                ...defaultResponse
            }),
        })
    })
}






