import { withGuildDocs } from 'guild-docs/next.config';
import { applyUnderscoreRedirects } from 'guild-docs/underscore-redirects';

export default withGuildDocs({
  basePath: process.env.NEXT_BASE_PATH && process.env.NEXT_BASE_PATH !== '' ? process.env.NEXT_BASE_PATH : undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, meta) {
    applyUnderscoreRedirects(config, meta);

    return config;
  },
  redirects: () =>
    Object.entries({
      '/docs/introduction': '/docs',
      '/docs/getting-started': '/docs/getting-started/overview',
      '/docs/getting-started/introduction': '/docs/getting-started/overview',
      '/docs/getting-started/basic-example': '/docs',
      '/docs/handlers': '/docs/handlers/handlers-introduction',
      '/docs/handlers/available-handlers': '/docs/handlers/handlers-introduction',
      '/docs/api/modules/runtime_src': '/docs/getting-started/your-first-mesh-gateway',
      '/docs/recipes': '/docs',
      '/docs/api': '/docs',
      '/docs/modules': '/docs',
      '/docs/api/modules': '/docs',
      '/docs/api/classes': '/docs',
      '/docs/api/modules/json_machete_src': '/docs/handlers/json-schema',
      '/docs/recipes/as-gateway': '/docs/getting-started/your-first-mesh-gateway',
      '/docs/guides/combine-many-sources': '/docs/getting-started/combine-multiple-sources',
      '/docs/api/modules/urql_src': '/docs',
      '/docs/guides': '/docs',
      '/docs/recipes/multiple-apis': '/docs/getting-started/combine-multiple-sources',
      '/docs/recipes/as-sdk': '/docs/guides/mesh-sdk',
      '/docs/migration/openapi-0': '/docs/migration/openapi-0.31-0.32',
      '/docs/recipes/build-mesh-artifacts': '/docs/guides/mesh-sdk',
      '/docs/api/modules/handlers_grpc_src': '/docs/handlers/grpc',
      '/docs/api/modules/loaders_openapi_src': '/docs/handlers/openapi',
      '/docs/api/modules/jit_executor_src': '/docs/getting-started/customize-mesh-server',
      '/docs/api/modules/handlers_raml_src': '/docs/handlers/openapi',
      '/docs/api/modules/loaders_raml_src': '/docs/handlers/openapi',
      '/docs/api/modules/utils_src': '/docs/getting-started/customize-mesh-server',
      '/docs/api/modules/transforms_rename_src': '/docs/transforms/rename',
      '/docs/api/modules/config': '/docs',
      '/docs/api/modules/config_src': '/docs',
      '/docs/api/modules/transforms_prefix_src': '/docs',
      '/docs/api/interfaces': '/docs',
      '/docs/recipes/federation': '/docs',
      '/docs/api/modules/plugins_rate_limit_src': '/docs',
      '/docs/api/modules/transforms_hoist_field_src': '/docs',
      '/docs/guides/performances-best-practices': '/docs',
      '/docs/api/modules/transforms_prune_src': '/docs',
      '/docs/api/modules/merger-bare': '/docs',
      '/docs/getting-started/combine-many-sources': '/docs',
      '/docs/recipes/typescript': '/docs',
      '/docs/api/modules/plugins_mock_src': '/docs',
      '/docs/transforms': '/docs',
      '/docs/api/modules/plugins_webhook_src': '/docs',
      '/docs/cache/inmemory-lru': '/docs',
      '/docs/cache': '/docs',
      '/docs/recipes/subscriptions-webhooks': '/docs/guides/subscriptions-webhooks',
      '/docs/getting-started/mesh-transforms': '/docs/transforms/transforms-introduction',
      '/docs/subscriptions-webhooks': '/docs/guides/subscriptions-webhooks',
      '/docs/api/modules/transforms_snapshot_src': '/docs/transforms/snapshot',
      '/docs/api/modules/string_interpolation_src': '/docs/transforms/transforms-introduction',
      '/docs/recipes/live-queries': '/docs/guides/live-queries',
      '/docs/handlers/new-openapi': '/docs/handlers/openapi',
      '/docs/api/modules/handlers_mysql_src': '/docs/handlers/mysql',
      '/docs/api/modules/handlers_postgraphile_src': '/docs/handlers/postgraphile',
      '/docs/api/modules/handlers_openapi_src': '/docs/handlers/openapi',
      '/docs/api/cli': '/docs/cli-commands',
      '/graphql/mesh/docs/getting-started/installation': '/docs/getting-started/installation',
      '/docs/api/modules/mergers_bare_src': '/docs/getting-started/combine-multiple-sources',
      '/graphql/mesh/docs/transforms/replace-field': '/docs/transforms/replace-field',
      '/graphql/mesh/docs/migration/new-openapi-to-openapi': '/docs/handlers/openapi',
      '/graphql/mesh/docs/handlers/neo4j': '/docs/handlers/neo4j',
      '/graphql/mesh/docs/handlers/handlers-introduction': '/docs/handlers/handlers-introduction',
      '/graphql/mesh/docs/guides/graphql-code-generator': '/docs/guides/graphql-code-generator',
      '/graphql/mesh/docs/guides/extending-unified-schema': '/docs/guides/extending-unified-schema',
      '/graphql/mesh/docs/transforms/type-merging': '/docs/transforms/type-merging',
      '/graphql/mesh/docs/guides/batching': '/docs/guides/batching',
      '/docs/handlers/openapi/endpoint': '/docs',
      '/docs/api/modules/mergers_stitching_src': '/docs',
      '/docs/api/interfaces/types_src': '/docs',
      '/docs/api/classes/handlers_tuql_src': '/docs',
      '/docs/api/interfaces/loaders_json_schema_src': '/docs',
      '/docs/api/classes/handlers_json_schema_src': '/docs',
      '/docs/api/interfaces/apollo_link_src': '/docs/handlers/handlers-introduction',
      '/docs/api/interfaces/loaders_openapi_src': '/docs/handlers/openapi',
      '/docs/api/classes/handlers_odata_src': '/docs/handlers/odata',
      '/docs/api/classes/cache_redis_src': '/docs/handlers/handlers-introduction',
      '/docs/api/classes/handlers_neo4j_src': '/docs/handlers/neo4j',
      '/docs/api/classes/transforms_prune_src': '/docs/handlers/handlers-introduction',
      '/docs/api/classes/handlers_graphql_src': '/docs/handlers/graphql',
      '/docs/api/classes/handlers_soap_src': '/docs/handlers/soap',
      '/docs/api/classes/transforms_federation_src': '/docs',
      '/docs/api/classes/mergers_stitching_src': '/docs',
      '/docs/api/interfaces/json_machete_src': '/docs',
      '/docs/api/classes/handlers_postgraphile_src': '/docs/handlers/postgraphile',
      '/docs/api/classes/utils_src': '/docs',
      '/docs/api/classes/cache_cfw_kv_src': '/docs',
      '/docs/api/classes/handlers_raml_src': '/docs/handlers/handlers-introduction',
      '/docs/api/classes/string_interpolation_src': '/docs',
      '/docs/api/interfaces/cli_src': '/docs/cli-commands',
      '/docs/api/classes/mergers_federation_src': '/docs',
      '/docs/api/classes/transforms_snapshot_src': '/docs/transforms/snapshot',
      '/docs/api/classes/handlers_mongoose_src': '/docs/handlers/mongoose',
    }).map(([from, to]) => ({
      source: from,
      destination: to,
      permanent: true,
    })),
});
