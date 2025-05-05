# WP Feature API - Independent Client Example

A small test plugin to demonstrate client-side usage of the `@automattic/wp-feature-api` package in a standalone project.

## Overview

This WordPress plugin serves as a simple example of how to register and interact with features using the `@automattic/wp-feature-api` library within the WordPress admin area (client-side).

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url> wp-feature-api-test
    ```

    Replace `<repository-url>` with the actual URL of this repository. Place the cloned directory inside your WordPress installation's `wp-content/plugins/` directory.

2. **Navigate to the plugin directory:**

    ```bash
    cd wp-content/plugins/wp-feature-api-test
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Build the assets:**

    ```bash
    npm run build
    ```

5. **Activate the plugin:**
    Log in to your WordPress admin dashboard, go to "Plugins", find "WP Feature API - Independent Client Example", and click "Activate".

## Usage

Once activated, this plugin automatically registers a client-side feature with the ID `example-client-feature`. It also fetches and logs all currently registered features (including the one it just added) to your browser's developer console.

To see the output:

1. Open your browser's developer tools (usually by pressing F12).
2. Navigate to any page within the WordPress admin area.
3. Look for messages prefixed with `WP Feature API Test Plugin:` in the console tab. You should see the list of registered features.
