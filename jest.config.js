module.exports = {
  roots: [
    '<rootDir>/src'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/domain/**/*.ts',
    '!<rootDir>/src/data/protocols/**/*.ts',
    '!<rootDir>/src/presentation/protocols/*.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: '@shelf/jest-mongodb'
}
