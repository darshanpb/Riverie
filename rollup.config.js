import typescript from "rollup-plugin-typescript2";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
const INPUT_ENTRY = "src/index.tsx";

const ROLLUP_CONFIG = {
  input: INPUT_ENTRY,
  output: {
    file: "dist/index.es.js",
    format: "es",
  },
  plugins: [
    typescript(),
    babel({
      extensions: [".ts", ".tsx"],
    }),
    postcss(),
    svg(),
    terser(),
  ],
};
export default ROLLUP_CONFIG;
