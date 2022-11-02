import webpack from "webpack"
import HTMLWebpackPlugin from "html-webpack-plugin"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { buildDefinePlugins } from "./plugins/buildDefinePlugins"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths } = options

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
      chunkFilename: "css/[name].[contenthash:6].css",
    }),
    buildDefinePlugins(options),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin({
    //   openAnalyzer: false,
    // }),
  ]
}
