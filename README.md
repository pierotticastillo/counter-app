# Counter App

![Expo Logo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

Esta es una aplicación simple de contador creada con **React Native** y **Expo**.

## Características

- Muestra un número en pantalla que puedes incrementar.
- Botón para incrementar el contador.
- Botón para resetear el contador a cero.
- Interfaz moderna con fondo degradado.
- Botones posicionados en las esquinas inferiores para fácil acceso.
- Botón reutilizable (`CustomButton`) para mantener el código limpio y escalable.
- Iconos personalizados en la carpeta `assets`.


## Captura de pantalla

![Counter App Screenshot](assets/screenshots/screenshot.png) -->

## Instalación y ejecución

1. Clona el repositorio:
   ```sh
   git clone https://github.com/pierotticastillo/counter-app.git
   cd counter-app
   ```

2. Instala las dependencias usando **pnpm**:
   ```sh
   pnpm install
   ```

3. Instala las dependencias de Expo (si es necesario):
   ```sh
   npx expo install expo-linear-gradient
   ```

4. Inicia la app:
   ```sh
   npx expo start
   ```

5. Escanea el código QR con la app **Expo Go** en tu dispositivo móvil o ejecuta en un emulador.

## Estructura del proyecto

```
counter-app/
├── App.tsx
├── components/
│   └── CustomButton.tsx
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── package.json
└── ...
```

## Personalización

Puedes modificar los colores, el diseño o agregar nuevas funcionalidades fácilmente gracias a la estructura modular del código.

---

¡Disfruta programando y personalizando!