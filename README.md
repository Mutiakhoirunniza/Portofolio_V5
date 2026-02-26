# Portfolio V5 - Refactored with Clean Architecture

Hello everyone! 👋

I'm **Mutia Khoirunniza**. I'm sharing my personal portfolio website, which has been meticulously refactored using **Clean Architecture** principles. This project showcases my journey as a developer, highlighting projects ranging from web development to AI-driven systems.

**Live Demo:** [https://www.diahmutia.my.id/](https://www.diahmutia.my.id/)

**Website Link:** [https://www.diahmutia.my.id/](https://www.diahmutia.my.id/)

## 🛠️ Tech Stack & Key Libraries

This project is built with a focus on performance, aesthetics, and modularity:

- **ReactJS** & **Vite** - Core framework and build tool
- **Tailwind CSS** - Modern utility-first styling
- **Framer Motion** - High-end page transitions and entrance animations
- **AOS (Animate On Scroll)** - Dynamic scroll effects
- **Lucide React** - Clean and consistent iconography
- **Material UI (MUI)** - Robust components for Tabs and Certificate Modals
- **SweetAlert2** - Premium feedback dialogs for form submissions
- **Lottie React** - Lightweight vector animations for a premium feel
- **Axios** - Seamless API integration with FormSubmit

## 🌟 Featured Projects

1.  **Healthify**: An integrated healthcare service management system built with **Golang (Echo)** and **React**, featuring AI-powered treatment recommendations and real-time consulting.
2.  **GreenCycleDetections**: A deep learning-based waste classification system using **Python (TensorFlow/Keras)** to automate the sorting of inorganic waste.
3.  **CGV Aldmic**: A modern movie ticket booking system developed with **Laravel**, emphasizing a mobile-first user experience and real-time seat selection.

## ✨ Key Improvements in V5

- **Clean Architecture Implementation**: Separated concerns into specialized layers:
  - `components/`: Pure UI components grouped by domain.
  - `constants/`: Centralized data management for easy content updates.
  - `hooks/`: Extracted business logic (form handling, sharing) for reusability.
  - `Pages/`: Clean layout definitions for routing.
- **Enhanced Visual UX**: Replaced heavy assets with **Lottie** animations and added custom cursor interactions.
- **Optimized Performance**: Significant reduction in bundle size by removing unused libraries and optimizing imports.

## 📁 Project Structure

```text
src/
├── components/      # Domain-driven components
│   ├── Common/      # Global (Background, Cursor, Clock, Loading)
│   ├── Feedback/    # FAQ and testimonials
│   ├── Home/        # Page-specific home UI elements
│   ├── Layout/      # Navigation and Footer
│   ├── Portfolio/   # Project cards, Detail views, Certificates
│   └── Social/      # Social media links
├── constants/       # The "Source of Truth" for all text and data
├── hooks/           # Encapsulated logic (useContactForm, useShare)
├── Pages/           # Main entry points for the routes
└── services/        # External service configurations
```

## 🏃‍♂️ Installation & Usage

1. **Clone the project**
   ```bash
   git clone https://github.com/Mutiakhoirunniza/Portofolio_V5.git
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🏗️ Production Build
To generate a production-ready bundle:
```bash
npm run build
```

## 📞 Get In Touch

**Mutia Khoirunniza**
- **Website:** [diahmutia.my.id](https://www.diahmutia.my.id/)
- **GitHub:** [Mutiakhoirunniza](https://github.com/Mutiakhoirunniza)
- **LinkedIn:** [diahmutia](https://www.linkedin.com/in/diahmutia/)

---
⭐ If this project inspires you, please give it a star on GitHub!
