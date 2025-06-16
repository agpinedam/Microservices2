import React from 'react';
import { navigateTo } from '../utils/navigation';

async function handleGoogleAuth() {
  try {
    const response = await fetch('http://127.0.0.1:3000/request', { method: 'POST' });
    const data = await response.json();
    if (data.url) navigateTo(data.url);
  } catch (error) {
    console.error('Google auth error:', error);
  }
}

const GoogleAuthButton = () => {
  return (
    <button
      onClick={handleGoogleAuth}
      className="flex items-center justify-center gap-3 border border-gray-300 rounded-lg shadow px-4 py-2 bg-white hover:bg-gray-100 transition"
    >
      {/* Google Logo */}
      <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M533.5 278.4c0-17.8-1.5-35-4.4-51.6H272v97.8h146.9c-6.3 33.6-25.2 62-53.9 81.1l87 67.7c50.7-46.8 81.5-115.7 81.5-195z"/>
        <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24 178-65.2l-87-67.7c-24.2 16.3-55 25.9-91 25.9-69.9 0-129.3-47.2-150.5-110.4H32.2v69.4c44.5 88 136.5 148 239.8 148z"/>
        <path fill="#FBBC05" d="M121.5 326.9c-10.6-31.6-10.6-65.8 0-97.4V160H32.2c-42.4 84.8-42.4 185.5 0 270.3l89.3-69.4z"/>
        <path fill="#EA4335" d="M272 107.7c39.5-.6 77.6 14.1 106.7 41.3l80.1-80.1C415.1 24.8 345.6-.3 272 0 168.7 0 76.7 60 32.2 148l89.3 69.5C142.7 154.9 202.1 107.7 272 107.7z"/>
      </svg>
      <span className="text-gray-700 font-medium">Sign in with Google</span>
    </button>
  );
};

export default GoogleAuthButton;
