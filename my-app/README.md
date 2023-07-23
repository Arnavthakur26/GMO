# User Details App

This is a simple React application built with TypeScript and MUI components for the UI. It consists of two pages - a user details form and a data display page.

## Features

- User details form with validation
- Save user details to localStorage
- Redirect to data page once details submitted
- Redirect back to details form if data page accessed without submitting details
- Sample data display with MUI components

## Pages

The app contains the following two pages:

### User Details Page

A form to collect:

- Name
- Phone Number
- Email

Implemented with MUI TextFields and validation for required fields. Details submitted are saved to localStorage.

Redirects to: Data Page

### Data Page

Fetches sample data from API and displays in MUI DataGrid.

Also contains a sample Department list showcasing expanding list items and conditional checkbox selection.

Redirects to: User Details Page if accessed without details submitted.

## Built With

- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Typed JS
- [Vite](https://vitejs.dev/) - Frontend build tool
- [React Router](https://reactrouter.com/) - Routing and navigation
- [MUI](https://mui.com/) - React UI framework

## Running the app

```
npm install
npm run dev
```

Let me know if you would like me to expand or modify the README further. I can add setup instructions, project structure details, contribution guidelines etc.
