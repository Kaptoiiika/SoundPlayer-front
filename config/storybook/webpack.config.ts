import path from "path"
import { Configuration } from "webpack"
import { buildCssLoaders } from "../build/loaders/buildCssLoaders"
import { buildDefinePlugin } from "../build/plugins/buildDefinePlugin"
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
  // config.plugins.push(buildDefinePlugin({ isDev: true }))
  
  return config
}
