import {kebabCase} from "lodash";
import path from "path";
import webpack, {EntryFunc, Module, Output, Resolve} from "webpack";
import {DefaultTSLoaderRule} from "./DefaultTSLoaderRule";
import externals from "./webpack.externals";

export default class DefaultWebpackConfig implements webpack.Configuration {
  public context: string;
  public externals = externals;
  public name: string;
  public mode: "development" | "production" | "none" = "development";
  public module: Module = {rules: []};
  public output: Output;
  public resolve: Resolve;

  constructor(context: string, name: string, mode: "development" | "production" | "none" = "development") {
    this.mode = mode;
    this.context = context;
    this.name = name;
    this.output = {
      filename: (data) => {
        return `${kebabCase(data.chunk.name)}${this.mode === "production" ? ".min" : ""}.js`;
      },
      library: "[name]",
      libraryTarget: "umd",
      path: path.resolve(this.context || __dirname, "dist"),
      umdNamedDefine: true,
    };
    this.module.rules.push(new DefaultTSLoaderRule());
    this.resolve = {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    };
  }

  public entry: EntryFunc = () => ({
    [this.name]: `./src/${this.name}`
  })
}
