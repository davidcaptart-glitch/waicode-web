# WAI Code — Landing corporativa

Web corporativa de **WAI Code** ([waicode.es](https://waicode.es)): soluciones tecnológicas a medida para empresas — análisis de problemas de negocio, automatización de procesos, software a medida e inteligencia artificial.

## Stack

- **Next.js 16** (App Router, prerenderizado estático, Turbopack)
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (microanimaciones y scroll reveal)
- Tipografía **Plus Jakarta Sans** vía `next/font` (autoalojada, sin FOUT)

## Características

- 100 % estática: sin backend, sin formularios, sin base de datos.
- Captación exclusivamente por **WhatsApp** (`wa.me/34610097562` con mensaje predefinido). Todos los CTA "Hablemos", la sección final y el botón flotante abren WhatsApp en pestaña nueva.
- **Vídeos** en autoplay, mute, loop y `playsinline`, sin controles, con carga diferida (`IntersectionObserver`): solo se descargan al acercarse al viewport y se pausan al salir de pantalla.
- **SEO completo**: metadatos, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`, JSON-LD (`ProfessionalService` + `WebSite`), `lang="es"`, canónica sobre `https://waicode.es`.
- **Accesibilidad**: HTML semántico, `aria-labels`, foco visible, `prefers-reduced-motion` respetado en todas las animaciones.
- **Core Web Vitals**: página prerenderizada, imágenes optimizadas con `next/image`, animaciones solo con `transform`/`opacity`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint     # ESLint
```

## Estructura

```
app/
  layout.tsx        # Fuentes, metadatos SEO, JSON-LD
  page.tsx          # Composición de la home
  globals.css       # Tokens de diseño (Tailwind 4 @theme)
  sitemap.ts        # /sitemap.xml
  robots.ts         # /robots.txt
  icon.png          # Favicon (generado)
  apple-icon.png    # Apple touch icon (generado)
components/
  Navbar.tsx        # Cabecera fija + menú móvil animado
  Hero.tsx          # Hero con vídeo intro_personal
  Approach.tsx      # "No vendo páginas web" + vídeo intro_waicode
  Services.tsx      # Grid de 10 soluciones
  Process.tsx       # Timeline de 5 pasos
  Projects.tsx      # Portfolio bento (5 proyectos con vídeo)
  FinalCTA.tsx      # "¿Tienes un problema que resolver?" + WhatsApp
  Footer.tsx
  WhatsAppFloat.tsx # Botón flotante de WhatsApp
  LazyVideo.tsx     # Vídeo con lazy loading + pausa fuera de viewport
  Reveal.tsx        # Scroll reveal con Framer Motion
  Buttons.tsx       # CTA primario/secundario y eyebrow
  icons.tsx         # Iconografía SVG propia (trazo fino)
lib/
  site.ts           # Constantes: WhatsApp, proyectos, servicios, proceso
scripts/
  prepare-images.mjs # Genera logo-mark, og.png y favicons desde el logo
public/
  videos/           # Vídeos de la web
  images/           # Logo, foto del fundador, OG image
```

## Contenido

Los textos, proyectos y servicios se editan en un único sitio: [`lib/site.ts`](lib/site.ts).
El número de WhatsApp y el mensaje predefinido también viven ahí.

## Variables de entorno

| Variable | Descripción | Cuándo |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | Measurement ID de Google Analytics 4 (ej. `G-XXXXXXXXXX`) | Tras crear la propiedad GA4 |

Sin esta variable la web funciona correctamente; Google Analytics simplemente no carga.

## Despliegue (Vercel recomendado)

```bash
# 1. Crear repositorio en GitHub y conectar
git remote add origin https://github.com/<usuario>/waicode-web.git
git push -u origin main

# 2. Importar en Vercel (vercel.com/new), framework autodetectado: Next.js
#    Añadir variable de entorno: NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX (opcional)
#    Hacer clic en Deploy
```

### Dominio waicode.es (DonDominio)

En el panel de DonDominio → Zona DNS de `waicode.es`:

| Tipo | Nombre | Valor | TTL |
| --- | --- | --- | --- |
| `A` | `@` | `76.76.21.21` | 3600 |
| `CNAME` | `www` | `cname.vercel-dns.com.` | 3600 |

> Vercel muestra los valores exactos en Project → Settings → Domains al añadir el dominio. Si la IP difiere de la indicada, usar la que muestre el panel de Vercel.

En Vercel → Project → Settings → Domains: añadir `waicode.es` y `www.waicode.es` (redirigir `www` → apex). El certificado SSL se emite automáticamente al validar el DNS.

### Google Search Console

1. Añadir propiedad tipo **Dominio** → `waicode.es`
2. Crear registro TXT en DonDominio: tipo `TXT`, nombre `@`, valor `google-site-verification=XXXX`
3. Enviar sitemap: `https://waicode.es/sitemap.xml`
