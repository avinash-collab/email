// src/index.ts

import { signIn } from './authservice';

async function main() {
  try {
    // Call your authentication function
    await signIn();
    
    // Other application logic
    console.log('Authentication completed successfully');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Start the main function
main();
