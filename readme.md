# DevList

[![MIT License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](LICENSE)

Fun project that just list awesome devs from Github :)

## Getting Started

#### 1. Clone this repo to initialize a new Node project.

    git clone https://github.com/rafaelcalhau/devlist-backend-express.git myProject

#### 2. Install the dependencies:

    cd myproject
    yarn # or npm install

#### 3. Build the application:

    yarn build # or npm run build

#### 4. Run the application:

    yarn start # the application will start on the PORT 3000

## Security best practices

#### 1. Embracing linter security rules
The project [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) helps to identify potential security hotspots.

#### 2. Disable the header X-Powered-By
Your application won't show that was developed using Express.js, preventing to send this info to attackers.

#### 3. Limit concurrent requests using a middleware: [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
From the NGINX blog:

Rate limiting can be used for security purposes, for example to slow down brute‑force password‑guessing attacks. It can help protect against DDoS attacks by limiting the incoming request rate to a value typical for real users, and (with logging) identify the targeted URLs. More generally, it is used to protect upstream application servers from being overwhelmed by too many user requests at the same time.

#### 4. Adjust the HTTP response headers for enhanced security
Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://helmetjs.github.io/).

## Testing

We're using Jest and Supertest. These libraries together can offer a lot of possibilities to build complete and trusteable tests. The base structure is already ready for you and there are a few tests available.

- [Jestjs.io](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- [Supertest](https://github.com/visionmedia/supertest): Super-agent driven library for testing node.js HTTP servers using a fluent API.

To run a test:

    yarn test

or

    npm test

### References
[We’re under attack! 23+ Node.js security best practices](https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d)

