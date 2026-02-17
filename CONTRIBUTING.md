# 📖 Guía de Contribución

¡Gracias por tu interés en contribuir! Esta guía te ayudará paso a paso.

## 🎯 Objetivo

Traducir todos los items de Throne and Liberty del inglés al español para que el bot de Discord sea más accesible para la comunidad hispana.

---

## 📝 Cómo Agregar una Traducción

### Paso 1: Encuentra el item en el juego

1. Juega Throne and Liberty con el cliente en **español**
2. Anota el nombre exacto del item tal como aparece en el juego
3. Verifica la ortografía (acentos, mayúsculas, etc.)

### Paso 2: Identifica el nombre en inglés

Puedes buscar el nombre en inglés en:
- La wiki oficial de Throne and Liberty
- La página https://tldb.info/
- El propio juego cambiando el idioma a inglés

### Paso 3: Edita el archivo

Abre `translations.json` y agrega tu traducción:
```json
{
  "items": {
    // ... traducciones existentes ...
    "English Item Name": "Nombre en Español",  // <- Tu nueva línea
    // ... más traducciones ...
  }
}
```

**⚠️ IMPORTANTE:**
- Agrega una **coma** al final de cada línea excepto la última
- Usa **comillas dobles** `"` no comillas simples `'`
- Respeta los **acentos** (á, é, í, ó, ú, ñ)

---

## ✅ Ejemplos Correctos vs Incorrectos

### ✅ CORRECTO:
```json
{
  "items": {
    "Tevent's Dagger": "Dagas de Tevent",
    "Health Potion": "Poción de Salud",
    "Blessed Armor": "Armadura Bendecida"
  }
}
```

### ❌ INCORRECTO:
```json
{
  "items": {
    "Tevent's Dagger": "Dagas de Tevent"  // <- Falta la coma
    'Health Potion': 'Poción de Salud',   // <- Comillas simples
    "Blessed Armor": "Armadura Bendecida", // <- Coma de más (última línea)
  }
}
```

---

## 🔤 Reglas de Ortografía

1. **Mayúsculas:**
   - Primera letra en mayúscula: "Espada de fuego"
   - Nombres propios siempre en mayúscula: "Espada de Tevent"

2. **Acentos:**
   - Siempre usar acentos correctos: "Báculo", "Poción", "Maná"
   - NO usar: "Baculo", "Pocion", "Mana"

3. **Artículos:**
   - Generalmente no se incluyen: "Espada" no "La Espada"
   - Excepto si es parte del nombre oficial: "La Espada Legendaria"

4. **Género:**
   - Mantener el género apropiado: "Espada" (femenina), "Escudo" (masculino)

---

## 🎮 Categorías de Items

### Armas (Weapons)
```
- Sword → Espada
- Greatsword → Mandoble / Espadón
- Dagger → Daga
- Staff → Báculo
- Wand → Vara
- Bow → Arco
- Crossbow → Ballesta
```

### Armadura (Armor)
```
- Helmet → Casco / Yelmo
- Armor → Armadura
- Gloves → Guantes
- Boots → Botas
- Shield → Escudo
- Cape/Cloak → Capa
```

### Consumibles (Consumables)
```
- Potion → Poción
- Elixir → Elixir
- Scroll → Pergamino
- Food → Comida
```

### Materiales (Materials)
```
- Stone → Piedra
- Crystal → Cristal
- Fragment → Fragmento
- Shard → Fragmento / Esquirla
- Extract → Extracto
- Ore → Mineral
```

### Monedas (Currency)
```
- Sollant → Sollant (se mantiene)
- Lucent → Lucent (se mantiene)
- Gold → Oro
```

---

## 🧪 Verificación

Antes de enviar tu contribución, verifica:

- [ ] El nombre está escrito correctamente
- [ ] Los acentos están en su lugar
- [ ] El formato JSON es válido (usa https://jsonlint.com/ para verificar)
- [ ] No hay comas de más ni de menos
- [ ] Usaste comillas dobles `"` no simples `'`

---

## 📤 Enviar tu Contribución

1. **Edita el archivo** en GitHub directamente
2. Haz clic en **"Propose changes"**
3. Agrega un título descriptivo: "Agregar traducción de [nombre del item]"
4. Opcionalmente, agrega comentarios explicando tu traducción
5. Haz clic en **"Create pull request"**

---

## 🏆 Mejores Prácticas

### Prioriza la traducción de:
1. **Items más usados** (pociones, piedras de mejora, monedas)
2. **Armas y armaduras de raid** (Tevent, Ahzreil, Cornelius)
3. **Materiales de crafteo** comunes
4. **Consumibles** del día a día

### No hace falta traducir:
- Items que ya están en español
- Items obsoletos o que ya no existen en el juego (Solante, pociones, etc)

---

## 💡 Consejos

- **Si no estás seguro** de una traducción, mejor déjala sin traducir
- **Consulta con otros jugadores** si tienes dudas
- **Revisa la wiki oficial** en español
- **Juega en español** para ver los nombres reales

---

## 🆘 ¿Necesitas Ayuda?

Si tienes preguntas:
1. Abre un **Issue** en GitHub
2. Pregunta en el Discord de la comunidad
3. Revisa las traducciones existentes como ejemplo

---

## 📊 Progreso del Proyecto

Puedes ver el progreso en tiempo real en el archivo `README.md`

**Meta:** Traducir los 3,210 items del juego

---

¡Gracias por contribuir! 🎉