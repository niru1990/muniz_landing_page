# Landing Page - Next.js + Tailwind CSS

Una landing page moderna y responsive con administración de contenido simple mediante JSON.

## Características

- ✅ Diseño responsive (mobile y desktop)
- ✅ Hero fullscreen que cubre toda la pantalla
- ✅ Contenido editable vía archivo JSON
- ✅ Next.js + Tailwind CSS
- ✅ Fácil despliegue en GitHub Pages
- ✅ 4 secciones de contenido (Hero + 3 secciones adicionales)
- ✅ Lista vertical de características
- ✅ Botón CTA que abre Google Form

## Estructura del Proyecto

```
├── app/
│   ├── page.tsx          # Componente principal de la landing page
│   ├── layout.tsx        # Layout de la aplicación
│   └── globals.css       # Estilos globales
├── public/               # Imágenes y assets estáticos
├── content.json          # Archivo de configuración de contenido
└── package.json
```

## Cómo Editar el Contenido

Abre el archivo `content.json` en la raíz del proyecto para editar:

```json
{
  "hero": {
    "title": "Tu título principal",
    "subtitle": "Subtítulo opcional",
    "description": "Tu descripción principal",
    "leftImage": "/imagen-izquierda.svg",
    "rightImage": "/imagen-derecha.jpg"
  },
  "section2": {
    "title": "Título de la sección 2",
    "description": "Descripción detallada"
  },
  "section3": {
    "title": "Título de la sección 3",
    "description": "Descripción detallada"
  },
  "section4": {
    "title": "Título de la sección 4",
    "description": "Descripción detallada"
  },
  "features": [
    {
      "title": "Título de característica",
      "description": "Descripción"
    }
  ],
  "cta": {
    "buttonText": "Texto del botón",
    "googleFormUrl": "https://docs.google.com/forms/..."
  }
}
```

### Secciones

- **Hero**: Sección fullscreen que cubre toda la pantalla (título, subtítulo opcional, descripción)
- **Section 2, 3, 4**: Secciones adicionales con título y descripción
- **Features**: Lista vertical de características
- **CTA**: Botón que abre Google Form

## Desarrollo Local

```bash
# Instalar dependencias (si no está hecho)
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para Producción

```bash
npm run build
```

## Despliegue en GitHub Pages

### Opción 1: GitHub Actions (Automático)

1. Crea un nuevo repositorio en GitHub
2. Sube el código al repositorio
3. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

4. Ve a Settings > Pages y selecciona la rama `gh-pages`

### Opción 2: Manual

```bash
# Build del proyecto
npm run build

# El sitio generado estará en la carpeta `out/`
# Sube el contenido de `out/` a GitHub Pages manualmente
```

## Personalización

### Colores

Edita los colores en `app/page.tsx`:
- Gradients: `bg-gradient-to-b from-gray-50 to-white`
- Texto: `text-gray-900`, `text-gray-600`
- Botón: `bg-blue-600 hover:bg-blue-700`

### Layout

El diseño usa un grid de 2 columnas en desktop (`md:grid-cols-2`) y 1 columna en mobile. Las características sin imagen ocupan todo el ancho automáticamente.

## Tecnologías

- **Next.js 16** - Framework React
- **Tailwind CSS** - Framework de estilos
- **TypeScript** - Tipado estático
- **GitHub Pages** - Hosting gratuito
