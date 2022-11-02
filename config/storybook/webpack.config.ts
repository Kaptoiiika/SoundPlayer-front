import path from "path"
import webpack, { Configuration, RuleSetRule } from "webpack"
import { buildCssLoaders } from "../build/loaders/buildCssLoaders"
import { BuildPaths } from "../build/types/config"

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  }

  config.resolve!.modules!.push(paths.src)
  config.resolve!.extensions!.push(".ts", ".tsx")

  const cssLoader = buildCssLoaders({ isDev: true })
  config.module!.rules!.push(cssLoader)

  config.module!.rules = config.module!.rules!.map((rule) => {
    if (rule === "...") return rule
    
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })
  config.module!.rules!.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })

  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
    })
  )

  return config
}
