import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    info: {
      title: "MY ANGULAR BACKEND",
      version: "1.0.0",
      description: "API Documentation",
    },
    servers: [
      {
        url: "http://localhost:8080", // Update the URL as per your server configuration
        description: "Local server",
      },
    ],
  },
  apis: ["./routes/*.js"], // Path to the API routes
};

const specs = swaggerJsdoc(options);

export default specs;
