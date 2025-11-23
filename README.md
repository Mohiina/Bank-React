# Bank of React

## Student Information
**Name:** Mokhinabonu Ubaydulloeva  
**GitHub Username:** Mohiina  
Individual Project  

---

## Project Overview
Bank of React is a simple personal banking application built using **React**. It demonstrates key React concepts including:

- **Client-side routing** with React Router v5
- **State management** for dynamic account balances
- **Component-based architecture** with props and reusable components
- **API integration** for fetching and displaying Credits and Debits
- **Form handling** for adding new Credits and Debits
- **Programmatic navigation** and mock login

The application allows users to view and manage their account balance, credits, and debits, while navigating seamlessly between multiple pages in a single-page application (SPA).

---

## Live Website
The app is deployed on GitHub Pages:  
[https://Mohiina.github.io/bank-of-react](https://Mohiina.github.io/bank-of-react)

---

## Features

### Home Page
- Displays the current **account balance**
- Navigation links to:
  - Credits
  - Debits
  - Login
  - User Profile

### Credits Page
- Displays all credits fetched from the API endpoint: `https://johnnylaicode.github.io/api/credits.json`
- Allows users to add a new credit with:
  - Description
  - Amount
  - Current date
- Updates **account balance** dynamically

### Debits Page
- Displays all debits fetched from the API endpoint: `https://johnnylaicode.github.io/api/debits.json`
- Allows users to add a new debit with:
  - Description
  - Amount
  - Current date
- Updates **account balance** dynamically

### User Profile
- Displays **current user information**
  - Username
  - Member Since

### Login Page
- Mock login form
- Updates current user information
- Redirects to User Profile after login

---

## Technical Implementation

- **State Management**
  - `accountBalance` (number) calculated as `totalCredits - totalDebits`
  - `credits` and `debits` arrays fetched and updated dynamically
  - `currentUser` object stores user information
- **Routing**
  - Implemented using **React Router v5**
  - Routes:
    - `/` → Home
    - `/credits` → Credits
    - `/debits` → Debits
    - `/login` → Login
    - `/userProfile` → User Profile
- **Components**
  - `App.js` – top-level component managing state and routes
  - `Home.js` – Home page view
  - `Credits.js` – Credits page view
  - `Debits.js` – Debits page view
  - `Login.js` – Login page view with redirect
  - `UserProfile.js` – User Profile view
  - `AccountBalance.js` – reusable component for displaying account balance
- **API Integration**
  - Fetches Credits and Debits from JSON endpoints
  - Updates the state when new transactions are added
- **Dynamic Account Balance**
  - Automatically recalculated after adding Credits or Debits
  - Displayed with 2 decimal places

---

## Project Structure

Bank-React/

├─ node_modules/

├─ public/

│ ├─ favicon.ico

│ ├─ index.html

│ ├─ logo192.png

│ ├─ logo512.png

│ ├─ manifest.json

│ └─ robots.txt

├─ src/

│ ├─ components/


│ │ ├─ AccountBalance.js

│ │ ├─ Credits.js

│ │ ├─ Debits.js

│ │ ├─ Home.js

│ │ ├─ Login.js

│ │ └─ UserProfile.js

│ ├─ App.js

│ ├─ App.css

│ ├─ App.test.js

│ ├─ index.js

│ ├─ index.css

│ ├─ logo.svg

│ ├─ reportWebVitals.js

│ └─ setupTests.js

├─ package.json

├─ package-lock.json

└─ README.md


---


## Installation & Running Locally

1. **Clone the repository**

git clone https://github.com/Mohiina/bank-of-react.git
cd bank-of-react

2. Install dependencies

npm install

3. Install specific React Router version (if needed)

npm install react-router-dom@5.3.0 react-router@5.2.1
npm install react-scripts@latest --legacy-peer-deps

4. Start the application

npm start

5. Open http://localhost:3000 in your browser.


---

## Common Errors You May Encounter
### Error: ERR_OSSL_EVP_UNSUPPORTED
This error indicates that your application uses an algorithm or key size not supported by OpenSSL 3.0.
#### Solution: 
1. If you use *Windows or Linux*, in the `package.json` file, set the "scripts" attributes as follows:

```
  "scripts": {
  "start": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts start", 
  "build": "SET NODE_OPTIONS=--openssl-legacy-provider && react-scripts build", 
  ...
    },
```

2. If you use *Mac OSX or Linux*, include the following command in the `~/.bash_profile` or `~/.bashrc` file.

```
  export NODE_OPTIONS=--openssl-legacy-provider
```

### Error: React Router Compatibility Issues When Running "npm start" Command
You may encounter React Router compatibility issues when running the `npm start` command because this application uses React Router version 5. 
#### Solution: 
Install React Router version 5 and run the application using the following commands in the specified order: 

```
  npm install
  npm install react-router-dom@5.3.0 react-router@5.2.1 
  npm install react-scripts@latest --legacy-peer-deps 
  npm start
```
