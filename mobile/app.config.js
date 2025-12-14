import "dotenv/config";

export default {
  expo: {
    name: "BudgetMate",
    slug: "budgetmate",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/Logo.png",
    scheme: "budgetmate",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.budgetmate.app",
    },
    android: {
      package: "com.budgetmate.app",
      versionCode: 1,
      icon: "./assets/images/Logo.png",
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/Logo.png",
          imageWidth: 300,
          resizeMode: "contain",
          backgroundColor: "#1a1a2e",
          dark: {
            backgroundColor: "#1a1a2e",
          },
        },
      ],
      "expo-font",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      eas: {
        projectId: "9829e17f-b295-4358-996f-2ed270952a25"
      },
      WEB_API_URL: process.env.WEB_API_URL,
      IOS_API_URL: process.env.IOS_API_URL,
      ANDROID_API_URL: process.env.ANDROID_API_URL,
      DEFAULT_API_URL: process.env.DEFAULT_API_URL,
      eas: {
        projectId: "8f7aa12c-a9b0-49f5-ab23-d2294178159f",
      },
    },
  },
};
