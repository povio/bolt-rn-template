import type { OpenAPICodegenConfig } from "@povio/openapi-codegen-cli";

const config: OpenAPICodegenConfig = {
  // input: "openapi.json", // Local generated OpenAPI spec
  input: "https://api.dev.pov.io/api/docs-json", // External deployed backend
  output: "./openapi",
  tsPath: "@/openapi",
  restClientImportPath: "@/utils/rest/openapi/appRestClient",
  replaceOptionalWithNullish: true,
  infiniteQueries: false,
  builderConfigs: false,
  mutationEffects: false,
  acl: false,
  checkAcl: false,
};

export default config;
