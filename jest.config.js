module.exports = {
  setupFilesAfterEnv: [
    // 'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
  ],
};
