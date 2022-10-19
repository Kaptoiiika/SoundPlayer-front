import webpack from "webpack"

export function buildDefinePlugin({
  isDev,
}: {
  isDev: boolean
}): webpack.WebpackPluginInstance {
  return new webpack.DefinePlugin({
    __IS_DEV__: isDev,
  })
}
