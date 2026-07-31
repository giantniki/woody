# Cómo probar Woody — mini manual

Guía rápida para probar todo lo montado (fotos reales + showcase estandarizado + `/woody-v2`).

## 1. Arrancar

```bash
npm install
npm run dev
```

Abre la URL que imprime la terminal (normalmente `http://localhost:3000`; si el 3000 está
ocupado usará otro puerto — mira la línea `- Local:`).

> ⚠️ **No lances `npm run build` con `npm run dev` corriendo.** Comparten la carpeta `.next` y
> corrompe el dev server (`__webpack_modules__[moduleId] is not a function`). Si te pasa:
> para el dev, `rm -rf .next` y `npm run dev` otra vez.

## 2. Qué mirar en cada página

Sustituye `:3000` por tu puerto real.

### A) Fotos reales + showcase estandarizado  (PR #1)
Rutas: `/` · `/taphuys-woody` · `/taphuys-woody-2`

- [ ] El **hero** usa una foto real del local (no placeholder).
- [ ] Al bajar, el **showcase** muestra parejas de imágenes con forma **estandarizada**: un panel
      vertical (4:5) + uno cuadrado (1:1), mismo tamaño, solapados y centrados, con el texto
      (ZELF TAPPEN, 100 BIEREN, 80 WIJNEN…) encima.
- [ ] Las 5 parejas son consistentes y **espejadas** (izquierda/derecha) al alternar.

### B) `/woody-v2` — home  (PR #2, el nuevo)
Ruta: `/woody-v2`

- [ ] **Hero limpio**: sin email ni Instagram; se mantiene el collage + el lockup (smiley · VAN · pig).
- [ ] **Nav sticky**: arriba, logo a la izquierda + hamburguesa a la derecha (cremas sobre el burdeos).
- [ ] Al **hacer scroll**, la barra **condensa**: fondo crema y letras/hamburguesa en burdeos.
- [ ] **Botón circular "Reserveren"** amarillo fijo abajo-derecha, siempre visible; gira lento.
- [ ] Pulsa la **hamburguesa** → **overlay a pantalla completa** burdeos con enlaces grandes
      (home · zelf tappen · info · reserveren) + email + las 4 ubicaciones.
- [ ] El overlay **cierra** con la **X**, con **Esc**, o al pulsar un enlace.

### C) `/woody-v2/info` — página de info
Ruta: `/woody-v2/info`

- [ ] **Dos columnas** en desktop: izquierda práctica (adres, openingstijden, contacto, Route +
      pill Reserveren) · derecha el relato + las 4 ubicaciones (Arnhem resaltada).
- [ ] La barra de nav se ve legible desde el principio (fondo crema, sin hero oscuro).

## 3. Móvil

Con las DevTools del navegador, activa vista responsive (~375 px) o encoge la ventana:

- [ ] `/woody-v2/info` **colapsa a una sola columna**.
- [ ] El overlay del menú se ve bien y el botón "Reserveren" sigue fijo.

## 4. Build de producción (con el dev PARADO)

```bash
# para antes el 'npm run dev'
npm run build
```

- [ ] Compila sin errores y lista **9 rutas** (incluidas `/woody-v2` y `/woody-v2/info`).

## 5. Notas

- **Identidad**: fuente 205TF **Exposure** + paleta **burdeos `#6d150f` / crema `#f1f0cd` /
  mostaza `#f2c00d`**. Todo `/woody-v2` la usa.
- **Aislamiento**: `/woody-v2` no toca las rutas existentes (`git diff` limpio; solo archivos nuevos).
- **Pull Requests** en `giantniki/woody`:
  - **#1** — fotos reales + showcase estandarizado.
  - **#2** — `/woody-v2` (este). Incluye los commits del #1 como dependencia; al mergear el #1,
    el diff del #2 se queda solo con lo de v2.
- **Alternativas** anotadas por si Niki prefiere otro enfoque: nav inline estilo aiyanna (en vez del
  overlay) · info a una columna editorial (en vez de dos columnas).
