<p align="center" >
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a></br>
    <a href="https://necord.org/" target="blank"><img src="https://necord.org/img/logo.png" width="200" alt="Nest Logo" /></a>
    <a href="https://necord.org/" target="blank"><img src="https://camo.githubusercontent.com/94402c561f7851d7d3c899ea70b282bd177f344319f08cb1d743de36f00cf020/68747470733a2f2f646973636f72642e6a732e6f72672f7374617469632f6c6f676f2e737667" width="200" alt="Nest Logo" /></a>
</p>


---
Haz click para ver.

<details>
<summary id="descargo-de-responsabilidad">Descargo de Responsabilidad:</summary>

<p>Este bot de Discord, utilizando la biblioteca Necord, tiene fines recreativos y de entretenimiento. 
La información proporcionada por el bot puede no ser completamente precisa o actualizada. No me hago responsable de las decisiones tomadas basándose en la información proporcionada por el bot.

El uso del bot está sujeto a cambios sin previo aviso. No garantizamos la disponibilidad continua, la funcionalidad o la precisión de los comandos proporcionados.

Este bot puede contener enlaces a sitios web de terceros. No respaldamos ni asumimos responsabilidad por el contenido de esos sitios.

Los usuarios son responsables de cumplir con los términos de servicio de Discord y cualquier otra regulación aplicable al utilizar este bot.

Al utilizar este bot, aceptas este descargo de responsabilidad y los términos de uso asociados.</p>
</details>

---

## Descripción

###### Este es un proyecto basado en Necord realizado sobre Nest a modo de prueba y tutorial (pero en español).

_________________________

## Antes de empezar, necesitamos intalar algunas cositas:

### Instalar [Necord](https://necord.org/), y su dependencia [Discord.js](https://discord.js.org/)
```bash
$ yarn add necord discord.js
```

### CLI: Interfaz de Línea de Comandos

```bash
$ yarn global add @nestjs/cli
#Comandos propios de Necord
$ yarn add --dev @necord/schematics
```

# Configuración inicial del bot
Primero y principal necesitamos configurar nuestro bot con el token que nos provee Discord.

[Discord Developer Portal](https://discord.com/developers/applications)
> 1. New Aplication.
> 2. Ingresamos el nombre de como lo llamaremos al bot y aceptamos términos.
> 3. Nos vamos a la pestaña **Bot** y presionamos en **Reset token** para obtener nuestro token.
> 4. Lo copiamos y anotamos para el siguiente paso.
> 5. Vamos a la pestaña **OAuth**.
> 6. En 'Default Authorization Link' elegimos **In-app Authorization**.
> 7. Nos aparecen los **SCOPES**, seleccionamos **bot** y **applications.conmmands**.
> 8. Luego en **BOT PERMISSIONS** elegimos los permisos que veas adecuados al desarrollo.
> 9. Una ves seleccionados, en la parte inferior de la página se generará un link, el cual es al que debes ir para agregar el bot a tu servidor.

## Variables de entorno

Construyo las variables de entorno en el archivo ```.env``` para la configuraciones de token y otras futuras propiedades:

> Renombrar ```.env-template``` a ```.env```

### Instalamos dependencias:
Éstas dependencias nos permitirán hacer uso de las variables de entorno:
```bash
$ yarn add @nestjs/config dotenv
```
e importamos `ConfigModule.forRoot()` en el modulo `app.module.ts`.

<details>
  <summary><code aria-atomic="true">Codigo: app.module.ts</code></summary>

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";

@Module({ 
  imports: [
    ConfigModule.forRoot(),
  ],
  controllers: [], 
  providers: [],
})
export class AppModule {}
```
</details>

Luego, importamos `NecordModule.forRoot()` y configuramos nuestra variable de entorno con el mismo nombre que se encontraba en `.env` de la siguiente manera:
````typescript
NecordModule.forRoot({
  token: process.env.ENV_TOKEN_NAME,
})
````
<details>
  <summary><code aria-atomic="true">Codigo: app.module.ts</code></summary>

```typescript
import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { NecordModule } from "necord";

@Module({ 
  imports: [
    ConfigModule.forRoot(),
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN,
      //y agregamos y guild para empezar a detectar el token y levantar bot
      intents: [IntentsBitField.Flags.Guilds],
    }),
  ],
  controllers: [], 
  providers: [],
})
export class AppModule {}
```
</details>

Una vez realizado todo lo anterior, ya podemos poner en marcha para probar por primera vez nuestro bot funcionando:
```bash
$ yarn start:dev
```
___

