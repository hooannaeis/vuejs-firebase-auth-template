# frontend
This is a template project providing minimal components for a web-app with authentication. It relies heavliy on https://blog.logrocket.com/vue-firebase-authentication/ and https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex 


## previous bureaucracy
The authentication backend is Firebase. For this project to work, you will need to set up a Firebase Autentication and paste your config credentials into the src/main.js file. In order to get your credentials, you need to go to settings --> general. There, you need to add a web-app. After you've added your app, under config, you will find the credentials.

After you've added the credentials to this project, you will need to activate Authentication in your firebase console. This project only requires you to have email/password-based authentication activated, but I won't stop you from adding other methods as well.

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
