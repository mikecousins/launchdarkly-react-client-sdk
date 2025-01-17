import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import filesize from 'rollup-plugin-filesize';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const plugins = [resolve(), esbuild(), json(), terser(), filesize()];
const external = /node_modules/;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/cjs/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins,
    external,
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/esm/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins,
    external,
  },
  {
    input: 'src/index.ts',
    plugins: [dts(), json()],
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
  },
];
