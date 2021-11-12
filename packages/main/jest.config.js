module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?'],
  setupFilesAfterEnv: ['<rootDir>/../../.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    // '^styled-components': '../<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  coverageReporters: ['json-summary', 'text', 'lcov']
}
