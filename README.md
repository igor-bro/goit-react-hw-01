# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

# Підготовка

npm create vite@latest

npm install npm run dev

Якщо у вас вже налаштовано автоматичне форматування за допомогою Prettier у
вашому редакторі, то досить додати файл його налаштувань у корінь проекту.
(взяти з попереднього проекту)

# Налаштування ESLint

У файлі налаштувань .eslintrc.cjs потрібно відключити одне непотрібне нам
правило. Зокрема, додайте до блоку rules властивість react/prop-types із
значенням 0.

# Налаштування Vite

Додаємо опцію генерування Source Maps у файл налаштувань Vite, який розташований
у кореневій папці проекту. Відкрий файл vite.config.js та заміни його вміст
додавши build: { sourcemap: true, }

# Всі компоненти, а в майбутньому і файли стилів для них, будемо зберігати у папці components, яку створимо всередині папки src.

# додатково

npm install clsx npm install modern-normalize npm install react-icons
