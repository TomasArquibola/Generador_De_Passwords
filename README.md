# Generador de Contraseñas

Este es un sencillo generador de contraseñas web con una interfaz intuitiva y minimalista. Permite a los usuarios generar contraseñas seguras personalizando la longitud y los tipos de caracteres a incluir.

## Características Principales

* **Interfaz Minimalista y Fácil de Usar:** Diseño limpio y enfocado en la funcionalidad principal.
* **Personalización de la Contraseña:**
    * Selección para incluir mayúsculas, minúsculas, números y símbolos.
    * Ajuste de la longitud de la contraseña mediante un campo numérico.
* **Visualización de la Contraseña Generada:** Muestra la contraseña generada en un campo de texto claro.
* **Función de Copiar al Portapapeles:** Permite copiar la contraseña generada con un solo clic.
* **Indicador de Seguridad:** Proporciona una estimación visual de la fortaleza de la contraseña generada.

## Cómo Utilizar

1.  Abre el archivo `index.html` en tu navegador web.
2.  Selecciona los tipos de caracteres que deseas incluir en tu contraseña marcando las casillas correspondientes (Mayúsculas, Minúsculas, Números, Símbolos).
3.  Ajusta la longitud de la contraseña utilizando el campo numérico.
4.  Haz clic en el botón **"Generar"** para crear una nueva contraseña.
5.  La contraseña generada aparecerá en el campo de texto.
6.  Haz clic en el botón **"Copiar"** para copiar la contraseña al portapapeles.
7.  El indicador de seguridad te dará una idea de la fortaleza de la contraseña generada.

## Estructura del Proyecto

El proyecto se compone de los siguientes archivos:

* `index.html`: La estructura HTML de la página web.
* `style.css`: Los estilos CSS para la presentación visual y el diseño minimalista.
* `script.js`: La lógica JavaScript para la generación de contraseñas, la funcionalidad de copiar y el indicador de seguridad.
* `README.md`: Este archivo, que proporciona información general sobre el proyecto.

## Tecnologías Utilizadas

* HTML
* CSS
* JavaScript

## Mejoras del Generador

* **Exclusión de Caracteres Similares:** Implementar una opción para evitar la inclusión de caracteres que puedan confundirse fácilmente (por ejemplo, 'i' y 'l', '0' y 'O').
* **Generación con Patrones Específicos:** Añadir la posibilidad de generar contraseñas basadas en patrones definidos por el usuario (por ejemplo, "palabra-número-símbolo").
* **Historial de Contraseñas (Opcional):** Incorporar una función para guardar un historial de las contraseñas generadas, con advertencias claras sobre la seguridad de almacenar esta información.
* **Temas de Diseño:** Permitir a los usuarios cambiar la apariencia visual del generador con diferentes temas (por ejemplo, claro y oscuro).
* **Persistencia de Preferencias (Opcional):** Integrar un backend (o almacenamiento local del navegador) para recordar las preferencias del usuario (tipos de caracteres seleccionados, longitud) entre sesiones.

## Créditos

Este proyecto fue desarrollado por Tomás Arquíbola Rivarola como un generador de contraseñas simple y fácil de usar.
