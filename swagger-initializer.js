import yaml from 'js-yaml';
import fs from 'fs';

window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  const openapiYaml = fs.readFileSync('./openapi.yaml', 'utf8');
  const openapiSpec = yaml.load(openapiYaml)

  window.ui = SwaggerUIBundle({
    spec: openapiSpec,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
