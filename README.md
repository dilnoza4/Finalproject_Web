# UCA Counseling Appointment System - Frontend

## Project Overview

The UCA Counseling Appointment System is a web application designed to help students of UCA (University of Central Asia) schedule appointments with campus psychologists. This project provides an intuitive and responsive user interface, allowing students to view available services and book appointments easily. It is built using **React** and styled with **CSS** and **Bootstrap** for responsiveness across devices.

## Technologies Used
- **React.js**: A JavaScript library for building user interfaces.
- **React Router**: Used for client-side routing to navigate between different pages (Home, Services, Book Appointment).
- **Bootstrap**: A front-end framework to ensure the app is responsive and looks good on mobile, tablet, and desktop.
- **CSS**: Used for custom styling and layout.

## Features Implemented
- **Service Selection**: Users can view available counseling services and choose one.
- **Appointment Scheduling**: Users can select the date and time for an appointment.
- **Responsive Design**: The app is fully responsive, making it accessible on mobile, tablet, and desktop devices.
- **Navigation**: Smooth navigation between pages (Home, Services, Book Appointment) using React Router.
- **User Authentication**: The authentication feature was initially planned but was removed due to technical difficulties with login and registration.

## Challenges Faced
- **Authentication Issues**: 
  - **Problem**: The initial implementation required users to log in before accessing the booking system. However, during the development process, there were technical challenges related to authentication, login, and registration functionality.
  - **Solution**: The login and registration features didn’t integrate smoothly with the backend, and there were issues with handling authentication tokens. To avoid delays, I decided to remove the authentication flow for this version. Users can now directly access the booking functionality without needing to log in.


## Future Implementations
While this version provides the essential features, there are several improvements planned:
- **Authentication System**: Reintroduce the user authentication system to allow users to log in, view their appointment history, and manage their profile.
- **Appointment Reminders**: Implement email or SMS reminders to help reduce no-shows and keep students informed of their upcoming appointments.
- **Admin Panel**: Develop a simple backend admin panel to manage the appointments, including features like rescheduling and canceling appointments.
- **Enhanced Appointment Booking**: Improve the current appointment booking system by adding a calendar view, dropdowns, and more intuitive booking steps.
- **Multilingual Support**: Implement multilingual support to cater to a diverse student body, ensuring accessibility for all students.

## Getting Started with Create React App
This project was bootstrapped with **Create React App**. To get started with this project, follow these instructions:

### Available Scripts
In the project directory, you can run:

- **`npm start`**  
  Runs the app in development mode.  
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
  The page will reload if you make edits. You will also see lint errors in the console.

- **`npm test`**  
  Launches the test runner in interactive watch mode.  
  See the section about running tests for more information.

- **`npm run build`**  
  Builds the app for production to the `build` folder.  
  It correctly bundles React in production mode and optimizes the build for the best performance.  
  The build is minified, and the filenames include the hashes.  
  Your app is ready to be deployed.

- **`npm run eject`**  
  Note: This is a one-way operation. Once you eject, you can't go back!  
  If you're not satisfied with the build tool and configuration choices, you can eject at any time.  
  This command will remove the single build dependency from your project and copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project, giving you full control over them.  
  However, it’s generally not recommended unless you need to customize the configuration.  

For more information, refer to the official [Create React App documentation](https://reactjs.org/docs/create-a-new-react-app.html).

