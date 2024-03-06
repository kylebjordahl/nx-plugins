/// <reference types='vitest' />
import { defineConfig } from 'vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/util',

  plugins: [nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    name: 'util',
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    reporters: ['default'],
    pool: 'threads',
    coverage: {
      enabled: true,
      reporter: [
        'text',
        'html',
        'cobertura',
        'clover',
        'json',
        'json-summary',
        'lcov',
      ],
      reportsDirectory: '../../coverage/packages/util',
      provider: 'v8',
    },
  },
});
