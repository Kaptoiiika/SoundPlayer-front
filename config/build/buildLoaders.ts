import webpack from "webpack"
import { buildCssLoaders } from "./loaders/buildCssLoaders"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
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

  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: [/node_modules/],
    },
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}
