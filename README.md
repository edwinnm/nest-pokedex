<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositoprio

2. Ejecutar

```
yarn install
```

3. Asegurarse de tener el nest-cli

```
nest i -g nest/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**.

6. Llenar las variables de entonor definidas en el **.env**.

7. Ejecutar la aplicacion en dev:

```
yarn start:dev
```

6. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

# Stack

- Nest
- Docker
- MongoDB

# Build de producción

1. Crear el archivo `.env.prod`
2. Llenar las variables de entorno para producción.
3. Contruir la nueva imagen

```
  docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
