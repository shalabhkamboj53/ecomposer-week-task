# Ecomposor (1 Week Task)

Welcome to the Ecomposor Week Task repository! This project is a modern e-commerce web application that showcases a range of advanced front-end technologies. Below, you'll find a comprehensive overview of the project, including its features, technologies used, and how to get started.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Ecomposor is a responsive e-commerce web application designed to provide users with an intuitive shopping experience. It leverages various modern technologies to enhance usability, performance, and accessibility. This project serves as an excellent example of building scalable web applications with React.

## Features

- **User-Friendly Interface:** A clean and modern UI built with Tailwind CSS and DaisyUI components.
- **Responsive Design:** Fully responsive layout that works seamlessly on desktop and mobile devices.
- **Error Handling:** Utilizes `react-error-boundaries` for effective error management and a smoother user experience.
- **Smooth Animations:** Incorporates AOS (Animate On Scroll) for engaging scrolling animations.
- **Progressive Web App (PWA):** Provides a native app-like experience, enabling offline access and improved performance.
- **Dynamic Content (using Context API):** Fetches and displays products dynamically, enhancing user interaction and engagement.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Error Boundaries:** For catching JavaScript errors anywhere in the component tree, logging those errors, and displaying a fallback UI.
- **AOS (Animate On Scroll):** A library to animate elements as they scroll into view, enhancing user engagement.
- **PWA (Progressive Web App):** Ensures the app behaves like a native mobile application, with offline capabilities and enhanced performance.
- **Tailwind CSS:** A utility-first CSS framework for creating custom designs without leaving your HTML.
- **DaisyUI:** A component library for Tailwind CSS, providing pre-designed components that speed up development.
- **Context API:** A feature of React that allows for state management and sharing data across components without prop drilling.

## Context API Usage

The Context API is employed in this application to manage global state and facilitate communication between deeply nested components. By using the Context API, we can:

- **Simplicity:** The Context API is simpler to set up and understand compared to Redux, making it ideal for smaller applications or those with less complex state management needs.
- **Reduced Boilerplate:** Unlike Redux, which requires multiple files and boilerplate code for actions, reducers, and stores, the Context API allows us to manage state with minimal configuration.
- **Avoid Prop Drilling:** It eliminates the need to pass props down through multiple levels of components, simplifying component hierarchies and making the code cleaner and easier to maintain.
- **Centralized State Management:** Global state, such as user authentication status or shopping cart contents, can be managed in a single location, making it easier to access and update across different components.
- **Improved Performance:** The Context API can optimize re-renders by allowing components to subscribe to only the specific parts of the state they need, rather than re-rendering all components that depend on a higher-level state.


By utilizing the Context API, we enhance the maintainability and scalability of the application, making it easier to manage shared state in a clear and efficient manner.

## Screenshots

Here are some screenshots of the Ecomposor application:

### Home Page (Desktop View)
![Home Page](./screenshots/home-desktop-view.png)

### Home Page (Mobile View)
![Home Page](./screenshots/home-mobile-view.png)

### Contact Us Page (Desktop View)
![Contact Us Page](./screenshots/contact-us-desktop-view.png)

### Contact Us Page (Mobile View)
![Contact Us Page](./screenshots/contact-us-mobile-view.png)

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/shalabhkamboj53/ecomposor-week-task.git
cd ecomposor-week-task
npm install
```

## Usage
Once you have installed the dependencies, you can start the development server:

```bash
npm start
```

This will run the application in development mode. Open http://localhost:3000 to view it in your browser.
