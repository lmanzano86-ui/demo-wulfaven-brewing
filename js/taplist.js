/* ============================================================
   WULFAVEN BREWING COMPANY — Tap List (lista de cervezas)
   ------------------------------------------------------------
   CÓMO ACTUALIZAR (para el resumen del paquete):
   1. Abre este archivo y edita el arreglo TAPLIST de abajo.
   2. Cada cerveza es un objeto con estas claves:
        "nombre" : nombre de la cerveza (igual en ES y EN)
        "estilo" : estilo oficial de la cerveza (igual en ES y EN)
        "abv"    : número (ej. 4.0) o null si no está publicado
        "nota"   : texto corto en español (opcional, ej. premios)
        "nota_en": texto corto en inglés (opcional)
   3. Para AGREGAR una cerveza: copia un bloque { ... } y pégalo
      al final del arreglo (antes del corchete ] que lo cierra).
   4. Para QUITAR una cerveza: borra su bloque completo.
   5. Guarda el archivo y recarga la página: la lista se
      actualiza sola. No hay que tocar el HTML.
   NOTA: si "abv" es null, la página muestra
   "Pregúntanos en barra" / "Ask us at the bar" automáticamente.
   ============================================================ */
const TAPLIST = [
  { "nombre": "Tractor Pull", "estilo": "American Light Lager", "abv": 4.0 },
  { "nombre": "Traktorzug", "estilo": "Kölsch alemana", "abv": 4.9 },
  { "nombre": "Wulfaven Lager", "estilo": "American Lager", "abv": 4.7 },
  { "nombre": "Fall Fling", "estilo": "Blood Orange & Honey Wheat", "abv": 5.7,
    "nota": "De temporada", "nota_en": "Seasonal" },
  { "nombre": "Easy Come Easy Go", "estilo": "Bohemian Pilsner", "abv": 5.2 },
  { "nombre": "Helles of a Collab", "estilo": "German Helles", "abv": 5.0 },
  { "nombre": "Pump You Up", "estilo": "Pumpkin Spice Ale", "abv": 5.5,
    "nota": "De temporada", "nota_en": "Seasonal" },
  { "nombre": "Wulfderbar", "estilo": "Oktoberfest Märzen", "abv": null,
    "nota": "De temporada", "nota_en": "Seasonal" },
  { "nombre": "Tampa Runs on Dunkel", "estilo": "Munich Dunkel", "abv": 5.0,
    "nota": "Medalla de bronce · Best Florida Beer", "nota_en": "Bronze medal · Best Florida Beer" },
  { "nombre": "Schwarzzilla", "estilo": "Schwarzbier", "abv": 5.3 },
  { "nombre": "My Name Is Jeff", "estilo": "Hefeweizen", "abv": 5.1 },
  { "nombre": "Six Shooter", "estilo": "Hazy IPA", "abv": 6.0 },
  { "nombre": "It's All in the Hips", "estilo": "Hazy IPA", "abv": 6.6 },
  { "nombre": "Zesty Westy", "estilo": "NZ West Coast Cold IPA", "abv": 6.7 },
  { "nombre": "DIPA-ish", "estilo": "Gulf Coast IPA", "abv": 7.2 },
  { "nombre": "Guava Sour", "estilo": "Fruited Sour", "abv": 5.0 }
];
