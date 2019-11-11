import DefaultWebpackConfig from "@ria-develop/dev-tools/lib/DefaultWebpackConfig";
export default [
  new DefaultWebpackConfig(
  __dirname,
  "searchLookup"
),
  new DefaultWebpackConfig(
  __dirname,
  "searchLookup",
  "production"
)];
