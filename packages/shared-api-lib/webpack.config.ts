import DefaultWebpackConfig from "@ria-develop/dev-tools/lib/DefaultWebpackConfig";
export default [
  new DefaultWebpackConfig(
    __dirname,
    "sharedApiLib"
  ),
  new DefaultWebpackConfig(
    __dirname,
    "sharedApiLib",
    "production"
  )
];
