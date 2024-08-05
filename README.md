# EbooksCentralHub

EbooksCentralHub is a platform designed to sell eBooks, promote affiliate products, and offer freelance writing services. This repository contains the code and setup instructions for the website.

## Setup Instructions

### Frontend

1. Create the following files in your project directory:
    - `index.html`
    - `styles.css`

2. Copy and paste the provided HTML and CSS code into the respective files.

3. Ensure that the HTML file links to the CSS file correctly by including the following line in the `<head>` section of `index.html`:
    ```html
    <link rel="stylesheet" href="styles.css">
    ```

### Backend

1. Create the following files in your project directory:
    - `server.js`
    - `.env`

2. Install the necessary npm packages by running:
    ```sh
    npm install express stripe dotenv body-parser cors
    ```

3. Add your Stripe secret key and other environment variables to the `.env` file:
    ```env
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. Copy and paste the provided backend code into `server.js`.

5. Start the backend server by running:
    ```sh
    node server.js
    ```

### Directory Structure

Your project directory should look like this:

