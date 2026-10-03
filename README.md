# 🏎️ RC HUB — El Ecosistema Digital para la Comunidad RC en Colombia

> **"El lugar donde la comunidad RC compra, vende y descubre."**

RC HUB es una plataforma web especializada y moderna concebida para la comunidad y el hobby de vehículos a radio control (RC) en Colombia (Bucaramanga, Bogotá, Medellín, Cali, Barranquilla y a nivel nacional).

Diseñada con estética deportiva, tecnológica y minimalista, evita el aspecto genérico de e-commerce o de redes sociales para ofrecer una experiencia especializada de alto impacto visual.

---

## ⚡ Características Principales

1. **Navbar Sticky & Navegación Fluida:**
   - Logotipo tipográfico y distintivo de alta tecnología.
   - Navegación a secciones clave: *Marketplace*, *Garage*, *Comunidad*.
   - Botón directo de **"Publicar"** con modal interactivo y botón de **"Ingresar"**.
   - Drawer responsive optimizado para dispositivos móviles.

2. **Hero de Alto Impacto:**
   - Fotografía de acción cinematográfica de vehículo RC en pista todoterreno.
   - Telemetría en vivo, etiquetas de escala (*1/8*, *1/10*), motorización (*Brushless*, *LiPo*) y estado de pistas.
   - Llamados a la acción directos: *"Explorar Marketplace"* y *"Quiero vender"*.

3. **Búsqueda Avanzada & Filtros por Categoría:**
   - Buscador rápido con autocompletado conceptual (*"Traxxas, Arrma, baterías, motores..."*).
   - Pills de acceso rápido: 🚗 Vehículos, 🔧 Repuestos, 🔋 Electrónica, 🛞 Llantas, ⚙️ Accesorios.

4. **Marketplace Destacado con Moneda Colombiana (COP):**
   - Publicaciones con especificaciones técnicas reales (Tracción 4WD, Escala, Chasis, Motor).
   - Filtros dinámicos por estado (*Nuevo* / *Usado*) y por ciudades colombianas.
   - Modal detallado de publicación (*"Ver publicación"*) con contacto directo al vendedor y validación comunitaria.

5. **Garage Digital ("Tu colección RC. Organizada."):**
   - Dashboard interactivo para registrar y gestionar modelos RC (*Traxxas Slash 4x4 VXL*, *Arrma Kraton 6S*, etc.).
   - Visualización de telemetría de baterías, motor, ESC, transmisión e historial de upgrades instalados.
   - Modal para agregar nuevos vehículos a la flota personal.

6. **Conexión Inteligente Garage ↔ Marketplace (Roadmap Visión):**
   - Flujo visual conceptual: `Mi vehículo` → `Modelo específico` → `Repuestos compatibles` → `Marketplace`.
   - Compatibilidad técnica asegurada para evitar comprar piezas incompatibles.

7. **Comunidad RC Nacional:**
   - 🏁 **Pistas:** Circuitos en Tocancipá, Medellín, Cali, etc.
   - 📅 **Eventos:** Calendario de carreras y encuentros.
   - 👥 **Clubes:** Redes de pilotos y grupos de entusiastas.

8. **¿Cómo funciona? & Final CTA:**
   - Guía en tres pasos: *01 Encuentra*, *02 Conecta*, *03 Disfruta*.
   - Sección de cierre para conversión de nuevos pilotos y vendedores.

9. **Footer Completo:**
   - Enlaces de navegación, legal (Términos y Privacidad), redes sociales y sello de la comunidad colombiana 🇨🇴.

---

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Estilos:** Tailwind CSS v4 con tipografía *Outfit*, *Plus Jakarta Sans* y *Space Grotesk*
- **Iconografía:** Lucide React
- **Arquitectura:** Componentes modulares reutilizables y tipados estrictos en `src/components/`, `src/types/` y `src/data/`

---

## 🚀 Despliegue en Netlify

El proyecto ya incluye la configuración lista para Netlify:

1. `netlify.toml` configurado en la raíz:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```
2. Archivo `public/_redirects` para soportar enrutamiento cliente SPA sin errores 404 al recargar.

### Pasos para desplegar en Netlify:
1. Conecta tu cuenta de Netlify con GitHub.
2. Selecciona el repositorio `camilo146/RC-HUB`.
3. Netlify detectará automáticamente:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Haz clic en **Deploy Site**. ¡Tu landing estará en vivo en segundos!

---

## 💻 Ejecución Local

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/camilo146/RC-HUB.git
cd RC-HUB
npm install
npm run dev
```

Abre en tu navegador `http://localhost:5173/`.

Para generar la compilación de producción:

```bash
npm run build
```

---

## 🇨🇴 Hecho para la Comunidad RC Colombia
Desarrollado con pasión para impulsar el deporte y hobby del radio control en todo el territorio colombiano.
