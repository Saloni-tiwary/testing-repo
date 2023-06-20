# ADAPTIVEU

A platform that enables continuous learning and training in an organisation.

`Learning`:
Continuous learning is enabled with the help of recommending links which people think it's
interesting to share with the community.

`Training`:
With AU, you can also create a curated form of learning to onboard new recruits, or to even update
some of your courses to keep your employee on track

## Table of contents

<!--ts-->

* [Demo](#demo)
* [Architecture Diagram](#architecture-diagram)
* [Built With](#built-with)
* [Framework](#framework)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
    * [Development setup](#development-setup)
    * [Prerequisites](#prerequisites)
    * [GIT setup](#git-setup)
    * [Project Setup](#project-setup)
    * [Steps to Run Project in Local](#steps-to-run-project-in-local)
* [Testing](#testing)
* [Deployment](#deployment)

<!--te-->

## Demo

Here is a short glimpse of AdaptiveU

[![Watch the video](https://img.youtube.com/vi/UOK629y8Hec/hqdefault.jpg)](https://www.youtube.com/watch?v=UOK629y8Hec)

## Architecture Diagram

Checkout [here](https://drive.google.com/file/d/1bIwGIwV7jkEJWFdvZ7Y3SevDQI0IfiKx/view?ths=true&pli=1
) to know about the Architecture of AdaptiveU.

## Built With

- Java version - 8 (Setup [link](#java))
- Gradle version - 6.0
- Node version - 14 (Setup [link](#node))
- Webpack version - 4.46.0

## Framework

- Spring MVC
- Web Components

## Project Structure

Checkout [here](https://docs.google.com/document/d/1N5JjxDzx4d6sbTO3s5adubT3KJ3L5GGDINN5iGu2iZo/edit#
) to know about the project structure of AdaptiveU.

## Getting Started

### Development setup

#### Recommended IDE's

- VS code(`JS,react`) - Download Visual studio code
  from [here](https://code.visualstudio.com/download).
- Intellij IDEA(`Java ...`) - Download Intellij IDEA
  from [here](https://www.jetbrains.com/idea/download/).

#### IDE Setup:

- `Visual Studio Code - additional plugins`

    - `Formatter`
        - Use Prettier formatter in visual studio code for maintaining a consistent code format for
          javascript throughout the project
        - Install the prettier plugin
          from [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    - `ESLint`
        - Use ESLint to perform automated scans on the javascript files to check the syntax errors.
        - Install the eslint plugin
          from [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- `Intellij IDEA- additional Plugins`

    - `Formatter`
        - Use Google Style formatter in IntelliJ for maintaining a consistent code format throughout
          the project.
        - Download Google style
          from [here](https://plugins.jetbrains.com/plugin/8527-google-java-format)

    - `Enable Save Actions`

        - Enable Save Action is one of the features of IntelliJ. This should be enabled to reformat
          the code whenever we are saving our code.
        - By default AutoSave is enabled under Preferences > Appearance & behaviour > System
          Settings
        - Additionally, add Save Actions Plugin from extensions by following the below steps.

            - Click Preferences -> Other Settings-> Save Actions
            - Enable General > Activate the save actions on save.
            - Enable Formatting Actions > Reformat file and Optimize import
        - Install the save actions plugin
          from [here](https://plugins.jetbrains.com/plugin/7642-save-actions)
    - `Sonarlint`

        - Use the sonarlint plugins for both IntelliJ for analyzing the code smells
        - Install the sonarlint plugin from
          [here](   https://plugins.jetbrains.com/plugin/7973-sonarlint)

### Prerequisites

#### Node

- Download the latest node version from [here](https://nodejs.org/en/download/)

#### Java

1. Open the terminal and use these commands to download sdkman or
   visit [this](https://sdkman.io/install) page for installation

      ```
      curl -s "https://get.sdkman.io" | bash
      ```
2. Then set path on Mac using the following command

     ```
     source "$HOME/.sdkman/bin/sdkman-init.sh"  
     ```
3. verify the installation by checking the version (If the command is not found, please launch a new
   terminal and check with the command
      ```
      sdk version 
      ```
5. After installing the sdkman, then java(JDK) should be installed. Get the list of all jdks using
   the following command
      ```
      sdk list java 
      ```
6. We use AdoptOpenJDK - 8.0.292.hs-adpt, install it using the following command
      ```
      sdk install java 8.0.292.hs-adpt
      ```

#### Gcloud

1. Download the latest gcloud version from [here](https://cloud.google.com/sdk/docs/install#mac)
2. Extract the downloaded google-cloud-sdk zip file
3. Navigate to the downloads from your terminal and open the extracted google-cloud-sdk folder
      ```
       cd google-cloud-sdk
      ```
4. Run the below script for intiating gcloud sdk
    - To install gcloud sdk
      ```
      ./google-cloud-sdk/install.sh
      ```
    - To initiate sdk
      ```
      ./google-cloud-sdk/bin/gcloud init
      ```

5. Use the anywherworks credentials you used for installing gcloud to connect with the gcloud sdk by
   using the following command
   ```
   gcloud auth login
   ```
6. To get the gcloud component list
   ```
   get the component list
   ```
    - The required gcloud components are
    - BigQuery Command Line Tool
    - Cloud Datastore Emulator
    - Cloud Storage Command Line Tool
    - gcloud app Java Extensions
    - gcloud app Python Extensions
7. Install the above-required components using the command
      ```
      gcloud components install COMPONENT_ID
      ```

### GIT setup

- Download the [latest version](https://git-scm.com/downloads) of Git. After the file is downloaded,
  install it in the system
- To verify the installation, check the version of git using the following command
  ```
  git --version
  ```
- Setup the git configurations using the following commands
  ```
  git config --global user.name "your name"
  ```
  ```
  git config --global user.email "your work email"
  ```
- Check
  out [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
  to know about personal access tokens and generate one to use for authentication.

### Project Setup

- Clone the project directly into IntelliJ, by using the option “clone from version control” clone
  the project by giving the following project URL
  ```
    https://github.com/Adaptavant/adaptiveu.git
  ```
- IntelliJ will download all the required Gradle and packages.

- IntelliJ will automatically build the project.
    - If the build fails Check the wrapper folder is present under the Gradle folder in the root
      directory.
    - If not copy the wrapper folder from the Api/src/main/gradle and change the Gradle version to
      6.0.
    - Build the project again.
-

Refer [here](https://docs.google.com/document/d/1geQ3q5_kuWyKIviQZaH7Il5rO5er58O1NlYYE3OB8-U/edit#heading=h.d1mp374itesg)
to set up Gradle artifactory server credentials setup.

- Open the terminal in intelliJ and navigate to the WebApp folder using the following command.

  ```
  cd WebApp
  ```
- Install dependencies using the following command.
  ```
  npm install 
  ```
- Install the Universal billing component referring steps
  from [here](https://docs.google.com/document/u/0/d/1hHPLFWFB0VgnSVbbJiVSd-9WWHlt-yWfPV_F_RYw4e8/edit)
  .

### Steps to Run Project in Local

- Navigate to the repository directory on your machine from your terminal.

    ```
    cd adaptiveU
    cd webApp
    ```

- To run the backend, use the following command.

    ```
    gradle appengineRun
    ``` 
- To run the frontend, open a new terminal and use the following command.

    ```
    npm run start
    ```

- Once you run the above commands project the below service will be up and running in the respective
  ports
    - Frontend - http://localhost:9090/
    - Backend - http://localhost:8080/
    - Datastore - http://localhost:8080/_ah/admin


- To Use the Search functionalities in local
  Refer [ElasticSearch configuration](https://docs.google.com/document/d/1cxWbSYnrV3cZXm4-CSztNcp1EllQHr52RBpnpzCjhCo/edit)

## Testing

### Backend unit tests

- To run all the java unit tests navigate to the root directory of the project.

    ```
    cd adaptiveU
    ```

- Run the following command

    ```
    gradle clean build
    ```

  `Note` - the above command will generate the project build as well.

- To check the overall reports of the test locally visit the below file in any of the browser after
  running above command

  ```
  http://localhost:63342/AdaptiveU/AdaptiveU.API/build/reports/jacoco/test/test/html/
  ```

- Check out the below articles to understand more about writing tests.

    - [Test creation](https://www.jetbrains.com/help/idea/create-tests.html)
    - [Running Tests](https://www.jetbrains.com/help/idea/performing-tests.html)
    - [Exploring Test Results](https://www.jetbrains.com/help/idea/viewing-and-exploring-test-results.html)

### Frontend unit tests ( React )

- To run all the react unit tests navigate to the root directory of the project.

    ```
    cd adaptiveU
    ```

    ```
    cd frontend
    ```

- Run the following command

    ```
    npm run test
    ```

- To check the overall reports of the react test locally visit the below file in any of the browser
  after running above command

    ```
    file://<Path to adaptive repository>/adaptiveu/front-end/coverage/lcov-report/src/layouts/index.html
    ```

## Deployment

### Manual Deployment

- Navigate to the webApp folder and generate a build using the following commands
  ```
    cd webApp
    npm run build
  ```
- Run the following command to deploy
  ```
    gradle appengineDeploy -Pmode={mode} -Pservice={service} -Pversion={feature-something}
  ```
    - Mode - staging or live
    - service - Any of the available services Eg. `development`
    - version - version named based on the task

- Check
  out [here](https://docs.google.com/document/d/13o0qUnj8XlKqWR0cRAuu8pslzydRN4XlBjRErCV6tk4/edit#)
  for more information on manual deployment.

`Note` - Manual deployments are used for testing purpose only, live deployments are made using
automation



