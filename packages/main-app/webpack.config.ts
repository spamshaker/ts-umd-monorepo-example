import DefaultWebpackConfig from "@ria-develop/dev-tools/lib/DefaultWebpackConfig";
export default [
  new DefaultWebpackConfig(
    __dirname,
    "mainApp"
  ),
  new DefaultWebpackConfig(
    __dirname,
    "mainApp",
    "production"
  )];
