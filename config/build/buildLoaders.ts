import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev
              ? "[path]/[[name]/][local]"
              : "[hash:base64:6]",
          },
        },
      },
      "sass-loader",
    ],
  }

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
      exclude: /node_modules/,
    },
    cssLoader,
    svgLoader,
    fileLoader,
  ]
}
