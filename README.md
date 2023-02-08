
## Pawster Portfolio Project Readme
Welcome to my portfolio project! This project showcases my skills, abilities, and achievements as a developer. It aims to give an overview of my experience and background, along with a selection of projects I have worked on.

## Technologies Used

The project is built using HTML, CSS, tailwind CSS , React-bootstrap , express Js , SQL and JavaScript and hosted on GitHub Pages. I have used modern web technologies and design principles to create a responsive and user-friendly portfolio.

## Features

* Homepage: Introduces me and provides a brief overview of my background and experience.
* About: Gives more in-depth information about my education, skills, and professional experience.
* Projects: Displays a selection of projects I have worked on, including a brief description, screenshots, and links to the source code.
* Explore: 
* Contact: Provides my contact information and a form for visitors to get in touch with me.

The portfolio can be accessed by visiting the following link: [Insert Link]. Feel free to explore the different sections and learn more about me and my work.

If you have any questions, comments, or suggestions, please don't hesitate to reach out through the Contact form or email me at Olayinkafakanbi@pursuit.org.

Thank you for visiting my portfolio!

- select `use this template`
- clone this repo

## Getting Started

### Project Structure

```
├── README.md (what you are currently reading)
├── back-end (a basic express app)
├── front-end (a basic create-react-app)
└── package.json (necessary boilerplate for heroku deployment )
```

**NOTE:** - You will have 3 `package.json` files in this project

- **Top level** - necessary for heroku deployment: you don't need to do anything with this file, it is set up for you
- **back-end** - everything to do with the express/postgres backend
- **front-end** - everything to do with the create-react-app front-end

### `back-end` Set Up and Deployment to Heroku

#### Basic App

**/back-end**

- `cd back-end`
- `npm install`
- `touch .env`

make sure you are on the same level as the `package.json` of the `back-end` directory

- `touch .env`

```
PORT=3333
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=postgres
PG_USER=postgres
PG_PASSWORD=""
```

- `npm run db:init`
- `npm run db:seed`

Test app locally. If it does not work locally, it will not work on Heroku.

Fix bugs.

When you are ready, deploy this app. 
