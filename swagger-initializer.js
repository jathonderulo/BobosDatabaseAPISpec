window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container


  window.ui = SwaggerUIBundle({
    spec: specJson,
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

const specJson = 
{
  "openapi": "3.0.4",
  "info": {
    "title": "Bobo's Database - OpenAPI 3.0",
    "description": "This is an API doc for Bobo's database on the OpenAPI 3.0 specification.\n\nSome useful links:\n- [GitHub coming soon. Should we make it open source or nah](https://github.com)",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.12"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "https://swagger.io"
  },
  "tags": [
    {
      "name": "client",
      "description": "Stuff related to clients"
    }
  ],
  "paths": {
    "/client": {
      "get": {
        "tags": [
          "client"
        ],
        "summary": "Get all clients",
        "operationId": "getClients",
        "responses": {
          "200": {
            "description": "Clients retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/client"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "client"
        ],
        "summary": "Create a new client",
        "operationId": "createClient",
        "requestBody": {
          "description": "Client object to be created",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/client"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Client created successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/client"
                }
              }
            }
          },
          "400": {
            "description": "Invalid input",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Required field 'name' is missing from request body."
                    },
                    "code": {
                      "type": "integer",
                      "example": "400"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/client/{id}": {
      "get": {
        "tags": [
          "client"
        ],
        "summary": "Retrieve a client by ID",
        "operationId": "getClientByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the client to retrieve",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Client found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/client"
                }
              }
            }
          },
          "404": {
            "description": "Client not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Client not found"
                    },
                    "clientId": {
                      "type": "integer",
                      "example": 42
                    }
                  }
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "client"
        ],
        "summary": "Update a field of a client by ID",
        "operationId": "updateClientByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the client to update",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "description": "One or more fields of the client to update",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/clientUpdate"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Client update successful.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/client"
                }
              }
            }
          },
          "400": {
            "description": "Field not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Invalid field"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Client not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Client not found"
                    },
                    "clientId": {
                      "type": "integer",
                      "example": 42
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "client"
        ],
        "summary": "Delete client by ID",
        "operationId": "deleteClientByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the client to delete",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Client deleted by ID",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "example": 52
                }
              }
            }
          }
        }
      }
    },
    "/project": {
      "get": {
        "tags": [
          "project"
        ],
        "summary": "Get all projects",
        "operationId": "getProjects",
        "responses": {
          "200": {
            "description": "Projects retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/project"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "project"
        ],
        "summary": "Create a new project",
        "operationId": "createProject",
        "requestBody": {
          "description": "Project object to be created",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/project"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Project created successfully"
          }
        }
      }
    },
    "/project/{id}": {
      "get": {
        "tags": [
          "project"
        ],
        "summary": "Retrieve a project by ID",
        "operationId": "getProjectByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the project to retrieve",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Project found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "404": {
            "description": "Project not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Project not found"
                    },
                    "projectId": {
                      "type": "integer",
                      "example": 101
                    }
                  }
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "project"
        ],
        "summary": "Update a field of a project by ID",
        "operationId": "updateProjectByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the project to update",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "description": "One or more fields of the project to update",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/projectUpdate"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Project update successful.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/project"
                }
              }
            }
          },
          "400": {
            "description": "Field not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Invalid field"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Project not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Project not found"
                    },
                    "projectId": {
                      "type": "integer",
                      "example": 101
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "project"
        ],
        "summary": "Delete project by ID",
        "operationId": "deleteProjectByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the project to delete",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Project deleted by ID",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "example": 101
                }
              }
            }
          }
        }
      }
    },
    "/collaborator": {
      "get": {
        "tags": [
          "collaborator"
        ],
        "summary": "Get all collaborators",
        "operationId": "getCollaborators",
        "responses": {
          "200": {
            "description": "Collaborators retrieved",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/collaborator"
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "collaborator"
        ],
        "summary": "Create a new collaborator",
        "operationId": "createCollaborator",
        "requestBody": {
          "description": "Collaborator object to be created",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/collaborator"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Collaborator created successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/collaborator"
                }
              }
            }
          },
          "400": {
            "description": "Invalid input",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Required field 'name' is missing from request body."
                    },
                    "code": {
                      "type": "integer",
                      "example": 400
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/collaborator/{id}": {
      "get": {
        "tags": [
          "collaborator"
        ],
        "summary": "Retrieve a collaborator by ID",
        "operationId": "getCollaboratorByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the collaborator to retrieve",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Collaborator found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/collaborator"
                }
              }
            }
          },
          "404": {
            "description": "Collaborator not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Collaborator not found"
                    },
                    "collaboratorId": {
                      "type": "integer",
                      "example": 202
                    }
                  }
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "collaborator"
        ],
        "summary": "Update a field of a collaborator by ID",
        "operationId": "updateCollaboratorByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the collaborator to update",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "requestBody": {
          "description": "One or more fields of the collaborator to update",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/collaboratorUpdate"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Collaborator update successful.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/collaborator"
                }
              }
            }
          },
          "400": {
            "description": "Field not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Invalid field"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Collaborator not found",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Collaborator not found"
                    },
                    "collaboratorId": {
                      "type": "integer",
                      "example": 202
                    }
                  }
                }
              }
            }
          }
        }
      },
      "delete": {
        "tags": [
          "collaborator"
        ],
        "summary": "Delete collaborator by ID",
        "operationId": "deleteCollaboratorByID",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "description": "The ID of the collaborator to delete",
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Collaborator deleted by ID",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "example": 202
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "client": {
        "type": "object",
        "required": [
          "name"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "phoneNumber": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "total_issued": {
            "type": "integer",
            "format": "int64"
          },
          "total_paid": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "clientUpdate": {
        "type": "object",
        "description": "Fields to update. All fields are optional.",
        "properties": {
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "phoneNumber": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "total_issued": {
            "format": "int64"
          },
          "total_paid": {
            "format": "int64"
          }
        }
      },
      "project": {
        "type": "object",
        "required": [
          "title",
          "total_money",
          "total_paid",
          "client_id"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "total_money": {
            "type": "integer",
            "format": "int64"
          },
          "total_paid": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "projectUpdate": {
        "type": "object",
        "description": "Fields to update. All fields are optional.",
        "properties": {
          "name": {
            "type": "string"
          },
          "total_money": {
            "type": "integer"
          },
          "total_paid": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "collaborator": {
        "type": "object",
        "required": [
          "name"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "readOnly": true
          },
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "phoneNumber": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "total_to_pay": {
            "type": "integer",
            "format": "int64"
          },
          "total_paid": {
            "type": "integer",
            "format": "int64"
          }
        }
      },
      "collaboratorUpdate": {
        "type": "object",
        "description": "Fields to update. All fields are optional.",
        "properties": {
          "name": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "phoneNumber": {
            "type": "string"
          },
          "address": {
            "type": "string"
          }
        }
      }
    }
  }
}
