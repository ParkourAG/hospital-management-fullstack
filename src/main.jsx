import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react';


const publishable_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// console.log(publishable_key);

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={publishable_key} afterSignOutUrl="/">
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </ClerkProvider>


)
