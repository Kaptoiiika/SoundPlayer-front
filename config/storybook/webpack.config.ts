import path from "path"
import webpack, { Configuration } from "webpack"
import { buildCssLoaders } from "../build/loaders/buildCssLoaders"
import { BuildPaths } from "../build/types/config"

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  }

  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push(".ts", ".tsx")

  const cssLoader = buildCssLoaders({ isDev: true })
  config.module.rules.push(cssLoader)
  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
    })
  )

  return config
}
