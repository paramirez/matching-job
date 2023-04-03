# Nest JS Rest API for matching job applicants with job vacancies

This project is a Nest JS Rest API that allows to match job applicants with available job vacancies by comparing their skills with the required skills for the vacancies.

## Features

- Job applicants can register on the platform and add their skills.
- Employers can register new job vacancies and specify the required skills for each of them.
- The API automatically matches job applicants with available job vacancies, comparing their skills with the required skills for each vacancy.
- Job applicants and employers can access a dashboard to view job vacancies and candidates suggested by the API.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nestjs-job-matching.git
```

2. Install dependencies:

``` bash
cd nestjs-job-matching
npm install
```

3. Running the app:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


The API will be available at `http://localhost:3000`.

## Technologies used

- Nest JS
- TypeScript
- MongoDB
- TODO: Jest (for testing) 

## Contributions

If you wish to contribute to this project, you are welcome to do so! Simply fork the repository, make your changes, and send a pull request. You can also open issues to report bugs or propose new features.

## License

This project is licensed under the MIT license. You may use it for commercial and non-commercial purposes, modify it, and distribute it freely as long as you maintain the original license.
