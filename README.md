# peredu, Inject vitality into education
- frontend-deployment: https://peredu.herokuapp.com (use this for test)
- backend-deployment: https://peredu-backend.herokuapp.com
<br />
(full stack web-app project, frontend with Vue, backend with Spring)
<br />
If you want to log into the web-app, you can either sign up your own account, or with my test account: {email: beierhao@hotmail.com, password: password}, password is encoded saved in mongodb means no one can see your password.

To try the web app, you can test either according to the following steps, or try it yourself.
first copy the frontend-link above to your browser address, then
1. login, click Username-Button top-right, choose program and create a program. 
2. When searching your program, projectName, providerName, keywords and discription are indexed, that means you can search with one or some words included in the indexed fields.
3. Leave a program review with single-star-icon, icon will be found at search result page.
4. Check program rewiew at: Username-Button->experiences, you can modify it as you like.
5. change your password at: Username-Button->setting

More feature in developing.......
now in developing rating page, using mongodb-aggregation to count average rate.

Ps:
- First time browsing and login may take little bit more time, because test-server need to be awaked (awake automatic, don't need to do anything).
- if report "Cannot GET xxx" error, pls enter original Frontend-URL above, i didn't configure the route for heroku is the reason error accoured.


## CI/CD with heroku.
front-end deloyed direct with heroku deployment services
<br />
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
