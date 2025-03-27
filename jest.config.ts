export default {
    testEnvironment: "jsdom",
    transform: {
        "^.+\.tsx?$": ["ts-jest",{}],
      },
      moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
      },
  };