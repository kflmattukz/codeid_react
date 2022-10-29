# CODEID BOOTCAMP - REACT

---

## install using VITE

- with npm
  
  ```bash
  npm create vite@latest
  ```

- with yarn
  
  ```bash
  yarn create vite
  ```

- with pnpm
  
  ```bash
  pnpm create vite
  ```

---

## Install Tailwind CSS

- install Tailwind packages
  
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
  
  note: npx tailwindcss init -p will create tailwind.config.cjs

- Configure tailwind.config.cjs
  
  ```cjs
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

- Add the Tailwind directives to your CSS
  
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- Tailwind css ready to use

---

## Install Redux, React-redix, Redux-toolkit

- install redux toolkit
  
  ```bash
  npm install @reduxjs/toolkit
  ```

- install redux it self
  
  ```bash
  npm install redux
  ```

- Redux / Redux-Toolkit ready to use

---

## Run the project

- using vite
  
  ```bash
  vite
  ```

- using npm
  
  ```bash
  npm run dev
  ```

### Tugas 1

- [x] Membuat fungsi tambah dan kurang gaji
- [x] Fix Total Salary saat menambahkan Employee baru
- [x] Install Tailwindcss dan percantik

### Tugas 2 Raact Redux - Redux-toolkit

- [x] Menambahkan Fungsi Increment & decrement Salary menggunakan react-redux / redux-toolkit

### Tugas 3 Exios

- [x] Konect ke BackEnd NestJS menggunakan Axios Js 
  
  - Get All Region
  
  - Delete Region
  
  - Add Region

### Tugas 4 Selesaikan semua table

- [x] Region, Country, Location, Department, Employee, Job, Job_History

### Tugas 5 ?

- [ ] Redux-Saga

- [x] Formix

- [x] React-Router-dom

- [x] yup

- [x] Tailwindcss (Typography, form, navbar, list)