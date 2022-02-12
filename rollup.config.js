import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import url from "rollup-plugin-url";
import svg from "rollup-plugin-svg";

const packageJson = require("./package.json");
const INPUT_ENTRY = "src/index.ts";

const ROLLUP_CONFIG = {
  input: INPUT_ENTRY,
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    resolve(),
    commonjs(),
    babel({
      extensions: [".ts", ".tsx"],
      exclude: "node_modules/**",
    }),
    postcss({
      extensions: [".css"],
    }),
    url(),
    svg(),
    terser(),
  ],
};
export default ROLLUP_CONFIG;
