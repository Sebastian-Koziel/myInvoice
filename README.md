# Invoice Management App

## Overview
The Invoice Management App is a web application built with React, TypeScript, and MUI that helps users manage invoices efficiently. The app displays a list of invoices with filtering capabilities by status. Users can add new invoices, save them as drafts, or send them to recipients. Each invoice can be viewed in detail, where users can update its status if it's pending, edit it if it's a draft, or delete it from the list.

---

## Technologies and Tools Used
- **React** with functional components for building the UI
- **TypeScript** for type safety and better code quality
- **MUI (Material-UI)** for pre-styled components and a consistent design system
- **React Hooks:**
  - `useState` for managing component-level state
  - `useEffect` for handling side effects like data fetching or state updates
- **Prop Drilling** to pass data between components
- **Conditional Rendering** for displaying different views based on application state
- **React Hook Form** for managing form state and validation
- **Zod** for schema-based form validation

---

## Key Features and Logic
### Main View Logic
The main view component handles the core logic of the app, determining whether to display the invoice list or detailed view of a selected invoice. It manages user interactions like adding, editing, and deleting invoices.

### Invoice Service
A custom service mimics a basic backend by managing invoice operations, including fetching, adding, updating, and deleting invoices.

### Utilities
Utility functions handle the generation of status chips for invoices, providing consistent styling and quick visual cues. They also generate invoice summaries for easy tracking.

### Invoice Form
The form component supports both adding new invoices and editing existing ones. It uses React Hook Form and Zod to ensure data integrity and validation.
- **Dual-submit functionality:** Two submit buttons allow saving an invoice as either "pending" or "draft," enhancing flexibility.

### Additional Enhancements
- Structured code for scalability, ensuring that services and utilities can be easily extended or replaced with a real backend in the future.
- Implemented status management via a dedicated service that returns appropriate classes and text labels.

---

This project demonstrates clean component-based architecture, effective state management with hooks, and robust form handling with validation.

