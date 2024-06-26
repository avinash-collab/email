// src/index.ts

import { PublicClientApplication } from '@azure/msal-browser';
import { signIn } from './authService'; // Import signIn function from authService.ts

const pca = new PublicClientApplication({
  auth: {
    clientId: 'your_client_id',
    authority: 'https://login.microsoftonline.com/your_tenant_id',
    redirectUri: 'http://localhost:3000', // Replace with your redirect URI
  },
});

// Example usagesss
signIn(pca); // Call signIn function from authService.ts
