# ghub profile api

---

<a href="https://github.com/venkatr21/ghub-profile-api">Project Repository</a>

---

### Table of Contents

- [ Introduction ](#Introduction)
- [ Installation](#Installation)
- [ Documentation](#Documentation)
- [ Contributors](#Contributors)

---

<a name="Introduction" />

## Introduction

Github profile api is and express powered API backend service, which maintains track of user profile view count and responds a JSON object which can be rendered to their profile. Provides a seamless workflow, to maintain user records. Created by <a href="https://github.com/venkatr21/">Me</a> as a part of learning Express.js

**Features**

<pre>
✅  Restful API based 
✅  Faster Response time
✅  Lightweight and easily deployable
✅  Uses MongoDB for the database service
✅  Seamless workflow
</pre>

---

<a name="Installation" />

## Installation

**Cloning repository and installing packages**

```bash
git clone https://github.com/venkatr21/ghub-profile-api
npm install
```

**Running the service(locally)**

```bash
touch .env // store your database credentials here
nodemon index.js
```

**Deploying the service**

```bash
create docker environment or deploy as a web app
```

---

<a name="Documentation" />

## Documentation

- Provides RESTful routes to check the user profile in database and render the profile views.
- adding or updating profile in the database follows the route

```bash
host/user/add/<username>
```

- rendering the json object with profile count follows the route

```bash
host/user/fetch/<username>
```

---

<a name="Contributors" />

## Contributors

<a href="https://github.com/venkatr21">Venkat Ragavan S</a><br>

---
