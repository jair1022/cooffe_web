/* ═══════════════════════════════════════════════════════════════
   Coffee Access Premium – script.js
   Vanilla JS · Accesibilidad WCAG 2.2 · Sin frameworks
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────
   1. BASE DE DATOS DE CAFÉS (30+ variedades)
────────────────────────────────────────── */
const COFFEES = [
  {
    id: 1,
    name: 'Espresso',
    origin: 'Italia',
    flag: '🇮🇹',
    bean: 'Arábica',
    intensity: 5,
    caffeine: 'Alto (63 mg/shot)',
    description: 'La base de toda la cultura del café. Concentrado y vigoroso, extraído a alta presión para obtener una crema dorada perfecta.',
    brew: 'Máquina de espresso a 9 bares de presión, agua a 92–94°C, 25–30 segundos de extracción con 7 g de café molido fino.',
    history: 'Inventado en Milán en 1901 por Luigi Bezzera, el espresso revolucionó la cultura del café europeo y se convirtió en el pilar de innumerables bebidas del mundo.',
    flavor: ['Chocolate negro', 'Nuez', 'Caramelo', 'Madera'],
    flavorProfile: { acidez: 60, dulzura: 50, amargor: 80, cuerpo: 90, aroma: 85 },
    intensityLevel: 'fuerte',
    emoji: '☕',
    color: '#3d1c02'
  },
  {
    id: 2,
    name: 'Café Latte',
    origin: 'Italia / EE.UU.',
    flag: '🇮🇹',
    bean: 'Arábica',
    intensity: 2,
    caffeine: 'Moderado (75 mg)',
    description: 'Un espresso suave cubierto de leche vaporizada sedosa. Cremoso, reconfortante y perfecto para el desayuno.',
    brew: 'Prepare un espresso doble, luego agregue 150–200 ml de leche vaporizada a 60–65°C formando una microespuma suave.',
    history: 'Popularizado en los años 80 en cafeterías de Seattle, el latte se convirtió en el ícono de la tercera ola del café y símbolo de la cultura barista.',
    flavor: ['Leche', 'Vainilla', 'Caramelo suave', 'Espuma'],
    flavorProfile: { acidez: 30, dulzura: 75, amargor: 30, cuerpo: 70, aroma: 60 },
    intensityLevel: 'suave',
    emoji: '🥛',
    color: '#c4916a'
  },
  {
    id: 3,
    name: 'Cappuccino',
    origin: 'Italia',
    flag: '🇮🇹',
    bean: 'Arábica',
    intensity: 3,
    caffeine: 'Moderado (75 mg)',
    description: 'La trinidad perfecta: espresso, leche vaporizada y espuma densa. Equilibrio clásico italiano en cada sorbo.',
    brew: 'Espresso doble (60 ml), 60 ml de leche vaporizada y 60 ml de espuma densa. Proporción 1:1:1. Servir en taza precalentada.',
    history: 'Nombrado por los frailes capuchinos por el color marrón de sus hábitos, el cappuccino es el desayuno italiano por excelencia y hoy se disfruta en todo el mundo.',
    flavor: ['Espuma cremosa', 'Chocolate', 'Nuez moscada', 'Leche'],
    flavorProfile: { acidez: 40, dulzura: 65, amargor: 50, cuerpo: 75, aroma: 70 },
    intensityLevel: 'medio',
    emoji: '☁️',
    color: '#a0522d'
  },
  {
    id: 4,
    name: 'Americano',
    origin: 'EE.UU.',
    flag: '🇺🇸',
    bean: 'Arábica/Robusta',
    intensity: 3,
    caffeine: 'Alto (95 mg)',
    description: 'Espresso diluido con agua caliente. Limpio, vigoroso y sin complicaciones. El café largo por excelencia.',
    brew: 'Extraiga un espresso doble y añada 120–180 ml de agua caliente (no hirviendo). Puede invertir el orden para preservar la crema.',
    history: 'Creado por soldados americanos en la Segunda Guerra Mundial que diluían el espresso europeo para asemejarlo al café filtrado de casa.',
    flavor: ['Roble', 'Tierra', 'Caramelo oscuro', 'Ligero amargor'],
    flavorProfile: { acidez: 45, dulzura: 40, amargor: 55, cuerpo: 50, aroma: 55 },
    intensityLevel: 'medio',
    emoji: '🫖',
    color: '#4a2c0a'
  },
  {
    id: 5,
    name: 'Macchiato',
    origin: 'Italia',
    flag: '🇮🇹',
    bean: 'Arábica',
    intensity: 4,
    caffeine: 'Alto (75 mg)',
    description: 'Un espresso "manchado" con apenas una cucharada de espuma. Intenso pero con un toque de suavidad.',
    brew: 'Prepare un espresso simple o doble y añada una pequeña cantidad de leche vaporizada o espuma encima para "manchar" el café.',
    history: 'El nombre "macchiato" significa "manchado" en italiano. Fue creado para diferenciar el espresso con leche del espresso solo en las barras italianas.',
    flavor: ['Espresso concentrado', 'Espuma suave', 'Chocolate'],
    flavorProfile: { acidez: 55, dulzura: 45, amargor: 75, cuerpo: 80, aroma: 78 },
    intensityLevel: 'fuerte',
    emoji: '💧',
    color: '#2c1a08'
  },
  {
    id: 6,
    name: 'Mocha',
    origin: 'Yemen / EE.UU.',
    flag: '🇾🇪',
    bean: 'Arábica',
    intensity: 3,
    caffeine: 'Moderado (95 mg)',
    description: 'La fusión perfecta entre café y chocolate. Espresso con sirope de cacao, leche y crema montada.',
    brew: 'Combine espresso doble con 2 cucharadas de sirope de chocolate. Añada leche vaporizada y termine con crema batida y cacao espolvoreado.',
    history: 'Inspirado en el café del puerto de Moca (Yemen), famoso por sus notas naturales de chocolate. La versión moderna americanizada lo transformó en un postre líquido.',
    flavor: ['Chocolate', 'Caramelo', 'Café', 'Crema'],
    flavorProfile: { acidez: 30, dulzura: 90, amargor: 35, cuerpo: 80, aroma: 85 },
    intensityLevel: 'medio',
    emoji: '🍫',
    color: '#3b1f0a'
  },
  {
    id: 7,
    name: 'Flat White',
    origin: 'Australia / Nueva Zelanda',
    flag: '🇦🇺',
    bean: 'Arábica',
    intensity: 4,
    caffeine: 'Alto (130 mg)',
    description: 'Microespuma sedosa sobre un espresso doble. Más concentrado que el latte, más suave que el cappuccino.',
    brew: 'Espresso doble ristretto en taza pequeña (150 ml). Añadir microespuma de leche texturizada muy fina, sin espuma gruesa, con latte art opcional.',
    history: 'Nacido en los años 80 en Sydney o Auckland (ambas ciudades se disputan su origen), el flat white conquistó el mundo cuando Starbucks lo incluyó en su menú global en 2015.',
    flavor: ['Leche sedosa', 'Caramelo', 'Nuez', 'Espresso'],
    flavorProfile: { acidez: 45, dulzura: 60, amargor: 55, cuerpo: 75, aroma: 70 },
    intensityLevel: 'fuerte',
    emoji: '🌊',
    color: '#8B4513'
  },
  {
    id: 8,
    name: 'Cortado',
    origin: 'España',
    flag: '🇪🇸',
    bean: 'Arábica',
    intensity: 4,
    caffeine: 'Moderado (75 mg)',
    description: 'El equilibrio ibérico. Un espresso "cortado" con igual cantidad de leche caliente para reducir la acidez.',
    brew: 'Espresso simple (30 ml) con 30 ml de leche vaporizada caliente, sin espuma. La proporción 1:1 es clave para el balance perfecto.',
    history: 'Tradicional en España y Portugal, el cortado pasó de las barras de café madrileñas a las cafeterías de specialty coffee de todo el mundo, especialmente en EE.UU.',
    flavor: ['Espresso suavizado', 'Leche tibia', 'Caramelo'],
    flavorProfile: { acidez: 50, dulzura: 55, amargor: 60, cuerpo: 70, aroma: 65 },
    intensityLevel: 'fuerte',
    emoji: '✂️',
    color: '#6B3A2A'
  },
  {
    id: 9,
    name: 'Ristretto',
    origin: 'Italia',
    flag: '🇮🇹',
    bean: 'Arábica',
    intensity: 5,
    caffeine: 'Moderado (50 mg)',
    description: 'El espresso restringido. La mitad del agua, el doble de concentración. Solo los valientes lo toman solo.',
    brew: 'Misma dosis de café que el espresso (7 g) pero solo 15 ml de agua. Extracción rápida que captura los primeros y más complejos compuestos del café.',
    history: 'Consumido principalmente en Italia del norte, el ristretto es la expresión más pura del café. Su nombre en italiano significa "restringido" o "limitado".',
    flavor: ['Concentrado intenso', 'Frutas rojas', 'Caramelo denso'],
    flavorProfile: { acidez: 70, dulzura: 55, amargor: 85, cuerpo: 95, aroma: 92 },
    intensityLevel: 'fuerte',
    emoji: '🔥',
    color: '#1a0800'
  },
  {
    id: 10,
    name: 'Lungo',
    origin: 'Italia',
    flag: '🇮🇹',
    bean: 'Arábica/Robusta',
    intensity: 3,
    caffeine: 'Alto (110 mg)',
    description: 'El espresso largo. Más agua, más extracción, carácter más amargo y complejo que el espresso clásico.',
    brew: 'Misma dosis de café pero con 60–90 ml de agua. Tiempo de extracción de 45–60 segundos para mayor desarrollo de sabores.',
    history: 'Popular en el norte de Europa donde se prefieren cafés de mayor volumen, el lungo es la alternativa italiana al americano, manteniendo toda la presión de extracción.',
    flavor: ['Amargo profundo', 'Herbáceo', 'Madera', 'Tierra'],
    flavorProfile: { acidez: 40, dulzura: 35, amargor: 75, cuerpo: 60, aroma: 65 },
    intensityLevel: 'medio',
    emoji: '📏',
    color: '#3d2010'
  }
];

// Continuación del catálogo
const COFFEES_EXTRA = [
  {
    id: 11,
    name: 'Affogato',
    origin: 'Italia',
    flag: '🇮🇹',
    bean: 'Arábica',
    intensity: 4,
    caffeine: 'Alto (63 mg)',
    description: 'Un espresso "ahogado" sobre helado de vainilla. El postre-bebida más elegante de Italia.',
    brew: 'Prepare un espresso caliente y viértalo directamente sobre 1 o 2 bolas de helado de vainilla de calidad en una copa pequeña.',
    history: 'Affogato significa "ahogado" en italiano. Aunque su origen exacto es incierto, se consolidó en los años 50 en las gelaterías del norte de Italia.',
    flavor: ['Helado de vainilla', 'Espresso', 'Caramelo', 'Contraste frío/calor'],
    flavorProfile: { acidez: 45, dulzura: 95, amargor: 55, cuerpo: 85, aroma: 80 },
    intensityLevel: 'fuerte',
    emoji: '🍨',
    color: '#f5deb3'
  },
  {
    id: 12,
    name: 'Irish Coffee',
    origin: 'Irlanda',
    flag: '🇮🇪',
    bean: 'Arábica',
    intensity: 3,
    caffeine: 'Moderado (80 mg)',
    description: 'La fusión entre café caliente, whisky irlandés y crema flotante. Reconfortante y sofisticado.',
    brew: 'Caliente la copa, añada 120 ml de café filtrado fuerte, 45 ml de whisky irlandés y azúcar moreno. Vierta crema batida fría sobre el reverso de una cuchara.',
    history: 'Creado en 1943 por Joe Sheridan en el aeropuerto de Foynes, Irlanda, para calentar a viajeros norteamericanos agotados por el frío atlántico.',
    flavor: ['Whisky', 'Café robusto', 'Crema', 'Azúcar moreno'],
    flavorProfile: { acidez: 35, dulzura: 70, amargor: 45, cuerpo: 80, aroma: 88 },
    intensityLevel: 'medio',
    emoji: '🍀',
    color: '#2d4a1e'
  },
  {
    id: 13,
    name: 'Café Cubano',
    origin: 'Cuba',
    flag: '🇨🇺',
    bean: 'Robusta/Arábica',
    intensity: 5,
    caffeine: 'Muy alto (90 mg)',
    description: 'Espresso ultra-dulce preparado con azúcar crema espumada. La esencia de la cultura caribeña del café.',
    brew: 'Bata azúcar con las primeras gotas del espresso hasta obtener espuma crema dorada. Prepare el espresso y viértalo sobre la crema de azúcar.',
    history: 'El café cubano sobrevivió el embargo a través de la ingenuidad local. Su método de espumar el azúcar con el primer chorro de café es único en el mundo.',
    flavor: ['Azúcar tostada', 'Caramelo', 'Espresso denso', 'Regaliz'],
    flavorProfile: { acidez: 30, dulzura: 95, amargor: 60, cuerpo: 90, aroma: 82 },
    intensityLevel: 'fuerte',
    emoji: '🌴',
    color: '#b8860b'
  },
  {
    id: 14,
    name: 'Café Turco',
    origin: 'Turquía',
    flag: '🇹🇷',
    bean: 'Arábica',
    intensity: 5,
    caffeine: 'Alto (100 mg)',
    description: 'Preparado en cezve con molienda ultrafina. Sin filtrar, con borra y cardamomo. Patrimonio cultural de la UNESCO.',
    brew: 'Mezcle café molido muy fino con agua fría en el cezve. Caliente lentamente sin hervir. Cuando suba la espuma, retire y sirva con cardamomo opcional.',
    history: 'Declarado Patrimonio Cultural Inmaterial de la UNESCO en 2013. La tradición del café turco incluye leer el futuro en los posos del café (tasseografía).',
    flavor: ['Cardamomo', 'Tierra', 'Especias', 'Intenso sin filtrar'],
    flavorProfile: { acidez: 25, dulzura: 30, amargor: 90, cuerpo: 95, aroma: 88 },
    intensityLevel: 'fuerte',
    emoji: '🔮',
    color: '#8B0000'
  },
  {
    id: 15,
    name: 'Café de Olla',
    origin: 'México',
    flag: '🇲🇽',
    bean: 'Arábica',
    intensity: 2,
    caffeine: 'Moderado (65 mg)',
    description: 'Hervido en olla de barro con piloncillo y canela. La receta ancestral mexicana que es puro sabor y tradición.',
    brew: 'Hierva agua con piloncillo y canela en olla de barro. Añada café molido grueso, baje el fuego y deje reposar 5 minutos. Cuele y sirva.',
    history: 'Receta precolombina adaptada con la llegada del café en el siglo XVII. La olla de barro es esencial: aporta minerales y un sabor terroso único imposible de replicar.',
    flavor: ['Canela', 'Piloncillo', 'Tierra', 'Especias ancestrales'],
    flavorProfile: { acidez: 25, dulzura: 80, amargor: 35, cuerpo: 70, aroma: 90 },
    intensityLevel: 'suave',
    emoji: '🏺',
    color: '#8B4513'
  },
  {
    id: 16,
    name: 'Cold Brew',
    origin: 'Japón / EE.UU.',
    flag: '🇯🇵',
    bean: 'Arábica',
    intensity: 3,
    caffeine: 'Muy alto (150 mg)',
    description: 'Macerado en agua fría durante 12–24 horas. Suave, dulce naturalmente y con bajo nivel de acidez.',
    brew: 'Mezcle café molido grueso con agua fría (1:8). Refrigere 12–24 horas. Filtre y sirva sobre hielo. Puede diluirse al 50% para consumo directo.',
    history: 'El método Kyoto de goteo frío existe desde el siglo XVII. La versión concentrada moderna fue popularizada en Nueva York en los años 2010 como la mayor tendencia del café specialty.',
    flavor: ['Chocolate suave', 'Vainilla natural', 'Frutas', 'Sin acidez'],
    flavorProfile: { acidez: 20, dulzura: 80, amargor: 30, cuerpo: 65, aroma: 72 },
    intensityLevel: 'medio',
    emoji: '🧊',
    color: '#1a3a5c'
  },
  {
    id: 17,
    name: 'Nitro Coffee',
    origin: 'EE.UU.',
    flag: '🇺🇸',
    bean: 'Arábica',
    intensity: 3,
    caffeine: 'Muy alto (150 mg)',
    description: 'Cold brew infusionado con nitrógeno. Servido como una cerveza negra con una corona cremosa irresistible.',
    brew: 'Cold brew concentrado infusionado con nitrógeno a presión y servido desde grifo especial. La cascada de burbujas crea una textura única aterciopelada.',
    history: 'Lanzado por Stumptown Coffee en Portland en 2013, el nitro coffee llegó a Starbucks en 2016. La infusión de nitrógeno crea una experiencia visual y sensorial única.',
    flavor: ['Cremoso natural', 'Chocolate oscuro', 'Vainilla', 'Aterciopelado'],
    flavorProfile: { acidez: 18, dulzura: 72, amargor: 35, cuerpo: 88, aroma: 68 },
    intensityLevel: 'medio',
    emoji: '🍺',
    color: '#0d1b2a'
  },
  {
    id: 18,
    name: 'Café Bombón',
    origin: 'España (Valencia)',
    flag: '🇪🇸',
    bean: 'Arábica',
    intensity: 3,
    caffeine: 'Moderado (65 mg)',
    description: 'Espresso sobre leche condensada. El contraste visual de dos capas es tan bello como su sabor.',
    brew: 'Vierta leche condensada en vaso transparente. Con cuidado, sirva el espresso encima usando el reverso de una cuchara para crear las dos capas visibles.',
    history: 'Popular en Valencia y extendido por toda España, el café bombón es un placer visual tanto como gustativo. Su nombre hace referencia a la dulzura del bombón de chocolate.',
    flavor: ['Leche condensada', 'Espresso', 'Caramelo', 'Muy dulce'],
    flavorProfile: { acidez: 30, dulzura: 98, amargor: 40, cuerpo: 85, aroma: 75 },
    intensityLevel: 'medio',
    emoji: '🍬',
    color: '#D2691E'
  },
  {
    id: 19,
    name: 'Viennese Coffee',
    origin: 'Austria',
    flag: '🇦🇹',
    bean: 'Arábica/Robusta',
    intensity: 3,
    caffeine: 'Moderado (80 mg)',
    description: 'Café negro vienés cubierto con crema batida y cacao. La elegancia de los cafés clásicos de Viena.',
    brew: 'Prepare café negro fuerte (espresso doble o mocha). Sirva en taza alta y cubra generosamente con crema batida. Espolvoree cacao o azúcar glass.',
    history: 'Nacido en los cafés literarios vieneses del siglo XVIII, el Wiener Melange y el Einspänner son parte del Patrimonio Cultural Inmaterial de la UNESCO desde 2011.',
    flavor: ['Crema batida', 'Café robusto', 'Cacao', 'Azúcar glass'],
    flavorProfile: { acidez: 35, dulzura: 80, amargor: 45, cuerpo: 78, aroma: 82 },
    intensityLevel: 'medio',
    emoji: '🎼',
    color: '#4a2040'
  },
  {
    id: 20,
    name: 'Café Francés',
    origin: 'Francia',
    flag: '🇫🇷',
    bean: 'Arábica',
    intensity: 2,
    caffeine: 'Moderado (80 mg)',
    description: 'Preparado en prensa francesa. Rico, con cuerpo y con los aceites naturales del café preservados intactos.',
    brew: 'Café molido grueso en prensa. Agua a 93°C. Infusión 4 minutos. Presionar émbolo lentamente. Servir inmediatamente para evitar sobre-extracción.',
    history: 'A pesar de su nombre, la prensa francesa fue patentada por el italiano Attilio Calimani en 1929. Francia la adoptó y popularizó hasta convertirla en símbolo gastronómico.',
    flavor: ['Aceites naturales', 'Tierra', 'Nuez', 'Cuerpo completo'],
    flavorProfile: { acidez: 40, dulzura: 50, amargor: 50, cuerpo: 88, aroma: 75 },
    intensityLevel: 'suave',
    emoji: '🥐',
    color: '#8B6914'
  }
];

const COFFEES_PREMIUM = [
  {
    id: 21,
    name: 'Geisha',
    origin: 'Etiopía / Panamá',
    flag: '🇪🇹',
    bean: 'Arábica (Geisha)',
    intensity: 2,
    caffeine: 'Bajo-Moderado (55 mg)',
    description: 'El café más cotizado del mundo. Floral, complejo y delicado como el té. Una experiencia transformadora para el paladar.',
    brew: 'Método pour-over o Chemex con agua a 88–92°C. Molienda media-gruesa. Ratio 1:15. Verter en círculos lentos para máxima extracción aromática.',
    history: 'Descubierta en las montañas de Kaffa, Etiopía. Llegó a Panamá en los años 60 y en 2004 ganó el Best of Panama, estableciendo un récord de precio de $601/libra.',
    flavor: ['Jazmín', 'Bergamota', 'Durazno', 'Té negro', 'Floral'],
    flavorProfile: { acidez: 85, dulzura: 78, amargor: 20, cuerpo: 45, aroma: 98 },
    intensityLevel: 'suave',
    emoji: '🌸',
    color: '#e8b4b8'
  },
  {
    id: 22,
    name: 'Bourbon',
    origin: 'Isla Reunión (Borbón)',
    flag: '🇷🇪',
    bean: 'Arábica (Bourbon)',
    intensity: 3,
    caffeine: 'Moderado (65 mg)',
    description: 'Variedad arábica histórica con dulzura natural excepcional. Notas de frutas rojas y azúcar mascabado.',
    brew: 'Excelente en V60 o Kalita Wave. Agua a 91°C. Extracción lenta para desarrollar toda su dulzura natural y acidez frutal.',
    history: 'Mutación natural del Typica llevada a la isla Borbón (hoy Reunión) por misioneros franceses en 1708. Es la base genética de muchas variedades modernas.',
    flavor: ['Ciruela', 'Azúcar mascabado', 'Naranja', 'Chocolate con leche'],
    flavorProfile: { acidez: 75, dulzura: 85, amargor: 30, cuerpo: 60, aroma: 82 },
    intensityLevel: 'medio',
    emoji: '🍊',
    color: '#c8650a'
  },
  {
    id: 23,
    name: 'Typica',
    origin: 'Etiopía / Colombia',
    flag: '🇨🇴',
    bean: 'Arábica (Typica)',
    intensity: 2,
    caffeine: 'Bajo-Moderado (60 mg)',
    description: 'La variedad madre de todas las arábicas cultivadas. Elegante, limpia y con acidez brillante de manzana verde.',
    brew: 'Ideal en Aeropress o drip. Su delicada estructura se beneficia de una extracción limpia a temperatura moderada (89–91°C).',
    history: 'Primera variedad de café arábica cultivada fuera de Etiopía, llevada a Yemen en el siglo XV y de ahí a Java, India y finalmente América Latina.',
    flavor: ['Manzana verde', 'Cítricos', 'Floral suave', 'Azúcar'],
    flavorProfile: { acidez: 78, dulzura: 70, amargor: 22, cuerpo: 52, aroma: 80 },
    intensityLevel: 'suave',
    emoji: '🍏',
    color: '#5a8a3c'
  },
  {
    id: 24,
    name: 'Blue Mountain',
    origin: 'Jamaica',
    flag: '🇯🇲',
    bean: 'Arábica (Blue Mountain)',
    intensity: 2,
    caffeine: 'Moderado (70 mg)',
    description: 'El café más exclusivo del mundo. Suave, sin amargor y con una complejidad que lo hace único. 80% va a Japón.',
    brew: 'Drip o Chemex clásico. Agua muy limpia filtrada es esencial. Temperatura 90°C, molienda media. No necesita azúcar ni leche.',
    history: 'Cultivado a más de 2000 metros en las Blue Mountains de Jamaica. Introducido en 1728, hoy es tan exclusivo que su exportación está regulada por el gobierno jamaicano.',
    flavor: ['Floral', 'Miel', 'Madera suave', 'Sin amargor', 'Sedoso'],
    flavorProfile: { acidez: 65, dulzura: 80, amargor: 15, cuerpo: 70, aroma: 90 },
    intensityLevel: 'suave',
    emoji: '🏔️',
    color: '#1a5276'
  },
  {
    id: 25,
    name: 'Maragogipe',
    origin: 'Brasil',
    flag: '🇧🇷',
    bean: 'Arábica (Maragogipe)',
    intensity: 2,
    caffeine: 'Bajo (45 mg)',
    description: 'El "café elefante" por sus granos gigantes. Suave, ligero y con notas florales sorprendentes para un café brasileño.',
    brew: 'Prensa francesa o chemex. Su grano grande requiere molienda más gruesa. Agua 90°C, extracción 4 minutos para máxima expresión de sus aromas.',
    history: 'Mutación natural descubierta en 1870 en Maragogipe, Bahía (Brasil). Sus granos son hasta 3 veces más grandes que el arábica estándar.',
    flavor: ['Floral', 'Melón', 'Ligero', 'Nuez suave'],
    flavorProfile: { acidez: 55, dulzura: 72, amargor: 20, cuerpo: 40, aroma: 76 },
    intensityLevel: 'suave',
    emoji: '🐘',
    color: '#8FBC8F'
  },
  {
    id: 26,
    name: 'Liberica',
    origin: 'Filipinas / Malasia',
    flag: '🇵🇭',
    bean: 'Liberica',
    intensity: 4,
    caffeine: 'Alto (105 mg)',
    description: 'El tercer tipo de café comercial. Floral y ahumado a la vez, con notas de frutas exóticas y madera.',
    brew: 'Moka pot o método de goteo. Agua a 94°C. Su grano asimétrico requiere molienda personalizada. Ideal como base de café de especialidad.',
    history: 'Salvó la industria cafetera mundial durante la plaga de roya de 1890 que devastó los cultivos de arábica. Hoy representa el 2% de la producción mundial.',
    flavor: ['Flores exóticas', 'Frutas tropicales', 'Ahumado', 'Madera'],
    flavorProfile: { acidez: 50, dulzura: 60, amargor: 65, cuerpo: 75, aroma: 88 },
    intensityLevel: 'fuerte',
    emoji: '🌺',
    color: '#9B2D30'
  },
  {
    id: 27,
    name: 'Excelsa',
    origin: 'África Central',
    flag: '🇨🇦',
    bean: 'Excelsa (Liberica excelsa)',
    intensity: 3,
    caffeine: 'Moderado (85 mg)',
    description: 'Reclasificado como subespecie de Liberica. Frutal, con acidez tártara y un retrogusto oscuro misterioso.',
    brew: 'Excelente en blends de espresso para añadir complejidad. También como single origin en pour-over para apreciar su perfil aromático único.',
    history: 'Descubierto en el lago Chad en 1903. Por décadas se usó solo en blends comerciales, pero el movimiento de café de especialidad lo redescubrió como single origin fascinante.',
    flavor: ['Frutas oscuras', 'Terroso', 'Tártaro', 'Misterioso'],
    flavorProfile: { acidez: 68, dulzura: 58, amargor: 55, cuerpo: 70, aroma: 80 },
    intensityLevel: 'medio',
    emoji: '🌑',
    color: '#2c1654'
  },
  {
    id: 28,
    name: 'Kopi Luwak',
    origin: 'Indonesia',
    flag: '🇮🇩',
    bean: 'Arábica/Robusta (fermentado)',
    intensity: 2,
    caffeine: 'Bajo-Moderado (50 mg)',
    description: 'El café más controversial del mundo. Fermentado por civetas asiáticas, con suavidad y complejidad únicas.',
    brew: 'Drip o pour-over con agua a 88°C. Su perfil es delicado: la fermentación enzimática reduce amargor y aumenta suavidad. No usar prensa.',
    history: 'Las civetas escogen los mejores granos maduros. Sus enzimas digestivas fermentan el café de forma única. El precio puede superar los $500/kg. Hoy existen versiones éticas certificadas.',
    flavor: ['Chocolate con leche', 'Caramelo', 'Terroso suave', 'Sin amargor'],
    flavorProfile: { acidez: 38, dulzura: 78, amargor: 18, cuerpo: 75, aroma: 84 },
    intensityLevel: 'suave',
    emoji: '🦡',
    color: '#6B4226'
  },
  {
    id: 29,
    name: 'Café Arábica Etíope',
    origin: 'Etiopía (Yirgacheffe)',
    flag: '🇪🇹',
    bean: 'Arábica (Heirloom)',
    intensity: 2,
    caffeine: 'Bajo-Moderado (55 mg)',
    description: 'El origen del café. Etiopía donde todo comenzó. Wildly floral, afrutado y con una acidez brillante inconfundible.',
    brew: 'Pour-over o Aeropress. Agua filtrada a 90°C. Este café no necesita nada: sin azúcar, sin leche. Solo agua y café para apreciar su pureza.',
    history: 'El café fue descubierto en la región de Kaffa, Etiopía, donde aún crecen plantas silvestres. El café de Yirgacheffe es el estándar de la industria specialty.',
    flavor: ['Limón', 'Jazmín', 'Bergamota', 'Té de hierbas', 'Floral'],
    flavorProfile: { acidez: 90, dulzura: 75, amargor: 18, cuerpo: 42, aroma: 95 },
    intensityLevel: 'suave',
    emoji: '🌍',
    color: '#c8860a'
  },
  {
    id: 30,
    name: 'Café Robusta Vietnamita',
    origin: 'Vietnam',
    flag: '🇻🇳',
    bean: 'Robusta',
    intensity: 5,
    caffeine: 'Muy alto (200 mg)',
    description: 'El segundo productor mundial. Fuerte, con doble cafeína y usado como base del cà phê sữa đá con leche condensada.',
    brew: 'Phin vietnamita (filtro de goteo lento). Café molido grueso, 25 g. Goteo de 4–5 minutos. Servir sobre leche condensada y hielo abundante.',
    history: 'Vietnam pasó de cero producción en 1975 a segundo exportador mundial en los 90. El robusta vietnamita y el phin son parte de la identidad nacional y de la economía del país.',
    flavor: ['Tierra profunda', 'Chocolate oscuro', 'Grano', 'Leche condensada'],
    flavorProfile: { acidez: 20, dulzura: 30, amargor: 95, cuerpo: 98, aroma: 60 },
    intensityLevel: 'fuerte',
    emoji: '💪',
    color: '#1a0000'
  },
  {
    id: 31,
    name: 'Café Colombiano Supremo',
    origin: 'Colombia (Huila)',
    flag: '🇨🇴',
    bean: 'Arábica (Caturra)',
    intensity: 3,
    caffeine: 'Moderado (80 mg)',
    description: 'El embajador del café latinoamericano. Equilibrado, con caramelo, nuez y acidez brillante de frutos cítricos.',
    brew: 'Excelente en cualquier método. Drip, Chemex o espresso. Agua 92°C. El colombiano es versátil: adaptable a cualquier preferencia de extracción.',
    history: 'Colombia produce café desde el siglo XVIII gracias a los jesuitas. Juan Valdez, creado en 1959, es el personaje de marketing más reconocido del agro latinoamericano.',
    flavor: ['Caramelo', 'Avellana', 'Cítrico', 'Manzana verde'],
    flavorProfile: { acidez: 70, dulzura: 75, amargor: 40, cuerpo: 68, aroma: 78 },
    intensityLevel: 'medio',
    emoji: '🇨🇴',
    color: '#c8860a'
  },
  {
    id: 32,
    name: 'Café Hawaiian Kona',
    origin: 'Hawaii, EE.UU.',
    flag: '🇺🇸',
    bean: 'Arábica (Kona Typica)',
    intensity: 2,
    caffeine: 'Moderado (65 mg)',
    description: 'Uno de los cafés más raros y caros. Cultivado en las faldas del volcán Mauna Loa con neblina oceánica.',
    brew: 'Pour-over o Chemex con agua a 90°C. Molienda media. Su delicadeza requiere preparación cuidadosa sin sobre-extracción.',
    history: 'El café llegó a Hawaii en 1825. Los volcanes activos, la altitud y el microclima de la Kona Coast crean condiciones únicas que ningún otro lugar del mundo puede replicar.',
    flavor: ['Nuez de macadamia', 'Vainilla', 'Miel', 'Frutas tropicales'],
    flavorProfile: { acidez: 60, dulzura: 82, amargor: 22, cuerpo: 65, aroma: 88 },
    intensityLevel: 'suave',
    emoji: '🌺',
    color: '#ff6b35'
  }
];

// Unir todos los cafés en un solo array global
const ALL_COFFEES = [...COFFEES, ...COFFEES_EXTRA, ...COFFEES_PREMIUM];

/* ──────────────────────────────────────────
   2. ESTADO DE LA APLICACIÓN
────────────────────────────────────────── */
const AppState = {
  theme: 'dark',          // 'dark' | 'light'
  contrast: false,         // alto contraste
  fontSize: 'medium',      // 'small'|'medium'|'large'|'xlarge'
  favorites: [],           // IDs de cafés favoritos
  orders: [],              // historial de pedidos
  explored: new Set(),     // IDs de cafés vistos
  searchQuery: '',
  activeFilter: 'all',
  currentCoffee: null,     // café abierto en modal
  speechUtterance: null,
  speechRate: 1,

  load() {
    try {
      this.theme      = localStorage.getItem('cap_theme')    || 'dark';
      this.contrast   = localStorage.getItem('cap_contrast') === 'true';
      this.fontSize   = localStorage.getItem('cap_fontsize') || 'medium';
      this.favorites  = JSON.parse(localStorage.getItem('cap_favorites') || '[]');
      this.orders     = JSON.parse(localStorage.getItem('cap_orders')    || '[]');
      const expArr    = JSON.parse(localStorage.getItem('cap_explored')  || '[]');
      this.explored   = new Set(expArr);
    } catch { /* si falla, usar defaults */ }
  },

  save() {
    try {
      localStorage.setItem('cap_theme',     this.theme);
      localStorage.setItem('cap_contrast',  String(this.contrast));
      localStorage.setItem('cap_fontsize',  this.fontSize);
      localStorage.setItem('cap_favorites', JSON.stringify(this.favorites));
      localStorage.setItem('cap_orders',    JSON.stringify(this.orders));
      localStorage.setItem('cap_explored',  JSON.stringify([...this.explored]));
    } catch { /* modo privado u otras restricciones */ }
  },

  isFavorite(id) { return this.favorites.includes(id); },

  toggleFavorite(id) {
    if (this.isFavorite(id)) {
      this.favorites = this.favorites.filter(f => f !== id);
    } else {
      this.favorites.push(id);
    }
    this.save();
  },

  addOrder(order) {
    this.orders.unshift(order);
    this.save();
  },

  markExplored(id) {
    this.explored.add(id);
    this.save();
  }
};

/* ──────────────────────────────────────────
   3. SELECTORES DOM
────────────────────────────────────────── */
const DOM = {
  body:             document.body,
  btnTheme:         document.getElementById('btn-theme'),
  iconMoon:         document.querySelector('.icon-moon'),
  iconSun:          document.querySelector('.icon-sun'),
  btnContrast:      document.getElementById('btn-contrast'),
  btnFontUp:        document.getElementById('btn-font-up'),
  btnFontDown:      document.getElementById('btn-font-down'),
  btnMenu:          document.getElementById('btn-menu'),
  mobileNav:        document.getElementById('mobile-nav'),
  searchInput:      document.getElementById('search-input'),
  btnClearSearch:   document.getElementById('btn-clear-search'),
  filterChips:      document.querySelectorAll('.filter-chip'),
  resultsNum:       document.getElementById('results-num'),
  catalogGrid:      document.getElementById('catalog-grid'),
  emptyState:       document.getElementById('empty-state'),
  btnResetSearch:   document.getElementById('btn-reset-search'),
  favoritesGrid:    document.getElementById('favorites-grid'),
  favoritesEmpty:   document.getElementById('favorites-empty'),
  btnClearFavs:     document.getElementById('btn-clear-favorites'),
  ordersList:       document.getElementById('orders-list'),
  ordersEmpty:      document.getElementById('orders-empty'),
  btnClearOrders:   document.getElementById('btn-clear-orders'),
  kpiExplored:      document.getElementById('kpi-explored'),
  kpiFavorites:     document.getElementById('kpi-favorites'),
  kpiOrders:        document.getElementById('kpi-orders'),
  kpiStreak:        document.getElementById('kpi-streak'),
  barExplored:      document.getElementById('bar-explored'),
  barFavorites:     document.getElementById('bar-favorites'),
  barOrders:        document.getElementById('bar-orders'),
  barStreak:        document.getElementById('bar-streak'),
  chartIntensity:   document.getElementById('chart-intensity'),
  modalOverlay:     document.getElementById('modal-overlay'),
  modalHeroBg:      document.getElementById('modal-hero-bg'),
  modalHeroEmoji:   document.getElementById('modal-hero-emoji'),
  modalBadge:       document.getElementById('modal-badge'),
  modalBadgeBean:   document.getElementById('modal-badge-bean'),
  modalTitle:       document.getElementById('modal-title'),
  modalOrigin:      document.getElementById('modal-origin'),
  modalIntensity:   document.getElementById('modal-intensity-stars'),
  modalClose:       document.getElementById('modal-close'),
  modalDesc:        document.getElementById('modal-desc'),
  modalCountry:     document.getElementById('modal-country'),
  modalBean:        document.getElementById('modal-bean'),
  modalCaffeine:    document.getElementById('modal-caffeine'),
  modalIntensityVal:document.getElementById('modal-intensity-val'),
  modalTemp:        document.getElementById('modal-temp'),
  modalType:        document.getElementById('modal-type'),
  modalFlavorQuick: document.getElementById('modal-flavor-quick'),
  modalFlavorTags:  document.getElementById('modal-flavor-tags'),
  modalFlavorChart: document.getElementById('modal-flavor-chart'),
  modalBrewMethod:  document.getElementById('modal-brew-method'),
  modalBrewSteps:   document.getElementById('modal-brew-steps'),
  modalHistoryQuote:document.getElementById('modal-history-quote'),
  modalHistory:     document.getElementById('modal-history'),
  modalHistoryMeta: document.getElementById('modal-history-meta'),
  modalBtnSpeak:    document.getElementById('modal-btn-speak'),
  modalBtnStop:     document.getElementById('modal-btn-stop'),
  speechRate:       document.getElementById('speech-rate'),
  speechRateVal:    document.getElementById('speech-rate-val'),
  modalBtnFav:      document.getElementById('modal-btn-favorite'),
  modalFavText:     document.getElementById('modal-fav-text'),
  modalBtnOrder:    document.getElementById('modal-btn-order'),
  modalTabs:        document.querySelectorAll('.modal-tab'),
  modalPanels:      document.querySelectorAll('.modal-panel'),
  toastContainer:   document.getElementById('toast-container'),
  orderSuccess:     document.getElementById('order-success'),
  orderNum:         document.getElementById('order-num'),
  orderCoffeeName:  document.getElementById('order-coffee-name'),
  orderDate:        document.getElementById('order-date'),
  btnCloseOrder:    document.getElementById('btn-close-order-success'),
  srAnnounce:       document.getElementById('sr-announce'),
  heroParticles:    document.getElementById('hero-particles'),
  navLinks:         document.querySelectorAll('.nav-link'),
  mobileNavLinks:   document.querySelectorAll('.mobile-nav-link'),
};

/* ──────────────────────────────────────────
   4. UTILIDADES
────────────────────────────────────────── */

/** Anuncia mensajes a lectores de pantalla */
function srAnnounce(msg, urgent = false) {
  const el = urgent ? document.getElementById('sr-alert') : DOM.srAnnounce;
  if (!el) return;
  el.textContent = '';
  requestAnimationFrame(() => { el.textContent = msg; });
}

/** Genera toast visual */
function showToast(message, type = 'default', icon = '☕') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <span class="toast-icon" aria-hidden="true">${icon}</span>
    <span class="toast-message">${escapeHtml(message)}</span>
  `;
  DOM.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-leaving');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 3200);
}

/** Genera número de pedido único */
function generateOrderId() {
  return '#' + String(Date.now()).slice(-6) + String(Math.floor(Math.random() * 100)).padStart(2, '0');
}

/** Formatea fecha para pedidos */
function formatDate(date = new Date()) {
  return date.toLocaleDateString('es-ES', {
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });
}

/** Escapa HTML para evitar XSS */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
}

/** Debounce */
function debounce(fn, delay = 280) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Genera estrellas de intensidad HTML */
function buildIntensityStars(level, max = 5) {
  let html = '';
  for (let i = 1; i <= max; i++) {
    html += `<span class="intensity-star ${i <= level ? 'filled' : ''}" aria-hidden="true">★</span>`;
  }
  return html;
}

/** Genera puntos de intensidad HTML (tarjetas) */
function buildIntensityDots(level, max = 5) {
  let html = '<div class="intensity-bar" aria-hidden="true">';
  for (let i = 1; i <= max; i++) {
    html += `<span class="intensity-dot ${i <= level ? 'filled' : ''}"></span>`;
  }
  html += '</div>';
  return html;
}

/** Genera badge de intensidad */
function intensityClass(level) {
  if (level <= 2) return 'suave';
  if (level <= 3) return 'medio';
  return 'fuerte';
}
function intensityLabel(level) {
  if (level <= 2) return 'Suave';
  if (level <= 3) return 'Medio';
  return 'Fuerte';
}

/** Genera imagen de placeholder con emoji y color */
function buildCardImg(coffee) {
  return `
    <div class="card-img-fallback"
         style="background: linear-gradient(135deg, ${coffee.color}33, ${coffee.color}66)"
         role="img"
         aria-label="Imagen decorativa de ${escapeHtml(coffee.name)}: ${coffee.emoji}">
      ${coffee.emoji}
    </div>`;
}

/* ──────────────────────────────────────────
   5. RENDERIZADO DEL CATÁLOGO
────────────────────────────────────────── */

/** Filtra y retorna cafés según búsqueda y filtro activo */
function getFilteredCoffees() {
  const q = AppState.searchQuery.trim().toLowerCase();
  const f = AppState.activeFilter;
  return ALL_COFFEES.filter(c => {
    const matchSearch = !q ||
      c.name.toLowerCase().includes(q) ||
      c.origin.toLowerCase().includes(q) ||
      c.bean.toLowerCase().includes(q) ||
      c.intensityLevel.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q);
    const matchFilter =
      f === 'all'     ? true :
      f === 'arabica' ? c.bean.toLowerCase().includes('arábica') || c.bean.toLowerCase().includes('arabica') :
      f === 'robusta' ? c.bean.toLowerCase().includes('robusta') :
      c.intensityLevel === f;
    return matchSearch && matchFilter;
  });
}

/** Construye la tarjeta HTML de un café */
function buildCoffeeCard(coffee, index = 0) {
  const isFav    = AppState.isFavorite(coffee.id);
  const intClass = intensityClass(coffee.intensity);
  const intLabel = intensityLabel(coffee.intensity);
  const delay    = Math.min(index * 0.06, 0.5);

  return `
  <article class="coffee-card reveal"
           role="listitem"
           style="animation-delay:${delay}s"
           data-id="${coffee.id}"
           aria-labelledby="card-title-${coffee.id}">

    <div class="card-img-wrap">
      ${buildCardImg(coffee)}

      <span class="card-intensity-badge intensity-${intClass}"
            aria-label="Intensidad ${intLabel}">
        ${intLabel}
      </span>

      <button class="card-fav-btn"
              aria-label="${isFav ? 'Quitar de favoritos: ' : 'Agregar a favoritos: '}${escapeHtml(coffee.name)}"
              aria-pressed="${isFav}"
              data-action="favorite"
              data-id="${coffee.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
    </div>

    <div class="card-body">
      <div class="card-meta">
        <span class="card-country">
          <span aria-hidden="true">${coffee.flag}</span>
          ${escapeHtml(coffee.origin)}
        </span>
        <span class="card-bean-tag">${escapeHtml(coffee.bean.split(' ')[0])}</span>
      </div>

      <h3 id="card-title-${coffee.id}" class="card-title">${escapeHtml(coffee.name)}</h3>

      ${buildIntensityDots(coffee.intensity)}

      <p class="card-desc">${escapeHtml(coffee.description)}</p>

      <div class="card-actions">
        <button class="card-btn card-btn-details"
                aria-label="Ver detalles de ${escapeHtml(coffee.name)}"
                aria-haspopup="dialog"
                data-action="details"
                data-id="${coffee.id}">
          <span aria-hidden="true">📖</span> Ver detalles
        </button>
        <button class="card-btn card-btn-speak"
                aria-label="Escuchar descripción de ${escapeHtml(coffee.name)}"
                data-action="speak"
                data-id="${coffee.id}">
          <span aria-hidden="true">🔊</span> Escuchar
        </button>
        <button class="card-btn card-btn-order"
                aria-label="Solicitar ${escapeHtml(coffee.name)}"
                data-action="order"
                data-id="${coffee.id}">
          <span aria-hidden="true">🛒</span> Solicitar
        </button>
      </div>
    </div>
  </article>`;
}

/** Renderiza el catálogo principal */
function renderCatalog() {
  const coffees = getFilteredCoffees();
  DOM.resultsNum.textContent = coffees.length;

  if (coffees.length === 0) {
    DOM.catalogGrid.innerHTML = '';
    DOM.emptyState.hidden = false;
    srAnnounce('Sin resultados. Intenta con otros términos de búsqueda.');
    return;
  }

  DOM.emptyState.hidden = true;
  DOM.catalogGrid.innerHTML = coffees.map((c, i) => buildCoffeeCard(c, i)).join('');

  // Activar animaciones de reveal
  requestAnimationFrame(() => {
    document.querySelectorAll('#catalog-grid .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });

  srAnnounce(`Mostrando ${coffees.length} cafés.`);
  updateDashboard();
}

/** Renderiza la sección de favoritos */
function renderFavorites() {
  const favCoffees = ALL_COFFEES.filter(c => AppState.isFavorite(c.id));
  if (favCoffees.length === 0) {
    DOM.favoritesGrid.innerHTML = '';
    DOM.favoritesEmpty.hidden = false;
    DOM.btnClearFavs.hidden = true;
    return;
  }
  DOM.favoritesEmpty.hidden = true;
  DOM.btnClearFavs.hidden = false;
  DOM.favoritesGrid.innerHTML = favCoffees.map((c, i) => buildCoffeeCard(c, i)).join('');
  requestAnimationFrame(() => {
    document.querySelectorAll('#favorites-grid .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

/** Renderiza el historial de pedidos */
function renderOrders() {
  if (AppState.orders.length === 0) {
    DOM.ordersList.innerHTML = '';
    DOM.ordersEmpty.hidden = false;
    DOM.btnClearOrders.hidden = true;
    return;
  }
  DOM.ordersEmpty.hidden = true;
  DOM.btnClearOrders.hidden = false;
  DOM.ordersList.innerHTML = AppState.orders.map(o => `
    <article class="order-item reveal" role="listitem"
             aria-label="Pedido ${o.id}: ${escapeHtml(o.coffeeName)}, ${escapeHtml(o.date)}">
      <span class="order-emoji" aria-hidden="true">${o.emoji || '☕'}</span>
      <div class="order-info">
        <div class="order-coffee-name">${escapeHtml(o.coffeeName)}</div>
        <div class="order-meta">
          <span>${escapeHtml(o.id)}</span> · <span>${escapeHtml(o.date)}</span>
        </div>
      </div>
      <span class="order-status-badge">✓ Entregado</span>
    </article>
  `).join('');
  requestAnimationFrame(() => {
    document.querySelectorAll('#orders-list .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });
}

/* ──────────────────────────────────────────
   6. DASHBOARD
────────────────────────────────────────── */
function updateDashboard() {
  const explored  = AppState.explored.size;
  const favorites = AppState.favorites.length;
  const orders    = AppState.orders.length;
  const streak    = 1; // simplificado

  animateNumber(DOM.kpiExplored,  explored);
  animateNumber(DOM.kpiFavorites, favorites);
  animateNumber(DOM.kpiOrders,    orders);
  animateNumber(DOM.kpiStreak,    streak);

  const maxE = ALL_COFFEES.length;
  const maxF = Math.max(maxE, 1);
  const maxO = Math.max(orders, 10);

  DOM.barExplored.style.width  = `${Math.min((explored  / maxE) * 100, 100)}%`;
  DOM.barFavorites.style.width = `${Math.min((favorites / maxF) * 100, 100)}%`;
  DOM.barOrders.style.width    = `${Math.min((orders    / maxO) * 100, 100)}%`;
  DOM.barStreak.style.width    = '10%';

  // Actualizar aria-labels de KPI
  DOM.kpiExplored.setAttribute('aria-label',  `${explored} cafés explorados`);
  DOM.kpiFavorites.setAttribute('aria-label', `${favorites} favoritos guardados`);
  DOM.kpiOrders.setAttribute('aria-label',    `${orders} pedidos realizados`);

  renderIntensityChart();
}

/** Anima número en KPI */
function animateNumber(el, target) {
  if (!el) return;
  const current = parseInt(el.textContent) || 0;
  if (current === target) return;
  const step = target > current ? 1 : -1;
  const duration = 600;
  const frames = Math.abs(target - current);
  const interval = frames > 0 ? duration / frames : 0;
  let val = current;
  const timer = setInterval(() => {
    val += step;
    el.textContent = val;
    if (val === target) clearInterval(timer);
  }, Math.max(interval, 16));
}

/** Renderiza gráfico de barras de intensidad */
function renderIntensityChart() {
  const counts = { suave: 0, medio: 0, fuerte: 0 };
  ALL_COFFEES.forEach(c => { if (counts[c.intensityLevel] !== undefined) counts[c.intensityLevel]++; });
  const total = ALL_COFFEES.length;

  const labels = { suave: 'Suave', medio: 'Medio', fuerte: 'Fuerte' };
  const classes = { suave: 'chart-bar-suave', medio: 'chart-bar-medio', fuerte: 'chart-bar-fuerte' };

  DOM.chartIntensity.innerHTML = Object.entries(counts).map(([key, val]) => {
    const pct = Math.round((val / total) * 100);
    return `
      <div class="chart-bar-row">
        <span class="chart-bar-label">${labels[key]}</span>
        <div class="chart-bar-track">
          <div class="chart-bar-value ${classes[key]}"
               style="width:${pct}%"
               role="presentation">
            ${val}
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ──────────────────────────────────────────
   7. MODAL DE DETALLES
────────────────────────────────────────── */
let lastFocusedElement = null;

function openModal(coffeeId) {
  const coffee = ALL_COFFEES.find(c => c.id === coffeeId);
  if (!coffee) return;

  AppState.currentCoffee = coffee;
  AppState.markExplored(coffee.id);
  updateDashboard();

  /* ── Datos derivados ── */
  const intClass = intensityClass(coffee.intensity);
  const intLabel = intensityLabel(coffee.intensity);

  // Temperatura recomendada por intensidad
  const tempMap = { suave: '88–91 °C', medio: '90–93 °C', fuerte: '92–95 °C' };
  const temp = tempMap[coffee.intensityLevel] || '90–94 °C';

  // Tipo de bebida derivado del nombre
  const typeMap = {
    suave:  'Café suave · Bajo amargor',
    medio:  'Café equilibrado · Perfil versátil',
    fuerte: 'Café intenso · Alto cuerpo'
  };
  const drinkType = typeMap[coffee.intensityLevel] || 'Café de especialidad';

  /* ── HERO ── */
  DOM.modalHeroBg.style.background =
    `linear-gradient(135deg, ${coffee.color}cc 0%, ${coffee.color}44 60%, transparent 100%)`;
  DOM.modalHeroEmoji.textContent = coffee.emoji;

  DOM.modalBadge.className   = `modal-badge intensity-${intClass}`;
  DOM.modalBadge.textContent = intLabel;
  DOM.modalBadgeBean.textContent = coffee.bean.split(' ')[0];

  DOM.modalTitle.textContent  = coffee.name;
  DOM.modalOrigin.textContent = `${coffee.flag}  ${coffee.origin}`;

  // Estrellas de intensidad
  let starsHtml = '';
  for (let i = 1; i <= 5; i++) {
    starsHtml += `<span class="hero-star ${i <= coffee.intensity ? 'on' : 'off'}" aria-hidden="true">★</span>`;
  }
  starsHtml += `<span class="hero-star-label">${coffee.intensity}/5</span>`;
  DOM.modalIntensity.innerHTML = starsHtml;
  DOM.modalIntensity.setAttribute('aria-label', `Intensidad ${coffee.intensity} de 5`);

  /* ── PANEL DETALLES ── */
  DOM.modalDesc.textContent = coffee.description;

  DOM.modalCountry.textContent     = `${coffee.flag} ${coffee.origin}`;
  DOM.modalBean.textContent        = coffee.bean;
  DOM.modalCaffeine.textContent    = coffee.caffeine;
  DOM.modalIntensityVal.textContent = `${intLabel} (${coffee.intensity}/5)`;
  DOM.modalTemp.textContent        = temp;
  DOM.modalType.textContent        = drinkType;

  // Notas de sabor rápidas
  DOM.modalFlavorQuick.innerHTML = (coffee.flavor || [])
    .map(f => `<span class="flavor-tag">${escapeHtml(f)}</span>`).join('');

  /* ── PANEL SABOR ── */
  DOM.modalFlavorTags.innerHTML = (coffee.flavor || [])
    .map(f => `<span class="flavor-tag flavor-tag--lg">${escapeHtml(f)}</span>`).join('');

  if (coffee.flavorProfile) {
    const labelsMap = {
      acidez:   { label: 'Acidez',   icon: '🍋' },
      dulzura:  { label: 'Dulzura',  icon: '🍬' },
      amargor:  { label: 'Amargor',  icon: '🫚' },
      cuerpo:   { label: 'Cuerpo',   icon: '💪' },
      aroma:    { label: 'Aroma',    icon: '🌸' }
    };
    DOM.modalFlavorChart.innerHTML = Object.entries(coffee.flavorProfile).map(([k, v]) => {
      const meta = labelsMap[k] || { label: k, icon: '●' };
      const color = v >= 75 ? 'var(--clr-brand-accent)' :
                   v >= 50 ? 'var(--clr-brand-primary)' : 'var(--clr-brand-secondary)';
      return `
        <div class="flavor-row">
          <span class="flavor-icon" aria-hidden="true">${meta.icon}</span>
          <span class="flavor-name">${meta.label}</span>
          <div class="flavor-track" role="presentation">
            <div class="flavor-fill"
                 style="width:0%; background:${color}"
                 data-target="${v}"></div>
          </div>
          <span class="flavor-val" aria-label="${meta.label}: ${v} de 100">${v}</span>
        </div>`;
    }).join('');
    requestAnimationFrame(() => {
      document.querySelectorAll('#modal-flavor-chart .flavor-fill').forEach(bar => {
        bar.style.width = bar.dataset.target + '%';
      });
    });
  }

  /* ── PANEL PREPARACIÓN ── */
  DOM.modalBrewMethod.textContent = coffee.name;

  // Dividir el texto de preparación en pasos
  const brewSentences = coffee.brew
    .split(/(?<=[.!?])\s+/)
    .filter(s => s.trim().length > 0);

  DOM.modalBrewSteps.innerHTML = brewSentences.map((step, i) => `
    <div class="brew-step">
      <span class="brew-step-num" aria-hidden="true">${i + 1}</span>
      <p class="brew-step-text">${escapeHtml(step)}</p>
    </div>`).join('');

  /* ── PANEL HISTORIA ── */
  // Primera oración como quote destacado
  const firstSentence = coffee.history.split('.')[0] + '.';
  DOM.modalHistoryQuote.textContent = firstSentence;
  DOM.modalHistory.textContent = coffee.history;

  // Meta info de la historia
  DOM.modalHistoryMeta.innerHTML = `
    <span class="history-tag">
      <span aria-hidden="true">🌍</span> ${escapeHtml(coffee.origin)}
    </span>
    <span class="history-tag">
      <span aria-hidden="true">🫘</span> ${escapeHtml(coffee.bean)}
    </span>
    <span class="history-tag intensity-${intClass}">
      <span aria-hidden="true">🔥</span> ${intLabel}
    </span>`;

  /* ── Estado favorito ── */
  updateModalFavBtn(coffee.id);

  /* ── Reset a tab "info" ── */
  switchModalTab('info');

  /* ── Mostrar modal ── */
  DOM.modalOverlay.hidden = false;
  DOM.modalOverlay.removeAttribute('hidden');
  lastFocusedElement = document.activeElement;
  document.body.style.overflow = 'hidden';

  // Scroll al top del modal
  const container = DOM.modalOverlay.querySelector('.modal-container');
  if (container) container.scrollTop = 0;

  requestAnimationFrame(() => { DOM.modalClose.focus(); });
  srAnnounce(`Detalles de ${coffee.name}. Origen: ${coffee.origin}. ${coffee.description}`);
}

function closeModal() {
  stopSpeech();
  DOM.modalOverlay.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
  AppState.currentCoffee = null;
  srAnnounce('Modal cerrado.');
}

function updateModalFavBtn(id) {
  const isFav = AppState.isFavorite(id);
  DOM.modalBtnFav.setAttribute('aria-pressed', String(isFav));
  DOM.modalFavText.textContent = isFav ? 'Guardado' : 'Favorito';
  DOM.modalBtnFav.setAttribute('aria-label', isFav ? 'Quitar de favoritos' : 'Agregar a favoritos');
}

function switchModalTab(tabName) {
  DOM.modalTabs.forEach(tab => {
    const isActive = tab.dataset.tab === tabName;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
  DOM.modalPanels.forEach(panel => {
    const isActive = panel.id === `panel-${tabName}`;
    panel.classList.toggle('active', isActive);
    panel.hidden = !isActive;
  });
}

/** Trampa de foco en el modal (WCAG 2.1 Success Criterion 2.1.2) */
function trapFocus(e) {
  if (!DOM.modalOverlay || DOM.modalOverlay.hidden) return;
  const focusable = DOM.modalOverlay.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  if (e.key === 'Escape') closeModal();
}

/* ──────────────────────────────────────────
   8. SPEECH SYNTHESIS
────────────────────────────────────────── */
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showToast('Tu navegador no soporta lectura de voz.', 'warning', '⚠️');
    return;
  }
  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang  = 'es-ES';
  utterance.rate  = AppState.speechRate;
  utterance.pitch = 1;
  utterance.onstart = () => {
    DOM.modalBtnSpeak.hidden = true;
    DOM.modalBtnStop.hidden  = false;
    srAnnounce('Iniciando lectura de voz.');
  };
  utterance.onend = utterance.onerror = () => {
    DOM.modalBtnSpeak.hidden = false;
    DOM.modalBtnStop.hidden  = true;
    srAnnounce('Lectura de voz finalizada.');
  };
  AppState.speechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (DOM.modalBtnSpeak) DOM.modalBtnSpeak.hidden = false;
  if (DOM.modalBtnStop)  DOM.modalBtnStop.hidden  = true;
}

function speakCoffeeFromCard(coffeeId) {
  const coffee = ALL_COFFEES.find(c => c.id === coffeeId);
  if (!coffee) return;

  // Texto estructurado: nombre primero (con pausa), luego origen y descripción
  const text = [
    coffee.name + '.',                          // nombre claro al inicio
    `Origen: ${coffee.origin}.`,
    coffee.description,
    `Intensidad: ${intensityLabel(coffee.intensity)}.`,
    `Tipo de grano: ${coffee.bean}.`
  ].join(' ');

  speakText(text);

  showToast(`🔊 Escuchando: ${coffee.name}`, 'info', '🔊');
  srAnnounce(`Leyendo en voz alta: ${coffee.name}`);
}

/* ──────────────────────────────────────────
   9. SISTEMA DE PEDIDOS
────────────────────────────────────────── */
function placeOrder(coffeeId) {
  const coffee = ALL_COFFEES.find(c => c.id === coffeeId);
  if (!coffee) return;
  const order = {
    id:         generateOrderId(),
    coffeeId:   coffee.id,
    coffeeName: coffee.name,
    emoji:      coffee.emoji,
    date:       formatDate(),
    status:     'delivered'
  };
  AppState.addOrder(order);
  renderOrders();
  updateDashboard();

  // Mostrar overlay de éxito
  DOM.orderNum.textContent        = order.id;
  DOM.orderCoffeeName.textContent = order.coffeeName;
  DOM.orderDate.textContent       = order.date;
  DOM.orderSuccess.hidden = false;
  DOM.orderSuccess.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    DOM.btnCloseOrder.focus();
  });

  srAnnounce(`Pedido confirmado. Número ${order.id}. ${coffee.name} en camino.`, true);

  // Cerrar modal si estaba abierto
  if (!DOM.modalOverlay.hidden) {
    DOM.modalOverlay.hidden = true;
    document.body.style.overflow = 'hidden'; // mantener bloqueado por el order success
  }
}

function closeOrderSuccess() {
  DOM.orderSuccess.hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement) lastFocusedElement.focus();
  showToast('¡Pedido guardado en tu historial!', 'success', '✅');
}

/* ──────────────────────────────────────────
   10. TEMA Y ACCESIBILIDAD
────────────────────────────────────────── */
function applyTheme() {
  DOM.body.classList.toggle('theme-dark',  AppState.theme === 'dark');
  DOM.body.classList.toggle('theme-light', AppState.theme === 'light');
  const isDark = AppState.theme === 'dark';
  DOM.btnTheme.setAttribute('aria-pressed', String(isDark));
  DOM.btnTheme.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
  DOM.iconMoon.style.display = isDark ? 'block' : 'none';
  DOM.iconSun.style.display  = isDark ? 'none'  : 'block';
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
  AppState.save();
  srAnnounce(`Modo ${AppState.theme === 'dark' ? 'oscuro' : 'claro'} activado.`);
  showToast(`Modo ${AppState.theme === 'dark' ? 'oscuro 🌙' : 'claro ☀️'} activado`);
}

function applyContrast() {
  DOM.body.classList.toggle('high-contrast', AppState.contrast);
  DOM.btnContrast.setAttribute('aria-pressed', String(AppState.contrast));
  DOM.btnContrast.setAttribute('aria-label', AppState.contrast ? 'Desactivar alto contraste' : 'Activar alto contraste');
}

function toggleContrast() {
  AppState.contrast = !AppState.contrast;
  applyContrast();
  AppState.save();
  srAnnounce(`Alto contraste ${AppState.contrast ? 'activado' : 'desactivado'}.`);
  showToast(`Alto contraste ${AppState.contrast ? 'activado ◑' : 'desactivado'}`);
}

const FONT_SIZES = ['small', 'medium', 'large', 'xlarge'];
function applyFontSize() {
  DOM.body.setAttribute('data-font-size', AppState.fontSize);
}

function changeFontSize(direction) {
  const idx     = FONT_SIZES.indexOf(AppState.fontSize);
  const newIdx  = Math.max(0, Math.min(FONT_SIZES.length - 1, idx + direction));
  AppState.fontSize = FONT_SIZES[newIdx];
  applyFontSize();
  AppState.save();
  const labels = { small: 'Pequeño', medium: 'Normal', large: 'Grande', xlarge: 'Muy grande' };
  srAnnounce(`Tamaño de texto: ${labels[AppState.fontSize]}.`);
  if (newIdx === 0 || newIdx === FONT_SIZES.length - 1) {
    showToast(`Tamaño ${direction === 1 ? 'máximo' : 'mínimo'} alcanzado`, 'warning', '⚠️');
  }
}

/* ──────────────────────────────────────────
   11. MENÚ MÓVIL
────────────────────────────────────────── */
function toggleMobileNav() {
  const isOpen = DOM.mobileNav.hidden === false;
  DOM.mobileNav.hidden   = isOpen;
  DOM.mobileNav.setAttribute('aria-hidden', String(isOpen));
  DOM.btnMenu.setAttribute('aria-expanded', String(!isOpen));
  DOM.btnMenu.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
}

function closeMobileNav() {
  DOM.mobileNav.hidden = true;
  DOM.mobileNav.setAttribute('aria-hidden', 'true');
  DOM.btnMenu.setAttribute('aria-expanded', 'false');
  DOM.btnMenu.setAttribute('aria-label', 'Abrir menú');
}

/* ──────────────────────────────────────────
   12. BÚSQUEDA Y FILTROS
────────────────────────────────────────── */
const debouncedSearch = debounce(() => {
  renderCatalog();
}, 250);

function handleSearch(value) {
  AppState.searchQuery = value;
  DOM.btnClearSearch.hidden = value.length === 0;
  debouncedSearch();
}

function clearSearch() {
  DOM.searchInput.value = '';
  AppState.searchQuery  = '';
  DOM.btnClearSearch.hidden = true;
  renderCatalog();
  DOM.searchInput.focus();
  srAnnounce('Búsqueda borrada.');
}

function setFilter(filterValue) {
  AppState.activeFilter = filterValue;
  DOM.filterChips.forEach(chip => {
    const isActive = chip.dataset.filter === filterValue;
    chip.classList.toggle('active', isActive);
    chip.setAttribute('aria-pressed', String(isActive));
  });
  renderCatalog();
}

/* ──────────────────────────────────────────
   13. DELEGACIÓN DE EVENTOS (tarjetas)
────────────────────────────────────────── */
function handleCardAction(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  const id     = parseInt(btn.dataset.id);
  if (!action || !id) return;

  switch (action) {
    case 'details':
      openModal(id);
      break;
    case 'favorite':
      toggleFavoriteCard(id, btn);
      break;
    case 'speak':
      speakCoffeeFromCard(id);
      break;
    case 'order':
      placeOrder(id);
      break;
  }
}

function toggleFavoriteCard(id, btn) {
  AppState.toggleFavorite(id);
  const isFav   = AppState.isFavorite(id);
  const coffee  = ALL_COFFEES.find(c => c.id === id);
  btn.setAttribute('aria-pressed', String(isFav));
  btn.setAttribute('aria-label', `${isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}: ${coffee ? coffee.name : ''}`);
  btn.textContent = isFav ? '❤️' : '🤍';
  renderFavorites();
  updateDashboard();
  showToast(
    isFav ? `${coffee.name} agregado a favoritos` : `${coffee.name} quitado de favoritos`,
    isFav ? 'success' : 'default',
    isFav ? '❤️' : '🤍'
  );
  srAnnounce(`${coffee.name} ${isFav ? 'agregado a' : 'eliminado de'} favoritos.`);
}

/* ──────────────────────────────────────────
   14. PARTÍCULAS DEL HERO
────────────────────────────────────────── */
function createParticles() {
  if (!DOM.heroParticles) return;
  // Verificar preferencia de movimiento reducido
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const count = window.innerWidth < 768 ? 12 : 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      animation-duration: ${6 + Math.random() * 10}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: ${0.2 + Math.random() * 0.6};
    `;
    DOM.heroParticles.appendChild(p);
  }
}

/* ──────────────────────────────────────────
   15. SCROLL REVEAL (Intersection Observer)
────────────────────────────────────────── */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ──────────────────────────────────────────
   16. ACTIVE NAV LINK (Scroll)
────────────────────────────────────────── */
function initActiveNavOnScroll() {
  const sections = ['hero', 'search-section', 'catalog', 'favorites', 'orders', 'dashboard'];
  const navMap   = {
    'hero': 'Inicio', 'search-section': 'Catálogo', 'catalog': 'Catálogo',
    'favorites': 'Favoritos', 'orders': 'Pedidos', 'dashboard': 'Dashboard'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id    = entry.target.id;
      const label = navMap[id];
      DOM.navLinks.forEach(link => {
        const isActive = link.textContent.trim() === label;
        link.classList.toggle('active', isActive);
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
      });
    });
  }, { threshold: 0.3 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ──────────────────────────────────────────
   17. LOADING SKELETONS
────────────────────────────────────────── */
function showSkeletons(count = 6) {
  const skeletons = Array.from({ length: count }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>`).join('');
  DOM.catalogGrid.innerHTML = skeletons;
}

/* ──────────────────────────────────────────
   18. INICIALIZACIÓN
────────────────────────────────────────── */
function init() {
  // Cargar estado guardado
  AppState.load();

  // Aplicar preferencias
  applyTheme();
  applyContrast();
  applyFontSize();

  // Mostrar skeletons brevemente para simular carga
  showSkeletons(8);
  setTimeout(() => {
    renderCatalog();
    renderFavorites();
    renderOrders();
    updateDashboard();
    createParticles();
    initScrollReveal();
    initActiveNavOnScroll();
    renderIntensityChart();
    // Re-observar los nuevos elementos
    setTimeout(initScrollReveal, 200);
  }, 600);

  // ─── Event Listeners ───────────────────

  // Tema
  DOM.btnTheme.addEventListener('click', toggleTheme);

  // Alto contraste
  DOM.btnContrast.addEventListener('click', toggleContrast);

  // Fuente
  DOM.btnFontUp.addEventListener('click',   () => changeFontSize(1));
  DOM.btnFontDown.addEventListener('click', () => changeFontSize(-1));

  // Menú móvil
  DOM.btnMenu.addEventListener('click', toggleMobileNav);
  DOM.mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  // Buscar
  DOM.searchInput.addEventListener('input', e => handleSearch(e.target.value));
  DOM.searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') clearSearch();
  });
  DOM.btnClearSearch.addEventListener('click', clearSearch);

  // Filtros
  DOM.filterChips.forEach(chip => {
    chip.addEventListener('click', () => setFilter(chip.dataset.filter));
  });

  // Resetear búsqueda desde empty state
  if (DOM.btnResetSearch) {
    DOM.btnResetSearch.addEventListener('click', () => {
      clearSearch();
      setFilter('all');
    });
  }

  // Catálogo - delegación de eventos
  DOM.catalogGrid.addEventListener('click', handleCardAction);
  DOM.favoritesGrid.addEventListener('click', handleCardAction);

  // Limpiar favoritos
  DOM.btnClearFavs.addEventListener('click', () => {
    AppState.favorites = [];
    AppState.save();
    renderFavorites();
    updateDashboard();
    showToast('Favoritos eliminados', 'default', '🗑️');
    srAnnounce('Todos los favoritos han sido eliminados.');
  });

  // Limpiar pedidos
  DOM.btnClearOrders.addEventListener('click', () => {
    AppState.orders = [];
    AppState.save();
    renderOrders();
    updateDashboard();
    showToast('Historial de pedidos borrado', 'default', '🗑️');
    srAnnounce('Historial de pedidos borrado.');
  });

  // Modal – cerrar
  DOM.modalClose.addEventListener('click', closeModal);
  DOM.modalOverlay.addEventListener('click', e => {
    if (e.target === DOM.modalOverlay) closeModal();
  });
  document.addEventListener('keydown', trapFocus);

  // Modal – tabs
  DOM.modalTabs.forEach(tab => {
    tab.addEventListener('click', () => switchModalTab(tab.dataset.tab));
    tab.addEventListener('keydown', e => {
      const tabs   = [...DOM.modalTabs];
      const idx    = tabs.indexOf(tab);
      let newIdx   = idx;
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % tabs.length;
      if (e.key === 'ArrowLeft')  newIdx = (idx - 1 + tabs.length) % tabs.length;
      if (newIdx !== idx) {
        e.preventDefault();
        tabs[newIdx].focus();
        switchModalTab(tabs[newIdx].dataset.tab);
      }
    });
  });

  // Modal – voz
  DOM.modalBtnSpeak.addEventListener('click', () => {
    if (!AppState.currentCoffee) return;
    const c = AppState.currentCoffee;
    // Nombre primero con pausa, luego descripción completa y perfil de sabor
    const text = [
      c.name + '.',
      `Origen: ${c.origin}.`,
      c.description,
      `Perfil de sabor: ${c.flavor.join(', ')}.`,
      `Método de preparación: ${c.brew}`
    ].join(' ');
    speakText(text);
    srAnnounce(`Leyendo en voz alta los detalles de ${c.name}`);
  });
  DOM.modalBtnStop.addEventListener('click', stopSpeech);

  // Velocidad de voz
  DOM.speechRate.addEventListener('input', () => {
    AppState.speechRate = parseFloat(DOM.speechRate.value);
    DOM.speechRateVal.textContent = AppState.speechRate.toFixed(1) + 'x';
    DOM.speechRate.setAttribute('aria-label', `Velocidad de lectura, valor ${AppState.speechRate}x`);
    if (window.speechSynthesis.speaking && AppState.speechUtterance) {
      stopSpeech();
    }
  });

  // Modal – favorito
  DOM.modalBtnFav.addEventListener('click', () => {
    if (!AppState.currentCoffee) return;
    const id = AppState.currentCoffee.id;
    AppState.toggleFavorite(id);
    updateModalFavBtn(id);
    renderFavorites();
    renderCatalog(); // actualizar corazones en catálogo
    updateDashboard();
    const isFav = AppState.isFavorite(id);
    showToast(
      isFav ? `${AppState.currentCoffee.name} en favoritos` : 'Eliminado de favoritos',
      isFav ? 'success' : 'default',
      isFav ? '❤️' : '🤍'
    );
    srAnnounce(`${AppState.currentCoffee.name} ${isFav ? 'agregado a' : 'eliminado de'} favoritos.`);
  });

  // Modal – pedir
  DOM.modalBtnOrder.addEventListener('click', () => {
    if (!AppState.currentCoffee) return;
    placeOrder(AppState.currentCoffee.id);
  });

  // Order success – cerrar
  DOM.btnCloseOrder.addEventListener('click', closeOrderSuccess);
  DOM.orderSuccess.addEventListener('click', e => {
    if (e.target === DOM.orderSuccess) closeOrderSuccess();
  });

  // Cerrar menú móvil al hacer click fuera
  document.addEventListener('click', e => {
    if (!DOM.mobileNav.hidden &&
        !DOM.mobileNav.contains(e.target) &&
        e.target !== DOM.btnMenu) {
      closeMobileNav();
    }
  });

  // Teclado global
  document.addEventListener('keydown', e => {
    // ESC para cerrar order success
    if (e.key === 'Escape' && !DOM.orderSuccess.hidden) {
      closeOrderSuccess();
    }
  });

  // Announce on navigation link click
  DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
      srAnnounce(`Navegando a sección: ${link.textContent.trim()}`);
    });
  });

  // Focus en main-content tras skip-link
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', e => {
      e.preventDefault();
      const main = document.getElementById('main-content');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        srAnnounce('Saltado al contenido principal.');
      }
    });
  }

  console.log('☕ Coffee Access Premium inicializado correctamente.');
}

// Arrancar la app cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
