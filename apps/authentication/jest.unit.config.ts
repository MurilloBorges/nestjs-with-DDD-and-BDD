import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    resetModules: true,
    verbose: true,
    testEnvironment: 'node',
    testMatch: ['**/unit/**/*.spec.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
    collectCoverageFrom: [
        './src/**/*.ts',
        '!**/node_modules/**',
        '!**/test/**',
        '!**/schemas/*.ts',
        '!**/commonSchemas/*.ts',
        '!./src/*.ts',
        '!./src/**/routes.ts',
        '!**/types/**.ts',
        '!./dist/',
    ],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
    coverageThreshold: {
        global: {
            statements: 90,
            branches: 80,
            functions: 90,
            lines: 90,
        },
    },
};

export default config;
