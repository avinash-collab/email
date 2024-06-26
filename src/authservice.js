"use strict";
// src/authService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = signIn;
const msal_node_1 = require("@azure/msal-node");
const config = {
    auth: {
        clientId: 'your_client_id',
        authority: 'https://login.microsoftonline.com/your_tenant_id',
        clientSecret: 'your_client_secret', // Only required for confidential client applications
    }
};
const pca = new msal_node_1.PublicClientApplication(config);
function signIn() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authCodeUrlParameters = {
                scopes: ['user.read', 'openid', 'profile'], // Example scopes, adjust as per your application needs
                redirectUri: 'http://localhost:3000', // Replace with your redirect URI
            };
            // Get the URL to sign in the user
            const authResponse = yield pca.getAuthCodeUrl(authCodeUrlParameters);
            console.log('Auth URL:', authResponse);
            // Handle user interaction to obtain an authorization code and exchange it for a token
            // Example: Redirect the user to authResponse and handle the callback
            // const tokenResponse = await pca.acquireTokenByCode(authResponse);
            // console.log('Token Response:', tokenResponse);
        }
        catch (error) {
            console.error('Login Error:', error);
        }
    });
}
