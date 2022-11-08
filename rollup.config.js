import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.d.ts',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [typescript()]
};
