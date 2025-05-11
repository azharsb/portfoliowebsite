# MYPORTFOLIO

This is a modern, full-stack portfolio and services platform designed for developers, freelancers, and agencies to showcase their work, skills, and services. Built with a focus on performance, interactivity, and clean design, HeroHarbor leverages the latest technologies in frontend development.

---

## 🚀 Project Overview

MYPORTFOLIO provides:
- A visually appealing, responsive portfolio site
- Animated sections and interactive UI
- Project filtering and detailed showcases
- Contact and About pages
- Social media and GitHub integration
- Carousel for trusted companies/clients
- Custom cursor and visual effects

---

## 🛠️ Tech Stack

### **Frontend**
- **React** (with Vite for fast development)
- **TypeScript** (type safety)
- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (animations)
- **Wouter** (routing)
- **Embla Carousel** (carousel/slider)
- **HeroIcons** (icons)

### **Backend**
- **Not included in this repo**  
  This project is a frontend-only portfolio. If you wish to add backend features (e.g., blog, contact form, authentication), you can integrate:
  - **Node.js** with **Express** (REST API)
  - **MongoDB** or **PostgreSQL** (database)
  - **JWT** (authentication)
  - **EmailJS** or similar (contact form handling)

---

## 📁 Folder Structure

```
client/
  ├── public/
  └── src/
      ├── assets/
      ├── blcokchainpics/
      ├── components/
      ├── pages/
      ├── lib/
      └── App.tsx
```

---

## 🖥️ Demo

[Live Demo on GitHub Pages](https://github.com/azharsb/portfoliowebsite)

---

## 📸 Screenshots

| Portfolio Section | Contact Page |
|-------------------|-------------|
| ![Portfolio](./blcokchainpics/screenshot1.png) | ![Contact](./blcokchainpics/screenshot2.png) |

---

## ⚙️ Prerequisites

- **Node.js** (v16 or above)
- **npm** or **yarn**

---

## 📝 Getting Started

### 1. **Clone the repository**
```sh
git clone https://github.com/azharsb/portfoliowebsite.git
cd portfoliowebsite/client
```

### 2. **Install dependencies**
```sh
npm install
# or
yarn install
```

### 3. **Start the development server**
```sh
npm run dev
# or
yarn dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```sh
npm run build
# or
yarn build
```
The production-ready files will be in the `dist` folder.

---

## 🚀 Deployment

You can deploy the `dist` folder to any static hosting service:
- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 🌐 How to Upload This Project to GitHub

1. **Create a new repository** on [GitHub](https://github.com/new).
2. **Initialize git** (if not already):
    ```sh
    git init
    ```
3. **Add your files:**
    ```sh
    git add .
    ```
4. **Commit your changes:**
    ```sh
    git commit -m "Initial commit"
    ```
5. **Add the remote repository:**
    ```sh
    git remote add origin https://github.com/azharsb/portfoliowebsite.git
    ```
6. **Push your code:**
    ```sh
    git branch -M main
    git push -u origin main
    ```

---

## 📚 Customization

- **Images:** Place your project images in `src/blcokchainpics/` and update the import paths in `PortfolioSection.tsx`.
- **Content:** Edit the components in `src/components/` and pages in `src/pages/` to personalize your site.
- **Styling:** Modify Tailwind classes or add custom CSS for your branding.

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Embla Carousel](https://www.embla-carousel.com/)
- [Wouter](https://github.com/molefrog/wouter)

---

If you have any questions or need help with deployment, feel free to open an issue or contact the maintainer!
