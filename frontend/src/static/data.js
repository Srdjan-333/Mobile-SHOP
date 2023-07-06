// Navigacioni podaci
export const navItems = [
  {
    title: 'Početna stranica',
    url: '/',
  },
  {
    title: 'Najprodavanije',
    url: '/best-selling',
  },
  {
    title: 'Proizvodi',
    url: '/products',
  },
  {
    title: 'Više o nama',
    url: '/about-us',
  },
];

// Podaci o pogodnostima
export const brandingData = [
  {
    id: 1,
    title: 'Besplatna dostava',
    description: 'Nudimo besplatnu dostavu na kupovinu dva ili više proizvoda',
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Velika ponuda uređaja',
    description:
      'Uštedite do 25% popusta na širok asortiman kvalitetnih uređaja',
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Pristupačne cene',
    description:
      'Uz veliku ponudu nudimo vam širok izbor proizvoda sa prihvatljivim cenama',
    icon: (
      <svg
        width="32"
        height="35"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Sigurno plaćanje',
    description:
      '100% zaštićena plaćanja, što znači zaštitu vaših financijskih podataka',
    icon: (
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
];

// Podaci o kategorijama
export const categoriesData = [
  {
    id: 1,
    title: 'Računari i laptopi',
    subTitle: '',
    image_Url:
      'https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838',
  },
  {
    id: 2,
    title: 'Tableti',
    subTitle: '',
    image_Url:
      'https://movicenter.com.pa/wp-content/uploads/2022/03/image.webp',
  },
  {
    id: 3,
    title: 'Mobilni telefoni',
    subTitle: '',
    image_Url:
      'https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg',
  },
  {
    id: 4,
    title: 'Slušalice i zvučnici',
    subTitle: '',
    image_Url:
      'https://service.pcconnection.com/images/inhouse/901AC00A-2A4F-4CFF-B6C8-612680656086.jpg?interpolation=lanczos-none&downsize=800%3A*',
  },
  {
    id: 5,
    title: 'Pametni satovi',
    subTitle: '',
    image_Url:
      'https://appleme.lk/wp-content/uploads/2022/01/N78-Smart-Watch-1.jpg',
  },
  {
    id: 6,
    title: 'Zaštitna stakla i maskice',
    subTitle: '',
    image_Url:
      'https://cdn.shopify.com/s/files/1/1384/0075/products/iPhone13-ScreenProtector-Hero_2048x.png?v=1631303508',
  },
];

// Podaci o proizvodu
export const productData = [
  {
    id: 1,
    category: 'Računari i laptopi',
    name: 'Apple MacBook pro M2 16GB 256 GB siva boja',
    description:
      'Apple MacBook Pro M2 16GB 256GB u sivoj boji je vrhunski prenosni računar koji kombinuje moć i eleganciju. Opremljen novim M2 čipom, ovaj MacBook Pro pruža izuzetne performanse i brzinu. Sa 16GB RAM memorijom i 256GB skladišnog prostora, ima dovoljno snage i kapaciteta za multitasking i čuvanje važnih datoteka. Siva boja mu daje sofisticiran izgled, dok njegova tanka i lagana konstrukcija omogućava jednostavno prenošenje. Bez obzira da li se koristi za profesionalne ili svakodnevne potrebe, Apple MacBook Pro M2 pruža izvanredno iskustvo rada na prenosnom računaru.',
    image_Url: [
      {
        public_id: 'test1',
        url: 'https://img.gigatron.rs/img/products/large/image62bed455c22b7.jpg',
      },
      {
        public_id: 'test2',
        url: 'https://img.gigatron.rs/img/products/large/image62bed44e8d6de.png',
      },
      {
        public_id: 'test3',
        url: 'https://img.gigatron.rs/img/products/large/image62bed4563f339.jpg',
      },
    ],
    price: 244999,
    discount_price: 220999,
    rating: 5,
    stock: 5,
  },
  {
    id: 2,
    category: 'Računari i laptopi',
    name: 'DELL Vostro 3520 i7 8GB 512GB B550W11P',
    description:
      'DELL Vostro 3520 i7 8GB 512GB B550W11P je snažan prenosni računar koji pruža visoke performanse i pouzdanost. Opremljen sa Intel Core i7 procesorom, 8GB RAM memorijom i 512GB skladišnog prostora, ovaj model omogućava brzo izvršavanje zadataka i efikasno upravljanje podacima. Sa elegantnim dizajnom i naprednim funkcijama, DELL Vostro 3520 i7 8GB 512GB B550W11P je idealan izbor za poslovne korisnike i one koji zahtevaju pouzdan prenosni računar za rad i produktivnost.',
    image_Url: [
      {
        public_id: 'test1',
        url: 'https://img.gigatron.rs/img/products/large/image6461d86c907f4.jpg',
      },
      {
        public_id: 'test2',
        url: 'https://img.gigatron.rs/img/products/large/image6461d86cf09fc.jpg',
      },
      {
        public_id: 'test3',
        url: 'https://img.gigatron.rs/img/products/large/image6461d86e227a7.jpg',
      },
    ],
    price: 130999,
    discount_price: 99999,
    rating: 5,
    stock: 10,
  },
  {
    id: 3,
    category: 'Tableti',
    name: 'SAMSUNG Galaxy Tab S8 Ultra 128GB Wifi Graphite (Tamno siva)',
    description:
      'SAMSUNG Galaxy Tab S8 Ultra sa 128GB skladišnog prostora i Wi-Fi povezivanjem u tamnoj sivoj (graphite) boji je vrhunski tablet koji pruža izvanredno iskustvo. Sa velikim kapacitetom memorije, ovaj tablet omogućava vam da sa sobom nosite sve važne datoteke, slike i video zapise. Sa naprednim funkcijama kao što su moćan procesor i visokokvalitetan ekran, SAMSUNG Galaxy Tab S8 Ultra pruža izuzetnu brzinu, performanse i vizuelno zadovoljstvo. Bez obzira da li ga koristite za rad, zabavu ili produktivnost, ovaj tablet je savršen partner koji će vas oduševiti svojom funkcionalnošću i elegantnim dizajnom.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/99dd1cbdb3f3ed47d807c4f916cf9db7.png',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/02a1d9c76d880430225bc6a7da605604.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/ab1507a798c0a76af0d912f86d37099e.jpg',
      },
    ],
    price: 129999,
    discount_price: 100999,
    rating: 4,
    total_sell: 75,
    stock: 5,
  },
  {
    id: 4,
    category: 'Tableti',
    name: 'APPLE iPad Air 5 64GB 10.9" Blue (Plava)',
    description:
      'APPLE iPad Air 5 sa 64GB prostora za skladištenje i 10.9-inčnim ekranom u plavoj boji je izuzetno moćan i elegantan tablet. Sa svojim naprednim procesorom i visokokvalitetnim ekranom, ovaj iPad pruža vrhunsku performansu i oštru sliku. Sa dovoljno prostora za čuvanje vaših omiljenih aplikacija, fotografija i video zapisa, možete uživati u bezbrojnim sadržajima na ovom tabletu. Zahvaljujući svojoj laganoj i tankoj konstrukciji, APPLE iPad Air 5 je idealan za korišćenje u pokretu. Bez obzira da li ga koristite za rad, učenje ili zabavu, ovaj tablet će vas oduševiti svojom funkcionalnošću, intuitivnim interfejsom i prepoznatljivim dizajnom koji je karakterističan za Apple proizvode.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image623453f9cb81a.png',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image623453fa37e58.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image623453fa8c99d.jpg',
      },
    ],

    price: 129999,
    discount_price: 100999,
    rating: 4,
    total_sell: 75,
    stock: 10,
  },
  {
    id: 5,
    category: 'Mobilni telefoni',
    name: 'APPLE iPhone 14 Plus 6GB 128GB PRODUCT RED MQ513SXA',
    description:
      'Apple iPhone 14 Plus 6GB 128GB PRODUCT RED je visokokvalitetni pametni telefon koji se ističe svojim snažnim performansama i velikim skladišnim kapacitetom. Sa 6 GB RAM-a i 128 GB interne memorije, pruža brzo izvršavanje aplikacija i mogućnost skladištenja velike količine podataka. Ovaj model ima elegantan dizajn i crvenu boju u skladu sa projektom PRODUCT(RED). Sa naprednom kamerom i podrškom za najnovije tehnologije, pruža visokokvalitetno iskustvo fotografisanja i upotrebe aplikacija. Sa iOS operativnim sistemom i intuitivnim korisničkim sučeljem, nudi sigurnost i širok izbor aplikacija iz App Store-a.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image63e10db6d8638.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image63e10db814b6d.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image63e10db7ad9e7.jpg',
      },
    ],

    price: 179999,
    discount_price: 162999,
    rating: 4,
    total_sell: 12,
    stock: 10,
  },
  {
    id: 6,
    category: 'Mobilni telefoni',
    name: 'SAMSUNG Galaxy A54 5G 8GB 256GB Graphite',
    description:
      'SAMSUNG Galaxy A54 5G u boji grafita je napredni pametni telefon koji pruža izvanredno iskustvo 5G povezivanja. Sa 8GB RAM-a i 256GB interne memorije, ovaj telefon vam omogućava brz pristup aplikacijama, igrama i multimedijalnom sadržaju. Sa svojim svestranim kamerama možete zabeležiti oštre i živopisne fotografije, dok njegov impresivan ekran pruža bogatstvo boja i detalja. Galaxy A54 5G je idealan izbor za one koji žele brzinu, performanse i pouzdanost u svakodnevnom korišćenju svog pametnog telefona.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image64132b7249958.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image64132b036f52d.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image64132b02a5aa8.jpg',
      },
    ],

    price: 61999,
    discount_price: 58999,
    rating: 5,
    total_sell: 49,
    stock: 5,
  },
  {
    id: 7,
    category: 'Slušalice i zvučnici',
    name: 'SONY WH1000XM4 Black Bežične slušalice',
    description:
      'SONY WH1000XM4 Black bežične slušalice su vrhunski audio uređaj koji pruža vrhunski zvuk i napredne funkcije. Sa njihovom aktivnom bukom eliminacijom, možete uživati u kristalno čistom zvuku bez ometanja spoljašnjih zvukova. Ove slušalice su udobne za nošenje i pružaju impresivnu baterijsku autonomiju, što vam omogućava da dugo uživate u omiljenoj muzici bez potrebe za čestim punjenjem. Sa intuitivnim kontrolama i podrškom za glasovne asistente, ove bežične slušalice vam pružaju jednostavan i praktičan način da upravljate svojim audio sadržajem. SONY WH1000XM4 Black su savršene slušalice za ljubitelje muzike i audioentuzijaste koji žele vrhunski zvuk i udobnost.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image6305cbc3f1071.png',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image6305cbd7e2958.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image6305cbdfbbc9c.jpg',
      },
    ],

    price: 59999,
    discount_price: 52999,
    rating: 4.5,
    total_sell: 20,
    stock: 5,
  },
  {
    id: 8,
    name: 'SONY Bežični zvučnik XB33 Extra Bass (Crni) SRSXB33B.CE7',
    description:
      'SONY Bežični zvučnik XB33 Extra Bass u crnoj boji (SRSXB33B.CE7) je prenosni zvučnik koji pruža snažan zvuk i impresivno iskustvo slušanja. Sa tehnologijom Extra Bass, ovaj zvučnik donosi duboke i bogate basove koji će dodatno obogatiti vaše omiljene pesme. Zahvaljujući bežičnom povezivanju putem Bluetooth-a, možete jednostavno povezati svoje uređaje i strimovati muziku sa bilo kog mesta. Ovaj zvučnik je takođe otporan na vodu i prašinu, što ga čini idealnim za korišćenje na otvorenom ili u vlažnim uslovima. Sa dugom trajnošću baterije, možete uživati u muzici tokom celog dana bez brige o prekidima. SONY Bežični zvučnik XB33 Extra Bass je savršen izbor za ljubitelje muzike koji žele snažan zvuk, izdržljivost i praktičnost.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image5f3a3d244d467.png',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image5f3a3d2540bbc.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image5f3a3d2244bec.jpg',
      },
    ],

    discount_price: 18999,
    price: 21999,
    rating: 4,
    total_sell: 62,
    stock: 10,
    category: 'Slušalice i zvučnici',
  },
  {
    id: 9,
    name: 'APPLE Watch Ultra Titanium White ocean 49mm Pametni sat',
    description:
      'APPLE Watch Ultra Titanium White ocean 49mm je pametni sat koji kombinuje elegantan dizajn sa naprednim funkcionalnostima. Sa svojim titanijumskim kućištem i belim ocean kaišem, ovaj sat pruža sofisticiran izgled koji se ističe. Opremljen je velikim 49mm ekranom koji vam omogućava jasan prikaz informacija i jednostavno upravljanje. APPLE Watch Ultra ima napredne fitnes funkcije kao što su merenje pulsa, brojanje koraka, praćenje aktivnosti i mogućnost praćenja različitih sportskih aktivnosti. Takođe podržava bežično povezivanje, omogućavajući vam da primite obaveštenja, upravljate muzikom i koristite različite aplikacije direktno na satu. Sa dugotrajnom baterijom, možete nositi sat tokom celog dana bez brige o punjenju. APPLE Watch Ultra Titanium White ocean 49mm je idealan izbor za one koji žele elegantan i funkcionalan pametni sat sa naprednim fitnes mogućnostima.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/bace7912b2c326c87de270ac985b3526.png',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image632185948f544.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image63218594c1cc9.jpg',
      },
    ],

    price: 130999,
    discount_price: 120999,
    rating: 4.5,
    total_sell: 20,
    stock: 10,
    category: 'Pametni satovi',
  },
  {
    id: 10,
    category: 'Pametni satovi',
    name: 'SAMSUNG Galaxy Watch 5 Pro LTE Gray Titanium SMR925FZT Pametni sat',
    description:
      'SAMSUNG Galaxy Watch 5 Pro LTE Gray Titanium SMR925FZT je pametni sat koji se ističe svojim elegantnim dizajnom i izuzetnom izdržljivošću. Sa svojim titanijumskim kućištem, ovaj sat kombinuje luksuzan izgled sa visokom otpornošću na habanje. Pruža vam sveobuhvatan doživljaj praćenja zdravlja i fitnesa, uz napredne funkcije kao što su merenje pulsa, praćenje sna, brojanje koraka i mogućnost praćenja različitih sportskih aktivnosti. Pored toga, Galaxy Watch 5 Pro LTE omogućava vam da ostanete povezani putem bežičnog interneta i obavljate pozive čak i kada vam je telefon nedostupan. Sa svojim brojnim funkcijama i sofisticiranim izgledom, ovaj pametni sat je idealan izbor za one koji žele spoj stila, tehnologije i funkcionalnosti.',
    image_Url: [
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image62f3b76e9c53d.png',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image62f3b780048ee.jpg',
      },
      {
        public_id: 'test',
        url: 'https://img.gigatron.rs/img/products/large/image62f3b7817d6e1.jpg',
      },
    ],
    shop: {
      name: 'Samsung',
      shop_avatar: {
        public_id: 'test',
        url: 'https://logowik.com/content/uploads/images/samsung9636.jpg',
      },
      ratings: 4.2,
    },
    discount_price: 55999,
    price: 59999,
    rating: 5,
    total_sell: 20,
    stock: 0,
  },
];

export const footercompanyLinks = [
  {
    name: 'Više o nama',
    link: '/about-us',
  },
  {
    name: 'Karijera',
  },
  {
    name: 'Lokacije prodavnica',
  },
  {
    name: 'Recenzije',
  },
];

export const footerProductLinks = [
  {
    name: 'Računari i laptopovi',
    link: '/products?category=Računari%20i%20laptopi',
  },
  {
    name: 'Tableti',
    link: '/products?category=Tableti',
  },
  {
    name: 'Mobilni telefoni',
    link: '/products?category=Mobilni%20telefoni',
  },
  {
    name: 'Slušalice i zvučnici',
    link: '/products?category=Slušalice%20i%20zvučnici',
  },
  {
    name: 'Pametni satovi',
    link: '/products?category=Pametni%20satovi',
  },
  {
    name: 'Zaštitna stakla i maskice',
    link: '/products?category=Zaštitna%20stakla%20i%20maskice',
  },
];

export const footerSupportLinks = [
  {
    name: 'Često postavljana pitanja',
  },
  {
    name: 'Recenzije',
  },
  {
    name: 'Kontakt',
  },
  {
    name: 'Dostava',
  },
];
