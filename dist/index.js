"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const msal_browser_1 = require("@azure/msal-browser");
const authService_1 = require("./authService"); // Import signIn function from authService.ts
const pca = new msal_browser_1.PublicClientApplication({
    auth: {
        clientId: 'your_client_id',
        authority: 'https://login.microsoftonline.com/your_tenant_id',
        redirectUri: 'http://localhost:3000', // Replace with your redirect URI
    },
});
// Example usagesss
(0, authService_1.signIn)(pca); // Call signIn function from authService.ts
