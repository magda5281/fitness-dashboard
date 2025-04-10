# Fitness Analytics Dashboard

[![Live Demo](https://img.shields.io/badge/demo-vercel-blue)](https://your-vercel-link.vercel.app)
[![GitHub](https://img.shields.io/badge/source-github-black)](https://github.com/magda5281/fitness-dashboard)

A responsive fitness tracking dashboard built with Next.js featuring 10+ data visualizations.

## Features

✅ **10+ Interactive Charts**  
✅ **Fully Responsive Design**  
✅ **Modern UI with Tailwind CSS**  
✅ **Type-Safe Codebase**  
✅ **Optimized Performance**

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Types**: [TypeScript](https://www.typescriptlang.org/)

### Data Visualization

| Chart Type                | Component               | Purpose                 |
| ------------------------- | ----------------------- | ----------------------- |
| Line Chart                | `StepsChart`            | Daily step trends       |
| Pie Chart                 | `HeartRateChart`        | HR zone distribution    |
| Bar Chart                 | `SleepStagesChart`      | Sleep cycle analysis    |
| Area Chart                | `VO2MaxChart`           | Cardio fitness progress |
| Scatter Plot              | `CaloriesWorkoutWeight` | Correlation analysis    |
| ...plus 5 more variations |                         |                         |

### Responsive Design

The dashboard adapts seamlessly across desktop, tablet, and mobile devices using Tailwind CSS.

- **Mobile-first** approach
- Breakpoints: `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`
- Dynamic chart resizing
- TODO: dropdown navigation menu on profile icon click

- **Dynamic Imports & Code Splitting:**  
  Uses Next.js dynamic imports to lazily load heavy chart components, improving initial load performance and optimizing user experience with a custom loading skeleton.
  Lazy loading individual chart - WIP

- **Theming with CSS Variables:**  
  Centralized styling across charts and UI components through CSS custom properties. This enables easy updates for colors, fonts, and spacing without hardcoding styles in each component.

- **Modular Code Base:**  
   Well-organized component structure with reusable UI components (e.g., GenericCard) and charts, making the code clean, maintainable, and scalable.
  TODO: create reusable chart components for all types of charts that receive data and configuration as

## Getting Started

1. Clone repository:

```bash
git clone https://github.com/magda5281/fitness-dashboard


```
