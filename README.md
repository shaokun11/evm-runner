# Front-end

This is the front-end repository for the Cedro Finance project.

## Installation

1. Clone the repository: `git clone https://github.com/Cedro-Finance/front-end`
2. Make the necessary modifications to the code.
3. Run `npm install` to install the dependencies.
4. Run `npm run build` to build the project. This will create a `dist` folder in the root directory.
5. Deploy the application to your server.

## Deployment To Local
 ```
 npm run serve
```

## Deployment To Server

1. Log in to your server *3.87.73.47*.
2. Copy all the contents of the `dist` folder (generated in the previous step) to the `/home/ubuntu/web/landpage` directory on your server.
3. Execute the command `nginx -s reload` to reload Nginx and update the content for the `cedro.finance` domain.
