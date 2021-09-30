# peredu
- frontend-deployment: https://peredu.herokuapp.com (use this for test)
- backend-deployment: https://peredu-backend.herokuapp.com 
(full stack project, backend developed with java-spring)
If you want to login into the system, you can either sign up your own account, or with my test account: {email: beierhao@hotmail.com, password: password}

For testing, 
1. login first, then click Username-Button top-right, choose program and create a program. 
2. Search your program, projectName, providerName, keywords and discription are indexed, that means you can search with one or some words included in the indexed field.
3. Leave a program review with star-icon, you will see it after you get the search result.
4. Check your program rewiew at: Username-Button->experiences, you can modify it as you like.
5. change your password at: Username-Button->setting

More feature are in developing.......


Ps:
- First time browsing and login takes much more time than you expected, because you need awake the test-server (awake automatic, you don't need to do anything), cause i did't pay for a standard-server.

- if report "Cannot GET xxx" error, pls enter original Frontend-URL above.


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
