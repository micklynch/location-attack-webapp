# Preventing a location attack

Check if user has signed in from that location in the past. If not, then the server will send an email to the person to with a link for them to log in.

## Steps involved

### Firebase

[x] Create project on Firebase
[x] Set authenication to email/password
[ ] Create firebase collection for known locations

### Front-end

[x] Create login page
[ ] Try logging in from the front-end
[ ] Create router with restricted access to user details page

### Server

Get Fastify and set up routes for
Login
VerifiedLocation

## Configuration

Test user:
username: mick@email.com
password: test123

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
