import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        '**/*.spec.ts',
        '**/*.d.ts',
        '**/index.ts',
        '**/types.ts',
        '**/resource-loader.ts',
        '**/translation.ts',
        '**/resource-loader.node.ts',
        '**/resource-loader.fetch.ts',
        '**/i18n.provider.tsx',
        '**/with-translation.tsx'
      ]
    }
  }
});
