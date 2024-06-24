# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
```
client
├─ .eslintrc.cjs
├─ .gitignore
├─ .vite
│  └─ deps
│     ├─ package.json
│     └─ _metadata.json
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ feature-icon1.png
│  ├─ feature-icon2.png
│  ├─ feature-icon3.png
│  ├─ feature-icon4.png
│  └─ sample-feature-icon.jpg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ components
│  │  ├─ axiosConfig.js
│  │  ├─ FeatureCards.css
│  │  ├─ FeatureCards.jsx
│  │  ├─ Header.css
│  │  ├─ Header.jsx
│  │  ├─ LoginForm.css
│  │  ├─ LoginForm.jsx
│  │  ├─ RegisterForm.css
│  │  ├─ RegisterForm.jsx
│  │  ├─ ToggleButton.css
│  │  └─ ToggleButton.jsx
│  ├─ index.css
│  ├─ main.jsx
│  └─ NightModeContext.jsx
└─ vite.config.js

```