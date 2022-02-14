import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    clearMocks: true,
    resetMocks: true,
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: [
        './src/**/*.ts',
        '!**/node_modules/**',
        '!**/test/**',
        '!./src/**/schemas/*.ts',
        '!./src/**/commonSchemas/*.ts',
        '!src/*.ts',
        '!./src/index.ts',
        '!./src/**/routes.ts',
        '!./src/swagger.ts',
        '!dist/',
    ],
    coverageReporters: ['text', 'lcov', 'json', 'clover', 'cobertura'],
};

export default config;
