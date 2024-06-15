# Express.js Server

This is a simple web server using Express.js that can handle basic routing and middleware. Implement routes to respond to at least two different endpoints.



## Installation

1. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
    or 
    ```
    nodemon
    ```
2. The server will run at `http://localhost:5001`.


## Routes

### Homepage Routes

#### Root Route

- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns a welcome message for the home page.
- **Example Response:**
    ```json
    {
        "mess": "Welcome To Home page"
    }
    ```

#### Like Route

- **URL:** `/like`
- **Method:** `GET`
- **Description:** Returns a welcome message for the like page.
- **Example Response:**
    ```json
    {
        "mess": "Welcome To Like page"
    }
    ```

### User Routes

#### User Root Route

- **URL:** `/user`
- **Method:** `GET`
- **Description:** Returns a personalized welcome message for the user.
- **Query Parameters:**
  - `name` (required): The name of the user.
- **Example Response:**
    ```json
    {
        "mess": "Welcome [name], To User page"
    }
    ```

#### User Info Route

- **URL:** `/user/info`
- **Method:** `GET`
- **Description:** Returns information about the user.
- **Query Parameters:**
  - `name` (required): The name of the user.
- **Example Response:**
    ```json
    {
        "name": "[name]",
        "sem": "6th sem",
        "university": "CHARUSAT"
    }
    ```