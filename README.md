# Portfolio Profesional - Especialista en Ciberseguridad & Full Stack 🛡️ Secure by Design

Bienvenido a mi portfolio profesional. Este proyecto refleja mi doble perfil combinando una arquitectura de software robusta con principios de seguridad ofensiva y defensiva.

## 🚀 Stack Tecnológico

Desarrollado con tecnologías de vanguardia enfocadas en el rendimiento absoluto:

- **Angular 20**: Uso de las últimas características del framework.
- **Signals**: Reactividad moderna sin dependencias externas.
- **Arquitectura Zoneless**: Ejecución sin `zone.js` para un rendimiento extremo.
- **Tailwind CSS**: Diseño minimalista, oscuro (Dark Mode), con un toque estético de terminal hacker.
- **TypeScript**: Tipado estricto para garantizar la máxima fiabilidad en la fase de desarrollo.

## 💾 Arquitectura de Datos

Este proyecto es una **Single Page Application (SPA) 100% estática**. 
No existe un backend tradicional que pueda ser comprometido. Toda la capa de datos (perfil, experiencia, certificaciones) se simula de forma profesional consumiendo archivos estáticos `.json` desde la carpeta `/public` utilizando los servicios HttpClient reactivos de Angular. Esto lo hace ideal para despliegues ultrarrápidos en entornos endurecidos como GitHub Pages.

## 🛡️ Seguridad

Fiel a mi perfil, el código frontend se concibe bajo el principio *Secure by Design*:
- **Sanitización estricta**: Uso de los mecanismos internos de Angular (`DomSanitizer`) y renderizado seguro mediante Control Flow (`@if`, `@for`) para mitigar activamente riesgos de Cross-Site Scripting (XSS).
- **Listo para CSP**: La naturaleza estática del proyecto y la eliminación del código inline prepara el terreno para la implementación de políticas de Content Security Policy (CSP) muy restrictivas.

## 📜 Certificaciones

Este portfolio documenta mis logros y acreditaciones en Ciberseguridad y Hacking Ético, entre las que destacan:
- **OSWE** (Offensive Security Web Expert)
- **OSWP** (Offensive Security Wireless Professional)
- **eCCPT** (Certified Professional Pentester)
- **eWPT** (Web App Penetration Tester)
- **eJPT** (Junior Penetration Tester)

---
*Diseñado y codificado con pasión por la ciberseguridad y el desarrollo eficiente.*
