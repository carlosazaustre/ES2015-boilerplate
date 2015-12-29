# ES2015-boilerplate

Plantilla para iniciar desarrollos web con ECMAScript 6 (ES2015) con Babel, Browserify
y tareas de gulp

## Estructura
```
├── build           // Directorio con los archivos finales
│   ├── app.js      // app.js es el fichero JS transpilado a ES5
│   └── index.html
├── gulpfile.js     // Tareas de Gulp
├── package.json
└── src             // Directorio con los archivos fuente
    ├── index.html
    └── scripts     // Directorio con los arhivos JS en ES6 o ES2015
        ├── app.js  // Ficheros de ejemplo
        └── persona.js
```

## Uso

```
# Instalar dependencias
npm install

# Correr linter, builder y servidor web de desarrollos
npm start
```

Abrir el navegador en `http://0.0.0.0:8080` para ver la versión transpilada a ES5

## Licencia

The MIT License (MIT)

Copyright (c) 2015 Carlos Azaustre

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
