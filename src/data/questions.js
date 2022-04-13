const questions = [
    {
      questionText: "What is the second highest peak in Antarctica?",
      answerOptions: [
        { answerText: "Mount Erebus", isCorrect: true, isJoker: true },
        { answerText: "Mount Kosciusko", isCorrect: false, isJoker: true },
        { answerText: "Mons Olympus", isCorrect: false },
        { answerText: "Mount Paget", isCorrect: false },
      ],
      additionalInfo: "3,794m (12,488ft) high, the active volcano Mount Erebus holds one of the few active lava lakes on earth."
    },
    {
      questionText: "What is the lowest point below sea level on the African continent?",
      answerOptions: [
        { answerText: "Danakil Depression, Ethiopia", isCorrect: false, isJoker: true },
        { answerText: "Lake Assal, Djibouti", isCorrect: true, isJoker: true },
        { answerText: "Lake Chad, Chad", isCorrect: false },
        { answerText: "Chott Melhrir, Algeria", isCorrect: false },
      ],
      additionalInfo: "Located in the Danakil desert, this hypersaline lake experiences summer temperatures as high as 52 °C (126 °F) from May to September."
    },
    {
        questionText: "What is the highest peak of the Carpathian Mountains?",
        answerOptions: [
          { answerText: "Moldoveanu Peak, Făgăraş Mountains,Romania", isCorrect: false },
          { answerText: "Hoverla, Eastern Beskids, Ukraine", isCorrect: false, isJoker: true },
          { answerText: "Rysy, High Tatras, Poland", isCorrect: false },
          { answerText: "Gerlachovský štít, High Tatras, Slovakia", isCorrect: true, isJoker: true },
        ],
        additionalInfo: `Gerlachovský štít means "the peak (of the village) of Gerlachov" and is 	2,654.4m (8,709ft) high.`
      },
      {
        questionText: "Which is the highest volcano of Asia?",
        answerOptions: [
          { answerText: "Mount Ararat, Armenian Highland, Turkey", isCorrect: false },
          { answerText: "Mount Krestovsky, Klyuchevskaya Range, Kamchatka Peninsula, Russia", isCorrect: false },
          { answerText: "Damāvand, Alborz Range, Iran", isCorrect: true, isJoker: true },
          { answerText: "Gunung Kerinci, Berisan Range, Sumatra, Indonesia", isCorrect: false, isJoker: true },
        ],
        additionalInfo: "At an elevation of 5,609m (18,402ft), the potentially active stratovolcano Damāvand has a special place in Persian mythology and folklore. The mountain is said to hold magical powers in the Shahnameh. It's last eruption occurred around 5300BC."
      },
      {
        questionText: "What is the highest capital city of the world?",
        answerOptions: [
          { answerText: "La Paz, Bolivia", isCorrect: true, isJoker: true },
          { answerText: "Quito, Ecuador", isCorrect: false },
          { answerText: "Thimphu, Bhutan", isCorrect: false, isJoker: true },
          { answerText: "Sana'a, Yemen", isCorrect: false },
        ],
        additionalInfo: "Called Chuqi Yapu in the Aymara language, La Paz is situated at an elevation of 3,640m	(11,942ft)."
      },
      {
        questionText: "Where is the planimetrically determined centre of the german state North Rhine-Westphalia?",
        answerOptions: [
          { answerText: "Dortmund-Aplerbeck", isCorrect: true, isJoker: true },
          { answerText: "Schwerte-Ergste", isCorrect: false },
          { answerText: "Wuppertal-Oberbarmen", isCorrect: false, isJoker: true },
          { answerText: "Lüdenscheid", isCorrect: false },
        ],
        additionalInfo:`The first document mentioning Aplerbeck, then Afaldrabechi, is a founding document of 899, a term containing "apple" and "creek".`
      },
      {
        questionText: "Where are 68% of the world's freshwater reserves located?",
        answerOptions: [
          { answerText: "The Amazon river", isCorrect: false },
          { answerText: "The Nile river", isCorrect: false },
          { answerText: "The Antarctic ice shield", isCorrect: true, isJoker: true },
          { answerText: "In the atmosphere", isCorrect: false, isJoker: true },
        ],
        additionalInfo: "Currently up to 5000m (16400ft) thick, the formation of the ice shield was initiated 37-34 million years ago, coinciding with the opening of the Drake Passage, the separation of the Andes and the Antarctic Peninsula, and the development of the Antarctic Circumpolar Current."
      },
      {
        questionText: "Where is Mount Kailash located?",
        answerOptions: [
          { answerText: "Himalaya", isCorrect: false },
          { answerText: "Transhimalaya", isCorrect: true, isJoker: true },
          { answerText: "Pamir", isCorrect: false },
          { answerText: "Tian Shan", isCorrect: false, isJoker: true },
        ],
        additionalInfo:`Revered as Meru - the center of the world - by people in India and Tibet, the Tibetan name "Kangrinpoche" can be translated "precious jewel of snows".`
      },
      {
        questionText: "What is the Sudd?",
        answerOptions: [
          { answerText: "A welsh highland plateau", isCorrect: false },
          { answerText: "A river in Pakistan", isCorrect: false, isJoker: true },
          { answerText: "A region in Sweden", isCorrect: false },
          { answerText: "A South-Sudanese wetland", isCorrect: true, isJoker: true },
        ],
        additionalInfo:`The Arabic word sudd is derived from sadd (سد), meaning "barrier". It is called "Tonydït" in the local Nilotic Dinka language. Formed by the waters of the White Nile, it's size is highly variable, averaging over 30,000km² (12,000mi²).`
      },
      {
        questionText: "How many time zones does Russia span?",
        answerOptions: [
          { answerText: "9", isCorrect: false },
          { answerText: "6", isCorrect: false, isJoker: true },
          { answerText: "15", isCorrect: false },
          { answerText: "11", isCorrect: true, isJoker: true },
        ],
        additionalInfo:`Covering much of eastern and northeastern Europe and all of northern Asia, Russia has a maximum east-west extent of some 9,000km (5,600 miles).`
      },
      {
        questionText: "Which country has the oldest existing flag?",
        answerOptions: [
          { answerText: "Denmark", isCorrect: true, isJoker: true },
          { answerText: "Sweden", isCorrect: false },
          { answerText: "France", isCorrect: false, isJoker: true },
          { answerText: "Austria", isCorrect: false },
        ],
        additionalInfo:`A banner with a white-on-red cross is attested as having been used by the kings of Denmark since the 14th century. An origin legend with considerable impact on Danish national historiography connects the introduction of the flag to the Battle of Lindanise, Estonia, of 1219.`
      },
      {
        questionText: "Where is Karl Marx Peak located?",
        answerOptions: [
          { answerText: "Polar Urals, Ural, Russia", isCorrect: false, isJoker: true },
          { answerText: "Shakhdara Range, Pamir, Tajikistan", isCorrect: true, isJoker: true },
          { answerText: "Ore Mountains, Saxony, Germany", isCorrect: false },
          { answerText: "Ulugh Muztag, Kunlun Shan, China", isCorrect: false },
        ],
        additionalInfo:`The highest summit in the Shakhdara Range (6,723m, 22,057ft) was discovered and named in 1937 by Soviet geologist and explorer of South-West Pamir Sergey Klunnikov. Karl Marx Peak was first climbed in 1946 by a group of Soviet alpinists led by Evgeniy Beletskiy.`
      },
      {
        questionText: "Which is the longest glacier in the world?",
        answerOptions: [
          { answerText: "Lambert-Fisher-Glacier, Antarctica", isCorrect: true, isJoker: true },
          { answerText: "Vatnajökull Glacier, Iceland", isCorrect: false },
          { answerText: "Taku Glacier, Alaska, USA", isCorrect: false },
          { answerText: "Jakobshavn Glacier, Greenland", isCorrect: false, isJoker: true },
        ],
        additionalInfo:` At 400 kilometers (250 miles) long, and up to 100 kilometers (60 miles) wide, this ice stream alone drains about 8 percent of the Antarctic Ice Sheet.`
      },
      {
        questionText: "Which country has NO glacier?",
        answerOptions: [
          { answerText: "Australia", isCorrect: true, isJoker: true },
          { answerText: "Indonesia", isCorrect: false, isJoker: true },
          { answerText: "Kenya", isCorrect: false },
          { answerText: "Venezuela", isCorrect: false },
        ],
        additionalInfo:`That's right, even Indonesia has a glacier, the Carstensz Glacier is located near the 4,884m (16,024 ft) high mountain Puncak Jaya on the island of New Guinea. Alas, it's volume is reducing due to climate change.`
      },
      {
        questionText: "Which country scores highest in biodiversity statistics?",
        answerOptions: [
          { answerText: "Indonesia", isCorrect: false, isJoker: true },
          { answerText: "Colombia", isCorrect: false },
          { answerText: "China", isCorrect: false },
          { answerText: "Brazil", isCorrect: true, isJoker: true },
        ],
        additionalInfo:`Between the Amazon rainforest and Mata Atlantica forest, the woody savanna-like cerrado, the massive inland swamp known as the Pantanal, and a range of other terrestrial and aquatic ecosystems, Brazil leads the world in plant and amphibian species counts. `
      },
      {
        questionText: "Approximately how many species have been discovered worldwide?",
        answerOptions: [
          { answerText: "500.000", isCorrect: false },
          { answerText: "1.000.000", isCorrect: false, isJoker: true },
          { answerText: "150.000", isCorrect: false },
          { answerText: "1.500.000", isCorrect: true, isJoker: true },
        ],
        additionalInfo:`New estimates predict a total between 5 and 10 million species currently living on planet Earth. Let's fight for the preservation of biodiversity so we don't destroy our wealth before we know of it!`
      },
      {
        questionText: "Of all the species discovered on Earth, which group leads the numbers?",
        answerOptions: [
          { answerText: "Insects", isCorrect: true, isJoker: true },
          { answerText: "Bacteria", isCorrect: false },
          { answerText: "Fungi", isCorrect: false },
          { answerText: "Plants", isCorrect: false, isJoker: true },
        ],
        additionalInfo:`Approximately 751.000 species of insects have been discovered so far. However, scientists estimate there may be literally millions more!`
      },
      {
        questionText: "Which was the most severe extinction event in Earth history?",
        answerOptions: [
          { answerText: "Late Permian ectinction", isCorrect: true, isJoker: true },
          { answerText: "Late Cretaceous extinction", isCorrect: false, isJoker: true },
          { answerText: "Ordovician extinction", isCorrect: false },
          { answerText: "Jurassic extinction", isCorrect: false },
        ],
        additionalInfo:`252 million years ago, before dinosaurs, our planet was populated with plants and animals that were mostly obliterated after massive volcanic eruptions in Siberia.`
      },
      {
        questionText: "What is the capital of Ukraine?",
        answerOptions: [
          { answerText: "Kyiv", isCorrect: true, isJoker: true },
          { answerText: "Odesa", isCorrect: false, isJoker: true },
          { answerText: "Kharkiv", isCorrect: false },
          { answerText: "Lviv", isCorrect: false },
        ],
        additionalInfo:`Scholars continue to debate when the city was founded: the traditional founding date is 482 AD, so the city celebrated its 1,500th anniversary in 1982. Archaeological data indicates a founding in the sixth or seventh centuries.`
      },
      {
        questionText: "What is known to live at the deepest part of the Mariana Trench at about 10,650m deep?",
        answerOptions: [
          { answerText: "Regular sized fish", isCorrect: false },
          { answerText: "Giant amoeba", isCorrect: true, isJoker: true },
          { answerText: "Giant squid", isCorrect: false, isJoker: true },
          { answerText: "Giant shrimp", isCorrect: false },
        ],
        additionalInfo:`Xenophyophores are giant single celled organisms with a test. They are noteworthy for their size, with individual cells often exceeding 10cm (4 inches), their extreme abundance on the seafloor and their role as hosts for a variety of organisms.`
      },
      {
        questionText: "The surface area of the Moon is equivalent to the surface area of...",
        answerOptions: [
          { answerText: "USA", isCorrect: false },
          { answerText: "Russia", isCorrect: false, isJoker: true },
          { answerText: "All of them combined", isCorrect: true, isJoker: true },
          { answerText: "Canada", isCorrect: false },
        ],
        additionalInfo:`Interestingly, the diameter of the moon is smaller than the width of each of the countries mentioned.`
      },
      {
        questionText: "Plants in the Amazon rainforest rely on phosphorus. What is the region's source of that element?",
        answerOptions: [
          { answerText: "The soil", isCorrect: false },
          { answerText: "Decomposition of animal remains", isCorrect: false, isJoker: true },
          { answerText: "The Sahara desert", isCorrect: true, isJoker: false },
          { answerText: "Cosmic particles", isCorrect: false },
        ],
        additionalInfo:`The Sahara is the largest source of fertilizing aeolian dust in the world, with annual production rates of about 400-700 million tons/year. Saharan dust travels over thousands of miles to all directions except southwards.`
      },
      {
        questionText: "Where is the currently oldest known stone monument located?",
        answerOptions: [
          { answerText: "Çatalhöyük, Turkey", isCorrect: false },
          { answerText: "Göbekli Tepe, Turkey", isCorrect: true, isJoker: true },
          { answerText: "Jericho, Israel", isCorrect: false, isJoker: false },
          { answerText: "Saqqara, Egypt", isCorrect: false },
        ],
        additionalInfo:`Built and used between 10000 and 7500 BC, this structure of unclear purpose is famous for it's large, T-shaped pillars up to 7m high and 3m wide. `
      },
      {
        questionText: "Where are the Birds of Paradise found?",
        answerOptions: [
          { answerText: "Borneo", isCorrect: false },
          { answerText: "Madagascar", isCorrect: false, isJoker: true },
          { answerText: "New Guinea", isCorrect: true, isJoker: false },
          { answerText: "Seychelles", isCorrect: false },
        ],
        additionalInfo:`The birds-of-paradise are members of the family Paradisaeidae and are perhaps best known for the plumage of the males of the species (the majority) which are sexually dimorphic, in particular the very long elaborate feathers extending from the beak, wings, tail or head.`
      },
      {
        questionText: "How big can the biggest known bacterium get?",
        answerOptions: [
          { answerText: "100µm", isCorrect: false },
          { answerText: "250µm", isCorrect: false, isJoker: true },
          { answerText: "750µm", isCorrect: true, isJoker: false },
          { answerText: "500µm", isCorrect: false },
        ],
        additionalInfo:`The biggest known bacterium Thiomargarita namibiensis lives in ocean sediments and is visible to the naked eye.`
      },
      {
        questionText: "What is Pangaea Proxima?",
        answerOptions: [
          { answerText: "The northernmost town on Greenland", isCorrect: false },
          { answerText: "The next supercontinent", isCorrect: true, isJoker: true },
          { answerText: "A dinosaur species", isCorrect: false, isJoker: false },
          { answerText: "The greek goddess of the Earth", isCorrect: false },
        ],
        additionalInfo:`Consistent with the supercontinent cycle, Pangaea Proxima could occur within the next 200 million years. This potential configuration, hypothesized by Christopher Scotese 1982, earned its name from its similarity to the previous Pangaea supercontinent.`
      },
      {
        questionText: "What is the capital city of Nigeria?",
        answerOptions: [
          { answerText: "Port Harcourt", isCorrect: false },
          { answerText: "Abuja", isCorrect: true, isJoker: true },
          { answerText: "Lagos", isCorrect: false, isJoker: false },
          { answerText: "Ibadan", isCorrect: false },
        ],
        additionalInfo:`Nigeria is a federal republic comprising 36 states and the Federal Capital Territory, where the capital, Abuja, is located.`
      },
      {
        questionText: "Approximately how many languages are spoken in Nigeria?",
        answerOptions: [
          { answerText: "50", isCorrect: false },
          { answerText: "500", isCorrect: true, isJoker: true },
          { answerText: "100", isCorrect: false, isJoker: false },
          { answerText: "1200", isCorrect: false },
        ],
        additionalInfo:`Nigeria is a multinational state, as it is inhabited by over 250 ethnic groupings, of which the three largest are the Hausa, Igbo and Yoruba. These ethnic groups speak over 500 different languages, have diverse cultures, and exhibits unique art.`
      },
      {
        questionText: "Approximately how many butterfly species can be found in Nigeria?",
        answerOptions: [
          { answerText: "50", isCorrect: false },
          { answerText: "1000", isCorrect: true, isJoker: true },
          { answerText: "100", isCorrect: false, isJoker: false },
          { answerText: "12", isCorrect: false },
        ],
        additionalInfo:`Nigeria is famous for it's beautiful and diverse butterflies. Nigeria has an exceptional biodiversity and boasts an abundance of fauna and flora. New species are still being discovered.`
      },
      {
        questionText: "Which is currently the largest city in Africa?",
        answerOptions: [
          { answerText: "Giza, Egypt", isCorrect: false },
          { answerText: "Kinshasa, Democratic Republic of Congo", isCorrect: true, isJoker: true },
          { answerText: "Cairo, Egypt", isCorrect: false, isJoker: false },
          { answerText: "Lagos, Nigeria", isCorrect: false },
        ],
        additionalInfo:`With over 15.628.000 inhabitants, Kinshasa is the capital of the Democratic Republic of the Congo, and largest francophone city in the world.`
      },
      {
        questionText: "What is the oldest desert in the world?",
        answerOptions: [
          { answerText: "Gobi, Mongolia", isCorrect: false },
          { answerText: "Namib, Namibia", isCorrect: true, isJoker: true },
          { answerText: "Atacama, Chile", isCorrect: false, isJoker: false },
          { answerText: "Thar, India", isCorrect: false },
        ],
        additionalInfo:`Stretching 1,600 km (990 mi) along the Atlantic coast, this desert is estimated to be at least 55 million years old, but is most likely much older. In addition to being the oldest, the Namib is one of the driest deserts and is mostly uninhabited by humans.`
      },
      {
        questionText: "How many people live in the Arctic?",
        answerOptions: [
          { answerText: "1 Million", isCorrect: false },
          { answerText: "50 Million", isCorrect: false, isJoker: true },
          { answerText: "4 Million", isCorrect: true, isJoker: false },
          { answerText: "30.000", isCorrect: false },
        ],
        additionalInfo:`About 4 million people live in the Arctic, spread out over eight countries: the United States, Canada, Russia, Finland, Norway, Sweden, Iceland and Greenland. `
      },

  ];

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  
    const shuffled = shuffleArray(questions)
  
 
  export default shuffled
