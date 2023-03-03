# User Authentication with JSON Web Tokens

This is a simple Node.js application that demonstrates how to implement user authentication using JSON Web Tokens (JWTs). It uses the `jsonwebtoken` module to generate and verify tokens, and the `bcrypt` module for password hashing.

## Getting Started

To run the application, you'll need to have Node.js installed on your system. You can download it from the official website: https://nodejs.org/

Once you have Node.js installed, follow these steps to run the application:

1. Clone this repository to your local machine using `git clone https://github.com/chinmaykumbhare/graphql-jwt-server.git`
2. Navigate to the project directory using `cd graphql-jwt-server`
3. Install the required dependencies using `npm install`
4. Start the application using `npm start`

## Usage

Once the application is running, you can use it to create and authenticate users. Here are the available endpoints:

- `POST /api/auth/signup` - creates a new user account
- `POST /api/auth/signin` - logs in an existing user and returns a JWT token

To create a new user, send a JSON payload to the `POST /api/auth/signup` endpoint with the following fields:

- `username` - the user's desired username
- `email` - the user's email address
- `password` - the user's desired password

To log in an existing user, send a JSON payload to the `POST /api/auth/signin` endpoint with the following fields:

- `username` - the user's username or email address
- `password` - the user's password

If the credentials are valid, the server will respond with a JWT token that can be used to authenticate future requests.

## Security

This application uses JSON Web Tokens (JWTs) to authenticate users, which is a secure method of authentication. Passwords are also hashed using the `bcrypt` module, which adds an additional layer of security.

## Contributing

If you'd like to contribute to this project, feel free to open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
