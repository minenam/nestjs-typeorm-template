# [프로젝트명] 예. NestJS & TypeORM & MySQL Template

<div>
  <img src="https://img.shields.io/badge/node-16.17.0-339933?logo=node.js"> 
  <img src="https://img.shields.io/badge/NestJS-9.0.0-E0234E?logo=NestJS"> 
  <img src="https://img.shields.io/badge/TypeScript-4.3.5-3178C6?logo=typescript"> 
  <img src="https://img.shields.io/badge/mysql2-2.3.3-4479A1?logo=MySQL"> 
  <img src="https://img.shields.io/badge/Swagger-6.1.1-DC382D?logo=swagger"> 
  <img src="https://img.shields.io/badge/TypeORM-0.3.9-010101"> 
</div>

## 1. Summary

- 본 서비스는 OOO한 서비스입니다.

## 2. Feature Description
### Domain
- 설명


## 3. Documents

### [Swagger API Document]()

## 4. Usage
### Create .env file
```
MODE=dev # dev, prod
PORT=

DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=
```

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Docker

```bash
# Build
docker build -t <이미지이름> .

# RUN
docker run -d -p 3000:3000 <이미지이름>
```

### License
[MIT licensed](LICENSE).