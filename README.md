![Logo](https://thumbs.dreamstime.com/b/cabecera-de-banner-concepto-arquitectura-empresarial-planificaci%C3%B3n-operaciones-empresariales-integraci%C3%B3n-la-tecnolog%C3%ADa-software-162417753.jpg)

# Aplicación web de eventos(WIP)

-   Aplicativo web con funcionalidad de registro y encuesta de preferencias para notificar eventos que podrían interesar a usuario.
-   Dependencias administradas con lerna.

## Tech Stack

**Server:** Node, Express, Redis, Mysql

-   Despliegue backend usuario: [Usuario](https://demo-2-arquitectura-client.herokuapp.com)

-   Despliegue backend admin: [Administrador](https://demo-2-arquitectura-admin.herokuapp.com)

**Client:** Reactjs

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Ejecutar localmente

Clonar proyecto

```bash
  git clone https://github.com/kioshiokamoto/redis-message-broker-microservices
```

Ir a ruta de proyecto

```bash
  cd redis-message-broker-microservices
```

Instalar dependencias

```bash
  npx lerna bootstrap --hoist
```

Agregar variables de entorno segun .env.example

Iniciar servidor

```bash
  npm run start
```
