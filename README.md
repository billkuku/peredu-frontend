# peredu
frontend-deployment: https://peredu.herokuapp.com 
backend-deployment: https://peredu-backend.herokuapp.com 
(full stack project, backend developed with java-spring)
If want to login into the system, you can either sign up your own account, or with my test account: {email: beierhao@hotmail.com, password: password}
For testing, login first, then click Username-Button top-right, choose program and create a program.

if report "Cannot GET xxx" error, pls enter original URL above.

Some feature could not be used after deployment (i.g. Search), i'm trying to find the reason.

## CI/CD with heroku.
front-end deloyed direct with heroku deployment services
back-end deployment use github actions to heroku.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
