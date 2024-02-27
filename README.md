# Booksie

Booksie is a web application designed to help users discover, save, and manage their favorite books. It leverages modern web technologies and Firebase for authentication and data storage.

## Features

- **User Authentication**: Users can sign up and sign in using their email and password or through Google authentication.
- **Book Search**: Users can search for books by title, author, or ISBN.
- **Favorites**: Users can add books to their favorites list and view them at any time.
- **Book Details**: Detailed information about each book, including title, author, description, and cover image.
- **Notifications**: Toast notifications for actions such as signing in, signing up, adding a book to favorites, and removing a book from favorites.

## Tools and Technologies

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A library for managing application state, including actions and reducers.
- **Firebase**: A platform for building web and mobile applications, providing authentication and database services.
- **React Router**: A standard library for routing in React applications.
- **React Icons**: A library of icons for React applications.
- **React Toastify**: A library for non-blocking notifications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Axios**: A promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

- Node.js (version  14 or higher)
- npm (version  6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/adi5689/BOOKSIE.git
   ```
2. Navigate to the project directory:
   ```
   cd booksie
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
   The application will be available at `http://localhost:3000`.

### Configuration

Before running the application, you need to configure Firebase:

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Google authentication in the Firebase Console under the Authentication section.
3. Create a `.env` file in the root of your project and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
