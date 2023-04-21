# Pasarela de pagos con Stripe y NextJs

En este [video](https://www.youtube.com/watch?v=fNb7tk2ZIpk&t=14s&ab_channel=Mauro) les voy a mostrar como implementar Stripe como pasarela de pago en NextJs para procesar pagos de manera segura y eficiente.
Vamos a ver todo el proceso paso a paso, desde la configuración del entorno de desarrollo hasta el manejo de errores y casos especiales.

## Cuales son los beneficios de usar Stripe?

Algunos de los beneficios mas importantes que nos ofrece Stripe son:
- **1)** Su facilidad de uso
- **2)** Tiene una amplia variedad de metodos de pago
- **3)** Su seguridad porque tiene medidas avanzadas para proteger la informacion de los usuarios
- **4)** Es facil de integrar con plataformas de comercio electronico y herramientas de software

## Preparación del entorno de desarrollo
Antes de comenzar con el codigo vamos a crear una cuenta de Stripe y vamos crear unos productos para poder poder probar la pasarela de pago.

- **1)** Creamos cuenta de stripe
- **2)** Creamos 4 productos con las imagenes

Ahora si, vamos a empezar con el codigo.

- **1)** Creamos el proyecto de nextJs con ``npx create-next-app@latest``
- **2)** Creamos archivo ``.env.local`` y creamos estas variables: ``STRIPE_SECRET_KEY`` y  ``NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY``
- **3)** Obtenemos la secret key
- **4)** Instalamos lo siguiente ``npm i sass axios stripe``
- **5)** Levantamos la web con el siguiente comando ``npm run dev``

## Imagenes de la web
![image](https://user-images.githubusercontent.com/81174890/233722703-fe3c9fcc-552b-4f45-96b4-8aa24b0b5f85.png)
![image](https://user-images.githubusercontent.com/81174890/233722751-dc5cdabd-d183-41b3-98b9-313b45b42c96.png)
![image](https://user-images.githubusercontent.com/81174890/233722797-d1370c9f-0f76-41b6-a5ea-9911bf9d1b0d.png)
![image](https://user-images.githubusercontent.com/81174890/233722855-9334c2a9-6544-47db-a00b-8e592c6245d7.png)
![image](https://user-images.githubusercontent.com/81174890/233722890-8cbcd20c-ab51-45e9-a198-f9c7d67485ad.png)



