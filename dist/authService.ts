

import { PublicClientApplication } from '@azure/msal-browser';

export async function signIn(pca: PublicClientApplication) {
  try {
    const response = await pca.loginPopup({
      scopes: ['user.read', 'openid', 'profile'], 
    });
    console.log('Login Response:', response);
    
  } catch (error) {
    console.error('Login Error:', error);
  }
}
