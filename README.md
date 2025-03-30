# Coding Quiz CI/CD Demo Project

This project is a full-stack application that demonstrates CI/CD principles and Cypress testing in a practical context. It consists of a React frontend and a Node.js/Express backend, with a focus on automated testing and deployment workflows.

## Project Overview

The application is a coding quiz platform that:
- Serves quiz questions from a MongoDB database
- Displays questions and multiple-choice answers to users
- Tracks user responses and scores
- Demonstrates good testing practices with Cypress

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- CSS for styling

### Backend
- Node.js
- Express
- TypeScript
- MongoDB

### Testing & CI/CD
- Cypress for component and E2E testing
- GitHub Actions for CI/CD workflows
- Automated build and test pipelines

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/                # React source files
│   │   ├── components/     # React components
│   │   ├── services/       # API service functions
│   │   └── models/         # TypeScript interfaces
├── server/                 # Backend Express application
│   ├── src/                # Server source files
│   │   ├── controllers/    # Request handlers
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── seeds/          # Database seed data
├── cypress/                # Cypress test files
│   ├── component/          # Component tests
│   └── fixtures/           # Test data
```

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Toshiebop18/starter-code-ci-cd.git
   cd starter-code-ci-cd
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development servers
   ```bash
   npm run dev
   ```

## Testing with Cypress

This project uses Cypress for both component and end-to-end testing.

### Running Component Tests

```bash
npm run cypress:component
```

### Running E2E Tests

```bash
npm run cypress:open
```

### Test Structure

- Component tests (`/cypress/component/`) verify that individual React components function correctly
- Fixtures (`/cypress/fixtures/`) contain mock data for tests
- Support files customize Cypress behavior and add custom commands

## CI/CD Pipeline

The project includes a CI/CD pipeline configured to:

1. Run automatically on push or pull request to main branch
2. Install dependencies
3. Build the application
4. Run tests
5. Deploy (if on main branch and all tests pass)

### Pipeline Structure

The CI/CD workflow includes:
- Linting and type checking
- Unit and component tests
- End-to-end tests
- Automatic deployment to staging/production

## Learning Objectives

This project is designed to teach:

- How to set up and configure Cypress for component and E2E testing
- Best practices for writing maintainable tests
- How to create and configure CI/CD pipelines
- Strategies for automating the build, test, and deployment process
- How to implement a robust development workflow with proper version control

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.