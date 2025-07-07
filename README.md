# React Demo App

This guide explains how to set up the React Demo App on your local machine.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd react-demo-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the development server:**
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:5173/` to view the app.

## Troubleshooting

If you encounter issues, try:
- Deleting `node_modules` and running `npm install` again.
- Ensuring Node.js and npm are up to date.

## About

This project is a modular React application that demonstrates advanced navigation and UI patterns inspired by luxury hospitality brands. The app features a responsive navigation menu with multi-level submenus and nested menus, implemented using reusable React components and modern CSS. State management is handled with React hooks, ensuring smooth user interactions and clean code organization.

Key highlights:
- **Reusable Components:** Navigation, submenu, and carousel components are designed for reusability and scalability.
- **Responsive Design:** The navigation adapts seamlessly to desktop and mobile views, including overlay menus and touch-friendly controls.
- **Data-Driven Menus:** Navigation structure is defined in external data files, making it easy to update or extend menu items without changing component logic.
- **Modern Styling:** Uses modular CSS for each component, with attention to accessibility and visual polish.
- **Separation of Concerns:** Components, assets, and data are organized in dedicated folders for maintainability.

This approach ensures the codebase is easy to extend, maintain, and adapt for real-world projects that require complex navigation and interactive UI elements.

> **Note:** This project represents the output of just two days of work. The primary focus has been on achieving functional parity with the reference design, rather than making the UI visually identical. Some visual differences may exist, but the core navigation and interactive features are implemented as intended

