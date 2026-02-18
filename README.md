# 🌍 Traducciones - TL Prices Bot

Este repositorio contiene las traducciones al español para el bot de Discord de precios de **Throne and Liberty**.

## 📋 Tabla de Contenidos

- [Cómo Contribuir](#-cómo-contribuir)
- [Estructura del Archivo](#-estructura-del-archivo)
- [Reglas de Traducción](#-reglas-de-traducción)
- [Lista de Items Pendientes](#-lista-de-items-pendientes)
- [Proceso de Contribución](#-proceso-de-contribución)

---

## 🤝 Cómo Contribuir

¡Toda ayuda es bienvenida! Si juegas Throne and Liberty y conoces los nombres en español de los items, puedes contribuir fácilmente.

### Requisitos:
- Conocer los nombres oficiales en español de los items del juego
- Tener una cuenta de GitHub (es gratis)
- Saber editar archivos JSON (es muy simple, te enseñamos)

### Base de datos de donde tomamos los nombres oficiales:
https://tldb.info/auction-house
---

## 📁 Estructura del Archivo

El archivo `translations.json` tiene esta estructura:
```json
{
  "items": {
    "Nombre en Inglés": "Nombre en Español"
  },
  "categories": {
    "category_key": "Categoría en Español"
  }
}
```

### Ejemplo:
```json
{
  "items": {
    "Tevent's Dagger": "Colmillos furiosos de Tevent",
    "Tevent's Warblade of Despair": "Hoja de guerra desoladora de Tevent"
  }
}
```

---
Descripción: 

Lista de objetos  organizados por orden alfabético, dividido en dos(2) bloques; 
Los objetos que están en el primer bloque (Aún sin traducir) estarán solamente en inglés.
Los objetos que están en el segundo bloque (Traducción completa) estarán en ingles y su traducción al español justo al lado. 


¿Cómo usar?

El nombre en ingles a la izquierda y la traducción a la derecha en formato JSON listo para copiar y pegar en el archivo de las traducciones del bot. 

Ejemplos:


(Aún sin traducir)

"Tevent’s Grasp of Withering":  
"Tevent’s Grasp of Withering":  
"Tevent’s Grasp of Withering":  
"Tevent’s Grasp of Withering":

(Traducción completa)

"Tevent’s Grasp of Withering": "Agarre marchito de Tevent",   
"Tevent’s Grasp of Withering": "Agarre marchito de Tevent",   
"Tevent’s Grasp of Withering": "Agarre marchito de Tevent",   
"Tevent’s Grasp of Withering": "Agarre marchito de Tevent", 


Nota: 
Los objetos ya traducidos permaneceran en el mismo archivo con fines de documentación y base de datos

## ✅ Reglas de Traducción

1. **Usa los nombres oficiales del juego en español**
   - Si existe traducción oficial en el cliente español, úsala
   - Si no existe, usa una traducción descriptiva y coherente

2. **Mantén el formato JSON válido**
   - Usa comillas dobles `"` para las keys y valores
   - Añade una coma `,` después de cada línea excepto la última
   - Respeta los acentos y caracteres especiales (á, é, í, ó, ú, ñ)

3. **Nombres propios**
   - Los nombres propios como "Tevent", "Ahzreil", "Cornelius" se mantienen en inglés
   - Solo se traduce la descripción: "Tevent's Sword" → "Espada de Tevent"

4. **Categorías de items**
   - Armas: Espada, Mandoble, Daga, Báculo, Vara, Arco, Ballesta
   - Armadura: Casco, Armadura, Guantes, Botas, Escudo
   - Consumibles: Poción, Elixir, Pergamino
   - Materiales: Piedra, Fragmento, Extracto

---

## 📝 Lista de Items Pendientes

Aquí hay algunos items comunes que necesitan traducción. Si conoces sus nombres en español, ¡agrégalos!


### Armas Comunes:
- [ ] Swift Dagger
- [ ] Guardian Sword
- [ ] Battle Axe
- [ ] Storm Bow
- [ ] Mystic Staff

### Materiales:
- [ ] Quality Recovery Crystal
- [ ] Precious Polished Crystal
- [ ] Sollant (moneda)
- [ ] Lucent (moneda premium)
- [ ] Dimension Soul Shard

### Consumibles:
- [ ] Resurrection Scroll
- [ ] Instant HP Recovery Potion
- [ ] Experience Boost Scroll

### Armaduras:
- [ ] Heavy Plate Helmet
- [ ] Leather Boots
- [ ] Cloth Gloves

**¿Conoces alguno de estos items?** ¡Agrégalo al archivo!

---

## 🚀 Proceso de Contribución

### Opción 1: Edición Directa en GitHub (Más Fácil)

1. Ve al archivo `translations.json`
2. Haz clic en el ícono de lápiz ✏️ (Edit this file)
3. Agrega tu traducción siguiendo el formato:
```json
   "Item Name in English": "Nombre del Item en Español",
```
4. Scroll hasta abajo y haz clic en "Propose changes"
5. Haz clic en "Create pull request"
6. ¡Listo! Revisaré tu contribución y la aprobaré

### Opción 2: Fork y Pull Request (Avanzado)

1. Haz fork de este repositorio
2. Clona tu fork localmente
3. Edita `translations.json`
4. Commit y push a tu fork
5. Crea un Pull Request

---

## 📊 Estadísticas

- **Total de traducciones:** 31 items
- **Items en el juego:** ~3,210
- **Progreso:** ~1%

¡Ayúdanos a llegar al 100%! 🎯

---

## 🛠️ Testing

Para probar tus traducciones localmente:

1. Clona el repositorio
2. Copia `translations.json` a la carpeta del bot
3. Ejecuta el bot: `node bot.js`
4. Usa `/price item:nombre` para verificar que funciona

---

## 💬 Contacto

Si tienes preguntas o sugerencias:
- Abre un **Issue** en este repositorio
- Contáctame en Discord: [Tu Discord aquí]

---

## 📜 Licencia

Este proyecto es de código abierto. Todas las contribuciones son bienvenidas.

---

### 🌟 Agradecimientos

Gracias a todos los colaboradores que ayudan a traducir items al español:

<!-- Los nombres se agregarán automáticamente aquí -->

---

**¿Listo para contribuir? ¡Edita el archivo `translations.json` y ayúdanos a traducir Throne and Liberty!** 🎮
