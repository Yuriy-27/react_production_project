import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import { IBuildOptions } from "./types/config";

export function buildPlugins({
  paths,
  mode,
}: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
      minify: mode === "production",
    }),
    new webpack.ProgressPlugin(),
  ];
}
