import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { agentConfig } from './config.ts';
import './index.css'

document.title = `${agentConfig.fullName} Travel Designer`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `${agentConfig.fullName} Travel Agent`);
document.querySelector('meta[name="author"]')?.setAttribute('content', agentConfig.fullName);
document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${agentConfig.fullName} Travel Designer`);
document.querySelector('meta[property="og:description"]')?.setAttribute('content', `${agentConfig.fullName} Travel Agent`);
document.querySelector('meta[name="twitter:site"]')?.setAttribute('content', agentConfig.twitterHandle);

createRoot(document.getElementById("root")!).render(<App />);
