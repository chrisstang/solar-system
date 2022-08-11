# Solar System

## Brief
Space project that investigating how could model the solar system. As a first step, calculate the circumference of the sun.

Calculating Pi to increasing accuracy e.g. 3, 3.1, 3.14, 3.141, etc.

## Getting Started
### Steps:
1. Git clone project [https://github.com/chrisstang/solar-system.git](https://github.com/chrisstang/solar-system.git)
2. Move to the folder directory
3. Run `npm install` or `yarn` to install packages

#### Run the development server: 
```bash
npm run dev
# or
yarn dev
```

## API
API route can be accessed on [http://localhost:3000/api/calculate-pi](http://localhost:3000/api/calculate-pi), below are the available HTTP methods:
1. GET `/api/calculate-pi` [^1]
2. GET {query} `/api/calculate-pi?digit=20` [^2]
3. POST `/api/calculate-pi` [^3]

[^1]: It will return the latest calculated PI value from the server.
[^2]: If query digits are larger than the value from the server, calculate, save and return the latest calculated PI value from the server.
[^3]: Post body with {digit: `Number`}, save and return the latest calculated PI value from the server.