const apiKey = "d7aa1e8a95862ec54187d5ac";

// Diccionario de nombres de monedas (puedes ampliarlo)
const currencyNames = {
  "USD": "Dólar Estadounidense",
  "AED": "Dirham de los Emiratos",
  "AFN": "Afgani Afgano",
  "ALL": "Lek Albanés",
  "AMD": "Dram Armenio",
  "ANG": "Florín Antillano",
  "AOA": "Kwanza Angoleño",
  "ARS": "Peso Argentino",
  "AUD": "Dólar Australiano",
  "AWG": "Florín Arubeño",
  "AZN": "Manat Azerí",
  "BAM": "Marco Convertible de Bosnia",
  "BBD": "Dólar Barbadense",
  "BDT": "Taka Bangladesí",
  "BGN": "Lev Búlgaro",
  "BHD": "Dinar Bahreiní",
  "BIF": "Franco Burundés",
  "BMD": "Dólar Bermudeño",
  "BND": "Dólar Bruneano",
  "BOB": "Boliviano",
  "BRL": "Real Brasileño",
  "BSD": "Dólar Bahameño",
  "BTN": "Ngultrum Butanés",
  "BWP": "Pula Botswana",
  "BYN": "Rublo Bielorruso",
  "BZD": "Dólar Beliceño",
  "CAD": "Dólar Canadiense",
  "CDF": "Franco Congoleño",
  "CHF": "Franco Suizo",
  "CLP": "Peso Chileno",
  "CNY": "Yuan Chino",
  "COP": "Peso Colombiano",
  "CRC": "Colón Costarricense",
  "CUP": "Peso Cubano",
  "CVE": "Escudo Caboverdiano",
  "CZK": "Corona Checa",
  "DJF": "Franco Yibutiano",
  "DKK": "Corona Danesa",
  "DOP": "Peso Dominicano",
  "DZD": "Dinar Argelino",
  "EGP": "Libra Egipcia",
  "ERN": "Nakfa Eritreo",
  "ETB": "Birr Etíope",
  "EUR": "Euro",
  "FJD": "Dólar Fiyiano",
  "FKP": "Libra Malvinense",
  "FOK": "Corona Feroesa",
  "GBP": "Libra Esterlina",
  "GEL": "Lari Georgiano",
  "GGP": "Libra de Guernsey",
  "GHS": "Cedi Ghanés",
  "GIP": "Libra Gibraltareña",
  "GMD": "Dalasi Gambiano",
  "GNF": "Franco Guineano",
  "GTQ": "Quetzal Guatemalteco",
  "GYD": "Dólar Guyanés",
  "HKD": "Dólar de Hong Kong",
  "HNL": "Lempira Hondureño",
  "HRK": "Kuna Croata",
  "HTG": "Gourde Haitiano",
  "HUF": "Florín Húngaro",
  "IDR": "Rupia Indonesia",
  "ILS": "Nuevo Shekel Israelí",
  "IMP": "Libra de la Isla de Man",
  "INR": "Rupia India",
  "IQD": "Dinar Iraquí",
  "IRR": "Rial Iraní",
  "ISK": "Corona Islandesa",
  "JEP": "Libra de Jersey",
  "JMD": "Dólar Jamaiquino",
  "JOD": "Dinar Jordano",
  "JPY": "Yen Japonés",
  "KES": "Chelín Keniata",
  "KGS": "Som Kirguís",
  "KHR": "Riel Camboyano",
  "KID": "Dólar de Kiribati",
  "KMF": "Franco Comorense",
  "KRW": "Won Surcoreano",
  "KWD": "Dinar Kuwaití",
  "KYD": "Dólar Caimense",
  "KZT": "Tenge Kazajo",
  "LAK": "Kip Laosiano",
  "LBP": "Libra Libanesa",
  "LKR": "Rupia de Sri Lanka",
  "LRD": "Dólar Liberiano",
  "LSL": "Loti Lesothense",
  "LYD": "Dinar Libio",
  "MAD": "Dirham Marroquí",
  "MDL": "Leu Moldavo",
  "MGA": "Ariary Malgache",
  "MKD": "Denar Macedonio",
  "MMK": "Kyat Birmano",
  "MNT": "Tugrik Mongol",
  "MOP": "Pataca de Macao",
  "MRU": "Ouguiya Mauritana",
  "MUR": "Rupia Mauriciana",
  "MVR": "Rufiyaa Maldiva",
  "MWK": "Kwacha Malauí",
  "MXN": "Peso Mexicano",
  "MYR": "Ringgit Malayo",
  "MZN": "Metical Mozambiqueño",
  "NAD": "Dólar Namibio",
  "NGN": "Naira Nigeriana",
  "NIO": "Córdoba Nicaragüense",
  "NOK": "Corona Noruega",
  "NPR": "Rupia Nepalesa",
  "NZD": "Dólar Neozelandés",
  "OMR": "Rial Omaní",
  "PAB": "Balboa Panameño",
  "PEN": "Sol Peruano",
  "PGK": "Kina Papú",
  "PHP": "Peso Filipino",
  "PKR": "Rupia Pakistaní",
  "PLN": "Zloty Polaco",
  "PYG": "Guaraní Paraguayo",
  "QAR": "Riyal Qatarí",
  "RON": "Leu Rumano",
  "RSD": "Dinar Serbio",
  "RUB": "Rublo Ruso",
  "RWF": "Franco Ruandés",
  "SAR": "Riyal Saudí",
  "SBD": "Dólar Salomonense",
  "SCR": "Rupia Seychellense",
  "SDG": "Libra Sudanesa",
  "SEK": "Corona Sueca",
  "SGD": "Dólar Singapurense",
  "SHP": "Libra de Santa Elena",
  "SLE": "Leone Sierra Leonés",
  "SLL": "Leone Sierra Leonés (antiguo)",
  "SOS": "Chelín Somalí",
  "SRD": "Dólar Surinamés",
  "SSP": "Libra SurSudanesa",
  "STN": "Dobra Santotomense",
  "SYP": "Libra Siria",
  "SZL": "Lilangeni Suazi",
  "THB": "Baht Tailandés",
  "TJS": "Somoni Tayiko",
  "TMT": "Manat Turcomano",
  "TND": "Dinar Tunecino",
  "TOP": "Pa'anga Tongano",
  "TRY": "Lira Turca",
  "TTD": "Dólar de Trinidad y Tobago",
  "TVD": "Dólar Tuvaluano",
  "TWD": "Nuevo Dólar Taiwanés",
  "TZS": "Chelín Tanzano",
  "UAH": "Grivna Ucraniana",
  "UGX": "Chelín Ugandés",
  "UYU": "Peso Uruguayo",
  "UZS": "Som Uzbeko",
  "VES": "Bolívar Soberano Venezolano",
  "VND": "Dong Vietnamita",
  "VUV": "Vatu Vanuatuense",
  "WST": "Tala Samoano",
  "XAF": "Franco CFA Centroafricano",
  "XCD": "Dólar del Caribe Oriental",
  "XCG": "Florín Antillano (antiguo)",
  "XDR": "Derechos Especiales de Giro (FMI)",
  "XOF": "Franco CFA Occidental",
  "XPF": "Franco CFP",
  "YER": "Rial Yemení",
  "ZAR": "Rand Sudafricano",
  "ZMW": "Kwacha Zambiano",
  "ZWL": "Dólar Zimbabuense"
};

async function loadCurrencies() {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
  const select = document.getElementById("currencySelect");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result !== "success") throw new Error("Error al cargar monedas");

    const rates = data.conversion_rates;
    select.innerHTML = "";

    // Ordena las monedas alfabéticamente
    const sortedCurrencies = Object.keys(rates).sort();
    
    sortedCurrencies.forEach(code => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${code} - ${currencyNames[code] || code}`;
      select.appendChild(option);
    });

    select.value = "PEN"; // Valor por defecto
  } catch (error) {
    console.error("Error al cargar monedas:", error);
    select.innerHTML = '<option disabled selected>Error al cargar. Recarga la página.</option>';
  }
}

async function getExchangeRate() {
  const selectedCurrency = document.getElementById("currencySelect").value;
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  const loader = document.getElementById("loader");
  const exchangeInfo = document.getElementById("exchangeInfo");
  const errorText = document.getElementById("error");

  loader.classList.remove("hidden");
  exchangeInfo.classList.add("hidden");
  errorText.classList.add("hidden");

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.result !== "success") throw new Error("Fallo en la API");

    const rate = data.conversion_rates[selectedCurrency];
    if (!rate) throw new Error("Moneda no disponible");

    const updateDate = new Date(data.time_last_update_utc);
    const formattedDate = updateDate.toLocaleDateString("es-PE", {
      timeZone: "UTC", // Clave para evitar el desfase
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    document.getElementById("currencyCode").textContent = `1 USD = ${selectedCurrency}`;
    document.getElementById("rate").textContent = rate.toFixed(3);
    document.getElementById("fecha").textContent = `Actualizado: ${formattedDate}`;

    exchangeInfo.classList.remove("hidden");
  } catch (error) {
    console.error("Error:", error);
    errorText.classList.remove("hidden");
  } finally {
    loader.classList.add("hidden");
  }
}

// Carga inicial al abrir la página
document.addEventListener("DOMContentLoaded", () => {
  loadCurrencies();
  // Consulta automáticamente el PEN al cargar
  setTimeout(() => {
    if (document.getElementById("currencySelect").value === "PEN") {
      getExchangeRate();
    }
  }, 500);
});