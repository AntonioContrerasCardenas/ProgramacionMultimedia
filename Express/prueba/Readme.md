Instalaciones:

npm init
npm install express
npm install --save-dev @types/express
npm install --save-dev typescript ts-node-dev @types/node
npx tsc --init

Preparacion:

Modificar el archivo tsconfig.json para que se genere el codigo en la carpeta dist y que su entrada sea la carpeta src.
Modificar el apartado de scripts de package.json para que se ejecute el comando ts-node-dev en la carpeta src.

Ejecucion:

npm run dev
