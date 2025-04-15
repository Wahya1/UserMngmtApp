module.exports = {
  testEnvironment: "jsdom", // Specify the environment as jsdom (browser-like environment)
  setupFilesAfterEnv: ["./src/setupTests.js"], // Setup file for any global configurations
  // collectCoverage: true, // Enable coverage collection
  // collectCoverageFrom: [
  //   'src/**/*.{js,jsx}', // Collect coverage from all JavaScript files (adjust if using JSX)
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 100, // Require 100% coverage for branches
  //     functions: 100, // Require 100% coverage for functions
  //     lines: 100, // Require 100% coverage for lines
  //     statements: 100, // Require 100% coverage for statements
  //   },
  // },
};
