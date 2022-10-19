import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import { buildDefinePlugin } from "./plugins/buildDefinePlugin"

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
      chunkFilename: "css/[name].[contenthash:6].css",
    }),
    buildDefinePlugin(options),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ]
}
