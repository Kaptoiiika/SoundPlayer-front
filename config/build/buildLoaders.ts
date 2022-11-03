import webpack from "webpack"
import { buildCssLoaders } from "./loaders/buildCssLoaders"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: { loader: "ts-loader", options: { transpileOnly: true } },
    exclude: [/node_modules/],
  }
  const cssLoader = buildCssLoaders(options)

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  }

  return [tsLoader, cssLoader, svgLoader, fileLoader]
}
