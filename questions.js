export default [
  {
    "question": 'Vad blir x i exemplet <code>let x = 10 + "10"</code>?',
    "answers": [
      "20",
      "1010",
      '10"10"',
      "TypeError"
    ],
    "correct": 1,
    "explanation": "JavaScript kommer att tolka det som att du vill konvertera 10 till en sträng."
  },
  {
    "question": "Hur skriver man en for-loop korrekt i JavaScript?",
    "answers": [
      "<code>for (let i = 0; i < 10; i++)</code>",
      "<code>for (;;)</code>",
      "<code>for (; i > 10;)</code>",
      "Alla är korrekta"
    ],
    "correct": 3,
    "explanation": "Parametrarna är inte nödvändiga."
  }, {
    "question": "Vad används för att indikera ett ID i CSS?",
    "answers": [
      "<code>.</code>",
      "<code>!</code>",
      "<code>#</code>",
      "<code>*</code>"
    ],
    "correct": 2,
    "explanation": "En punkt markerar en class."
  }, {
    "question": "Vad står CPU för?",
    "answers": [
      "Computer Processing Unit",
      "Computer Principle Unit",
      "Central Processing Unit",
      "Control Processing Unit"
    ],
    "correct": 2,
    "explanation": "Kallas även centralprocessor eller huvudprocessor. Enheten som utför program i en dator."
  },
  {
    "question": "Vilket programmeringsspråk förstår en dator?",
    "answers": [
      "C",
      "Assembly",
      "Binärt",
      "BASIC"
    ],
    "correct": 2,
    "explanation": "Ettor och nollor. Hej är i binär kod <code>1101000 1100101 1101010</code>."
  }, {
    "question": "Vad är speciellt med året 1958 i datorns historia?",
    "answers": [
      "Den första persondatorn kom ut på marknaden",
      "Den första integrerade kretsen uppfanns",
      "Den första stordatorn skapades",
      "Den första mobiltelefonens lanserades"
    ],
    "correct": 1,
    "explanation": "Persondatorn: 1980. Stordatorn: 1947. Mobiltelefonen: 1983."
  }, {
    "question": "Vad är sant om lågnivå-kod?",
    "answers": [
      "Lågnivå-kod är lättare för datorn att förstå",
      "Lågnivå-kod är lättare att lära sig",
      "Lågnivå-kod har fler tillåtna tecken",
      "Lågnivå-kod anses säkrare"
    ],
    "correct": 0,
    "explanation": "Kallas även maskinnära eller hårdvarunära."
  }, {
    "question": "Vad står s:et för i HTTPS?",
    "answers": [
      "Plural för HTTP",
      "Server",
      "Special",
      "Secure"
    ],
    "correct": 3,
    "explanation": "HyperText Transfer Protocol Secure, för krypterad transport av data."
  }, {
    "question": "Vad står VS för i VS Code?",
    "answers": [
      "Visual studio",
      "Virtual server",
      "Very swag",
      "Versus"
    ],
    "correct": 0,
    "explanation": "No swag."
  }, {
    "question": "Vad står MVC för?",
    "answers": [
      "Most Virtual Cache",
      "Mask Visual Code",
      "Model View Controller",
      "More Vacant Controls"
    ],
    "correct": 2,
    "explanation": "Till skillnad från trelagersarkitektur, visas MVC som en triangel, där alla delar kommunicerar med varandra."
  }, {
    "question": "Vilka är de tre lagren i 3-lagers-arkitektur?",
    "answers": [
      "Presentation - Logik - Data",
      "Modell - Visning - Databas",
      "Klient - Server - Data",
      "Session - Permanent - Hemlig"
    ],
    "correct": 0,
    "explanation": "I presentationslagret presenteras programlogiken på ett sätt en användare kan förstå. Det logiska lagret innehåller programkod som utför logiska operationer och flyttar data mellan omkringliggande lager. Datalagret lagrar data."
  }, {
    "question": "Ett datorprogram som konverterar ett helt program till maskinkod kallas ...",
    "answers": [
      "Interpreter",
      "Simulator",
      "Commander",
      "Compiler"
    ],
    "correct": 3,
    "explanation": "JavaScript har en så kallad JIT (Just-In-Time) compiler."
  }, {
    "question": "Var ska du lägga en <code>&lt;script&gt;</code> tag i HTML-filen?",
    "answers": [
      "Den ska inte vara i HTML-filen utan en JS-fil.",
      "Längst ner i body-taggen",
      "Längst upp i body-taggen",
      "Utanför html-taggen"
    ],
    "correct": 1,
    "explanation": "Det går även bra att ha den i head-taggen, men man kan då behöva tillägga nyckelordet defer."
  }, {
    "question": 'Vad kommer följande kod att generera? <pre></pre> <code>if (10 == "10") { return true; } </code>',
    "answers": [
      "True",
      "Syntax error",
      "10",
      "False"
    ],
    "correct": 1,
    "explanation": "Kuggfråga! Return används bara inuti funktioner."
  }, {
    "question": "Vad är sant om objekt i JavaScript?",
    "answers": [
      "Du kan hämta värdet genom <code>objekt.namn</code>",
      'Du kan hämta värdet genom <code>objekt["namn"]</code>',
      "Du kan ange ett objekt som en parameter i en funktion",
      "Alla alternativ stämmer."
    ],
    "correct": 3,
    "explanation": "Visste du att du kunde använda <code>Object.freeze(objekt)</code> för att frysa ett objekt så du inte kan lägga till eller uppdatera attribut?"
  }, {
    "question": "Vilken loop är inte korrekt i JavaScript?",
    "answers": [
      "<code>for (let x of y)</code>",
      "<code>for (let x in y)</code>",
      "<code>for (let i = 0; i < 5; i++)</code>",
      "<code>for (let x at y)</code>"
    ],
    "correct": 3,
    "explanation": "I JavaScript finns även loopar i form av: while, do-while, forEach."
  }, {
    "question": "Vad syftar for-attributet till på en <code>&lt;label&gt;</code> i HTML?",
    "answers": [
      "Input name",
      "Input id",
      "Input class",
      "Input to"
    ],
    "correct": 1,
    "explanation": "Att koppla ihop label och inputs är värdefullt för tillgänglighet och för att skicka värdena när du submittar en form med JavaScript."
  }, {
    "question": "Vad är korrekt tecken för strängar i JavaScript?",
    "answers": [
      "' '",
      "\"\"",
      "` `",
      "Samtliga"
    ],
    "correct": 3,
    "explanation": "Att göra strängar med ` (backticks) introducerades i ES6."
  }, {
    "question": "Hur refererar du till en extern CSS-fil i ett HTML-dokument?",
    "answers": [
      "<code>&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;</code>",
      '<code>&lt;script src="mystyle.css"&gt;</code>',
      '<code>&lt;style src="mystyle.css"&gt;&lt;/style&gt;</code>',
      '<code>&lt;link rel="stylesheet" href="mystyle.css"&gt;</code>'
    ],
    "correct": 3,
    "explanation": "Med <code>&lt;style&gt; &lt;/style&gt;</code> kan du definiera CSS-kod inuti ett HTML dokument."
  },
]