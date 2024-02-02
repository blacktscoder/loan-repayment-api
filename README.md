

# Loan Repayment Web App

This project is a loan repayment web app API built with Node.js, TypeScript, Nest.js, GraphQL, Apollo, and integrates with various AWS services using the Serverless Framework.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [GraphQL Schema](#graphql-schema)
- [Entities and DTOs](#entities-and-dtos)
- [Services](#services)
- [GraphQL Resolvers](#graphql-resolvers)
- [AWS Integration](#aws-integration)
- [Deployment](#deployment)
- [Testing](#testing)
- [Additional Considerations](#additional-considerations)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a loan repayment web app API that utilizes Nest.js for server-side development, GraphQL for efficient data querying, AWS services for serverless architecture, and the Serverless Framework for deployment.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Nest.js CLI
- Serverless Framework

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/loan-repayment-app.git
   ```

2. Install dependencies:

   ```bash
   cd loan-repayment-app
   npm install
   ```

3. Set up AWS credentials for Serverless Framework.

## Project Structure

The project follows a modular structure:

- **graphql:** Contains GraphQL schema, resolvers, entities, DTOs, and services.
- **src:** Main source code directory.
- **serverless.yml:** Configuration for Serverless Framework.

## GraphQL Schema

The GraphQL schema defines the API's types, queries, and mutations. See [graphql/loan.schema.graphql](graphql/loan.schema.graphql).

## Entities and DTOs

Entities represent the data structure, while DTOs define the shape of data transferred between client and server. See [graphql/entities](graphql/entities) and [graphql/dto](graphql/dto).

## Services

Services handle business logic and interact with data. See [graphql/loan.service.ts](graphql/loan.service.ts).

## GraphQL Resolvers

Resolvers map to the operations in the schema and call the corresponding methods in services. See [graphql/loan.resolver.ts](graphql/loan.resolver.ts).

## AWS Integration

The project integrates with various AWS services, including Lambda, EC2, ECS, ECR, S3, and RDS. Ensure proper AWS configuration.

## Deployment

Deploy the application using the Serverless Framework. See [serverless.yml](serverless.yml).

```bash
serverless deploy
```

## Testing

Run unit tests for the Nest.js application.

```bash
npm run test
```

## Additional Considerations

- Ensure proper monitoring and logging using AWS CloudWatch or other tools.
- Implement security measures using IAM roles and policies.
- Design the application for scalability, considering AWS services like ECS for containerization.

## Contributing

Feel free to contribute to the project. Fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

