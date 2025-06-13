import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { agentConfig, siteConfig } from './config.ts';
import './index.css'

document.title = siteConfig.meta.title;
document.querySelector('meta[name="description"]')?.setAttribute('content', siteConfig.meta.description);
document.querySelector('meta[name="author"]')?.setAttribute('content', siteConfig.author);
document.querySelector('meta[name="keywords"]')?.setAttribute('content', siteConfig.keywords);

// Open Graph / Facebook
document.querySelector('meta[property="og:title"]')?.setAttribute('content', siteConfig.meta.title);
document.querySelector('meta[property="og:description"]')?.setAttribute('content', siteConfig.meta.description);
document.querySelector('meta[property="og:image"]')?.setAttribute('content', siteConfig.meta.ogImage);
document.querySelector('meta[property="og:type"]')?.setAttribute('content', siteConfig.meta.ogType);

// Twitter
document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', siteConfig.meta.title);
document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', siteConfig.meta.description);
document.querySelector('meta[name="twitter:site"]')?.setAttribute('content', siteConfig.meta.twitterHandle);
document.querySelector('meta[name="twitter:card"]')?.setAttribute('content', siteConfig.meta.twitterCard);

createRoot(document.getElementById("root")!).render(<App />);
