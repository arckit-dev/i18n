import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    client: 'src/client/index.ts',
    detectors: 'src/detectors/index.ts',
    'resource-loader.node': 'src/resource-loader.node.ts',
    'resource-loader.fetch': 'src/resource-loader.fetch.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  minify: false,
  outDir: 'dist',
  target: 'es2022'
});
