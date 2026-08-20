// ChoViva Producer Catalogue — public directory data
// Redacted from the internal Q3 2026 Partner Catalogue: no contact details,
// private-label matrices, delivery-region tables, or addresses are included.
// Source figures (stats block) are pre-cleared Planet A Foods claims — do not alter.

const CATEGORIES = [
  { id: "confectionery", label: "Confectionery" },
  { id: "biscuits-bakery", label: "Biscuits & Bakery" },
  { id: "bake-off", label: "Bake Off" },
  { id: "ice-cream", label: "Ice Cream" },
  { id: "other", label: "Other" },
];

const PRODUCERS = [
  // ---------------- Confectionery ----------------
  {
    name: "Treets GmbH | Piasten GmbH",
    category: "confectionery",
    focus: "Dragées · Bite-sized snacks",
    website: "https://www.treets.eu",
    products: [
      { name: "Treets Crunchy Corn", sizes: "210g / 120g / 85g", vegan: true },
      { name: "Treets Peanuts", sizes: "200g / 185g / 150g / 100g / 85g / 45g", vegan: true },
      { name: "Treets Crispy", sizes: "175g / 120g", vegan: true },
      { name: "Treets Salted Peanuts", sizes: "200g / 185g / 150g", vegan: true },
      { name: "Treets Pretzel Bites", sizes: "175g", vegan: true },
      { name: "Treets Buttons", sizes: "165g", vegan: true },
    ],
  },
  {
    name: "WAWI-Euro GmbH",
    category: "confectionery",
    focus: "Pralines · Puffed rice chocolates",
    website: "https://www.wawi-group.de",
    products: [
      { name: "Peanut Butter Cups", sizes: "126g / 110g", vegan: false },
      { name: "Banana Split Cups", sizes: "120g", vegan: false },
      { name: "White Butter Cups", sizes: "126g / 120g", vegan: false },
      { name: "Alwins Salted Caramel", sizes: "100g", vegan: false },
      { name: "Duckies Marshmallow", sizes: "100g", vegan: false },
      { name: "Mini Wichtel Nougat", sizes: "110g", vegan: false },
      { name: "Männlis Caramel", sizes: "100g", vegan: false },
      { name: "Männlis Gingerbread", sizes: "100g", vegan: false },
      { name: "Peanut Butter Eggs", sizes: "90g", vegan: false },
      { name: "Salted Caramel Eggs", sizes: "90g", vegan: false },
      { name: "Puffed Rice & Cornflakes Bar", sizes: "100g", vegan: false },
      { name: "Puffed Rice Bar", sizes: "100g", vegan: false },
      { name: "Puffed Spelt Bar", sizes: "45g", vegan: true },
      { name: "Creamy Milk Gonk", sizes: "30g", vegan: false },
      { name: "Creamy Crisp Gonk", sizes: "30g", vegan: false },
      { name: "Wicked Cat Crème Filling", sizes: "30g", vegan: false },
      { name: "Wicked Cat Salted Caramel Filling", sizes: "30g", vegan: false },
      { name: "Grinch Crème Filling", sizes: "30g", vegan: false },
    ],
  },
  {
    name: "Hans Riegelein & Sohn GmbH & Co. KG",
    category: "confectionery",
    focus: "Puffed rice snacks · Seasonal products",
    website: "https://riegelein.de",
    products: [
      { name: "Sun Rice Original 2.0 Happen", sizes: "250g / 150g / 45g", vegan: false },
      { name: "Sun Rice Crunchy White Milk & Flakes Happen", sizes: "250g", vegan: false },
      { name: "Sun Rice Crunchy Milk & Flakes Happen", sizes: "250g", vegan: false },
      { name: "Puffreis Crunchy Nut Happen", sizes: "250g", vegan: false },
      { name: "Sun Rice Crunchy Milk & Cereal Bar", sizes: "40g", vegan: false },
      { name: "Sun Rice Original 2.0 Bar", sizes: "150g", vegan: false },
      { name: "Peanut Snack", sizes: "400g / 300g", vegan: false },
      { name: "Seasonal Hollow Figure", sizes: "200g", vegan: false },
    ],
  },
  {
    name: "Rau Chocolates & Cereals",
    category: "confectionery",
    focus: "Cereal products · Coated popcorn",
    website: "https://www.rau-chocolate-cereals.de",
    products: [
      { name: "Knusper Flakes Coconut", sizes: "125g", vegan: false },
      { name: "Knusper Flakes Strawberry", sizes: "125g", vegan: false },
      { name: "Butter Cookie Popcorn Mix", sizes: "180g", vegan: false },
      { name: "Strawberry Cheesecake Popcorn Mix", sizes: "180g", vegan: false },
      { name: "Salty Prezel-Mix Popcorn", sizes: "180g", vegan: false },
      { name: "Marshmallow Popcorn", sizes: "180g", vegan: false },
      { name: "White Coconut Popcorn", sizes: "180g", vegan: false },
      { name: "Date Confection", sizes: "200g", vegan: false },
      { name: "Easter Bag", sizes: "130g", vegan: false },
    ],
  },
  {
    name: "Chocolaterie Abtey S.A.",
    category: "confectionery",
    focus: "Chocolate tablets · Pralines",
    website: "https://abtey.fr",
    products: [
      { name: "Abtey Tablet Milk", sizes: "100g", vegan: false },
      { name: "Abtey Tablet Hazelnut", sizes: "100g", vegan: false },
      { name: "Abtey Tablet Feuilletine", sizes: "100g", vegan: false },
      { name: "Abtey Pralins Feuilletine", sizes: "162g", vegan: false },
      { name: "Abtey Pralins Hazelnut", sizes: "162g", vegan: false },
      { name: "Abtey Hollow Figure", sizes: "120g / 130g", vegan: false },
      { name: "Abtey Jungle Eggs", sizes: "200g", vegan: false },
      { name: "Abtey Mini Bottles", sizes: "200g", vegan: false },
      { name: "Abtey Mini Umbrellas", sizes: "200g", vegan: false },
      { name: "Abtey Mini Unicorns", sizes: "200g", vegan: false },
      { name: "Abtey Mini Bottles I / II / III", sizes: "81g", vegan: false },
      { name: "Abtey Mini Bottles Mojito & Gin", sizes: "81g", vegan: false },
    ],
  },
  {
    name: "Hands Off B.V.",
    category: "confectionery",
    focus: "Filled bars · Pralines",
    website: null,
    products: [
      { name: "Milano Hazelnut Soft Core", sizes: "100g", vegan: true },
      { name: "New York Peanut Butter Soft Core", sizes: "100g", vegan: true },
      { name: "Amsterdam Speculoos Soft Core", sizes: "100g", vegan: true },
    ],
  },
  {
    name: "Nestlé S.A.",
    category: "confectionery",
    focus: "Bite-size snacks · Bars",
    website: null,
    products: [
      { name: "Nestlé Choco Crossies Snack Vibes Classic", sizes: "100g", vegan: false },
      { name: "Nestlé Choco Crossies Salted Popcorn Caramel", sizes: "100g", vegan: false },
      { name: "Nestlé Choco Crossies Snack Vibes Hazelnut", sizes: "100g", vegan: false },
    ],
  },
  {
    name: "Mars Inc.",
    category: "confectionery",
    focus: "Bite sized snacks · Bars",
    website: null,
    products: [
      { name: "Mars Balisto Trail Mix", sizes: "140g", vegan: false },
    ],
  },
  {
    name: "JOKOLADE GmbH",
    category: "confectionery",
    focus: "Bite sized snacks · Tablets",
    website: null,
    products: [
      { name: "Filled Ice Cream Cones", sizes: "100g", vegan: true },
      { name: "Filled Ice Cream Cones w. Hazelnut", sizes: "100g", vegan: true },
      { name: "Jokolade Tablet with Inclusions", sizes: "140g", vegan: true },
      { name: "Jokolade Bar with Inclusions", sizes: "40g", vegan: true },
    ],
  },
  {
    name: "Bitecone SAS",
    category: "confectionery",
    focus: "Bite sized snacks · Wafers",
    website: null,
    products: [
      { name: "Filled Ice Cream Cones", sizes: "100g", vegan: true },
    ],
  },
  {
    name: "Libeert NV",
    category: "confectionery",
    focus: "Bars · Pralines",
    website: null,
    products: [
      { name: "Tablet with Inclusions", sizes: "140g", vegan: true },
      { name: "Bar with Inclusions", sizes: "40g", vegan: true },
    ],
  },
  {
    name: "Ludwig Schokolade GmbH & Co. KG",
    category: "confectionery",
    focus: "Tablets · Pralines",
    website: null,
    products: [
      { name: "Cookie & Hazelnut Tablet", sizes: "80g", vegan: false },
      { name: "Salted Pretzel Tablet", sizes: "80g", vegan: false },
      { name: "Salted Butter Cookie Tablet", sizes: "80g", vegan: false },
      { name: "Small Bites", sizes: "100g", vegan: false },
    ],
  },

  // ---------------- Biscuits & Bakery ----------------
  {
    name: "Biscuit International",
    category: "biscuits-bakery",
    focus: "Biscuits · Rice cakes",
    website: "https://biscuitinternational.com",
    products: [
      { name: "Wafer Sheets", sizes: "100g", vegan: false },
      { name: "Salty ChoViva Cookie", sizes: "100g", vegan: false },
      { name: "Squared Rice Cake", sizes: "55g", vegan: false },
      { name: "Squared Corn Cakes", sizes: "55g", vegan: false },
    ],
  },
  {
    name: "Borggreve Zwieback- und Keksfabrik KG",
    category: "biscuits-bakery",
    focus: "Chocolate biscuits · Seasonal items",
    website: "https://borggreve.de",
    products: [
      { name: "Süße Tatzen Biscuits", sizes: "250g", vegan: false },
      { name: "Spritz Biscuits", sizes: "250g", vegan: false },
      { name: "Almond Spritz Biscuits", sizes: "300g", vegan: false },
      { name: "Coconut Spritz Biscuits", sizes: "300g", vegan: false },
      { name: "Vanille Spritz Biscuits", sizes: "300g", vegan: false },
    ],
  },
  {
    name: "Griesson - De Beukelaer GmbH & Co. KG",
    category: "biscuits-bakery",
    focus: "Biscuits · Wafers",
    website: null,
    products: [
      { name: "De Beukelaer Cereola Der Klassiker", sizes: "150g", vegan: true },
      { name: "De Beukelaer Cereola Cookies", sizes: "150g", vegan: true },
      { name: "De Beukelaer Cereola Oaties", sizes: "130g", vegan: true },
      { name: "De Beukelaer Eis-Waffeln", sizes: "50g", vegan: true },
    ],
  },
  {
    name: "Henry Lambertz GmbH & Co. KG",
    category: "biscuits-bakery",
    focus: "Biscuits · Pralines",
    website: "https://lambertz.de",
    products: [
      { name: "Lambertz Peanut Clusters", sizes: "200g", vegan: true },
      { name: "Lambertz Flake Clusters", sizes: "200g", vegan: true },
      { name: "Almond Horns", sizes: "175g", vegan: false },
      { name: "Nut Squares", sizes: "200g", vegan: false },
      { name: "Peanut Slices", sizes: "175g", vegan: false },
      { name: "Nut Slices", sizes: "175g", vegan: false },
    ],
  },
  {
    name: "S. Spitz GmbH",
    category: "biscuits-bakery",
    focus: "Wafers · Bite size snacks",
    website: null,
    products: [
      { name: "Hazelnut Rolls", sizes: "400g", vegan: false },
      { name: "Mignon Wafers", sizes: "400g", vegan: true },
      { name: "Neapolitan Wafers", sizes: "65g", vegan: false },
    ],
  },
  {
    name: "Dr. Quendt GmbH & Co.KG",
    category: "biscuits-bakery",
    focus: "Baking mixes · Baking ingredients",
    website: null,
    products: [
      { name: "Hafer Q's", sizes: "100g", vegan: true },
    ],
  },
  {
    name: "Conrad Schulte GmbH & Co. KG",
    category: "biscuits-bakery",
    focus: "Seasonal products · Biscuits",
    website: "https://schulte-feingebaeck.de",
    products: [
      { name: "Schulte Dominosteine Dark", sizes: "125g", vegan: false },
      { name: "Schulte Dominosteine Milk", sizes: "125g / 2200g", vegan: false },
      { name: "Schulte Dominosteine White", sizes: "125g", vegan: false },
      { name: "Premium Dominosteine Egg Liquor", sizes: "175g", vegan: false },
      { name: "Premium Dominosteine Winterpunch", sizes: "175g", vegan: false },
      { name: "Premium Dominosteine Hazelnut", sizes: "175g", vegan: false },
      { name: "Schulte Kipferl", sizes: "175g", vegan: false },
      { name: "Schulte Mini Spekulatius", sizes: "200g / 2200g", vegan: false },
      { name: "Mini Nut Corners", sizes: "175g", vegan: false },
      { name: "Spiced Slices", sizes: "175g", vegan: false },
      { name: "Hearts Stars & Pretzels", sizes: "2500g", vegan: false },
    ],
  },
  {
    name: "Coppenrath Feingebäck GmbH",
    category: "biscuits-bakery",
    focus: "Biscuits · Seasonal products",
    website: "https://coppenrath-feingebaeck.de",
    products: [
      { name: "Coppenrath ChOATlate Coooky Hafer", sizes: "175g", vegan: false },
      { name: "Coppenrath ChOATlate Coooky Vanille", sizes: "175g", vegan: false },
      { name: "Coppenrath ChOATlate Coooky Karamell", sizes: "175g", vegan: false },
      { name: "Confiserie Taler Blau", sizes: "150g", vegan: false },
      { name: "Confiserie Taler Rot", sizes: "150g", vegan: false },
    ],
  },
  {
    name: "Hans Freitag GmbH & Co. KG",
    category: "biscuits-bakery",
    focus: "Bite sized snacks · Biscuits",
    website: null,
    products: [
      { name: "Private Label Waffle Bites", sizes: "125g", vegan: false },
    ],
  },
  {
    name: "Spreewaffel Berlin-Pankow GmbH",
    category: "biscuits-bakery",
    focus: "Wafers · Biscuits",
    website: null,
    products: [
      { name: "Knusper Waffeln", sizes: "100g", vegan: true },
    ],
  },
  {
    name: "Dan Cake A/S",
    category: "biscuits-bakery",
    focus: "Bakery · Cakes",
    website: null,
    products: [
      { name: "Muffins Schoko & Stracciatella", sizes: "360g", vegan: false },
    ],
  },
  {
    name: "SanoRice Holding B.V.",
    category: "biscuits-bakery",
    focus: "Rice cakes",
    website: null,
    products: [
      { name: "Rice Cake", sizes: "50g", vegan: false },
    ],
  },

  // ---------------- Bake Off ----------------
  {
    name: "BAKER & BAKER Germany GmbH",
    category: "bake-off",
    focus: "Bakery · Cakes",
    website: null,
    products: [
      { name: "Cinnamon Roll", sizes: "115g", vegan: true },
      { name: "Donut Dark", sizes: "56g", vegan: true },
      { name: "Muffin", sizes: "110g", vegan: false },
      { name: "Donut White", sizes: "56g", vegan: false },
    ],
  },

  // ---------------- Ice Cream ----------------
  {
    name: "Eisbär Eis GmbH",
    category: "ice-cream",
    focus: "Ice cream",
    website: null,
    products: [
      { name: "Salted Caramel mit Hazelnut Crunch", sizes: "250g", vegan: false },
      { name: "Private Label Classic Stieleis", sizes: "480g", vegan: false },
      { name: "Private Label Mandel Stieleis", sizes: "480g", vegan: false },
    ],
  },

  // ---------------- Other ----------------
  {
    name: "KATHI Rainer Thiele GmbH",
    category: "other",
    focus: "Baking mixes · Baking ingredients",
    website: null,
    products: [
      { name: "Mini Banana Cupcake mix", sizes: "380g", vegan: false },
    ],
  },
  {
    name: "H. & J. Brüggen KG",
    category: "other",
    focus: "Cereals · Mueslis",
    website: null,
    products: [
      { name: "Crunchy Oat Hazelnut Muesli", sizes: "500g", vegan: true },
      { name: "Crunchy Oat Berry Muesli", sizes: "500g", vegan: true },
      { name: "Crunchy ChoViva Oat Muesli", sizes: "500g", vegan: true },
    ],
  },
];
