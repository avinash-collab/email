// src/authService.ts

import { PublicClientApplication } from '@azure/msal-node';

const config = {
  auth: {
    clientId: 'your_client_id',
    authority: 'https://login.microsoftonline.com/your_tenant_id',
    clientSecret: 'your_client_secret', // Only required for confidential client applications
  }
};

const pca = new PublicClientApplication(config);

export async function signIn() {
  try {
    const authCodeUrlParameters = {
      scopes: ['user.read', 'openid', 'profile'], // Example scopes, adjust as per your application needs
      redirectUri: 'http://localhost:3000', // Replace with your redirect URI
    };

    // Get the URL to sign in the user
    const authResponse = await pca.getAuthCodeUrl(authCodeUrlParameters);
    console.log('Auth URL:', authResponse);

    // Handle user interaction to obtain an authorization code and exchange it for a token
    // Example: Redirect the user to authResponse and handle the callback
    // const tokenResponse = await pca.acquireTokenByCode(authResponse);
    // console.log('Token Response:', tokenResponse);

  } catch (error) {
    console.error('Login Error:', error);
  }
}
