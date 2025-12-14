# BudgetMate - Personal Finance Management App

A comprehensive personal finance management application with a React Native mobile app and Node.js backend.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Deployment Guide](#deployment-guide)
  - [Backend Deployment](#backend-deployment)
  - [Mobile App Deployment](#mobile-app-deployment)
- [Sample Credentials](#sample-credentials)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **Home (Budget Tracking)**: Track your income and expenses with visual charts and analytics
- **Learn (Financial Education)**: Access curated financial education articles to improve your money management skills
- **Community**: Share tips, ask questions, and discuss financial topics with other users
- **Earn (Side-Hustle)**: Discover side-hustle opportunities and ways to increase your income
- **Profile Management**: Customize your profile with DiceBear avatars and manage your account settings

## 🛠 Tech Stack

### Backend
- Node.js & Express.js
- MongoDB (Database)
- JWT Authentication
- Google OAuth 2.0

### Mobile App
- React Native (Expo)
- Expo Router
- AsyncStorage
- Axios

## 📦 Prerequisites

Before deploying, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas account)
- **Expo CLI** (`npm install -g expo-cli`)
- **EAS CLI** (`npm install -g eas-cli`)
- **Expo Account** (sign up at https://expo.dev)

## 🚀 Deployment Guide

### Backend Deployment

#### 1. Navigate to Backend Directory
```bash
cd backend
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/budgetmate
# For MongoDB Atlas, use:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/budgetmate

# JWT Secret (generate a random string)
JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production

# Google OAuth (optional - for Google Sign-In)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# CORS Origin (your mobile app URL)
CORS_ORIGIN=*
```

#### 4. Seed Database (Optional)
If you want to populate the database with sample data:
```bash
npm run seed
```

#### 5. Start Backend Server

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The backend will run on `http://localhost:5000` (or your configured PORT).

#### 6. Get Your Backend URL
- **Local Development**: Use your local IP address (e.g., `http://192.168.1.100:5000`)
- **Production**: Deploy to services like Heroku, Railway, or Render and use the provided URL

---

### Mobile App Deployment

#### 1. Navigate to Mobile Directory
```bash
cd mobile
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the `mobile` directory:

```env
# API URLs - Replace with your backend URL
WEB_API_URL=http://localhost:5000/api
IOS_API_URL=http://192.168.1.100:5000/api
ANDROID_API_URL=http://192.168.1.100:5000/api
DEFAULT_API_URL=http://192.168.1.100:5000/api
```

**Important**: Replace `192.168.1.100` with your actual backend server IP or domain.

#### 4. Run in Development (Expo Go)
```bash
npm start
```

Scan the QR code with:
- **iOS**: Camera app
- **Android**: Expo Go app

#### 5. Build APK for Android

**Login to EAS:**
```bash
eas login
```

**Configure EAS Build (first time only):**
```bash
eas build:configure
```

**Build APK:**
```bash
eas build --platform android --profile preview
```

**Build Production APK:**
```bash
eas build --platform android --profile production
```

After the build completes, you'll receive a download link for the APK file.

#### 6. Install APK on Android Device
1. Download the APK from the EAS build link
2. Transfer to your Android device
3. Enable "Install from Unknown Sources" in Settings
4. Open the APK file and install

---

## 🔑 Sample Credentials

### Test User Accounts

#### Admin Account
```
Email: admin@budgetmate.com
Password: Admin123!
```

#### Regular User Account
```
Email: testuser@budgetmate.com
Password: Test123!
```

#### Sample User for Testing
```
Email: john.doe@example.com
Password: Password123!
```

### MongoDB Atlas Connection (Sample)
```
MONGODB_URI=mongodb+srv://budgetmate_user:SamplePassword123@cluster0.mongodb.net/budgetmate?retryWrites=true&w=majority
```

### Google OAuth (Sample - Replace with Your Own)
```
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-abcdefghijklmnopqrstuvwx
```

**Note**: These are sample credentials. For production, create your own secure credentials.

---

## 🔧 Troubleshooting

### Backend Issues

**Problem**: MongoDB connection failed
```
Solution: 
- Check if MongoDB is running locally: `mongod`
- Verify MONGODB_URI in .env file
- For Atlas, check network access and whitelist your IP
```

**Problem**: Port already in use
```
Solution:
- Change PORT in .env file
- Kill the process using the port: `npx kill-port 5000`
```

### Mobile App Issues

**Problem**: "Network request failed" or "Cannot connect to backend"
```
Solution:
- Ensure backend is running
- Check API URLs in mobile/.env
- Use your computer's local IP, not localhost
- Disable firewall temporarily for testing
- Ensure phone and computer are on same WiFi network
```

**Problem**: APK login fails but Expo Go works
```
Solution:
- Check ANDROID_API_URL points to accessible IP (not localhost)
- Use public IP or deployed backend URL
- Verify backend CORS settings allow requests
```

**Problem**: EAS build fails
```
Solution:
- Run `eas build:configure` again
- Check app.config.js for syntax errors
- Ensure all dependencies are properly installed
- Check EAS build logs for specific errors
```

**Problem**: App crashes on startup
```
Solution:
- Clear Expo cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check for missing environment variables
```

---

## 📱 App Structure

```
BudgetMate/
├── backend/              # Node.js backend
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Auth & validation
│   └── server.js        # Entry point
│
└── mobile/              # React Native app
    ├── app/             # Expo Router screens
    │   ├── (tabs)/     # Tab navigation
    │   └── auth/       # Authentication screens
    ├── assets/          # Images, fonts
    └── app.config.js    # Expo configuration
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Support

For issues or questions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review existing issues on GitHub
3. Create a new issue with detailed information

---

**Happy Budgeting! 💰**