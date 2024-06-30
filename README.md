[![Made with Prisma](http://made-with.prisma.io/indigo.svg)](https://prisma.io)

# [hello-prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)

## Configuración del Proyecto

Inicializar un proyecto con soporte TypeScript y agregamos en CLI de Prisma
```
$ npm init -y
$ npm install prisma typescript ts-node @types/node --save-dev
```

Inicializacmos TypeScript
```
$ npx tsc --init
```
Configuramos el ORM de Prisma. se creará una directorio lladamo 'prisma' y el archivo llamado schema.prisma. En el declaramos el esquema para la base de datos. También, se creará un archivo .env en la raíz del proyecto. Lo usaremos para definir las variables de entorno
```
$ npx prisma init
```

## Configuración de Base de Datos

* Configuramos string de conexión en archivo .env
* Configuramos esquema de base de datos
* ejecutamos la migración para mapear el esquema en la base de datos
```
$ npx prisma migrate dev --name init
```

Cada vez que actualicemos el esquema de la base de datos. Tenemos que usar el comando 
```
$ prisma migrate dev 
```
o
```
$ prisma db push
```
Esto nos ayudará a mantener la sincronización

## Prisma Client

```
$ npm install @prisma/client
```

![image](https://www.prisma.io/docs/assets/images/prisma-client-install-and-generate-ece3e0733edc615e416d6d654c05e980.png)


## Consultas a la base de datos

* Creamos en archivo index.ts e incorporamos código registrar y visualizar usuarios
* Ejecutamos el comando
```
$ npx ts-node index.ts
```

