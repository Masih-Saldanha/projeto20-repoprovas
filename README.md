<p align="center">
  <a href="https://github.com/Masih-Saldanha//projeto20-repoprovas">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5c3-fe0f.svg" alt="readme-logo" width="80" height="80"> <!-- src="image-link" -->
  </a>

  <h3 align="center">
    Back-end Template
  </h3>
</p>

## Description

This is the back-end of tests database repository.

## Database deploy link

https://projeto20-repoprovas.herokuapp.com/

## Usage

```bash
$ git clone https://github.com/Masih-Saldanha/projeto20-repoprovas

$ cd projeto20-repoprovas

$ npm install

$ npm run dev
```

## API:

### Route - Auth:

```
- POST /sign-up
    - Route to register an user
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "somepassword"
    }
```
```
- POST /sign-in
    - Route to sign-in with a created user and to get an token in the body of the requisition
    - headers: {}
    - body: {
        "email": "email@email.com",
        "password": "somepassword"
    }
```
    
### Route - Categories:

```
- GET /categories
    - Route to get all registered categories in the database
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```
    
### Route - Tests:

```
- POST /tests/add
    - Route to add an test to the database
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "name": "Some Name",
        "pdfUrl": "http://pdf-url.com",
        "category": "Valid Category Name",
        "discipline": "Valid Discipline Name",
        "teacher": "Valid Teacher Name"
    }
```
```
- GET /tests?groupBy=disciplines
    - Route to get all tests grouped by disciplines
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```
```
- GET /tests?groupBy=teachers
    - Route to get all tests grouped by teachers
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```
