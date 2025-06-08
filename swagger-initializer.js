window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    spec: {
      openapi: "3.0.0",
      info: {
        title: "API Documentation",
        version: "1.0.0"
      },
      paths: {
        "/project/{id}": {
          patch: {
            summary: "Update a field of a project by ID",
            operationId: "updateProjectByID",
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                description: "The ID of the project to update",
                schema: {
                  type: "integer",
                  format: "int64"
                }
              }
            ],
            requestBody: {
              description: "One or more fields of the project to update",
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/projectUpdate"
                  }
                }
              }
            },
            responses: {
              "200": {
                description: "Project update successful.",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/project"
                    }
                  }
                }
              },
              "404": {
                description: "Project not found",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Project not found"
                        },
                        projectId: {
                          type: "integer",
                          example: 101
                        }
                      }
                    }
                  }
                }
              },
              "400": {
                description: "Field not found",
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        message: {
                          type: "string",
                          example: "Invalid field"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      components: {
        schemas: {
          projectUpdate: {
            type: "object",
            description: "Fields to update. All fields are optional.",
            properties: {
              title: {
                type: "string"
              },
              total_money: {
                type: "integer"
              }
            }
          },
          project: {
            type: "object",
            required: ["title", "total_money", "client_id"],
            properties: {
              id: {
                type: "integer",
                format: "int64",
                readOnly: true
              },
              title: {
                type: "string"
              },
              description: {
                type: "string"
              },
              total_money: {
                type: "integer",
                format: "int64"
              }
            }
          }
        }
      }
    },
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
