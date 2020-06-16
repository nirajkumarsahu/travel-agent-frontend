module.exports = {
  rootDir: '../..',
  verbose: true,
  setupFiles: ['<rootDir>/config/jest/jest.setup.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    '**/app/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/app/config/**',
    '!**/app/reports/**',
  ],
  coverageReporters: ['lcov', 'json'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    "^lib(.*)$": "<rootDir>/app/lib$1",
    "^global(.*)$": "<rootDir>/app/global$1",
    "^components(.*)$": "<rootDir>/app/components$1",
    "^styles(.*)$": "<rootDir>/app/styles$1",
  }
};
