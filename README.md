# Javascript-lab16

## Módulo 6: Herramientas del ecosistema Javascript
Conocer y manejar a nivel usuario las herramientas complementarias de Javascript.

### Unidad 1: NPM y Yarn
Entender la importancia del manejador de dependencias

NPM nos permite compartir y reutilizar códigos escritos por nosotros o por otros desarrolladores. 

Trabajo en equipo
Compartir códigos
Modularidad
Manejo de versiones

[www.npmjs.com](www.npmjs.com) es el sitio de este proyecto y cualquier persona puede publicar módulos. Hay algunos muy valiosos, pero como cualquiera pude publicar, hay algunos no muy útiles y debemos ser cuidadosos al momento de seleccionar las dependencias de nuestros proyectos.

Podemos encontrar dependencias para Node y también para el Navegador, IoT y cualquier entorno donde Javascript puede ser ejecutado. 

Un proyecto fácilmente puede tener cientos de dependencias y algunas de ellas pueden ser frameworks completos y otros librerías pequeñas.

NPM es ahora una de las herramientas fundamentales en el desarrollo Javascript. 

Un NPM package o paquete (módulo) es una carpeta con archivos Javascript que Node puede ejecutar. Cuando tenemos muchas carpetas necesitamos gestionarlas de alguna forma ya que cada una de estas carpetas puede tener sus propias dependencias.

NPM puede se puede referir al Sito [www.npmjs.com](www.npmjs.com) o a la herramienta de línea de comandos NPM que nos permite trabajar con las dependencias.

La herramienta de línea de comandos NPM viene con Node, por lo que no es necesario instalar nada adicional para usar este gestor de módulos o paquetes.

NPM se actualiza más frecuentemente que Node, por lo que es posible que tengamos que actualizar NPM manualmente para obtener las últimas actualizaciones. Podemos revisar la versión instalada con el comando `npm -v`

Para actualizar NPM usamos el comando `npm install -g npm`. Es decir, usamos NPM para actualizar NPM.

Para instalar dependencias usamos el comando `npm install` o su atajo (*shortcut*) `npm i`. Por defecto bajará la dependencia solicitada el sitio principal NPM Registry (aunque podríamos configurarlo para que lo haga desde otro lugar).

NPM instala directamente la dependencia bajo la carpeta `node_modules`. Esta carpeta es el lugar por defecto dónde Node buscará los módulos incorporados en nuestros scripts con la función **require**.

Cuando se instala un dependencia en un proyecto que tiene un archivo `package.json`, NPM documenta esta dependencia en este archivo y además instala todas las subdependencias que se requieran. Es decir, se puede instalar paquetes sin tener un archivo package.json, pero NPM nos dará un warning ya que no quedará documentada. 

#### package.json & package-lock.json

En el desarrollo con Node el archivo `package.json` cumple varias funciones. En primer lugar tiene información básica del proyecto, como su nombre y versión. También lista las dependencias en dos secciones principales. Las dependencias necesarias en el entorno de desarrollo (*devdependencies*) y en el entorno productivo (*dependencies*). Además tiene los comandos que podemos ejecutar con NPM en la sección scripts (más de esto pronto) y con ayuda de otros paquetes como `cosmiconfig` también podemos entregar configuración adicional para algunas dependencias del mismo proyecto como en el caso del framework de pruebas **Jest** (Ej: En el módulo 4 configuramos el entorno jsdom para jest en el archivo package.json).

NPM logra que instalar las dependencias de un proyecto sea un procesos repetible, por lo que no es necesario compartir la carpeta `node_modules` con nuestro equipo ya que con el el archivo `package.json` se puede regenerar la carpeta `node_modules` con todas las dependencias y subdependencias requeridas por el proyecto. 

Por otro lado, el archivo `package-lock.json` representa el árbol (nuevamente esta estructura) de dependencias con las versiones exactas para que reconstruir las dependencias con las mismas versiones sea un proceso repetible. 

También resuelve el árbol y lo deja en un solo nivel calculando las dependencias comunes entre diferentes paquetes.

#### Dependencias de desarrollo

Para instalar dependencias solo en el entorno de desarrollo podemos lograrlo con la opción `--save-dev` o su atajo (shortcut) `-D`. Por ejemplo: `npm install -D nodemon`.  En entornos de integración contínua o en entornos productivos donde no se requiere instalar dependencias de desarrollo, podemos utilizar la opción `--production` para solo instalar esas dependencias. 

#### Iniciar NPM en un proyecto Javascript

Podemos utilizar el comando `npm init` que nos llevará por un procesos de generación de un archivo `package.json`. Es común utilizar la opción `--force` o su shortcut `-f` para forzar las opciones por defecto.

#### Semantic versioning

Es un distintivo basado en números para indicar un acuerdo entre el desarrollador de la dependencia y sus usuarios. El primer nro es el **Major** que indica que la apí de la dependencia ha cambiado. El segundo dígito indica que una nueva funcionalidad se a agregado, mientras que el tercer número representa que se ha implementado una mejora un **Bug** que no cambia la API del módulo (Ej: 4.2.0).

Algunos caracteres especiales como la virgulilla `~` representan un rango de versiones posibles como `~ X.Y.Z`. Esto indica a NPM que solicite y genere el árbol de dependencias con el módulos  en su versión **patch** más reciente. Es decir, que instale la versión que tiene mayor cantidad de **Bug fixes** dentro del **Minor**. EL símbolo `^` indica la última versión **Minor**. 

La herramienta [Semver](semver.npmjs.com) puede ayudarnos visualizar las versiones candidatas según el rango especificado.

https://docs.npmjs.com/about-semantic-versioning

#### Dependencias globales

La mayoría de las veces instalaremos las dependencias de forma local, pero en ocasiones hay que instalar herramientas globales. Por ejemplo `vue-cli` o `create-react-app`. Estos se instalan con la opción `-g`. Con esto el comando quedará disponible desde cualquier carpeta de nuestro sistema. 

#### Creando y publicando un paquete NPM

Para crear paquetes se requiere una cuenta en npmjs.com y ejecutar `npm login`. Todos los paquetes deben tener un `package.json` con el nombre, dependencias, comandos para testear, etc. Luego con `npm publish` podemos subir el módulo en cualquier máquina con NPM.

Con esto podemos instalarlo con npm install. 

>**Mega reto**:
Hacer tu propio npm package para que las pruebas pasen usando un módulo instalado mediante el registry de npm

#### NPX y NPM Scripts

NPX es otro binario que viene con NPM y es muy útils para automatizar la forma en que los equipos utilizan paquetes y proyectos con NPM.

En nuestro caso, para no instalar globalmente eslint para ejecutar el comando --init podemos lograrlo usando npx con el siguiente comando: `npx eslint --init` 

#### Yarn (Yet another resource negotiator)

Yarn es otro gestor de dependencias generado por Facebook que originalmente buscaba mejorar algunas deficiencias de NPM en cuanto a seguridad y eficiencia. Hoy esas diferencias ya fueron mejoradas por NPM, pero igualmente Yarn existe como alternativa y hay algunos equipos y frameworks que lo adoptaron permanentemente.

A diferencia de NPM, Yarn debe ser instalado globalmente con el siguiente comando: `npm install yarn --global`

Otra diferencia es que Yarn calcula el árbol de dependencias en un archivo llamado yarn.lock e internamente tienen diferencias en sus algoritmos.

Finalmente, para instalar paquetes con Yarn usamos el comando `yarn add <package-name>`

De todas formas ambos usan el registro de paquetes de NPM

### Unidad 2: Webpack y Nodemon
Configurar un proyecto node con el gestor de módulos Webpack. Componentes de Webpack y buenas prácticas

👀 Instrucciones 👀 

 
¡ Éxito con la creación de tu primer proyecto con NODEJS! 🚀🚀



TODO: Agregar las referencias de los cursos de pluralsight y geeksforgeeks
https://www.geeksforgeeks.org/difference-between-npm-and-yarn/
