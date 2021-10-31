import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: `./src/index.ts`,

  plugins: [
    resolve({ extensions }),
    typescript(),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],
  external: [],

  watch: {
    include: 'src/**',
  },

  output: [{ file: pkg.module, format: 'es' }],
};