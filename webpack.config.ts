import path from "path"
import webpack from "webpack"
import { buildWebpackConfig } from "./config/build/buildWebpackConfig"
import { BuildEnv, BuildPaths } from "./config/build/types/config"

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "dist"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "dist", "locales"),
  }

  const MODE = env.mode || "development"
  const isDev = MODE === "development"
  const PORT = env.port || 3000
  const APIURL = env.apiURL || ""

  const config: webpack.Configuration = buildWebpackConfig({
    paths,
    mode: MODE,
    port: PORT,
    apiURL: APIURL,
    isDev,
  })

  return config
}
