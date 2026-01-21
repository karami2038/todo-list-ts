In this case the file system represent clean architecture

Domain represents inner most layer
Application represent the middle layer
Infrastructure represent the outermost layer
Test is where test code is located.

It goes like this
Domain (Core Logic) → Application (Orchestration of Infrastructure) → Infrastructure (Implementation)

Test is separate and can access all layers for testing purposes.

# API Specification
The API shall be versioned according to semantic versioning principles (Semver 2.0.0).
The API will use the HTTP protocol version 2 with TLS version 1.2 or higher 
for communication (Supported on Bun as of 1.3.6).

The certificate used for TLS will be self-signed.

The API will serve all responses in JSON format, except for documentation which shall be served in HTML format.
The API will implement the following endpoints:

| Endpoint                  | Method | Description                                    | Request Body | Response Body                   |
|---------------------------|--------|------------------------------------------------|--------------|---------------------------------|
| /                         | GET    | This shall list all the avalible endpoints.    | NONE         | All the endpoints in JSON       |
| /health                   | GET    | This serves as the health check for the API.   | NONE         | The health information in JSON. |
| /.well-known/security.txt | GET    | Standard SECURITY.TXT as Specified by RFC 9116 | NONE         | A plain/txt file using UTF-8    |
| /security.txt             | GET    | Standard SECURITY.TXT as Specified by RFC 9116 | NONE         | A plain/txt file using UTF-8    |


# Database specification
The database shall be a relational database management system (RDBMS) that supports ACID transactions.
The database used shall be PostgreSQL.

# Implementation Details
The API shall be implemented using Bun runtime environment.
The API shall use TypeScript as the programming language.   
The API shall use the following libraries and frameworks:
- Elysia for HTTP server and routing.
  - Alternatively, Fastify can be used if Elysia does not meet performance requirements.
- Zod for data validation and schema definition.
  - Alternatively, Yup can be used for validation if Zod does not meet the requirements.
- Prisma as the ORM for database interactions.
  - Alternatively, TypeORM can be used if Prisma does not meet the requirements.
  - Alternatively, pg (node-postgres) as the PostgreSQL client.
- Poku for testing framework.
  - Chai for assertions in tests.
  - ~~Mocha as the test runner.~~
- Supertest for HTTP assertions in tests.
- Dotenvx for environment variable management.
- Logtape for logging.
  - Alternatively, Pino can be used if Logtape does not meet logging requirements.
- k6 for load testing.
  - Alternatively, Artillery can be used if k6 does not meet load testing requirements.
- Boune for the CLI.