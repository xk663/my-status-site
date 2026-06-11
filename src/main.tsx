import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // <- 这里导入 Tailwind 的入口 CSS

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)