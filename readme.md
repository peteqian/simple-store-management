# Tour of Heroes with Simple Store Management

This repository is a modified version of the Tour of Heroes example from the Angular Getting Started page. It includes the original functionality of the Tour of Heroes app, along with the addition of a simple store management system.

## Overview

The Tour of Heroes app is a simple application that allows users to view and manage a list of heroes. It demonstrates the basic concepts and features of Angular framework.

The modified version of the app includes a simple store management system. This system provides a centralized state management solution, allowing components to access and update shared data without directly manipulating it. It follows the principles of Redux, a popular state management library.

## Features

The Tour of Heroes app with simple store management offers the following features:

1. **Hero List**: View a list of heroes, including their names and brief details.
2. **Hero Details**: View detailed information about a specific hero, including their name, ID, and special abilities.
3. **Store Management**: Utilize a simple store management system to manage the application state.

## Getting Started

To run the Tour of Heroes app with simple store management, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/peteqian/simple-store-management.git
   ```

2. Navigate to the cloned directory:

   ```shell
   cd simple-store-management
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Build and run the application:

   ```shell
   ng serve
   ```

5. Open your browser and visit `http://localhost:4200` to access the app.

## Store Management

The store management system simplifies the process of managing and sharing state between components. It promotes a unidirectional flow of data, making it easier to track changes and maintain a consistent application state.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

The original version of the Tour of Heroes app was created by the Angular team and can be found in the Angular Getting Started documentation. This modified version with simple store management was developed to showcase an alternative state management approach.
