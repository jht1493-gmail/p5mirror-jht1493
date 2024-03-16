// https://projects.thecity.nyc/covid-19-deaths/
// a_refs created by running scrape_refs in console
// All / Sort youngest
function scrape_refs() {
  let m = document.querySelectorAll('li');
  let q = [];
  let i = 0;
  let hn = 0;
  m.forEach((n) => {
    let d = n.querySelector('.obit-description');
    if (d) {
      let o = { i };
      i++;
      o.d = d.innerText;
      if (d.nextElementSibling) {
        o.e = d.nextElementSibling.innerHTML;
      }
      let h = n.querySelector('img');
      if (h && h.src.startsWith('https://projects')) {
        o.h = h.src;
        hn++;
      }
      q.push(o);
    }
  });
  let s = JSON.stringify(q, null, 2);
  console.log(s);
  console.log('q.length', q.length, 'hn', hn);
}
// q.length – 1963 – "hn" – 230

let a_refs = [
  {
    i: 0,
    d: 'SHAIMEEK RAIJEEN FRAZIER, 21, The Bronx',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shaimeek_Frazier.jpg',
  },
  {
    i: 1,
    d: 'DAVID RIVERA JR., 23, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Rivera.jpeg',
  },
  {
    i: 2,
    d: 'SEAN HOOK, 23, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 3,
    d: 'DARREL MATTOCKS, 23, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 4,
    d: 'WILLIAM “KIING SHOOTER” DANIELS, 24, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 5,
    d: 'TANASIA SHAKIA “NAY NAY” ALAMO, 25',
    e: 'March 31, 2020',
  },
  {
    i: 6,
    d: 'HAILEY MARIE HERRERA, 25, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 7,
    d: 'LUIS “BOYIE” RIVERA, 25, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 8,
    d: 'YITZCHAK MATATOV, 26',
    e: 'April 2, 2020',
  },
  {
    i: 9,
    d: 'BRENDA MENDOZA, 28, Queens',
  },
  {
    i: 10,
    d: 'MICHELLE ALEXANDER, 29, Brooklyn',
    e: 'April 5, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Alexander.jpg',
  },
  {
    i: 11,
    d: 'JAYED ALAM, 29, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 12,
    d: 'CALVIN BELL, 29, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 13,
    d: 'CHRISTOPHER MONDAL, 30, The Bronx',
    e: 'March 26, 2020',
  },
  {
    i: 14,
    d: 'RANA ZOE MUNGIN, 30, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 15,
    d: 'AVINAASH TAKDARI, 31, The Bronx',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Avinaash_Takdari.jpg',
  },
  {
    i: 16,
    d: 'JAY JANKELEWICZ, 31, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 17,
    d: 'RAHMAN MIZANUR, 31, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 18,
    d: 'MIGUEL ALMARANTE JR., 32, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Almarante.jpg',
  },
  {
    i: 19,
    d: 'CRAIG AUGUSTE, 32, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 20,
    d: 'FRANTZ VITAL, 32, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frantz_Vital.jpg',
  },
  {
    i: 21,
    d: 'KEITH MCDONALD, 32',
  },
  {
    i: 22,
    d: 'LUKE JAMES WORKOFF, 33, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luke_Workoff.png',
  },
  {
    i: 23,
    d: 'KARISMA DARGAN, 33, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 24,
    d: 'DIONY DIAZ, 33, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 25,
    d: 'VICTOR MORALES, 33, The Bronx',
    e: 'April 24, 2020',
  },
  {
    i: 26,
    d: 'KIMARLEE “KIM” NGUYEN, 33, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 27,
    d: 'KYRA MICHELLE SWARTZ, 33, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 28,
    d: 'SHA-KING “SYCHO” ARRINDELL, 34, Brooklyn',
  },
  {
    i: 29,
    d: 'DONNY FOSTNER, 34',
    e: 'April 2, 2020',
  },
  {
    i: 30,
    d: 'GUSTAVO ADOLFO SALAS HERNANDEZ SR., 34, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 31,
    d: 'PREA NANKIESHORE, 34, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 32,
    d: "HUNTER O'KELLY-RODRIGUEZ, 34, Brooklyn",
    e: 'March 29, 2020',
  },
  {
    i: 33,
    d: 'JUAN “MACHO” RODRIGUEZ, 35, Brooklyn',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Rodriguez.jpg',
  },
  {
    i: 34,
    d: 'OSCAR ALVAREZ, 35',
    e: 'April 1, 2020',
  },
  {
    i: 35,
    d: 'LARICTER BROWN, 35, The Bronx',
  },
  {
    i: 36,
    d: 'MAURICE LACEY, 35, Queens',
  },
  {
    i: 37,
    d: 'FREDERICK “FRED THE GODSON” THOMAS, 35, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 38,
    d: 'JONATHON DAVIS, 36, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jonathon_Davis.png',
  },
  {
    i: 39,
    d: 'DANIELLE CHRISTINE ARRE, 36, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 40,
    d: 'SAADYA EHRENPREIS, 36, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 41,
    d: 'STEVE FALCO, 36',
    e: 'April 26, 2020',
  },
  {
    i: 42,
    d: 'KALEMA D. MCKETHAN, 36, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 43,
    d: 'DEZ-ANN ROMAIN, 36, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 44,
    d: 'ANNUNZIATA SAHID, 36, Manhattan',
  },
  {
    i: 45,
    d: 'JOEL GOMEZ DOMINGUEZ, 37, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Gomez.jpg',
  },
  {
    i: 46,
    d: 'REYNOLD ANDERSON-HEWITT, 37, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 47,
    d: 'CHRISTOPHER DEAN, 37',
    e: 'April 15, 2020',
  },
  {
    i: 48,
    d: 'RICKEY DOWTIN JR., 37, Staten Island',
  },
  {
    i: 49,
    d: 'JOEL GOMEZ, 37, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 50,
    d: 'ADRIAN HERNANDEZ LOPEZ, 38, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 51,
    d: 'TRISHA MARIAM, 38, Queens',
  },
  {
    i: 52,
    d: 'ELVESTER MCKOY, 38, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 53,
    d: 'ANANDA MOOLIYA, 38, Queens',
  },
  {
    i: 54,
    d: 'ERIC MURRAY, 38, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 55,
    d: 'IVAN PETER, 38, Queens',
  },
  {
    i: 56,
    d: 'JARROD SOCKWELL, 38, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 57,
    d: 'MARCELINO VAQUERO JR., 38, Brooklyn',
  },
  {
    i: 58,
    d: 'RONIECE WATSON, 38, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 59,
    d: 'DUSTIN J. PETRIE, 39, Manhattan',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dustin_Petrie.jpg',
  },
  {
    i: 60,
    d: 'ROVIN ANTHONY SMITH, 39',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rovin_Smith.jpeg',
  },
  {
    i: 61,
    d: 'MONROE M.K. “MONTY” BATES II, 39',
    e: 'April 13, 2020',
  },
  {
    i: 62,
    d: 'YIRA DIAZ, 39, The Bronx',
  },
  {
    i: 63,
    d: 'ADIEL MONTGOMERY, 39, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 64,
    d: 'YOEL SANDEL, 39, Brooklyn',
  },
  {
    i: 65,
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 66,
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 67,
    d: 'GONZALO “GEE” VIDANOS JR., 39, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 68,
    d: 'CLINTON WASHINGTON, 40, The Bronx',
    e: 'May 6, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Clinton_Washington.jpg',
  },
  {
    i: 69,
    d: 'YIMEL ALVARADO, 40, Queens',
  },
  {
    i: 70,
    d: 'MICHAEL MCINTOSH, 40',
  },
  {
    i: 71,
    d: 'A. EDWARD WILLIAMS III, 40',
    e: 'May 7, 2020',
  },
  {
    i: 72,
    d: 'ROBERT CARDONA, 41, Manhattan',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Cardona.PNG',
  },
  {
    i: 73,
    d: 'SEAN ARTIS, 41',
    e: 'April 9, 2020',
  },
  {
    i: 74,
    d: 'SEAN ARTIS, 41',
    e: 'April 9, 2020',
  },
  {
    i: 75,
    d: 'NICK CORDERO, 41, Manhattan',
    e: 'July 5, 2020',
  },
  {
    i: 76,
    d: 'JUAN DIAZ, 41',
    e: 'April 3, 2020',
  },
  {
    i: 77,
    d: 'STEVANUS “STEFAN” FARIZ, 41, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 78,
    d: 'FERDI AMAURY GERMAN, 41, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 79,
    d: 'NEVIE LACAYO, 41',
    e: 'May 25, 2020',
  },
  {
    i: 80,
    d: 'JULIET MANRAGH, 41, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 81,
    d: 'QUEBIY PIGOTT, 41, The Bronx',
  },
  {
    i: 82,
    d: 'JENNIFER ROMAIN-HINDS, 41, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 83,
    d: 'ELECIER WILLIAMS, 41, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 84,
    d: 'KANE “KENNY” NOEL, 42',
    e: 'March 31, 2020',
  },
  {
    i: 85,
    d: 'BINYOMIN ABRAMOWITZ, 42, Brooklyn',
  },
  {
    i: 86,
    d: 'ARTURO AMARO, 42, Queens',
  },
  {
    i: 87,
    d: 'GIANMARCO BERTOLOTTI, 42, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 88,
    d: 'SCOTT CHRISTIAN-RAGINS, 42, Manhattan',
    e: 'May 27, 2020',
  },
  {
    i: 89,
    d: 'SUSAN CHUANG, 42, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 90,
    d: 'SUSAN CHUANG, 42, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 91,
    d: 'TERRENCE EARLINGTON, 42, Brooklyn',
  },
  {
    i: 92,
    d: 'FERNANDO GARZON, 42, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 93,
    d: 'JOSEPH “JOE; J-LEW” LEWINGER, 42, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 94,
    d: 'MARLON MARAGH, 42, Brooklyn',
  },
  {
    i: 95,
    d: 'SALVADOR MORAN, 42, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 96,
    d: 'AJIT NARAIN, 42, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 97,
    d: 'AJIT NARAIN, 42, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 98,
    d: 'MIGUEL A. SOSA, 42',
    e: 'May 3, 2020',
  },
  {
    i: 99,
    d: 'RAYMOND ABEAR, 43, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 100,
    d: 'NECOLE L. DURANT, 43, Brooklyn',
  },
  {
    i: 101,
    d: 'LENIN RICARDO “"LENNY"” FIERRO, 43, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 102,
    d: 'KALIN IZEVBIZUA, 43, Queens',
  },
  {
    i: 103,
    d: 'FERNANDO MORALES GONZÁLEZ, 43, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 104,
    d: 'CARLOS LEONARDO PINTADO, 43, Queens',
  },
  {
    i: 105,
    d: 'CARIDAD SANTIAGO, 43, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 106,
    d: 'DOREEN TAY, 43, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 107,
    d: 'ROLANDO “SONNY” ARAVENA, 44, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 108,
    d: 'IBRAHIMA BA, 44, Manhattan',
  },
  {
    i: 109,
    d: 'IRENE “RENE” BURGONIO, 44, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 110,
    d: 'MICHELLE BURREL, 44, The Bronx',
  },
  {
    i: 111,
    d: 'ALI DENNIS GUILLERMO, 44',
    e: 'April 7, 2020',
  },
  {
    i: 112,
    d: 'RENE GUTIERREZ, 44',
    e: 'April 12, 2020',
  },
  {
    i: 113,
    d: 'MIRZA HUDA, 44, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 114,
    d: 'DANNY CAMACHO, 45',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Danny_Camacho.jpg',
  },
  {
    i: 115,
    d: 'RASHIDA AKTER, 45, Queens',
  },
  {
    i: 116,
    d: 'ANGEL CAMPOS, 45, The Bronx',
  },
  {
    i: 117,
    d: 'LILLIAN CLOWNEY, 45',
  },
  {
    i: 118,
    d: 'CHRISTOPHER ALAN JOE, 45, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 119,
    d: 'ARNELA JUANICO, 45, Queens',
    e: 'June 2, 2020',
  },
  {
    i: 120,
    d: 'ROMARICO “RAMON” MARTINEZ, 45',
    e: 'May 9, 2020',
  },
  {
    i: 121,
    d: 'GABRIEL MENDEZ, 45, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 122,
    d: 'ALYSSA PANTILIERIS, 45, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 123,
    d: 'KRISTOFER M. “KRIS” RUSSO, 45, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 124,
    d: 'ROBERTO TEJADA, 45, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 125,
    d: 'DOMINGO VEGA, 45, Queens',
    e: 'May 16, 2020',
  },
  {
    i: 126,
    d: 'JOSHUA “JOSH” WALLWORK, 45, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 127,
    d: 'PABLO GARCIA, 46, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Garcia.JPG',
  },
  {
    i: 128,
    d: 'RASHIDA AHMED, 46, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 129,
    d: 'RAYMOND DERRICK “RAY” COPELAND, 46, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 130,
    d: 'EZEKIEL “ZEKE” COUSINS, 46, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 131,
    d: 'CHRISTIAN FLORES DELIM, 46',
  },
  {
    i: 132,
    d: 'ALEJANDRO HERNÁNDEZ, 46, Queens',
    e: 'June 13, 2020',
  },
  {
    i: 133,
    d: 'LATIFA HOSKINS, 46, The Bronx',
    e: 'April 16, 2020',
  },
  {
    i: 134,
    d: 'SAKINAH KAMA, 46',
    e: 'April 16, 2020',
  },
  {
    i: 135,
    d: 'EDWARD LATOURETTE, 46, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 136,
    d: 'LEONARD MCCOLLOUGH, 46',
  },
  {
    i: 137,
    d: 'MARCOS GUTIERREZ MONTERO, 46, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 138,
    d: 'MAGDALENA ELIZABETH OCAMPO FRANCO, 46, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 139,
    d: 'JEFFREY ALLEN SCALF, 46, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 140,
    d: 'LEVESTER “L.T.” THOMPSON, 46, Staten Island',
    e: 'April 7, 2020',
  },
  {
    i: 141,
    d: 'EDNA SANDY WACKMAN, 46, Brooklyn',
  },
  {
    i: 142,
    d: 'URAUL WATTS, 46',
  },
  {
    i: 143,
    d: 'LUIS LIZ, 47, The Bronx',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Liz.jpeg',
  },
  {
    i: 144,
    d: 'EVELYN RIVERA, 47, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Rivera.jpg',
  },
  {
    i: 145,
    d: 'DAVID BEHRBOM, 47, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 146,
    d: 'RASHMI CHRISTIAN, 47, Brooklyn',
  },
  {
    i: 147,
    d: 'THOMAS “BIJU” DAVID, 47, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 148,
    d: 'STANLEY FONG, 47, Queens',
  },
  {
    i: 149,
    d: 'MICHAEL GERACI, 47',
    e: 'April 14, 2020',
  },
  {
    i: 150,
    d: 'MICHAEL GERACI, 47, Queens',
  },
  {
    i: 151,
    d: 'LOUIS TORRES, 47, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 152,
    d: 'GUADALUPE VELASQUEZ, 47, Queens',
  },
  {
    i: 153,
    d: 'KIYOTO “BREEZE” WILLIAMS, 47, Staten Island',
  },
  {
    i: 154,
    d: 'ANTHONY R. IRACI, 48, Staten Island',
    e: 'March 27, 2020',
  },
  {
    i: 155,
    d: 'ROXANNE BENT, 48, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 156,
    d: 'MOSTAFIZUR RAHMAN BIPU, 48, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 157,
    d: 'ANTHONY CAUSI, 48, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 158,
    d: 'HESRONNI ST. ANTHONY CAYENNE, 48, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 159,
    d: 'GILBERT CONSTANT, 48, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 160,
    d: 'CEDRIC GEORGE DIXON, 48, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 161,
    d: 'DAVID “DAVE” EDWARDS JR., 48, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 162,
    d: 'MI LYNN HUNT, 48, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 163,
    d: 'KIOUS JORDAN “JAMES; JAMIE” KELLY, 48, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 164,
    d: 'THERESA M. LOCOCO JR., 48, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 165,
    d: 'ALLYSON MESTEL-SCHAPIRA, 48, Queens',
  },
  {
    i: 166,
    d: 'BARBARA PETTIWAY, 48, Manhattan',
  },
  {
    i: 167,
    d: 'GLORIA SOSA, 48, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 168,
    d: 'REBECCA YEE, 48, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 169,
    d: 'RANDIP S. “BOBBY” MINHAS, 49, Queens',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Randip_Minhas.JPG',
  },
  {
    i: 170,
    d: 'KELLY K. WONG, 49, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kelly_Wong.jpg',
  },
  {
    i: 171,
    d: 'MOHAMMED AHSAN, 49, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 172,
    d: 'GERRY BALASTA, 49, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 173,
    d: 'ARTHUR LEE “EL DORADO; THE GREEN MILE” GREEN, 49, The Bronx',
    e: 'March 23, 2020',
  },
  {
    i: 174,
    d: 'ERIC GRIMES, 49',
  },
  {
    i: 175,
    d: 'MICHAEL D. HOLLEY, 49',
  },
  {
    i: 176,
    d: 'PETER JI, 49, Manhattan',
  },
  {
    i: 177,
    d: 'DAVID JOHNSON, 49, Brooklyn',
    e: 'March 25, 2020',
  },
  {
    i: 178,
    d: 'MOHAMMAD SAIFUL HAYDER “AJAD” KHAN, 49',
    e: 'April 5, 2020',
  },
  {
    i: 179,
    d: 'ANIL SUBBA “RAMESH SAMBAHAMFE” LIMBU, 49, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 180,
    d: 'LEON J. MCKNIGHT JR., 49, The Bronx',
  },
  {
    i: 181,
    d: 'JESUS ROMAN MELENDEZ, 49, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 182,
    d: 'ARISTEDES MORAITIS, 49, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 183,
    d: 'JORGE “FATHER GEORGE” ORTIZ-GARAY, 49, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 184,
    d: 'PETER PETRASSI, 49, Queens',
    e: 'March 26, 2020',
  },
  {
    i: 185,
    d: 'LLOYD CORNELIOUS PORTER, 49, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 186,
    d: 'CHARINA “CHERRY” PORTILLO, 49',
    e: 'March 28, 2020',
  },
  {
    i: 187,
    d: 'MARISOL ROSARIO, 49, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 188,
    d: 'ALEX ZAPATA, 49, Brooklyn',
  },
  {
    i: 189,
    d: 'ALAN MATZA, 50, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 190,
    d: 'LUIS RIVERA, 50, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Rivera.jpeg',
  },
  {
    i: 191,
    d: 'JUAN CASTILLO, 50, The Bronx',
  },
  {
    i: 192,
    d: 'TAMMY HENDRIKS, 50, Queens',
  },
  {
    i: 193,
    d: 'VADIM IVLEV, 50, Staten Island',
  },
  {
    i: 194,
    d: 'RAKKHON KIM, 50, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 195,
    d: 'YOSEF TZVI KLEIN, 50, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 196,
    d: 'MELISSA MARIE KRUPPA, 50, Staten Island',
    e: 'June 20, 2020',
  },
  {
    i: 197,
    d: 'FREDA OCRAN, 50, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 198,
    d: 'MILAGROS PEREZ, 50, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 199,
    d: 'DIANNA RUSSELL, 50',
    e: 'May 30, 2020',
  },
  {
    i: 200,
    d: 'DARRIN M. SANTOS SR., 50',
    e: 'April 4, 2020',
  },
  {
    i: 201,
    d: 'SUSAN SISGUNDO, 50, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 202,
    d: 'RODNEY SPARROW, 50, Brooklyn',
  },
  {
    i: 203,
    d: 'ALDO URRIOLA, 50, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 204,
    d: 'KIMBERLY “KIM” WETZEL, 50, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 205,
    d: 'NASHOM WOODEN, 50, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 206,
    d: 'MAURICE KIRBY, 51, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 207,
    d: 'ROBERT “ROB” NATHAN, 51',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Nathan.jpg',
  },
  {
    i: 208,
    d: 'AFZAL AHMED, 51, Queens',
  },
  {
    i: 209,
    d: 'GUILLERMO FRESTAN, 51, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 210,
    d: 'JANEE MICHELLE FUNCHESS, 51, The Bronx',
  },
  {
    i: 211,
    d: 'ANICK “NICK” JESDANUN, 51, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 212,
    d: 'YUPADEE KOBKULBOONSIRI, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 213,
    d: 'DARLISA C. NESBITT, 51, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 214,
    d: 'BOSEDE OLOWURO, 51, The Bronx',
  },
  {
    i: 215,
    d: 'MARTHA ORTEGA, 51, Queens',
    e: 'May 24, 2020',
  },
  {
    i: 216,
    d: 'BERNADETTE PAYNE, 51, The Bronx',
    e: 'March 24, 2020',
  },
  {
    i: 217,
    d: 'JACK POLIMENI, 51, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 218,
    d: 'PAULA PRYCE-BREMMER, 51',
    e: 'March 26, 2020',
  },
  {
    i: 219,
    d: 'BARBARELLA RODRIGUEZ, 51, Queens',
  },
  {
    i: 220,
    d: 'WILLIAM SCOTT, 51',
    e: 'April 2, 2020',
  },
  {
    i: 221,
    d: 'ALBERTO “ZULMA ZANELLY” SEVILLA, 51, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 222,
    d: 'CALEB ST. SURIN, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 223,
    d: 'PETER URSINO, 51, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 224,
    d: 'MATTHEW F. MOORE JR., 52, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 225,
    d: 'ROBERT PAPIK, 52',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Papik.png',
  },
  {
    i: 226,
    d: 'LIBORIO “LEE” ALESSI JR., 52, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 227,
    d: 'MIGUEL “THE PASTA KING” GRANDE, 52, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 228,
    d: 'VICTOR VAZQUEZ HERNANDEZ, 52, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 229,
    d: 'CHRISTOPHER N. HOWARD, 52',
    e: 'May 3, 2020',
  },
  {
    i: 230,
    d: 'SAU LEE, 52',
    e: 'April 18, 2020',
  },
  {
    i: 231,
    d: 'DIANE MCCARREN, 52, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 232,
    d: 'EDWIN MCDOWELL, 52',
  },
  {
    i: 233,
    d: 'SHARON NEARBY, 52, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 234,
    d: 'EZEQUIEL ORTIZ, 52, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 235,
    d: 'RAÚL RAMÍREZ, 52, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 236,
    d: 'JANICE “MISS JANICE” RODMAN, 52, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 237,
    d: 'JUAN SANABRIA, 52, The Bronx',
  },
  {
    i: 238,
    d: 'ADAM SCHLESINGER, 52, Manhattan',
    e: 'April 1, 2020',
  },
  {
    i: 239,
    d: 'CURTIS I WHITTED JR., 52, Manhattan',
  },
  {
    i: 240,
    d: 'JUSTO CALIXTO ANDON, 53, Brooklyn',
    e: 'May 26, 2020',
  },
  {
    i: 241,
    d: 'JUANA GRULLON DE PENA, 53',
    e: 'March 25, 2020',
  },
  {
    i: 242,
    d: 'ADALBERTO “TITO” LEBRON JR., 53, Brooklyn',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Adalberto_Lebron.jpeg',
  },
  {
    i: 243,
    d: 'JUAN VAZQUEZ, 53, Brooklyn',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Vazquez.jpg',
  },
  {
    i: 244,
    d: 'JAMES DANIELS III, 53, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 245,
    d: 'SABRINA ALICIA EUBANKS, 53, Queens',
  },
  {
    i: 246,
    d: 'ROBERT GALLETTA II, 53, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 247,
    d: 'DENNY GILLIAM, 53, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 248,
    d: 'VALERIE R. GOODLEY, 53, Brooklyn',
  },
  {
    i: 249,
    d: 'PAMELA HICKS-LEWIS, 53, Brooklyn',
  },
  {
    i: 250,
    d: 'MARILYN HOWARD, 53, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 251,
    d: 'DANIEL MATIAS, 53, Queens',
  },
  {
    i: 252,
    d: 'JOSE PAEZ, 53',
  },
  {
    i: 253,
    d: 'MARLENE PICONE, 53, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 254,
    d: 'MARK POMPA, 53, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 255,
    d: 'DENISE PRINCE, 53, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 256,
    d: 'JOSE ROSALES, 53, Staten Island',
  },
  {
    i: 257,
    d: 'JOSEPH SELBY, 53, Queens',
  },
  {
    i: 258,
    d: 'TROY LEE SWEENEY, 53',
    e: 'April 8, 2020',
  },
  {
    i: 259,
    d: 'VANEE SYKES, 53, Brooklyn',
    e: 'May 24, 2020',
  },
  {
    i: 260,
    d: 'THERESA TORRES, 53',
  },
  {
    i: 261,
    d: 'MICHAEL TYSON, 53, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 262,
    d: 'JUAN VASQUEZ, 53, Brooklyn',
  },
  {
    i: 263,
    d: 'LUIS EDUARDO VELECELA, 53, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 264,
    d: 'ZLATKO VELESKI, 53, Queens',
  },
  {
    i: 265,
    d: 'AJAZ MOHAMMED “BASHIR” BASHIR, 54, Brooklyn',
    e: 'April 30, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Bashir_Ajaz_Mohammed.jpeg',
  },
  {
    i: 266,
    d: 'CHARLES BURROWS, 54, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Burrows.jpg',
  },
  {
    i: 267,
    d: 'ARTHUR C. HURWITZ, 54, Queens',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Hurwitz.jpg',
  },
  {
    i: 268,
    d: 'LOUIS S. BARCELO JR., 54, The Bronx',
    e: 'April 16, 2020',
  },
  {
    i: 269,
    d: 'FRANK JEFFERSON BOWMAN JR., 54, Brooklyn',
  },
  {
    i: 270,
    d: 'KELLIE CHILDS, 54, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 271,
    d: 'DIEGO CHOUTE, 54, Brooklyn',
  },
  {
    i: 272,
    d: 'MOHAMMED CHOWDHURY, 54, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 273,
    d: 'HAL STUART COHEN, 54, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 274,
    d: 'IRWIN FELDMAN, 54, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 275,
    d: 'RENEE FRENCH, 54, Manhattan',
    e: 'May 19, 2020',
  },
  {
    i: 276,
    d: 'VALARIE FULTON, 54, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 277,
    d: 'THOMAS J. “TOMMY, TOM” HOGAN, 54, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 278,
    d: 'SAIFUL KHAN, 54, Queens',
  },
  {
    i: 279,
    d: 'CHRISTOPHER B. MCDONNELL, 54',
    e: 'May 6, 2020',
  },
  {
    i: 280,
    d: 'MARIA CARLA MERCADER, 54, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 281,
    d: 'MAGDA NAPOLEONI, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 282,
    d: 'LAWRENCE NIEUENKIRK, 54, Brooklyn',
    e: 'June 4, 2020',
  },
  {
    i: 283,
    d: 'ZISHA RITTERMAN, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 284,
    d: 'KEVIN ROSSITER, 54, Staten Island',
    e: 'April 25, 2020',
  },
  {
    i: 285,
    d: 'KEVIN P. ROSSITER, 54, Staten Island',
    e: 'April 25, 2020',
  },
  {
    i: 286,
    d: 'WILLIAM SACKEY, 54, The Bronx',
  },
  {
    i: 287,
    d: 'SANDRA SANTOS-VIZCAINO, 54, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 288,
    d: 'ELGIN STEPHENSON, 54, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 289,
    d: 'JAMES MICHAEL VILLECCO, 54, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 290,
    d: 'ALAIN WALKER, 54',
    e: 'May 19, 2020',
  },
  {
    i: 291,
    d: 'DR. CIRINO R. ZAPPALA, 54',
    e: 'April 7, 2020',
  },
  {
    i: 292,
    d: 'RICHARD LENIHAN, 55',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Lenihan.jpg',
  },
  {
    i: 293,
    d: 'TRACEY M. MURCHISON, 55',
    e: 'July 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tracey_Murchison.jpg',
  },
  {
    i: 294,
    d: 'GUSTAVO PETUZ TAPIA, 55, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 295,
    d: 'MOHAMMAD EUSUP ALI, 55, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 296,
    d: 'DR. TRACI BELTON, 55',
    e: 'April 17, 2020',
  },
  {
    i: 297,
    d: 'KEVIN BOSTIC, 55, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 298,
    d: 'PHILLIP DAVIS, 55, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 299,
    d: 'ANDRE “DRE” DEVORE, 55, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 300,
    d: 'MIGUEL J. FELICIANO, 55, Queens',
  },
  {
    i: 301,
    d: 'OMARA FLORES, 55, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 302,
    d: 'INEZ “MAMA T” GONZALEZ, 55, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 303,
    d: 'ALGION LONDON, 55, The Bronx',
  },
  {
    i: 304,
    d: 'KHEMRAJ MAHADEO, 55, Brooklyn',
  },
  {
    i: 305,
    d: 'MICHAEL A. MALLON, 55, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 306,
    d: 'MARISE MICIAL, 55, Brooklyn',
  },
  {
    i: 307,
    d: 'ROBERT MOODY JR., 55, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 308,
    d: 'TOMAS PUEBLA, 55, Queens',
  },
  {
    i: 309,
    d: 'GARY RAMDATT, 55, Queens',
  },
  {
    i: 310,
    d: 'MITCHELL ROSENWASSER, 55, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 311,
    d: 'PAMELA ROSS, 55, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 312,
    d: 'FRANCISCO SAAVEDRA, 55, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 313,
    d: 'MEDER TLATELPA BALBUENA, 55, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 314,
    d: 'CESAR TORRES, 55',
  },
  {
    i: 315,
    d: 'JOSE VELEZ, 55',
  },
  {
    i: 316,
    d: 'WALTER WATSON, 55, Manhattan',
    e: 'May 4, 2020',
  },
  {
    i: 317,
    d: 'AVREMY ZAKON, 55, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 318,
    d: 'ANTONIETTA FLORIO, 56, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonietta_Florio.png',
  },
  {
    i: 319,
    d: 'JOSE A. HERNANDEZ JR., 56, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Hernandez.jpg',
  },
  {
    i: 320,
    d: 'THANKACHAN MATHAI, 56, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thankachan_Mathai.jpg',
  },
  {
    i: 321,
    d: 'TIMOTHY OLAN MONTGOMERY, 56, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tim_Montgomery.jpg',
  },
  {
    i: 322,
    d: 'DAVID PEREZ, 56, Manhattan',
    e: 'March 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez.jpg',
  },
  {
    i: 323,
    d: 'LEMUEL “BOYET” SISON, 56, Queens',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lemuel_Sison.jpg',
  },
  {
    i: 324,
    d: 'ROBERT THOERING, 56, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Thoering.jpg',
  },
  {
    i: 325,
    d: 'JEFFREY ALSTON, 56, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 326,
    d: 'EDUARDO ANTONIO BECERRIL, 56, The Bronx',
  },
  {
    i: 327,
    d: 'ISHMAEL BURCH, 56',
  },
  {
    i: 328,
    d: 'GARY CHERRY SR., 56, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 329,
    d: 'RABBI CHAIM YECHEZKEL SHRAGA DAHAN, 56, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 330,
    d: 'JOSE FLORES, 56, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 331,
    d: 'EMMA GOOLSBY, 56, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 332,
    d: 'KEVIN GRAIANI, 56, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 333,
    d: 'NAZMUL HAQUE, 56, Queens',
  },
  {
    i: 334,
    d: 'MOHAMMED JAFOR, 56, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 335,
    d: 'DORIS KIRKLAND, 56, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    i: 336,
    d: 'DARYL LABORDE, 56',
    e: 'April 4, 2020',
  },
  {
    i: 337,
    d: 'CUONG LUU, 56, Queens',
  },
  {
    i: 338,
    d: 'IRVING A. MALONEY, 56, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 339,
    d: 'EDWARD MUNGIN, 56, Brooklyn',
  },
  {
    i: 340,
    d: 'BARRY PERSARD, 56, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 341,
    d: 'JACQUEL D. RYAN, 56, The Bronx',
  },
  {
    i: 342,
    d: 'YVETTE SHEFFER, 56, Brooklyn',
  },
  {
    i: 343,
    d: 'ELLIS JAMES STEPHENS JR., 56, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 344,
    d: 'ADLIN R. THOMPSON, 56, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 345,
    d: 'GILBERT J. TORRES JR., 56, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 346,
    d: 'GILBERT “TORO” TORRES JR., 56, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 347,
    d: 'SUNG TRUONG, 56, Queens',
  },
  {
    i: 348,
    d: 'SUNG C. TRUONG, 56, Queens',
  },
  {
    i: 349,
    d: 'DONAHUE VARGAS, 56',
  },
  {
    i: 350,
    d: 'SVETLANA VINOKUR, 56, Brooklyn',
    e: 'May 1, 2020',
  },
  {
    i: 351,
    d: 'AVA WALKER, 56, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 352,
    d: 'THOMAS J. “TOM” WATERS, 56, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 353,
    d: 'KENNETH WRIGHT, 56',
  },
  {
    i: 354,
    d: 'YITZCHOCK ZYLBERMINC, 56, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 355,
    d: 'GABRIELLA “GABBY” HERNANDEZ, 57, Queens',
    e: 'April 13, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Gabriella_Hernandez.jpeg',
  },
  {
    i: 356,
    d: 'ERNESTO HERNANDEZ, 57, Brooklyn',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Ernesto_Hernandez.jpeg',
  },
  {
    i: 357,
    d: 'MUDADA KABIR, 57, Brooklyn',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mudada_Kabir.jpg',
  },
  {
    i: 358,
    d: 'PATRICK PATOIR, 57, Brooklyn',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Patrick_Patoir.jpeg',
  },
  {
    i: 359,
    d: 'ERIC S. SOBEL, 57, Manhattan',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eric_Sobel.png',
  },
  {
    i: 360,
    d: 'WILLIS CEPHUS “MARQUE” WASHINGTON JR., 57, Manhattan',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Willis_Washington.jpg',
  },
  {
    i: 361,
    d: 'JOHNATHAN ADEWUMI, 57, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 362,
    d: 'SAMUEL AKOPOV, 57, Brooklyn',
  },
  {
    i: 363,
    d: 'DERIK BRASWELL, 57, Queens',
  },
  {
    i: 364,
    d: 'KAREN CARMELLO, 57',
    e: 'April 16, 2020',
  },
  {
    i: 365,
    d: 'MARÍA ELSA CENTENO, 57, The Bronx',
    e: 'May 26, 2020',
  },
  {
    i: 366,
    d: 'PABLO CRUZ, 57, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 367,
    d: 'DR. SUNDAY ESTEKYME, 57, The Bronx',
  },
  {
    i: 368,
    d: 'HECTOR GARCIA, 57',
  },
  {
    i: 369,
    d: 'EMMA L. GRIFFIN, 57, Brooklyn',
    e: 'March 21, 2020',
  },
  {
    i: 370,
    d: 'CONNIE JONES HAWKINS, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 371,
    d: 'ARTURO FRANCISCO HERNANDEZ, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 372,
    d: 'CEYBIL “SWEET SABLE” JEFFERIES, 57, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 373,
    d: 'ARYEH “LEIBEL” KATZ, 57, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 374,
    d: 'LEWIS J. KIRSCH, 57',
    e: 'April 15, 2020',
  },
  {
    i: 375,
    d: 'SAL LOMBARDO, 57, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sal_Lombardo.jpg',
  },
  {
    i: 376,
    d: 'SYLVIA LYONS, 57, The Bronx',
  },
  {
    i: 377,
    d: 'TARLACH MACNIALLAIS, 57, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 378,
    d: 'ARNETTE MITCHELL, 57',
  },
  {
    i: 379,
    d: 'LINOSEE MOSLEY, 57, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 380,
    d: 'JAIME ARMANDO PINZON, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 381,
    d: 'MACARIO QUIZHPI GALLEGOS, 57, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 382,
    d: 'MELVIN RASCOE, 57, Queens',
    e: 'May 14, 2020',
  },
  {
    i: 383,
    d: 'FATIMA SCHMIDT, 57, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 384,
    d: 'HOWARD THOMPSON, 57',
    e: 'April 30, 2020',
  },
  {
    i: 385,
    d: 'MOHAMMAD RAFIQ UDDIN, 57, Brooklyn',
  },
  {
    i: 386,
    d: 'RICHARD E. WEBER JR., 57, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 387,
    d: 'MORDECHAI “MORDY” WEINER, 57, Brooklyn',
  },
  {
    i: 388,
    d: 'SONIA YETMAN, 57, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 389,
    d: 'GELBERT A. RIOS, 58, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 390,
    d: 'CESAR MAURO SARMIENTO LOPEZ, 58, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 391,
    d: 'JODY G. SETTLE, 58',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jody_Settle.jpg',
  },
  {
    i: 392,
    d: 'JULES TAYLOR JR., 58, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jules_Taylor.jpg',
  },
  {
    i: 393,
    d: 'YAKARA BEAUVOIR, 58, Manhattan',
    e: 'May 20, 2020',
  },
  {
    i: 394,
    d: 'ALEX BRUNO, 58, Brooklyn',
  },
  {
    i: 395,
    d: 'CALOGERO CASTROGIOVANNI, 58, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 396,
    d: 'MARIA CORAZON CENTRON, 58, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 397,
    d: 'DR. REZA CHOWDURY, 58, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 398,
    d: 'NACHUM COOPER, 58, Brooklyn',
  },
  {
    i: 399,
    d: 'PABLO CRIOLO, 58',
  },
  {
    i: 400,
    d: 'VENANCIO “BENNY” DIAZ, 58, Staten Island',
    e: 'April 30, 2020',
  },
  {
    i: 401,
    d: 'LEV GOLUBOV, 58, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 402,
    d: 'SHIRAJUL ISLAM, 58',
    e: 'April 4, 2020',
  },
  {
    i: 403,
    d: 'BABUL ISLAM, 58, Queens',
  },
  {
    i: 404,
    d: 'RALPH JOHNSON, 58, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 405,
    d: 'GWENDOLYN KING, 58',
    e: 'March 30, 2020',
  },
  {
    i: 406,
    d: 'CAROL KING-GRANT, 58, Queens',
  },
  {
    i: 407,
    d: 'CAROLINE LEDDY, 58, Staten Island',
  },
  {
    i: 408,
    d: 'JULIO MEJIA, 58, Queens',
  },
  {
    i: 409,
    d: 'FOSTER MOORE JR., 58, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 410,
    d: 'JOSE MARIA PALAGUACHI, 58, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 411,
    d: 'NESLY PAUL, 58, Brooklyn',
  },
  {
    i: 412,
    d: 'DANIEL PAVODANO-GULACK, 58, Manhattan',
  },
  {
    i: 413,
    d: 'BUDLINO RAMIREZ, 58, The Bronx',
    e: 'June 6, 2020',
  },
  {
    i: 414,
    d: 'CURTIS L. ROBERTSON JR., 58, Brooklyn',
  },
  {
    i: 415,
    d: 'BENJAMIN WOLF “BEN” SCHAEFFER, 58, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 416,
    d: 'MERVIN SERAPHIN, 58, Queens',
  },
  {
    i: 417,
    d: 'DARRYL K. SWEENEY, 58, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 418,
    d: 'MICHAEL FIELD, 59',
    e: 'April 8, 2020',
  },
  {
    i: 419,
    d: 'MIGUEL GUAMAN, 59, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Guaman.jpg',
  },
  {
    i: 420,
    d: 'MANUEL J. GUANAQUIZA, 59, Queens',
    e: 'May 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Guanaquiza.jpg',
  },
  {
    i: 421,
    d: 'GREGORY HODGE, 59, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gregory_Hodge.PNG',
  },
  {
    i: 422,
    d: 'MICHELLE JOHNSON, 59, The Bronx',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Johnson.jpeg',
  },
  {
    i: 423,
    d: 'SYED RAHMAN, 59',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Syed_Rahman.jpg',
  },
  {
    i: 424,
    d: 'LUIS EDUARDO RIASCOS, 59, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Riascos.jpeg',
  },
  {
    i: 425,
    d: 'RICHARD “FAST FEETS; COD-FATHER” STEWART-JOHNSON, 59, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Johnson.jpg',
  },
  {
    i: 426,
    d: 'LUIS ACOSTA, 59',
  },
  {
    i: 427,
    d: 'REMBERTO AGUILAR, 59, Queens',
  },
  {
    i: 428,
    d: 'CLAIRE BIEN-AIME, 59, Brooklyn',
  },
  {
    i: 429,
    d: 'LORENA BORJAS, 59, Queens',
    e: 'March 20, 2020',
  },
  {
    i: 430,
    d: 'BRYSON KENT BOWMAN, 59',
    e: 'April 4, 2020',
  },
  {
    i: 431,
    d: 'FLOYD CARDOZ, 59, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 432,
    d: 'ERNIE CHIU, 59, Queens',
  },
  {
    i: 433,
    d: 'JAMES EDWARD DALY, 59, Staten Island',
    e: 'May 6, 2020',
  },
  {
    i: 434,
    d: 'JOHN L. FERRI JR., 59, Manhattan',
    e: 'May 13, 2020',
  },
  {
    i: 435,
    d: 'WAYNE R. FINGALL, 59, Brooklyn',
  },
  {
    i: 436,
    d: 'ALFREDO MENESES GONZALEZ, 59, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 437,
    d: 'FRANKY GONZALEZ, 59',
    e: 'May 15, 2020',
  },
  {
    i: 438,
    d: 'SAMEER JALEEL, 59, Queens',
  },
  {
    i: 439,
    d: 'RONNIE JIMENO, 59, Brooklyn',
  },
  {
    i: 440,
    d: 'CURWIN KING, 59, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 441,
    d: 'ANDREAS “ANDY” KOUTSOUDAKIS SR., 59, Staten Island',
    e: 'March 27, 2020',
  },
  {
    i: 442,
    d: 'ERWIN "TITO" LAMBRENTO, 59, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 443,
    d: 'MAUREEN PATRICIA LUNNEY, 59, Staten Island',
    e: 'April 16, 2020',
  },
  {
    i: 444,
    d: 'LOURDES MAGO, 59, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 445,
    d: 'VICTOR MANGAL, 59, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 446,
    d: 'THYCE MATTIS, 59, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 447,
    d: 'ROY PIKSER, 59, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 448,
    d: 'ANUCHA PROMSGAN, 59',
  },
  {
    i: 449,
    d: 'MARK N/A “N/A” REMOLINO, 59, Staten Island',
    e: 'May 4, 2020',
  },
  {
    i: 450,
    d: 'GILBERT RIOS, 59',
  },
  {
    i: 451,
    d: 'JUAN RIVERA, 59, The Bronx',
  },
  {
    i: 452,
    d: 'STEVE JOSEPH RYBKIN, 59',
    e: 'April 5, 2020',
  },
  {
    i: 453,
    d: 'YVES SAJOUS, 59, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 454,
    d: 'ROBERT SARUTTO, 59, Staten Island',
  },
  {
    i: 455,
    d: 'PETER SCHURR, 59, Queens',
  },
  {
    i: 456,
    d: 'THOMAS SOTO, 59, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 457,
    d: 'YITZCHOK STEINBERG, 59, Brooklyn',
  },
  {
    i: 458,
    d: 'LORENZO JACQUES THAGGARD, 59, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 459,
    d: 'DR. J. RONALD VERRIER, 59, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 460,
    d: 'FAREEDA BEHARRY, 60, Queens',
    e: 'May 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Beharry.jpeg',
  },
  {
    i: 461,
    d: 'IDRIS BEY, 60, Brooklyn',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Idris_Bey.PNG',
  },
  {
    i: 462,
    d: 'JOSEPH FLETCHER, 60, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Fletcher.JPG',
  },
  {
    i: 463,
    d: 'MARY MARGARET MINERLY, 60, Queens',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mary_Minerly.jpg',
  },
  {
    i: 464,
    d: 'JUAN ANDRES OLLARVIDE, 60, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Ollarvide.jpg',
  },
  {
    i: 465,
    d: 'BRIAN KEITH SADDLER, 60',
    e: 'May 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brian_Saddler.png',
  },
  {
    i: 466,
    d: 'WAYNE STEELE, 60',
    e: 'May 20, 2020',
  },
  {
    i: 467,
    d: 'MICHAEL ANTHONY STEVENS SR., 60, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Stevens.jpg',
  },
  {
    i: 468,
    d: 'FRANK AMATO, 60, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 469,
    d: 'YAW A. ASANTE, 60, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 470,
    d: 'NICANOR “NICK” BALTAZAR, 60, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 471,
    d: 'IQBAL HAQ BHUIYAN PRINCE, 60, Queens',
  },
  {
    i: 472,
    d: 'RABBI ELI BOTKNECHT, 60, Brooklyn',
  },
  {
    i: 473,
    d: 'VIRDREE BURNS JR., 60, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 474,
    d: 'ALEX CARRAZANA, 60, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alex_Carrazana.jpg',
  },
  {
    i: 475,
    d: 'LEONARD CARTER, 60, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 476,
    d: 'ELIAR CENTENO, 60',
  },
  {
    i: 477,
    d: 'LAIDEZE CHARLES, 60, Brooklyn',
  },
  {
    i: 478,
    d: 'MIGUEL CHUMPITAZ, 60, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 479,
    d: 'DR. FRANK GABRIN, 60, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 480,
    d: 'ANTHONY GRAFFIGNA, 60, Staten Island',
    e: 'May 9, 2020',
  },
  {
    i: 481,
    d: 'MOHAMMED HAQUE, 60',
  },
  {
    i: 482,
    d: 'PAMELA EVETTE HAYNES, 60, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 483,
    d: 'AKMOL HUSSEIN (TANTU), 60, Brooklyn',
  },
  {
    i: 484,
    d: 'EMMANUEL “JAKE THE SNAKE” JACOB, 60, Brooklyn',
  },
  {
    i: 485,
    d: 'HORATIO JORDAN, 60',
  },
  {
    i: 486,
    d: 'JOSEPH JURCZAK, 60, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 487,
    d: 'ALAA M. KHALIL, 60, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 488,
    d: 'RABBI ARON HERSH KLEINMAN, 60, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 489,
    d: 'DR. ELI LANDAU, 60, Queens',
  },
  {
    i: 490,
    d: 'VINCENT J. “VINNIE” LIONTI, 60, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 491,
    d: 'ALCENIO “A/K/A FELIZ MENA” MENA, 60, Brooklyn',
  },
  {
    i: 492,
    d: 'FERNANDO “NIC 707” MITEFF, 60, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 493,
    d: 'JORGE MUNOZ, 60',
  },
  {
    i: 494,
    d: 'PAT NICHOLLS, 60, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 495,
    d: 'FRANCOIS NIEUWENDAM, 60, Manhattan',
    e: 'May 3, 2020',
  },
  {
    i: 496,
    d: 'FRINE REYES, 60, Brooklyn',
  },
  {
    i: 497,
    d: 'CAROL RYER, 60, The Bronx',
  },
  {
    i: 498,
    d: 'BRIAN SADDLER, 60',
    e: 'May 8, 2020',
  },
  {
    i: 499,
    d: 'SIGFRIDO SEPULVEDA, 60, Manhattan',
    e: 'April 29, 2020',
  },
  {
    i: 500,
    d: 'MICHAEL THOMPSON SR., 60',
    e: 'April 17, 2020',
  },
  {
    i: 501,
    d: 'SHARON BASCOM, 61, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sharon_Bascom.jpg',
  },
  {
    i: 502,
    d: 'RAUL AGUSTÍN CARMONA, 61, The Bronx',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Raul_Carmona.jpeg',
  },
  {
    i: 503,
    d: 'LISA G. MACK, 61, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 504,
    d: 'SALVATORE ANDREOTTI, 61',
  },
  {
    i: 505,
    d: 'MADHVI AYA, 61, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 506,
    d: 'GIACOMINA BARR-BROWN, 61, The Bronx',
    e: 'March 26, 2020',
  },
  {
    i: 507,
    d: 'HUBERT BELGRAVE, 61, Queens',
  },
  {
    i: 508,
    d: 'VANESSA BURKETT, 61, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 509,
    d: 'LENORA CASSO, 61, Queens',
  },
  {
    i: 510,
    d: 'LAIDEZE CHARLES, 61, Brooklyn',
  },
  {
    i: 511,
    d: 'RICHARD W. CHIN, 61, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 512,
    d: 'CHRISOPHER “CHRIS” COGNATO, 61, Staten Island',
    e: 'April 30, 2020',
  },
  {
    i: 513,
    d: 'OLIVER “BROTHER CYRUS” CYRUS, 61, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 514,
    d: 'ISAIAH DE LA TORRE, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 515,
    d: 'ALISON DONOVAN, 61, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 516,
    d: 'LARRY D. EDGEWORTH, 61, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 517,
    d: 'ROSITA ESTINFIL, 61, Brooklyn',
  },
  {
    i: 518,
    d: 'DEBRA FERRARI, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 519,
    d: 'JAIME E. FUENTES, 61, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 520,
    d: 'PATRICIA FUENTES, 61',
    e: 'April 17, 2020',
  },
  {
    i: 521,
    d: 'FERNANDO GALEANO, 61, Brooklyn',
  },
  {
    i: 522,
    d: 'JOANALEE GUINESS, 61',
  },
  {
    i: 523,
    d: 'WILLIAM HAYES, 61, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 524,
    d: 'PHYLLIS SUSAN HOLLEY, 61',
  },
  {
    i: 525,
    d: 'CHERYL JOHNSON, 61, Queens',
    e: 'April 25, 2020',
  },
  {
    i: 526,
    d: 'AZHAR [UNKNOWN] “[UNKNOWN]” KHAN, 61, Staten Island',
    e: 'April 7, 2020',
  },
  {
    i: 527,
    d: 'DELPHINE TAZAIR LEE, 61, Queens',
    e: 'March 22, 2020',
  },
  {
    i: 528,
    d: 'ROCCO LOMBARDO, 61, Brooklyn',
  },
  {
    i: 529,
    d: 'JOSE MAQUEDA, 61, Manhattan',
  },
  {
    i: 530,
    d: 'FERMIN MARTINEZ, 61, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 531,
    d: 'JOHN MCCORMACK, 61, Queens',
    e: 'May 20, 2020',
  },
  {
    i: 532,
    d: 'BRUCE B. MILEY, 61, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 533,
    d: 'WILLIAM T. MORRIS, 61',
    e: 'June 6, 2020',
  },
  {
    i: 534,
    d: 'MOHAMED RAHAMAN, 61, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 535,
    d: 'DR. IVAN RODRIGUEZ SR., 61',
    e: 'May 25, 2020',
  },
  {
    i: 536,
    d: 'DANIEL SANCHEZ, 61, The Bronx',
  },
  {
    i: 537,
    d: 'CONCEPCION SILVA, 61, Brooklyn',
  },
  {
    i: 538,
    d: 'STEWART ALAN TURNER, 61, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 539,
    d: 'RICK A. UNTERBERG, 61, Manhattan',
  },
  {
    i: 540,
    d: 'JORGE VILLARROEL, 61, Queens',
  },
  {
    i: 541,
    d: 'VICTOR ZAPANA SR., 61, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 542,
    d: 'MIREYA VARGAS CARDONA, 62',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mireya_Cardona.jpg',
  },
  {
    i: 543,
    d: 'MARCOS CASTRO, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marcos_Castro.jpg',
  },
  {
    i: 544,
    d: 'ABUL HOSSAIN, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Abul_Hossain.JPG',
  },
  {
    i: 545,
    d: 'YI GAO HUANG, 62, Queens',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Yi_Gao_Huang.jpg',
  },
  {
    i: 546,
    d: 'ANTHONY MEOLI, 62, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Meoli.jpg',
  },
  {
    i: 547,
    d: 'FRANK ORSINI, 62',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frank_Orsini.jpg',
  },
  {
    i: 548,
    d: 'LUCHNER BENOIT, 62',
  },
  {
    i: 549,
    d: 'MICHAEL BORLAND, 62, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 550,
    d: 'VANESSA BURKETT, 62, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 551,
    d: 'DR. JULIE BUTLER, 62, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 552,
    d: 'RODRIGO CALENO, 62, Queens',
  },
  {
    i: 553,
    d: 'MEZAC CHOSSON, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 554,
    d: 'DENNIS C. DICKSON, 62, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 555,
    d: 'DENNIS C. DIXON, 62',
    e: 'March 26, 2020',
  },
  {
    i: 556,
    d: 'DONNA DURKIN, 62, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 557,
    d: 'JAIME “JIMMY” FERNANDO, 62, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 558,
    d: 'DR. ARTHUR FRIEDMAN, 62',
    e: 'April 30, 2020',
  },
  {
    i: 559,
    d: 'MARIE GAGLIANO, 62, The Bronx',
  },
  {
    i: 560,
    d: 'EDUARDO L. GANCAYCO, 62, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 561,
    d: 'TONY GREER, 62, Manhattan',
  },
  {
    i: 562,
    d: 'RAMON GUTIERREZ, 62, The Bronx',
  },
  {
    i: 563,
    d: 'JORGE JARA, 62, Queens',
  },
  {
    i: 564,
    d: 'MIRVIL LOUIS, 62',
  },
  {
    i: 565,
    d: 'DR. JAMES MAHONEY, 62',
    e: 'April 27, 2020',
  },
  {
    i: 566,
    d: 'DR. STEPHEN R. MARRONE, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 567,
    d: 'ROZELLA MCFARLAN, 62, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 568,
    d: 'MARIA ESTHER PALAGUACHI CUZCO, 62, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 569,
    d: 'MARIO PINNA, 62, Queens',
  },
  {
    i: 570,
    d: 'AZINET PUDPUD, 62, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 571,
    d: 'MIREYA ROMERO, 62, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 572,
    d: 'RICHARD [UNKNOWN] “RICHIE” SANTANGELO, 62, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 573,
    d: 'PETER EDWARD SCHAEFER, 62',
    e: 'April 2, 2020',
  },
  {
    i: 574,
    d: 'TOMMY SMITH III, 62, Staten Island',
    e: 'April 10, 2020',
  },
  {
    i: 575,
    d: 'ANTONIO STEELE, 62',
  },
  {
    i: 576,
    d: 'LOIDA TOBIAS, 62, Queens',
    e: 'June 30, 2020',
  },
  {
    i: 577,
    d: 'MARLYN M. VINUYA, 62, Queens',
    e: 'May 22, 2020',
  },
  {
    i: 578,
    d: 'DEAN PATRICK WRZESZCZ, 62, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 579,
    d: 'DAW KWUN YOON, 62',
  },
  {
    i: 580,
    d: 'GAETANA DESERTO, 63, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gaetana_Deserto.jpg',
  },
  {
    i: 581,
    d: 'KAREN GARVIN, 63, The Bronx',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Karen_Garvin.jpg',
  },
  {
    i: 582,
    d: 'PATRICK J. GLYNN, 63, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 583,
    d: 'JOHN REDD, 63, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Redd.jpg',
  },
  {
    i: 584,
    d: 'RICHARD C. SEABERRY, 63, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Seaberry.jpg',
  },
  {
    i: 585,
    d: 'INGRID MOHAMMED WARNER, 63, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ingird_Warner.jpeg',
  },
  {
    i: 586,
    d: 'ROMEO OCAMPO “ROMY” AGTARAP, 63',
    e: 'April 24, 2020',
  },
  {
    i: 587,
    d: 'WALTER ANCE, 63',
    e: 'April 11, 2020',
  },
  {
    i: 588,
    d: 'MAURICE BERGER, 63, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 589,
    d: 'MATIS BLUM, 63, Queens',
  },
  {
    i: 590,
    d: 'MARIA GUIA “MAMA GUIA” CABILLON, 63, Brooklyn',
    e: 'April 26, 2020',
  },
  {
    i: 591,
    d: 'ROSALIA CASTELLI, 63, Staten Island',
  },
  {
    i: 592,
    d: 'MAVIS CHARLES, 63, Brooklyn',
    e: 'May 12, 2020',
  },
  {
    i: 593,
    d: 'KAREN FELTON, 63, The Bronx',
  },
  {
    i: 594,
    d: 'REMIGIO ROSALES FLORES, 63, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 595,
    d: 'DENNIS FOX, 63, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 596,
    d: 'AVROHOM SHIYA FREUND, 63, Brooklyn',
    e: 'March 20, 2020',
  },
  {
    i: 597,
    d: 'RHONDA GARVIN, 63, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 598,
    d: 'SABRINA “BB” JEFFERSON, 63, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 599,
    d: 'SHARON KAUFMAN, 63, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 600,
    d: 'FRANK LEONG, 63',
  },
  {
    i: 601,
    d: 'JAMIYLAH A. MUHAMMAD, 63, Queens',
  },
  {
    i: 602,
    d: 'DAVID NOCERA, 63, Manhattan',
    e: 'March 26, 2020',
  },
  {
    i: 603,
    d: 'EVELYN OCHOA-CELANO, 63',
    e: 'May 13, 2020',
  },
  {
    i: 604,
    d: 'GABRIEL POLANCO, 63, Queens',
  },
  {
    i: 605,
    d: 'OMAR PORTILLO, 63, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 606,
    d: 'DARLEY ROBINSON, 63',
  },
  {
    i: 607,
    d: 'IQBAL SHAIKH, 63, Queens',
  },
  {
    i: 608,
    d: 'LESLIE SOLIUS VERNERET, 63, Brooklyn',
  },
  {
    i: 609,
    d: 'JACOB CREDELL, 64, Brooklyn',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jacob_Credell.jpg',
  },
  {
    i: 610,
    d: 'LUIS A. FIGUEROA, 64, Queens',
    e: 'May 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Figueroa.jpg',
  },
  {
    i: 611,
    d: 'ELI KLAUSNER, 64',
    e: 'April 13, 2020',
  },
  {
    i: 612,
    d: 'ELISABETH “LIS” RUBERT, 64, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elisabeth_Rubert.jpg',
  },
  {
    i: 613,
    d: 'FRANK ABREU, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 614,
    d: 'ANTHONY ACHAN, 64, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 615,
    d: 'DR. DOUG BASS, 64, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 616,
    d: 'JOHNNY LEE BAYNES, 64, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 617,
    d: 'YANICK ROSE BEAUBRUN, 64, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 618,
    d: 'LUIS CARDENAS, 64',
  },
  {
    i: 619,
    d: 'RICARDO CASTANEDA, 64, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 620,
    d: 'MARIANO CASTELLANOS, 64, The Bronx',
  },
  {
    i: 621,
    d: 'MANUEL “VICTOR” CHAVEZ, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 622,
    d: 'LEONA COHEN, 64, Brooklyn',
  },
  {
    i: 623,
    d: 'IRVING CRUZ, 64, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 624,
    d: 'KAREN KELLY, 64, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 625,
    d: 'DEBORAH KORCZYNSKI, 64, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 626,
    d: 'FRANK LEE LEE, 64, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 627,
    d: 'LEROY MARAGH, 64, The Bronx',
  },
  {
    i: 628,
    d: 'MARIE ELIZABETH MELENDEZ, 64, Manhattan',
    e: 'May 1, 2020',
  },
  {
    i: 629,
    d: 'BENNIE MOORE, 64, Brooklyn',
  },
  {
    i: 630,
    d: 'MARIUS NARCISSE, 64, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 631,
    d: 'LEROY NOEL, 64, Brooklyn',
  },
  {
    i: 632,
    d: 'JOSE OCHOA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 633,
    d: 'RENNIE REID, 64, The Bronx',
  },
  {
    i: 634,
    d: 'JORGE SALDARRIAGA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 635,
    d: 'DUROCHER SYLVAIN, 64, Brooklyn',
  },
  {
    i: 636,
    d: 'GREGORY TREADWELL, 64, The Bronx',
  },
  {
    i: 637,
    d: 'ANA VALERIO, 64',
    e: 'April 3, 2020',
  },
  {
    i: 638,
    d: 'HAL WILLNER, 64, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 639,
    d: 'FRANCHETTE WOODLEY, 64, The Bronx',
  },
  {
    i: 640,
    d: 'EDWARD FREDERICK DOTY, 65',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Doty.jpeg',
  },
  {
    i: 641,
    d: 'GLORIA MARIA ESPERTIN, 65',
  },
  {
    i: 642,
    d: 'LUIS E. MARTINEZ, 65, Queens',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Martinez.jpg',
  },
  {
    i: 643,
    d: 'LISA LOUISE MONTANINO, 65, Staten Island',
    e: 'May 1, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Lisa_Louise_Montanino.png',
  },
  {
    i: 644,
    d: 'PANAYIOTIS “PETER” PANAYIOTOU, 65, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Peter_Panayiotou.jpeg',
  },
  {
    i: 645,
    d: 'PETER PINTO, 65, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 646,
    d: 'FERNANDO ZAPATA, 65, Queens',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fernando_Zapata.JPG',
  },
  {
    i: 647,
    d: 'EILISH BOCHNER, 65, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 648,
    d: 'CARLOS CALDERON, 65, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 649,
    d: 'GREGORIO CAMPIS, 65, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 650,
    d: 'SALVATORE “CAPPI” CAPOZUCCA, 65, Brooklyn',
    e: 'May 13, 2020',
  },
  {
    i: 651,
    d: 'PRISCILLA “SWEET PEA” CARROW, 65, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 652,
    d: 'LYNFORD GEORGE CHAMBERS, 65, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 653,
    d: 'JANEE CHRISTIANSEN, 65, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 654,
    d: 'RUTHANN COHEN-AIKENS, 65, Manhattan',
  },
  {
    i: 655,
    d: 'RULX DAGUS, 65, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 656,
    d: 'MARIE CHARLOTTE DESTIN, 65, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 657,
    d: 'YESHAYA ENGLARD, 65, Brooklyn',
    e: 'March 18, 2020',
  },
  {
    i: 658,
    d: 'GLORIA MARIA ESPERTIN, 65, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 659,
    d: 'ROBERT THOMAS FAHS, 65',
    e: 'May 7, 2020',
  },
  {
    i: 660,
    d: 'MERCEDES GARCIA, 65',
  },
  {
    i: 661,
    d: 'DEBRA GRIMSLEY, 65',
  },
  {
    i: 662,
    d: 'ALEYAMMA JOHN, 65, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 663,
    d: 'DEBORAH C. JOSEPH-SAUNDERS, 65, Staten Island',
  },
  {
    i: 664,
    d: 'EDWARD DESMOND KHELAWAN, 65, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 665,
    d: 'NICHOLAS MATTEI, 65',
  },
  {
    i: 666,
    d: 'FLORENCIO ALMAZO “TIO” MORÁN, 65, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 667,
    d: 'QUINTINO ORTEGA, 65, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 668,
    d: 'VICTOR PEI, 65',
    e: 'May 7, 2020',
  },
  {
    i: 669,
    d: 'VICTOR PEI, 65',
    e: 'May 7, 2020',
  },
  {
    i: 670,
    d: 'JOHN PHILLIP, 65, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 671,
    d: 'MARY ELLEN PORTER, 65, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 672,
    d: 'PIERREPAUL RODRIGUE, 65, Brooklyn',
  },
  {
    i: 673,
    d: 'GENARO SANCHEZ, 65',
  },
  {
    i: 674,
    d: 'ALI SHAIBI, 65, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 675,
    d: 'LAFAYETTE TERRELL, 65, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 676,
    d: 'JUAN LEONARDO TORRES, 65, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 677,
    d: 'ALEXANDER “ALEX” WEIR, 65, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 678,
    d: 'VICTORIA WILHELM, 65, Staten Island',
    e: 'April 18, 2020',
  },
  {
    i: 679,
    d: 'CATHY WILLIAMS, 65',
  },
  {
    i: 680,
    d: 'VALERIE WILSON, 65, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 681,
    d: 'ELOY CALIXTO ANDON, 66, Brooklyn',
    e: 'May 5, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Eloy_Calixto_Andon.jpg',
  },
  {
    i: 682,
    d: 'MARIA ARAGON, 66, The Bronx',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Aragon.jpeg',
  },
  {
    i: 683,
    d: 'MOHAMMAD SHAMSUZZOHA “PINTU” KHAN, 66, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 684,
    d: 'RUSTICO PASIG, 66, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rustico_Pasig.jpg',
  },
  {
    i: 685,
    d: 'HECTOR ROMAIN, 66, The Bronx',
    e: 'May 6, 2020',
  },
  {
    i: 686,
    d: 'RAYMOND VÁZQUEZ MUÑOZ, 66',
    e: 'April 7, 2020',
  },
  {
    i: 687,
    d: 'GREGORY ANDREWS, 66, Manhattan',
    e: 'May 12, 2020',
  },
  {
    i: 688,
    d: 'RICHARD AUSTIN JR., 66, Staten Island',
  },
  {
    i: 689,
    d: 'DIMITRIY BOZHOVSKIY, 66',
    e: 'April 21, 2020',
  },
  {
    i: 690,
    d: 'MARLINO T. CAGAS, 66, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 691,
    d: 'EUCARIO CARDOSO-PABLO, 66, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 692,
    d: 'PAUL DAVID CARY, 66',
    e: 'April 30, 2020',
  },
  {
    i: 693,
    d: 'MARTHA CORTES, 66, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 694,
    d: 'NOACH DEAR, 66, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 695,
    d: 'LAURA DECKELMAN, 66, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 696,
    d: 'ANATHOL DESAMOURS, 66, Brooklyn',
  },
  {
    i: 697,
    d: 'ARNULFO DORVILLE, 66, Brooklyn',
  },
  {
    i: 698,
    d: 'DAVID FINN, 66, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 699,
    d: 'DR. DAVID WALTER FINN, 66, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 700,
    d: 'YAAKOV SHMUEL FREILACH, 66, Brooklyn',
  },
  {
    i: 701,
    d: 'ERLIN “FLINSTONE” GALARZA, 66, The Bronx',
  },
  {
    i: 702,
    d: 'ISAAC GRAHAM, 66, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 703,
    d: 'STEPHEN JOEL HARDING, 66, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 704,
    d: 'STANLEY HENESON, 66, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 705,
    d: 'ANTHONY HERNANDEZ, 66, The Bronx',
  },
  {
    i: 706,
    d: 'DAVID JAMAL, 66, Brooklyn',
  },
  {
    i: 707,
    d: 'BRAHM KANCHIBHOTLA, 66, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 708,
    d: 'BRAHM KANCHIBHOTLA, 66, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 709,
    d: 'CLAUDIO MALAVE, 66, Manhattan',
  },
  {
    i: 710,
    d: 'HAZEL PIA MIJARES, 66',
    e: 'March 30, 2020',
  },
  {
    i: 711,
    d: 'ELIZABETH QUINDE, 66, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 712,
    d: 'DR. MARK ALLEN RESPLER, 66, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 713,
    d: 'DR. YVES Y. ROSEUS, 66, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 714,
    d: 'FRANCES ROBERTA RUDLAND, 66, The Bronx',
    e: 'April 20, 2020',
  },
  {
    i: 715,
    d: 'CARL STANBURY, 66, Brooklyn',
  },
  {
    i: 716,
    d: 'VIVIAN MOSS VOELPEL, 66, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 717,
    d: 'ALPHONSE JUNIOR “J.R.” AGOVINO, 67, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alphonse_Agovino.jpeg',
  },
  {
    i: 718,
    d: 'MICHAEL DIMIN, 67, Brooklyn',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Dimin.JPG',
  },
  {
    i: 719,
    d: 'MARC J. GOODMAN, 67, Manhattan',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marc_Goodman.jpg',
  },
  {
    i: 720,
    d: 'GISELE MENARD, 67, Queens',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gisele_Menard.jpg',
  },
  {
    i: 721,
    d: 'RUBY ATKINS, 67, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 722,
    d: 'KEILA BLANK, 67, Brooklyn',
  },
  {
    i: 723,
    d: 'ANTONIO CHECO, 67, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 724,
    d: 'JIM CHRISTOFOROU, 67',
    e: 'May 6, 2020',
  },
  {
    i: 725,
    d: 'SCOTT ELIJAH, 67',
    e: 'March 29, 2020',
  },
  {
    i: 726,
    d: 'JOHN STEVEN “JOHNNY” FERRARI, 67, Staten Island',
    e: 'April 10, 2020',
  },
  {
    i: 727,
    d: 'PATRICIA GEORGE, 67, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 728,
    d: 'ANSTAY GODDARD, 67, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 729,
    d: 'STEVE HANN, 67, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 730,
    d: 'PATRICIA HARRIET “MS. PAT OR MOMMA CONDOM” JACKSON, 67, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 731,
    d: 'ANNA LYRIST, 67, Queens',
    e: 'June 5, 2020',
  },
  {
    i: 732,
    d: 'EMILIANO PADILLA, 67, Queens',
  },
  {
    i: 733,
    d: 'REV. NARCISO PATZAN, 67, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 734,
    d: 'LINDA POPE, 67, The Bronx',
  },
  {
    i: 735,
    d: 'MOHIBUR RAHMAN, 67, Queens',
    e: 'May 11, 2020',
  },
  {
    i: 736,
    d: 'ATAUR RAHMAN DEALER, 67, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 737,
    d: 'JAMES W. REEL JR., 67, Queens',
  },
  {
    i: 738,
    d: 'DR. GARY SCLAR, 67, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 739,
    d: 'WILLIAM SHACKLEFORD, 67, Manhattan',
  },
  {
    i: 740,
    d: 'ULLAH SHARIAT, 67, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 741,
    d: 'CLAUDIA SHIRLEY, 67, Brooklyn',
  },
  {
    i: 742,
    d: 'IRA STERN, 67, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 743,
    d: 'DR. BARRY WEBBER, 67',
    e: 'April 18, 2020',
  },
  {
    i: 744,
    d: 'EMILIO YAGUAL, 67, Queens',
  },
  {
    i: 745,
    d: 'JUAN M. CABAN, 68, The Bronx',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Caban.jpg',
  },
  {
    i: 746,
    d: 'EZZARD “BURNHAM” CHRISTOPHER, 68, Brooklyn',
    e: 'April 2, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Ezzard_Christopher.jpg',
  },
  {
    i: 747,
    d: 'RALPH T. GISMONDI, 68',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Gismondi.jpg',
  },
  {
    i: 748,
    d: 'GLORIA CHRISTINE GREEN, 68, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 749,
    d: 'KENNETH “KENNY” HENDERSON, 68, The Bronx',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Henderson.jpg',
  },
  {
    i: 750,
    d: 'MANUEL J. “MEME” ORTIZ, 68, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Ortiz.jpg',
  },
  {
    i: 751,
    d: 'REV. BARBARA RICHARDSON, 68, Brooklyn',
    e: 'April 20, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Barbara_Richardson.jpg',
  },
  {
    i: 752,
    d: 'MICHAEL A. SCURA, 68, Manhattan',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Scura.jpg',
  },
  {
    i: 753,
    d: 'ALTAGRACIA ALVAREZ, 68, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 754,
    d: 'JENNIFER ROBIN ARNOLD, 68, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 755,
    d: 'DELORES BOONE, 68, The Bronx',
  },
  {
    i: 756,
    d: 'HUBEL ISIDRO ONOFRE CASTILLO, 68, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 757,
    d: 'BIDYUT B DAS, 68, Staten Island',
    e: 'April 21, 2020',
  },
  {
    i: 758,
    d: 'RAFAEL ELI, 68, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 759,
    d: 'LOTTIE LUCILLE GLADDEN, 68, Brooklyn',
    e: 'May 18, 2020',
  },
  {
    i: 760,
    d: 'JOSE GONZALEZ, 68, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 761,
    d: 'ELENA GONZALEZ, 68, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 762,
    d: 'GARRY GREENBERG, 68, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 763,
    d: 'IRENA HARTELL, 68',
    e: 'April 12, 2020',
  },
  {
    i: 764,
    d: 'JORGE LOPEZ, 68',
  },
  {
    i: 765,
    d: 'FREDERIKKE NESSA MEISTER, 68, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 766,
    d: 'ISIDRO MINDIOLAZA, 68, Queens',
  },
  {
    i: 767,
    d: 'HECTOR MOLINA, 68, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 768,
    d: 'LLOYD OSBORNE, 68, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 769,
    d: 'PHYLLIS ROBINSON, 68, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 770,
    d: 'VINCENT CIRELLI “VINNY PEANUTS” SABATINO, 68, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 771,
    d: 'GARY JOHN SCHIAVI, 68, Staten Island',
    e: 'April 19, 2020',
  },
  {
    i: 772,
    d: 'MICHAEL SCURA, 68, Manhattan',
  },
  {
    i: 773,
    d: 'ANDREA PEDOWITZ SMITH, 68, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 774,
    d: 'ZEV STERN, 68, Brooklyn',
  },
  {
    i: 775,
    d: 'CHAI SUTHAMMANONT, 68',
    e: 'May 26, 2020',
  },
  {
    i: 776,
    d: 'BENILDO TEXEIRA, 68, The Bronx',
  },
  {
    i: 777,
    d: 'JAMAL UDDIN, 68, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 778,
    d: 'CYNTHIA L. ADAMS, 69, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cynthia_L_Adams.jpeg',
  },
  {
    i: 779,
    d: 'CARMEN M. CALERO, 69, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Calero.jpeg',
  },
  {
    i: 780,
    d: 'DR. JAY MARTIN GALST, 69, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Galst.jpg',
  },
  {
    i: 781,
    d: 'MARILU LOPEZ SANTIAGO, 69, Staten Island',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marilu_Santiago.jpg',
  },
  {
    i: 782,
    d: 'CHARLES THORPE, 69, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Thorpe.jpg',
  },
  {
    i: 783,
    d: 'JOHN PATRICK WHYTE, 69, Staten Island',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Whyte.jpg',
  },
  {
    i: 784,
    d: 'KAMAL AHMED, 69, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 785,
    d: 'KAMAL AHMED, 69, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 786,
    d: 'BIBI AYESHA, 69, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 787,
    d: 'CLAUDETTE BARR, 69, Staten Island',
  },
  {
    i: 788,
    d: 'MARK BLUM, 69, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 789,
    d: 'DOMINICK J BRANCATO, 69, Staten Island',
    e: 'May 21, 2020',
  },
  {
    i: 790,
    d: 'MICHAEL CHARLES BYRNE, 69, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 791,
    d: 'SALVADOR CALDERON, 69, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 792,
    d: 'FRANCISCO CANARTE, 69, Queens',
  },
  {
    i: 793,
    d: 'RAMON CARANDANG, 69, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 794,
    d: 'ERIC CHASANOFF, 69',
    e: 'May 5, 2020',
  },
  {
    i: 795,
    d: 'DEWAN AFJOL CHOWDHURY, 69',
  },
  {
    i: 796,
    d: 'MYLES COKER, 69, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 797,
    d: 'OLIVIA CRUM, 69, Queens',
  },
  {
    i: 798,
    d: 'PAULINE DELGADO, 69, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 799,
    d: 'PHILIP FOGLIA, 69, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 800,
    d: 'JOEL S. GOLDBERG, 69, Staten Island',
    e: 'May 6, 2020',
  },
  {
    i: 801,
    d: 'ANDREW “ANDY” GONZÁLEZ, 69, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 802,
    d: 'OLSON HART, 69, The Bronx',
  },
  {
    i: 803,
    d: 'BAMBANG HERMANTO, 69, Queens',
  },
  {
    i: 804,
    d: 'PEARSON JORDAN, 69, Brooklyn',
  },
  {
    i: 805,
    d: 'YITZHAK LEVY LEVYAWAMI, 69, Brooklyn',
  },
  {
    i: 806,
    d: 'ALLEN Y. LEW, 69, Queens',
    e: 'June 23, 2020',
  },
  {
    i: 807,
    d: 'MECEO RAY MCEADDY, 69, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 808,
    d: 'ALAN MERRILL, 69, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 809,
    d: 'ABBEY METZGER, 69, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 810,
    d: 'ARTURO MILLAN, 69, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 811,
    d: 'IRIS NIEVES-MITCHELL, 69',
    e: 'April 6, 2020',
  },
  {
    i: 812,
    d: 'DOVID OLEWSKI, 69, Brooklyn',
  },
  {
    i: 813,
    d: 'CESAR E. “DON CESAR” ORTIZ, 69, Staten Island',
  },
  {
    i: 814,
    d: 'BARRY PENN, 69',
    e: 'April 4, 2020',
  },
  {
    i: 815,
    d: 'HARRICHAND PERSAUD, 69, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 816,
    d: 'ANDREA SEARS, 69, Brooklyn',
  },
  {
    i: 817,
    d: 'JANET J. SMITH, 69, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 818,
    d: 'WINSTON STEPHEN SWAN, 69, The Bronx',
    e: 'April 24, 2020',
  },
  {
    i: 819,
    d: 'SAMUEL W. “SAM THE FENCE MAN” ARBEENY, 70, Staten Island',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Samuel_Arbeeny.png',
  },
  {
    i: 820,
    d: 'VERONA FRASER, 70, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Verona_Fraser.JPG',
  },
  {
    i: 821,
    d: 'BEVERLY RUBOCK GRAY, 70, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Beverly_Gray.jpeg',
  },
  {
    i: 822,
    d: 'SHIRLEY ANN MILLER, 70, Manhattan',
    e: 'March 24, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Shirley_Ann_Miller.JPG',
  },
  {
    i: 823,
    d: 'JUDY RICHHEIMER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judy_Richheimer.jpg',
  },
  {
    i: 824,
    d: 'PABLO GUSTAVO ROSAS, 70, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Rosas.jpeg',
  },
  {
    i: 825,
    d: 'JOSEPH DANIEL VOLCY, 70, Brooklyn',
    e: 'April 7, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Daniel_Volcy.jpeg',
  },
  {
    i: 826,
    d: 'AHMED ALI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 827,
    d: 'SAMUEL W. “SAM THE FENCE MAN” ARBEENY, 70, Staten Island',
    e: 'April 25, 2020',
  },
  {
    i: 828,
    d: 'CHARLES BERENGUER JR., 70, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 829,
    d: 'BETZALEL BERTRAM, 70, Brooklyn',
  },
  {
    i: 830,
    d: 'RAUL CAMBIAN, 70, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 831,
    d: 'THOMAS TOMMY CARNEY, 70, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 832,
    d: 'ERESMILDO CASTIBLANCO, 70, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 833,
    d: 'DR. YDELFONSO DECOO, 70, Manhattan',
    e: 'April 23, 2020',
  },
  {
    i: 834,
    d: 'DANIEL M. GARCIA, 70, The Bronx',
    e: 'June 4, 2020',
  },
  {
    i: 835,
    d: 'REV. SIDNEY HARGRAVE, 70, The Bronx',
  },
  {
    i: 836,
    d: 'RABBI DAVID JEMAL, 70, Brooklyn',
  },
  {
    i: 837,
    d: 'ALEX KLEIN, 70',
    e: 'March 28, 2020',
  },
  {
    i: 838,
    d: 'LEIBEL LEDERMAN, 70',
    e: 'May 20, 2020',
  },
  {
    i: 839,
    d: 'FRANK N/A “N/A” LUMINI, 70, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 840,
    d: 'ALFREDO DOROJA “JUN” MESCALLADO JR., 70, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 841,
    d: 'SHIRLEY MILLER, 70',
  },
  {
    i: 842,
    d: 'MANUEL MIZHQUIRI, 70, Queens',
  },
  {
    i: 843,
    d: 'CARLO NATHAN, 70, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 844,
    d: 'DR. TOMAS PATTUGALAN, 70, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 845,
    d: 'JOSEPH T. PELLETTERI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 846,
    d: 'ARLENE SIMON, 70',
  },
  {
    i: 847,
    d: 'LORNA WILKINSON, 70, Queens',
  },
  {
    i: 848,
    d: 'LORRAINE JOY BAGWELL, 71, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lorraine_Bagwell.JPG',
  },
  {
    i: 849,
    d: 'LARRY DEVITO, 71, Brooklyn',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Larry_DeVito.JPG',
  },
  {
    i: 850,
    d: 'HARVEY CHESTER FUCHS, 71',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harvey_Fuchs.jpg',
  },
  {
    i: 851,
    d: 'JAY HYMAN, 71',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Hyman.jpg',
  },
  {
    i: 852,
    d: 'GARY JAEGER, 71, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gary_Jaeger.jpg',
  },
  {
    i: 853,
    d: 'ELIZABETH LAMBERTY, 71, The Bronx',
    e: 'May 1, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_Lamberty.jpg',
  },
  {
    i: 854,
    d: 'MAHMOODA SHAHEEN, 71, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mahmooda_Shaheen.jpg',
  },
  {
    i: 855,
    d: 'ROSEMARY “RORY” SISCO, 71, Queens',
    e: 'March 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Sisco.jpg',
  },
  {
    i: 856,
    d: 'ANTONIO SOLOMON, 71, Queens',
    e: 'March 26, 2020',
  },
  {
    i: 857,
    d: 'ELOY BENITEZ, 71, The Bronx',
  },
  {
    i: 858,
    d: 'RAFAEL LEONARD BLACK, 71, Brooklyn',
    e: 'May 15, 2020',
  },
  {
    i: 859,
    d: 'ERESMILDO CASTIBLANCO, 71, Queens',
  },
  {
    i: 860,
    d: 'MARTIN JOHN “DOUGIE” DOUGLAS, 71, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 861,
    d: 'CAROLYN FRAZIER, 71, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 862,
    d: 'ZELIG GOTTLIEB, 71, Brooklyn',
  },
  {
    i: 863,
    d: 'LEROY “POPS” HAMMETT, 71, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 864,
    d: 'HENRY ARTHUR JACKSON, 71, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 865,
    d: 'VINCENT KELLEHER, 71, Staten Island',
    e: 'April 14, 2020',
  },
  {
    i: 866,
    d: 'CHARLES KLEINBERG, 71, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    i: 867,
    d: 'YVES LAFOND, 71, Queens',
  },
  {
    i: 868,
    d: 'JOHN C LEONARD, 71, The Bronx',
  },
  {
    i: 869,
    d: 'BOGDAN PALKA, 71, Brooklyn',
  },
  {
    i: 870,
    d: 'JAMES PUYOL, 71',
  },
  {
    i: 871,
    d: 'MEHMOODA REHMAN, 71, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 872,
    d: 'MIGDALIA RODRIGUEZ, 71, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 873,
    d: 'ALEXANDRA SAKS, 71',
    e: 'April 3, 2020',
  },
  {
    i: 874,
    d: 'MICHAEL DAVID SORKIN, 71',
    e: 'March 26, 2020',
  },
  {
    i: 875,
    d: 'MICHAEL DAVID SORKIN, 71, Manhattan',
    e: 'March 26, 2020',
  },
  {
    i: 876,
    d: 'WILLIAM TROY, 71, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 877,
    d: 'RONALD VINCENT WAITE, 71, Staten Island',
    e: 'May 12, 2020',
  },
  {
    i: 878,
    d: 'ANGELA ZEMAN, 71, Manhattan',
    e: 'April 30, 2020',
  },
  {
    i: 879,
    d: 'ROSE ZUBKO, 71, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    i: 880,
    d: 'RICHARD LITKOFSKY, 72, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Litofsky.jpg',
  },
  {
    i: 881,
    d: 'ESTELITA ATIENZA SOLOMON, 72, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 882,
    d: 'JOSEPH TRANCHINA, 72',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Tranchina.jpg',
  },
  {
    i: 883,
    d: 'BEVERLY ARTZ, 72',
    e: 'April 7, 2020',
  },
  {
    i: 884,
    d: 'JUDITH EVANGELINE BERNARD, 72, Queens',
  },
  {
    i: 885,
    d: 'ROBBY BROWNE, 72, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 886,
    d: 'JOHN CALDER, 72, Queens',
  },
  {
    i: 887,
    d: 'MARY DILLARD-CARTER, 72, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 888,
    d: 'JOSEPH DONOFRIO, 72, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 889,
    d: 'REGINALD DOWDY, 72, Manhattan',
  },
  {
    i: 890,
    d: 'MICHAEL N. EDELMAN, 72, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 891,
    d: 'MARGARET ESSELBORN, 72, Staten Island',
    e: 'May 3, 2020',
  },
  {
    i: 892,
    d: 'THELMA ESTEVEZ, 72, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 893,
    d: 'ALAN AARON FINDER, 72',
    e: 'March 24, 2020',
  },
  {
    i: 894,
    d: 'LEON SANDY HODGE, 72, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 895,
    d: 'YISROEL HOROWITZ, 72, Brooklyn',
  },
  {
    i: 896,
    d: 'DR. STEPHEN KAMHOLZ, 72, Brooklyn',
    e: 'June 11, 2020',
  },
  {
    i: 897,
    d: 'ADAM KOVACS, 72, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 898,
    d: 'NEMECIO MENDEZ, 72, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 899,
    d: 'LINDA ORTIZ, 72, Staten Island',
  },
  {
    i: 900,
    d: 'RALPH PASTENA, 72, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 901,
    d: 'DIANE L. RIEGGER, 72, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 902,
    d: 'RITA SCARSO, 72, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 903,
    d: 'GLORIA SMALL-JONES, 72, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 904,
    d: 'BENJAMIN SMALLS, 72',
    e: 'May 7, 2020',
  },
  {
    i: 905,
    d: 'GOLDIE THOMSON, 72, Brooklyn',
  },
  {
    i: 906,
    d: 'ROBERTO S TOBIAS SR., 72, Queens',
    e: 'May 30, 2020',
  },
  {
    i: 907,
    d: 'ROBERTO TOBIAS SR., 72, Queens',
    e: 'May 30, 2020',
  },
  {
    i: 908,
    d: 'JEAN WEISMAN, 72, Brooklyn',
  },
  {
    i: 909,
    d: 'JEAN BARBARA WEISMAN, 72, Brooklyn',
  },
  {
    i: 910,
    d: 'DOROTHY YUELLES, 72, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 911,
    d: 'ISABELLA ANN AXELROD, 73, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Isabella_Axelrod.jpg',
  },
  {
    i: 912,
    d: 'ISMAEL CABRERA, 73, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ismael_Cabrera.jpg',
  },
  {
    i: 913,
    d: 'ANTHONY C. DAZZO, 73, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_C_Dazzo.JPG',
  },
  {
    i: 914,
    d: 'ROSEMARY C. GUERRERO, 73, Queens',
    e: 'April 24, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Guerrero.jpeg',
  },
  {
    i: 915,
    d: 'ARTHUR LACKER, 73',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Lacker.PNG',
  },
  {
    i: 916,
    d: 'INDARJIT MARAJ, 73, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Indarjit_Maraj.jpg',
  },
  {
    i: 917,
    d: 'ALBERT “AL” PETROCELLI SR., 73, Staten Island',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Albert_Petrocelli.jpg',
  },
  {
    i: 918,
    d: 'ALAN SCHOENBERG, 73, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alan_Schoenberg.jpeg',
  },
  {
    i: 919,
    d: 'EMILIO SOSA, 73, The Bronx',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emilio_Sosa.jpg',
  },
  {
    i: 920,
    d: 'MOSHE AUGENSTEIN, 73, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 921,
    d: 'YOSSI BORENSTEIN, 73, Brooklyn',
  },
  {
    i: 922,
    d: 'LORRAINE CARLISLE, 73, The Bronx',
  },
  {
    i: 923,
    d: 'STUART COHEN, 73',
    e: 'April 8, 2020',
  },
  {
    i: 924,
    d: 'STEVEN MARK EDWARDS, 73, Manhattan',
    e: 'April 8, 2020',
  },
  {
    i: 925,
    d: 'GEORGIANNA GLOSE, 73, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 926,
    d: 'DR. JAMES T. GOODRICH, 73',
    e: 'March 30, 2020',
  },
  {
    i: 927,
    d: 'HILLARY GREGG, 73, Queens',
    e: 'May 3, 2020',
  },
  {
    i: 928,
    d: 'RICHARD J. GUASTELLA, 73, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 929,
    d: 'MICHAEL WALLACE HERRON, 73',
    e: 'May 14, 2020',
  },
  {
    i: 930,
    d: 'CAROLE ANN HEWITT HAMILTON, 73',
    e: 'April 12, 2020',
  },
  {
    i: 931,
    d: 'ALBA JULIANO, 73, Staten Island',
    e: 'March 25, 2020',
  },
  {
    i: 932,
    d: 'SHLOMO TZVI KONIG, 73, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 933,
    d: 'SALOMON A LEGARDA SR., 73',
  },
  {
    i: 934,
    d: 'FLORENCE LEVESQUE, 73, Manhattan',
  },
  {
    i: 935,
    d: 'GEORGE R. MAIRA, 73, Staten Island',
    e: 'March 30, 2020',
  },
  {
    i: 936,
    d: 'EDWARD MAZZA, 73, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 937,
    d: 'ARNOLD FRANCIS OBEY, 73, Staten Island',
    e: 'March 22, 2020',
  },
  {
    i: 938,
    d: 'FRANK STEARNS, 73, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 939,
    d: 'LOLITA “LELY” TORRES, 73, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 940,
    d: 'JOE TORRES, 73, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 941,
    d: 'LUIS VILLARREAL, 73, Queens',
  },
  {
    i: 942,
    d: 'LOUIS C. “MACGYVER” BARBATO JR., 74, Staten Island',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Barbato.jpg',
  },
  {
    i: 943,
    d: 'IVONNE “SANDY” BENOIT, 74, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ivonne_Benoit.jpg',
  },
  {
    i: 944,
    d: 'ROSEMARY GRILLO CLEMENTI, 74, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 945,
    d: 'ARTHUR “ARTIE” NELSON, 74, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Nelson.jpeg',
  },
  {
    i: 946,
    d: 'GREGORY PENNY SR., 74, The Bronx',
    e: 'April 30, 2020',
  },
  {
    i: 947,
    d: 'DAVID PEREZ, 74, The Bronx',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez2.jpg',
  },
  {
    i: 948,
    d: 'FOOK SHEONG WONG, 74, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fook_Sheong_Wong.jpg',
  },
  {
    i: 949,
    d: 'JERI ELLEN BILUS, 74, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 950,
    d: 'DAVID ERNST, 74',
  },
  {
    i: 951,
    d: 'LOUISE [UNKNOWN] “[UNKNOWN]” FONTAO, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 952,
    d: 'JOHN “JACK” GREGORIE, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 953,
    d: 'WILLIAM HELMREICH, 74',
    e: 'March 28, 2020',
  },
  {
    i: 954,
    d: 'JOSEPH E. “JOE” JOYCE, 74, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 955,
    d: 'MARSHA KRAMER, 74, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 956,
    d: 'ROBERT MALLER, 74, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 957,
    d: 'JOSE RODRIGUEZ MUÑOZ, 74, Brooklyn',
  },
  {
    i: 958,
    d: 'FRANKLIN ORDONEZ, 74, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 959,
    d: 'FRANKLIN V. ORDOÑEZ, 74, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 960,
    d: 'BENIGNO “BENNY” PEREZ JR., 74, Queens',
  },
  {
    i: 961,
    d: 'DR. BREDY PIERRE-LOUIS JR., 74',
  },
  {
    i: 962,
    d: 'JOEL REVZEN, 74',
    e: 'May 25, 2020',
  },
  {
    i: 963,
    d: 'LUIS M. RICO, 74, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 964,
    d: 'DAVID ALLEN WOLIN, 74',
    e: 'March 30, 2020',
  },
  {
    i: 965,
    d: 'THOMAS “TC” CRATER JR., 75',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Crater.png',
  },
  {
    i: 966,
    d: 'JAY GOLDSTEIN, 75, Manhattan',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Goldstein.jpg',
  },
  {
    i: 967,
    d: 'FAREEDA ANN KADWANI, 75, The Bronx',
    e: 'April 28, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Ann_Kadwani.jpg',
  },
  {
    i: 968,
    d: 'DALE RICHARD PON, 75, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dale_Richard_Pon.jpg',
  },
  {
    i: 969,
    d: 'JANINE SOLEIL, 75, Brooklyn',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Janine_Soleil.jpg',
  },
  {
    i: 970,
    d: 'JAMES C. THOMPSON, 75, Brooklyn',
    e: 'May 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_Thompson.jpg',
  },
  {
    i: 971,
    d: 'ALFRED ANTHONY BAFUMI, 75',
    e: 'April 15, 2020',
  },
  {
    i: 972,
    d: 'JUDITH L. COULSTON, 75, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 973,
    d: 'ARMAND D’AVIGNON, 75, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 974,
    d: 'YITZ “ADAM” FRIEDMAN, 75, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 975,
    d: 'ANA ISABEL HENAO, 75, Queens',
  },
  {
    i: 976,
    d: 'ABIGIAL HERNANDEZ, 75, Brooklyn',
  },
  {
    i: 977,
    d: 'YOLANDA HUERTERO, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 978,
    d: 'YOLANDA HUERTERO, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 979,
    d: 'CARMEN MANTO, 75, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 980,
    d: 'ALICEN MCKEON, 75, Staten Island',
    e: 'April 13, 2020',
  },
  {
    i: 981,
    d: 'CARLOS ORTIZ, 75, Brooklyn',
  },
  {
    i: 982,
    d: 'DR. AZIZUR RAHMAN, 75, Manhattan',
  },
  {
    i: 983,
    d: 'MEYER SCHEINBERG, 75, Brooklyn',
  },
  {
    i: 984,
    d: 'STEVE STEINER, 75, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 985,
    d: 'ESTHER STERN, 75, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 986,
    d: 'FRANK TAORMINA, 75, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 987,
    d: 'ANTHONY PETER BONELLI, 76, The Bronx',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Bonelli.JPG',
  },
  {
    i: 988,
    d: 'RUTH MAZYCK “DEACON CORBETT” CORBETT, 76, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruth_Corbett.jpeg',
  },
  {
    i: 989,
    d: 'PEDRO FLORES, 76, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Flores.jpeg',
  },
  {
    i: 990,
    d: 'LORENA “LORI” MCDONALD, 76',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lori_McDonald.jpg',
  },
  {
    i: 991,
    d: 'JOEL LAWRENCE SHATZKY, 76, Brooklyn',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Shatzky.jpg',
  },
  {
    i: 992,
    d: 'MARYANN BAKER, 76, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 993,
    d: 'DOROTHY BRUNETTI, 76',
    e: 'April 2, 2020',
  },
  {
    i: 994,
    d: 'SALVATORE “SAL” CAMPO, 76, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 995,
    d: 'RICHARD “RICHIE” COMMESSO, 76, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 996,
    d: 'MOHAMMAD IBRAHIM, 76, Brooklyn',
  },
  {
    i: 997,
    d: 'LESTER JAMES, 76',
    e: 'April 16, 2020',
  },
  {
    i: 998,
    d: 'MADELINE KRIPKE, 76, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 999,
    d: 'GUY A. “N/A” LAVIGNERA, 76',
    e: 'May 5, 2020',
  },
  {
    i: 1000,
    d: 'DR. KENNETH LEWES, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1001,
    d: 'JUDITH LOWIN, 76, The Bronx',
    e: 'March 21, 2020',
  },
  {
    i: 1002,
    d: 'VINCENT MESA, 76',
    e: 'April 15, 2020',
  },
  {
    i: 1003,
    d: 'GORDON M. PRADL, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1004,
    d: 'CARLOS ARTURO QUINTERO, 76, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1005,
    d: 'EUGENIO REYES, 76, The Bronx',
  },
  {
    i: 1006,
    d: 'PRIMO REYES ROSALES, 76',
  },
  {
    i: 1007,
    d: 'PIETRO SCARSO, 76, Staten Island',
    e: 'March 31, 2020',
  },
  {
    i: 1008,
    d: 'J. EDWARD “ED” SHAW, 76',
  },
  {
    i: 1009,
    d: 'RICHARD J. STURGES, 76, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 1010,
    d: 'WILLIE WOOD, 76, The Bronx',
  },
  {
    i: 1011,
    d: 'ILLUYSHA AMINOV, 77, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Illuysha_Aminov.jpg',
  },
  {
    i: 1012,
    d: 'IRIS CRUZ, 77, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Iris_Cruz.jpg',
  },
  {
    i: 1013,
    d: 'CHRISTINA “TINA” DANIELO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Christina_Danielo.jpg',
  },
  {
    i: 1014,
    d: 'JASON FUCHS, 77, The Bronx',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jason_Fuchs.jpg',
  },
  {
    i: 1015,
    d: 'BRILLA GARCES “TITA BRILLA” JARLDANE, 77, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brilla_Jarldane.jpg',
  },
  {
    i: 1016,
    d: 'NATHANIEL “SONNY” JOHNSON, 77, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1017,
    d: 'BLANCA CASTAÑO MERO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Blanca_Mero.jpg',
  },
  {
    i: 1018,
    d: 'EMELDA RODRIGUEZ, 77, Manhattan',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emelda_Rodriguez.jpg',
  },
  {
    i: 1019,
    d: 'PHYLLIS ANNE THOMPSON, 77, Manhattan',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Thompson.JPG',
  },
  {
    i: 1020,
    d: 'FOTIOS ANGELOPOULOS, 77, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1021,
    d: 'MICHAEL ANGEL BONANO, 77, Manhattan',
    e: 'May 6, 2020',
  },
  {
    i: 1022,
    d: 'STANLEY I. CHERA, 77, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1023,
    d: 'MICHAEL J. CUMMINS, 77, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1024,
    d: 'JORGE ERASMO ZAMBRANO ESPINOSA, 77, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 1025,
    d: 'MARIA FABBRICINI, 77, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1026,
    d: 'DAVID HOROWITZ, 77',
    e: 'April 6, 2020',
  },
  {
    i: 1027,
    d: 'KHALID LABDUL AHAD, 77',
  },
  {
    i: 1028,
    d: 'OWEN LORD, 77, Brooklyn',
  },
  {
    i: 1029,
    d: 'MORDECHAI R. MARCUS, 77, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1030,
    d: 'YISROEL YECHEZKIEL PUTCHOK, 77, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 1031,
    d: 'EDITH ROBINSON, 77, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1032,
    d: 'ALBERTO ROTTURA, 77, Manhattan',
    e: 'May 25, 2020',
  },
  {
    i: 1033,
    d: 'RITA D. MCLAUGHLIN SARLO, 77',
    e: 'April 25, 2020',
  },
  {
    i: 1034,
    d: 'SOOKRAJ SOOKCHAN, 77, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1035,
    d: 'DERYCK WILLIAMS, 77',
    e: 'April 5, 2020',
  },
  {
    i: 1036,
    d: 'WILLAMAE WILSON-MORRIS, 77, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1037,
    d: 'JEAN ANDERSON, 78, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 1038,
    d: 'STEPHEN A. COOPER, 78, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1039,
    d: 'DAVID JOSEPH BERNSTEIN, 78, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 1040,
    d: 'EDUARDO BUSTAMANTE, 78, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 1041,
    d: 'ARNOLD CHERRY, 78, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1042,
    d: "EILEEN O'SHEA CUMMINGS, 78, Staten Island",
    e: 'July 5, 2020',
  },
  {
    i: 1043,
    d: 'RICHARD CURRIE, 78, Staten Island',
    e: 'April 16, 2020',
  },
  {
    i: 1044,
    d: 'DR. WILLIAM TULIO DIVALE, 78, Queens',
  },
  {
    i: 1045,
    d: 'GEORGE EDELSTEIN, 78, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1046,
    d: 'ADALILA M. ENGSONG, 78',
  },
  {
    i: 1047,
    d: 'LEVI FAULK, 78, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1048,
    d: 'CATHERINE FONT, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1049,
    d: 'LINDA HANSEN, 78, Staten Island',
    e: 'May 15, 2020',
  },
  {
    i: 1050,
    d: 'RAYMOND “RAY” HOOBLER, 78',
    e: 'April 29, 2020',
  },
  {
    i: 1051,
    d: 'ADEM HOT, 78, Queens',
  },
  {
    i: 1052,
    d: 'VIRGINIA JACKSON, 78, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1053,
    d: 'ANN CHEEVERS KOLB, 78, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1054,
    d: 'MARGARET LAMBERT, 78, Manhattan',
  },
  {
    i: 1055,
    d: 'MARGARETTA H. “MARGO” LUNDELL, 78, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1056,
    d: 'VINCENT MEAD, 78, The Bronx',
  },
  {
    i: 1057,
    d: 'EUNICE ODEN, 78, Brooklyn',
  },
  {
    i: 1058,
    d: 'LAURELINA ORTIZ, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1059,
    d: 'MEIR ROKEACH, 78, Brooklyn',
  },
  {
    i: 1060,
    d: 'MARIO CÉSAR ROMERO, 78, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1061,
    d: 'JANE ROSENTHAL, 78, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1062,
    d: 'ABRAHAM “AVI” SHARONI, 78, Staten Island',
  },
  {
    i: 1063,
    d: 'EDWIN SHOSTAK, 78',
    e: 'April 8, 2020',
  },
  {
    i: 1064,
    d: 'SAFRA SPILMAN, 78, Brooklyn',
  },
  {
    i: 1065,
    d: 'SANTA TORAL, 78, Brooklyn',
  },
  {
    i: 1066,
    d: 'BAO DUONG, 79',
    e: 'March 30, 2020',
  },
  {
    i: 1067,
    d: 'EDWARD HENRY, 79, Brooklyn',
    e: 'May 5, 2020',
  },
  {
    i: 1068,
    d: 'ELIZABETH “BETTY” MCCOLLUM, 79, Manhattan',
    e: 'April 21, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_McCollum.jpeg',
  },
  {
    i: 1069,
    d: 'CARMEN SILVA, 79, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Silva.jpg',
  },
  {
    i: 1070,
    d: 'ANNA SPARACINO, 79, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 1071,
    d: 'ADA MAE VOID RIVERS, 79, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ada_Rivers.jpg',
  },
  {
    i: 1072,
    d: 'DR. GUIDO VOLCOVICI, 79',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Guido_Volcovici.jpg',
  },
  {
    i: 1073,
    d: 'EDWARD J. “ED” ANTONIO II, 79, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 1074,
    d: 'LOUIS ARLEO, 79, Queens',
  },
  {
    i: 1075,
    d: 'MICHAEL ARMSTRONG, 79, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1076,
    d: 'GAETANO BARBIERI, 79, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 1077,
    d: 'CELESTER BEASELY, 79, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1078,
    d: 'TUFAN BENER, 79, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1079,
    d: 'RUBY LAIWAN CHANG, 79, Manhattan',
    e: 'May 7, 2020',
  },
  {
    i: 1080,
    d: 'ROLANDO CHIRINOS, 79, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 1081,
    d: 'EDDY DAVIS, 79, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1082,
    d: 'HELEN FORTE, 79, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1083,
    d: 'NELSON MANUEL FRANKY, 79, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1084,
    d: 'BEATRICE “BEA” GRANBERG, 79, Staten Island',
    e: 'May 9, 2020',
  },
  {
    i: 1085,
    d: 'MARIANNE “PEACHY” HERLIHY, 79, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1086,
    d: 'LEONARD D. IMPERIO, 79, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 1087,
    d: 'JUN MADEA, 79, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 1088,
    d: 'ALBA PEREA, 79, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1089,
    d: 'JIM SMITH, 79, Staten Island',
    e: 'June 28, 2020',
  },
  {
    i: 1090,
    d: 'RUTH M. WERRA, 79, Staten Island',
    e: 'April 11, 2020',
  },
  {
    i: 1091,
    d: 'JOHN “YASHO” DEARDEN, 80, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dearden.jpg',
  },
  {
    i: 1092,
    d: 'BIBI MAIMOON NEISHA KHAN, 80',
    e: 'April 3, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/BibiMaimoonNeisha_Khan.jpg',
  },
  {
    i: 1093,
    d: 'ESTEBAN MATOS, 80, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Esteban_Matos.jpeg',
  },
  {
    i: 1094,
    d: "RONALD O'LOUGHLIN, 80, Brooklyn",
    e: 'March 31, 2020',
    h: "https://projects.thecity.nyc/covid-19-deaths-img/Ronald_O'Loughlin.png",
  },
  {
    i: 1095,
    d: 'CLARENCE JESSIE “SONNY” SPANN, 80, Brooklyn',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clarence_Spann.jpg',
  },
  {
    i: 1096,
    d: 'JOHN WALTER, 80, Queens',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Walter.jpg',
  },
  {
    i: 1097,
    d: 'RAMON ALVARADO, 80, Manhattan',
  },
  {
    i: 1098,
    d: 'OLGA ANCHUMBIA, 80, Manhattan',
  },
  {
    i: 1099,
    d: 'DNYNIA ARMSTRONG, 80, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1100,
    d: 'CAROLYN ANNA “[UNKNOWN]” BENFANTE, 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1101,
    d: 'BEIRISH BERGER, 80, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1102,
    d: 'SHIRLEY CAMPBELL, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 1103,
    d: 'KATIA MARIA CAPELLAN, 80, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1104,
    d: 'AURELIO CASILLA, 80, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1105,
    d: 'NELSON E. CUEVAS, 80, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1106,
    d: 'GERARD ANDERSON KIRBY DUVILLIER, 80, Staten Island',
    e: 'June 25, 2020',
  },
  {
    i: 1107,
    d: 'WILLIAM FRANK “WILLIE” FELONG, 80, Staten Island',
    e: 'May 18, 2020',
  },
  {
    i: 1108,
    d: 'ARTHUR FORTE, 80, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1109,
    d: 'ALLEN L. HIRSCHMAN, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 1110,
    d: 'DR. DONALD B. “DON” HOFFMAN, 80, The Bronx',
  },
  {
    i: 1111,
    d: 'NATHAN KOLODNEY, 80',
    e: 'May 24, 2020',
  },
  {
    i: 1112,
    d: 'ALEX LAYNE, 80, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1113,
    d: 'ELADIO LUCERO, 80',
    e: 'April 25, 2020',
  },
  {
    i: 1114,
    d: 'DR. ABDUL MANNAN, 80',
  },
  {
    i: 1115,
    d: 'PATRICIA MCGOWAN, 80, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1116,
    d: 'KATHLEEN ELIZABETH MCNULTY, 80, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1117,
    d: 'CAROLE OCERA, 80, Staten Island',
    e: 'April 13, 2020',
  },
  {
    i: 1118,
    d: 'THAD H. PAIGE, 80, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1119,
    d: 'MYRIAM PEREZ, 80, Brooklyn',
  },
  {
    i: 1120,
    d: 'MYRTLE POLLARD, 80, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1121,
    d: 'PHILIP RABIN, 80, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1122,
    d: 'ROSEMARY N/A “N/A” SELL, 80',
    e: 'April 17, 2020',
  },
  {
    i: 1123,
    d: 'HAROLD JOHN SOLOMAN JR., 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1124,
    d: 'HAROLD JOHN SOLOMON JR., 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1125,
    d: 'OK J. CHOI, 81, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ok_Choi.jpeg',
  },
  {
    i: 1126,
    d: 'ANTONIA REYNOSO, 81',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonia_Reynoso.jpeg',
  },
  {
    i: 1127,
    d: 'FANNY GELPIERYN, 81, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1128,
    d: 'ROBERT JOHNSON, 81, Manhattan',
    e: 'June 14, 2020',
  },
  {
    i: 1129,
    d: 'JOSEPH F. KELLY JR., 81, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1130,
    d: 'PETROS “PETER” MICHAELS, 81, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1131,
    d: 'JOSEPH MIGLIUCCI, 81, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1132,
    d: 'JOHN ANDERSON “JACK; QUIS” QUISENBERRY, 81, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1133,
    d: 'JOAN S. RAINES, 81, Manhattan',
    e: 'May 17, 2020',
  },
  {
    i: 1134,
    d: 'MARIA SALAMAN, 81, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 1135,
    d: 'COURTNEY WARREN, 81, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 1136,
    d: 'RABBI SOLOMON “SHLOMO ELAZAR” WULLIGER, 81, Brooklyn',
  },
  {
    i: 1137,
    d: 'JOSEPH “JOE” ALOE, 82, Manhattan',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joe_Aloe.jpeg',
  },
  {
    i: 1138,
    d: 'PIK CHI CHAN, 82, Queens',
    e: 'June 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pik_Chi_Chan.jpg',
  },
  {
    i: 1139,
    d: 'ELSIE LOPEZ ESCOBAR, 82, Brooklyn',
    e: 'April 21, 2020',
  },
  {
    i: 1140,
    d: 'ELSA GOMEZ, 82, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elsa_Gomez.jpg',
  },
  {
    i: 1141,
    d: 'ERNEST “ERNIE” MORENCY, 82, Brooklyn',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernest_Morency.jpg',
  },
  {
    i: 1142,
    d: 'ANA ORTIZ, 82, The Bronx',
    e: 'May 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ana_Ortiz.jpeg',
  },
  {
    i: 1143,
    d: 'ANTONIO PEPENELLA, 82, The Bronx',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Pepenella.jpg',
  },
  {
    i: 1144,
    d: 'NATALIYA RUDNICHENKO, 82, Staten Island',
    e: 'April 12, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Nataliya_Rudnichenko.jpg',
  },
  {
    i: 1145,
    d: 'ROSEMARY “ROSIE” TERIO, 82, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Terio.jpg',
  },
  {
    i: 1146,
    d: 'JUAN “MIÑOSO” ARAUJO, 82, The Bronx',
  },
  {
    i: 1147,
    d: 'LUZ MARIA AROCHO MALDONADO, 82',
    e: 'April 11, 2020',
  },
  {
    i: 1148,
    d: 'JAIME ASENCIO, 82, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 1149,
    d: 'FRANCES H. BARRY, 82',
  },
  {
    i: 1150,
    d: 'WALTER BECKETT, 82, Brooklyn',
  },
  {
    i: 1151,
    d: 'REV. HARRY DEAN BIGBY, 82, Manhattan',
    e: 'May 26, 2020',
  },
  {
    i: 1152,
    d: 'IFGENIA “IFI” CARDENAS, 82, Manhattan',
  },
  {
    i: 1153,
    d: 'IFGENIA “IFI” CARDENAS, 82, Manhattan',
  },
  {
    i: 1154,
    d: 'MORDECHAI LEIB “MOTTEL” CHEIN, 82, Brooklyn',
  },
  {
    i: 1155,
    d: 'MICHAEL ELGIN, 82, Manhattan',
    e: 'April 30, 2020',
  },
  {
    i: 1156,
    d: 'LUCIUS EWAN, 82, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 1157,
    d: 'MIGUEL GELPI, 82, Manhattan',
    e: 'May 25, 2020',
  },
  {
    i: 1158,
    d: 'LUCIEN GEORGE SR., 82',
    e: 'April 5, 2020',
  },
  {
    i: 1159,
    d: 'LUCIANO GOMEZ, 82, Queens',
  },
  {
    i: 1160,
    d: 'MICHAEL HALKIAS, 82, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 1161,
    d: 'BARUCH HAVIV, 82',
    e: 'May 27, 2020',
  },
  {
    i: 1162,
    d: 'JOSEPH C. “JOE” HENNESSY, 82, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1163,
    d: 'MIRIAM HOMNICK, 82, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 1164,
    d: 'TOBIAS NOBOA, 82, Queens',
  },
  {
    i: 1165,
    d: 'SEBASTIAN FRANCIS PEPI, 82',
    e: 'April 5, 2020',
  },
  {
    i: 1166,
    d: 'WINSTON SILVERA, 82, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 1167,
    d: 'JULES G. VALESTIN, 82, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1168,
    d: 'ALBERT KNICKERBOCKER “NICK” WEBSTER, 82, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1169,
    d: 'STANLEY ALBERT, 83, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stanley_Albert.jpg',
  },
  {
    i: 1170,
    d: 'THOMAS CORI, 83, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 1171,
    d: 'MARIA ADIELA HERNANDEZ, 83, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Hernandez.jpeg',
  },
  {
    i: 1172,
    d: 'GERARD EVANS MANOLOVICI, 83',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gerard_Manolovici.jpg',
  },
  {
    i: 1173,
    d: 'ELIAS LANE “MR. LANE” MELTON, 83, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elias_Melton.jpeg',
  },
  {
    i: 1174,
    d: 'DANILO RIVAS, 83, The Bronx',
  },
  {
    i: 1175,
    d: 'LILA CHARLOTTE SWEDELSON WEISSMAN, 83, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lila_Weissman.jpg',
  },
  {
    i: 1176,
    d: 'ROBERT “BOB” ZOLNERACK, 83, Brooklyn',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Zolnerack.jpg',
  },
  {
    i: 1177,
    d: 'ROSALIE ACAMPORA, 83, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1178,
    d: 'RAFAEL ARCINIEGAS, 83, The Bronx',
    e: 'March 8, 2020',
  },
  {
    i: 1179,
    d: 'KEVIN JOHN CAHILL, 83, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 1180,
    d: 'RABBI YISROEL FRIEDMAN, 83, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 1181,
    d: 'NICHOLAS A. GRIECO, 83, Staten Island',
    e: 'March 26, 2020',
  },
  {
    i: 1182,
    d: 'HENRI M. GUERON, 83, Manhattan',
    e: 'May 1, 2020',
  },
  {
    i: 1183,
    d: 'TIAN LIANG, 83, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1184,
    d: 'MICHAEL JOSEF “MIKE” LONGO, 83, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1185,
    d: 'EFRAIN MOLINA SR., 83, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1186,
    d: 'JAMES D. “"JIM"” REED, 83, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1187,
    d: 'CLETUS STEWART, 83, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1188,
    d: 'RICHARD T. ZAIB, 83, Queens',
    e: 'June 25, 2020',
  },
  {
    i: 1189,
    d: 'DOLORES ALTAGRACIA MENA, 84',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dolores_Mena.JPG',
  },
  {
    i: 1190,
    d: 'MICHAEL BESSER, 84, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Besser.jpg',
  },
  {
    i: 1191,
    d: 'STANLEY KAPLAN, 84, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1192,
    d: 'JOHN KNOX, 84, Queens',
    e: 'March 16, 2020',
  },
  {
    i: 1193,
    d: 'RALPH WILLIAM MARTEL JR., 84, Manhattan',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Martel.jpeg',
  },
  {
    i: 1194,
    d: 'JOSE H. RICO, 84, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Rico.png',
  },
  {
    i: 1195,
    d: 'SALVATORE ROMEO, 84, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1196,
    d: 'ARLENE SCHNEIDMAN, 84, The Bronx',
    e: 'April 14, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Arlene_Schneidman.jpeg',
  },
  {
    i: 1197,
    d: 'OLGA VASQUEZ, 84, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Olga_Vasquez.jpg',
  },
  {
    i: 1198,
    d: 'GIL “THE GODFATHER OF CARIBBEAN RADIO” BAILEY, 84, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1199,
    d: 'MURIEL A. CALLENDER, 84, Brooklyn',
    e: 'May 3, 2020',
  },
  {
    i: 1200,
    d: 'RABBI BRUCE GOLDMAN, 84, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1201,
    d: 'HENRY GRIMES, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1202,
    d: 'SAMUEL “SAM” HARGRESS JR., 84, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1203,
    d: 'CECILIA WANG “CC” HSU, 84, Manhattan',
  },
  {
    i: 1204,
    d: 'MILENA JELINEK, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1205,
    d: 'KOSTA KASIMIS, 84, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 1206,
    d: 'DONALD PHILIP MCCOMB, 84, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1207,
    d: 'EDWARD MICKUS, 84, Brooklyn',
    e: 'March 12, 2020',
  },
  {
    i: 1208,
    d: 'DR. PETER I. PRESSMAN, 84, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 1209,
    d: 'PATRICIA A. SCHMIDT, 84, Staten Island',
  },
  {
    i: 1210,
    d: 'GABRIEL DE JESUS MARIN SERNA, 84, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1211,
    d: 'ROSA SERRANO, 84, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1212,
    d: 'FAUSTINA MONZI SLOBODZIAN, 84, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1213,
    d: 'DOROTHY RUTH ALAJI YASIN, 84, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 1214,
    d: 'ANDRES DIAZ, 85, Staten Island',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Andres_Diaz.jpeg',
  },
  {
    i: 1215,
    d: 'ED FULD, 85, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ed_Fuld.jpg',
  },
  {
    i: 1216,
    d: 'MARIO J. “PIPI” POBEGA, 85, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mario_Pobega.jpg',
  },
  {
    i: 1217,
    d: 'CHANDRAKANT F. SHETH, 85, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Chandrakant_Sheth.jpg',
  },
  {
    i: 1218,
    d: 'NATHAN “NATE/ NAT” ALLMAN, 85',
    e: 'March 22, 2020',
  },
  {
    i: 1219,
    d: 'DONALD C. BORBELL SR., 85, Brooklyn',
  },
  {
    i: 1220,
    d: 'NORMAN “NACHUM” DICK, 85, Brooklyn',
  },
  {
    i: 1221,
    d: 'HARVEY FINKE, 85, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1222,
    d: 'MAZEL FINKENSTEIN, 85',
  },
  {
    i: 1223,
    d: 'BETTY N/A “N/A” FRUNZI (NEE RAMONDETTA), 85, Staten Island',
    e: 'April 19, 2020',
  },
  {
    i: 1224,
    d: 'FRED KLEIN, 85, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1225,
    d: 'RABBI MOSHE KWALBRUN, 85, Queens',
  },
  {
    i: 1226,
    d: 'EDWARD PAUL MCGUIRE, 85',
    e: 'May 15, 2020',
  },
  {
    i: 1227,
    d: 'GERARD H. “GERRY” ROSENBERG, 85, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1228,
    d: 'KARN VIR SURI, 85, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1229,
    d: 'LAURICE KASOW, 86, Queens',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Laurice_Kasow.jpg',
  },
  {
    i: 1230,
    d: 'ANTHONY “TONY” TERIO, 86, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Terio.jpeg',
  },
  {
    i: 1231,
    d: 'JOAN TERRERO, 86, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joan_Terrero.jpg',
  },
  {
    i: 1232,
    d: 'MELITA ELIZABETH “FLYNN” BAKER, 86',
    e: 'April 30, 2020',
  },
  {
    i: 1233,
    d: 'PATRICIA BOSWORTH, 86, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1234,
    d: 'VINICIO DONATO, 86, Queens',
  },
  {
    i: 1235,
    d: 'ARTHUR HIRSHKOWITZ, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1236,
    d: 'BULGER L “IRV” IRVING JR., 86, Staten Island',
  },
  {
    i: 1237,
    d: 'ALFRED JOLLON, 86, Manhattan',
  },
  {
    i: 1238,
    d: 'RICHARD G. KLEIN SR., 86, Staten Island',
    e: 'June 4, 2020',
  },
  {
    i: 1239,
    d: 'RICHARD G. KLEIN SR., 86, Staten Island',
    e: 'June 4, 2020',
  },
  {
    i: 1240,
    d: 'IRIS CORNELIA LOVE, 86, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1241,
    d: 'JOEL M. REED, 86',
    e: 'April 13, 2020',
  },
  {
    i: 1242,
    d: 'YAAKOV SCHWEI, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1243,
    d: 'ARLENE STRINGER-CUEVAS, 86, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1244,
    d: 'ETTA B. ALSTON, 87, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Alston.jpg',
  },
  {
    i: 1245,
    d: 'PASQUALE BRUNO, 87, Brooklyn',
  },
  {
    i: 1246,
    d: 'EDITH ECKER, 87, Queens',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edith_Ecker.jpg',
  },
  {
    i: 1247,
    d: 'GRACE HARRIS, 87, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1248,
    d: 'PEDRO MUNIZ, 87, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Muniz.JPG',
  },
  {
    i: 1249,
    d: 'MARIA ROSA PARRELLI, 87, Brooklyn',
    e: 'May 1, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/MariaRosa_Parrelli.jpeg',
  },
  {
    i: 1250,
    d: 'ROSEMARIE AMEROSI, 87, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1251,
    d: 'JOSEPH BROSTEK, 87, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 1252,
    d: 'THERESA “TERRY” COLLINS, 87, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1253,
    d: 'VITO J. DI BENEDETTO, 87, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 1254,
    d: 'LILA A. FENWICK, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1255,
    d: 'ANITA FIAL, 87, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1256,
    d: 'BORUCH GELFAND, 87, Brooklyn',
  },
  {
    i: 1257,
    d: 'RABBI YAAKOV MORDECHAI GOLDBERG, 87, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1258,
    d: 'BABETTE SOLON HOLLISTER, 87, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 1259,
    d: 'IRVING HOPPENWASSER, 87',
    e: 'May 17, 2020',
  },
  {
    i: 1260,
    d: 'WILLIAM E. HORNER, 87',
    e: 'April 19, 2020',
  },
  {
    i: 1261,
    d: 'CAROLE MAE KAYE, 87, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1262,
    d: 'DR. FREDERICK MENDELSOHN, 87, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1263,
    d: 'ANGELO “POPPY” PIRO, 87, Staten Island',
    e: 'March 30, 2020',
  },
  {
    i: 1264,
    d: 'MARY M. RIZZO, 87, Staten Island',
    e: 'April 22, 2020',
  },
  {
    i: 1265,
    d: 'ALLAN SCHLANGER, 87, Brooklyn',
    e: 'March 13, 2020',
  },
  {
    i: 1266,
    d: 'ANN YOUNGERMAN SMOLER, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1267,
    d: 'DR. ALFRED YASSKY, 87, Manhattan',
  },
  {
    i: 1268,
    d: 'MILDRED BARGEBUHR KUNIN, 88, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mildred_Kunin.jpeg',
  },
  {
    i: 1269,
    d: 'ROSE MARY INFANTINO, 88, The Bronx',
    e: 'April 13, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Rose_Mary_Infantino.jpg',
  },
  {
    i: 1270,
    d: 'MANUEL RIVERA, 88, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1271,
    d: 'ROBERT W. BARGHAAN, 88, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 1272,
    d: 'VIRGINIA FAITH BARGHAAN, 88, Staten Island',
  },
  {
    i: 1273,
    d: 'HARVEY BAYARD, 88, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1274,
    d: 'FAT CHAN, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1275,
    d: 'ELY COHEN, 88, Staten Island',
    e: 'May 24, 2020',
  },
  {
    i: 1276,
    d: 'DONALD FELDSTEIN, 88, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1277,
    d: 'MARTIN FLANZBAUM, 88, Staten Island',
  },
  {
    i: 1278,
    d: 'RABBI LEIBEL GRONER, 88, Brooklyn',
  },
  {
    i: 1279,
    d: 'MOSHE HOMNICK, 88, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1280,
    d: 'MINDELLA LAMM, 88, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 1281,
    d: 'SYLVIA NESTEL “GINGER LIEF” LIEF, 88, Manhattan',
    e: 'June 4, 2020',
  },
  {
    i: 1282,
    d: 'ALEXANDER MEYERS, 88, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1283,
    d: 'RICHARD RAINES, 88, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1284,
    d: 'EDITH “BIG” RICHEMOND, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1285,
    d: 'ERNEST H. SCHWARZ, 88, Staten Island',
  },
  {
    i: 1286,
    d: 'LILLIAN STUGENSKY, 88, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 1287,
    d: 'JEAN POLSKY WEITZ, 88, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1288,
    d: 'DOROTHY L WORRELL, 88, Staten Island',
    e: 'May 4, 2020',
  },
  {
    i: 1289,
    d: 'THOMAS ECKER, 89, Queens',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Ecker.JPG',
  },
  {
    i: 1290,
    d: 'IRVING ENGELSON, 89, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irving_Engelson.jpg',
  },
  {
    i: 1291,
    d: 'PHYLLIS FIORAVANTI, 89, Queens',
    e: 'April 7, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Fioravanti.jpg',
  },
  {
    i: 1292,
    d: 'DIONYSIOS S. KOTSONIS, 89, Manhattan',
    e: 'May 9, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Dionysios_Kotsonis.JPG',
  },
  {
    i: 1293,
    d: 'CARMEN NEREIDA MUNIZ, 89, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Muniz.JPG',
  },
  {
    i: 1294,
    d: 'CORINNE ROGATNICK, 89, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1295,
    d: 'HELENE ALYON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1296,
    d: 'FRANK AMATO, 89, Staten Island',
  },
  {
    i: 1297,
    d: 'HELENE AYLON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1298,
    d: 'BERNEL CONNELLY, 89, Queens',
  },
  {
    i: 1299,
    d: 'BERNEL CONNELLY, 89, Queens',
  },
  {
    i: 1300,
    d: 'LINDY WILLIAM CRESCITELLI, 89, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 1301,
    d: 'ROY DREISTADT, 89, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1302,
    d: 'HERBERT F. “HERB” FISCHER, 89',
    e: 'May 3, 2020',
  },
  {
    i: 1303,
    d: 'SADIE GAGLIANO, 89, Staten Island',
    e: 'May 5, 2020',
  },
  {
    i: 1304,
    d: 'JAMES “JIMMY” GLENN, 89',
    e: 'May 7, 2020',
  },
  {
    i: 1305,
    d: 'JIMMY GLENN, 89, Manhattan',
  },
  {
    i: 1306,
    d: 'ROBERT GREENBERGER, 89',
    e: 'March 23, 2020',
  },
  {
    i: 1307,
    d: 'EDWARD D. KILLEA, 89, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 1308,
    d: 'JOSEPH M. KISSANE, 89, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 1309,
    d: 'KYONG HE PARK, 89',
    e: 'March 28, 2020',
  },
  {
    i: 1310,
    d: 'YAAKOV PERLOW, 89, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1311,
    d: 'ARLENE SAUNDERS, 89, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1312,
    d: 'TADASHI TSUFURA, 89, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1313,
    d: 'MIGUEL ANGEL CALDERON, 90',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Calderon.JPG',
  },
  {
    i: 1314,
    d: 'LENORE CORCORAN, 90, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lenore_Corcoran.jpg',
  },
  {
    i: 1315,
    d: 'MARTHA DIAZ, 90, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Martha_Diaz.jpg',
  },
  {
    i: 1316,
    d: 'LUCY NICOLELIS, 90, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lucy_Nicolelis.jpeg',
  },
  {
    i: 1317,
    d: 'BENNY AU, 90, Manhattan',
  },
  {
    i: 1318,
    d: 'ONIELO DE LUZIO, 90, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 1319,
    d: 'MOLLIE “GRANDMA DUKES” GUSTINE, 90, Queens',
  },
  {
    i: 1320,
    d: 'EVA KONRAD HAWKINS, 90, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 1321,
    d: 'YUEN KAN HSU, 90, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1322,
    d: 'BETTY JOBLOVE, 90, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1323,
    d: 'BETZALEL KAHAN, 90, Brooklyn',
  },
  {
    i: 1324,
    d: 'DR. HERMAN J. LEW, 90, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1325,
    d: 'YOSEF ZUNDEL MOTZEN, 90, Brooklyn',
  },
  {
    i: 1326,
    d: 'MAXWELL M. MOZELL, 90, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1327,
    d: 'LEONARD SBORDONE, 90, The Bronx',
    e: 'May 1, 2020',
  },
  {
    i: 1328,
    d: 'LUCILLE D. TAPPE, 90, Manhattan',
  },
  {
    i: 1329,
    d: 'MORDECHAI MENDEL WIEDER, 90, Brooklyn',
  },
  {
    i: 1330,
    d: 'MORTON WOLITZER, 90, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1331,
    d: 'HAROLD JAMES BLAKE, 91, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Blake.jpg',
  },
  {
    i: 1332,
    d: 'ROSARIO GONZALEZ, 91, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosario_Gonzalez.png',
  },
  {
    i: 1333,
    d: 'THERESA ESTELLE MORRIS, 91, Brooklyn',
    e: 'April 6, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Theresa_Estelle_Morris.png',
  },
  {
    i: 1334,
    d: 'JUDITH PATOCS, 91, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judith_Patocs.jpg',
  },
  {
    i: 1335,
    d: 'NANCY M. ALLEN, 91',
    e: 'April 15, 2020',
  },
  {
    i: 1336,
    d: 'ROMI COHN, 91',
    e: 'March 24, 2020',
  },
  {
    i: 1337,
    d: 'BENJAMIN “BEN” DIGIOVANNI, 91, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1338,
    d: 'WILLIAM H. “BILL” GERDTS, 91',
    e: 'April 14, 2020',
  },
  {
    i: 1339,
    d: 'HARRIET “HANI” GROSSMAN, 91, The Bronx',
    e: 'May 16, 2020',
  },
  {
    i: 1340,
    d: 'SHMUEL HOCH, 91, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1341,
    d: 'BARRY KAYE, 91, Manhattan',
    e: 'April 21, 2020',
  },
  {
    i: 1342,
    d: 'ANNA LEVINE, 91, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 1343,
    d: 'RAE LUCCHESE, 91, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 1344,
    d: 'JOSEPH P. MURPHY, 91, Staten Island',
    e: 'May 16, 2020',
  },
  {
    i: 1345,
    d: 'YEHUDIS “JUDITH” SHUBERT-FINKELSTEIN, 91, Brooklyn',
  },
  {
    i: 1346,
    d: 'KHANA VOROVICH, 92, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Khana_Vorovich.jpeg',
  },
  {
    i: 1347,
    d: 'JOHN D. “POP POP” ANNETTA, 92, Staten Island',
    e: 'May 22, 2020',
  },
  {
    i: 1348,
    d: 'DR. HOOSHANG BEHROOZI, 92',
    e: 'April 16, 2020',
  },
  {
    i: 1349,
    d: 'AVRAHAM HAKOHEN “ROMI” COHN, 92, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1350,
    d: 'YVETTE DIAMOND, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1351,
    d: 'WINIFRED FREDERICKS, 92, Staten Island',
  },
  {
    i: 1352,
    d: 'REUBEN GUTOFF, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1353,
    d: 'YOSEF HIRSCH, 92, Brooklyn',
  },
  {
    i: 1354,
    d: 'GEORGE WILLIAM KELLY, 92, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1355,
    d: 'LEE KONITZ, 92, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1356,
    d: 'ABRAHAM A. RUBASHKIN, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1357,
    d: 'BETTY SHAIN, 92, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1358,
    d: 'YVONNE SHERWELL, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1359,
    d: 'RAYMOND STRYPE, 92, Brooklyn',
  },
  {
    i: 1360,
    d: 'PETER JOHN TOSO, 92, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1361,
    d: 'AGATHA FINA, 93, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agatha_Fina.jpg',
  },
  {
    i: 1362,
    d: 'VINCENZO GALLINA, 93, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1363,
    d: 'JENNIE GRAZIANO, 93, Brooklyn',
    e: 'March 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jennie_Graziano.jpg',
  },
  {
    i: 1364,
    d: 'JAMES L. HUTCHERSON, 93, Queens',
    e: 'April 8, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/James_L_Hutcherson.JPG',
  },
  {
    i: 1365,
    d: 'IRVING BARASH, 93, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1366,
    d: 'LOUIS JOSEPH CELI, 93, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1367,
    d: 'LILLIAN ECKSTEIN, 93',
    e: 'April 12, 2020',
  },
  {
    i: 1368,
    d: 'MILDRED GLASER, 93, Queens',
  },
  {
    i: 1369,
    d: 'JENNIE “AUNT JENNIE” GRAZIANO, 93, Brooklyn',
    e: 'March 22, 2020',
  },
  {
    i: 1370,
    d: 'MOSHE GRUNWALD, 93, Brooklyn',
  },
  {
    i: 1371,
    d: 'BESSIE MAE JEFFRESS, 93',
    e: 'May 15, 2020',
  },
  {
    i: 1372,
    d: 'STEPHEN W. KANN, 93, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1373,
    d: 'NITA PIPPINS, 93, Manhattan',
    e: 'May 10, 2020',
  },
  {
    i: 1374,
    d: 'ALFRED SCHWARTZ, 93, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 1375,
    d: 'BERNARD “BERNIE” WEISSMAN, 93, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1376,
    d: 'MARION M. GAVIN, 94, Brooklyn',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marion_Gavin.JPG',
  },
  {
    i: 1377,
    d: 'ANN KROSS, 94, The Bronx',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ann_Kross.jpg',
  },
  {
    i: 1378,
    d: 'BERYL BERNAY, 94, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1379,
    d: 'FELICIA FRIEDMAN, 94, The Bronx',
    e: 'May 19, 2020',
  },
  {
    i: 1380,
    d: 'MALKA KALMANOWITZ, 94, Brooklyn',
  },
  {
    i: 1381,
    d: 'JOYCE ELAINE PARKER, 94, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 1382,
    d: 'BUCKY PIZZARELLI, 94',
    e: 'April 1, 2020',
  },
  {
    i: 1383,
    d: 'JOSEPH JEROME SNEAD, 94, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 1384,
    d: 'WILLIAM WOLF, 94, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1385,
    d: 'GRACE GRANTER, 95, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1386,
    d: 'EMILY SAVITSKY, 95, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emily_Savitsky.jpg',
  },
  {
    i: 1387,
    d: 'ROBERT J. WOLFSON, 95',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Wolfson.jpg',
  },
  {
    i: 1388,
    d: 'MOE “MOE THE BUTCHER” ALBANESE, 95',
    e: 'April 7, 2020',
  },
  {
    i: 1389,
    d: 'MARIA “MAYITO” COLÓN, 95, The Bronx',
  },
  {
    i: 1390,
    d: 'STANLEY B. DREYER, 95, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1391,
    d: 'PHOEBE GLADSTONE, 95, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1392,
    d: 'MORTEZA KHOSROVA, 95, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 1393,
    d: 'RABBI MORDECHAI DOVID RUBIN, 95, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1394,
    d: 'MIRIAM STOLZENBERG, 96, The Bronx',
    e: 'April 15, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Miriam_Stolzenberg.JPG',
  },
  {
    i: 1395,
    d: 'SADIE MARTUCCI, 96, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1396,
    d: 'ANNA PRIOLO RICCOBONO, 96, Staten Island',
    e: 'April 18, 2020',
  },
  {
    i: 1397,
    d: 'JOSEPH TUSIANI, 96, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1398,
    d: 'ROBERT M. “BOB” WEINTRAUB, 96, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1399,
    d: 'ADELINE COPPOLA, 97, The Bronx',
  },
  {
    i: 1400,
    d: 'BERTINA ELLIS, 97',
    e: 'April 8, 2020',
  },
  {
    i: 1401,
    d: 'JOSEPH FEINGOLD, 97, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1402,
    d: 'ELYA GELBERT, 97, Brooklyn',
  },
  {
    i: 1403,
    d: 'JERZY GLOWCZEWSKI, 97, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1404,
    d: 'WYNN HANDMAN, 97, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1405,
    d: 'EVELYN BULCOCK, 98, Brooklyn',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Bullcock.jpeg',
  },
  {
    i: 1406,
    d: 'ETTA REBECCA BUSH, 98, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Rebecca_Bush.png',
  },
  {
    i: 1407,
    d: 'HAROLD GROSSMAN, 98, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Grossman.jpg',
  },
  {
    i: 1408,
    d: 'ANNA BUCCELLATO, 98, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 1409,
    d: 'ANNA MESSINA, 98',
    e: 'May 1, 2020',
  },
  {
    i: 1410,
    d: 'LOUIS SCHMIDT, 99',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Schmidt.jpg',
  },
  {
    i: 1411,
    d: 'KLARA WEISZ, 99',
    e: 'April 3, 2020',
  },
  {
    i: 1412,
    d: 'PHILIP KAHN, 100',
    e: 'April 17, 2020',
  },
  {
    i: 1413,
    d: 'MADALINE ULICNY, 100, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1414,
    d: 'PHYLLIS BEATRICE ANTONETZ, 103',
    e: 'April 17, 2020',
  },
  {
    i: 1415,
    d: 'ANGELA MARIE ROONEY, 103, The Bronx',
    e: 'May 27, 2020',
  },
  {
    i: 1416,
    d: 'VIDAL CRUZ, Staten Island',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vidal_Cruz.jpg',
  },
  {
    i: 1417,
    d: 'JOHN DUNSTON JR., Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dunston_Jr.png',
  },
  {
    i: 1418,
    d: 'JAMES GREEN, The Bronx',
  },
  {
    i: 1419,
    d: 'CLYDE WILLIAM HENRY, Brooklyn',
    e: 'April 23, 2020',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Clyde_William_Henry.jpg',
  },
  {
    i: 1420,
    d: 'MELODY REED, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Melody_Reed.jpg',
  },
  {
    i: 1421,
    d: 'AGUSTIN SALVADOR',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agustin_Salvador.jpeg',
  },
  {
    i: 1422,
    d: 'WILLIAM “BILLY” SCANLAN JR.',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Scanlan.jpg',
  },
  {
    i: 1423,
    d: 'JULIAN CLYDE WESTON, Brooklyn',
    h:
      'https://projects.thecity.nyc/covid-19-deaths-img/Julian_Clyde_Weston.jpg',
  },
  {
    i: 1424,
    d: 'KWABENA ACHEAMPONG',
  },
  {
    i: 1425,
    d: 'MARILYN ACLUFI, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 1426,
    d: 'LAURO ACUNA',
    e: 'April 26, 2020',
  },
  {
    i: 1427,
    d: 'EUGENE ADAMS',
  },
  {
    i: 1428,
    d: 'LUZ INES AGRAZAL',
  },
  {
    i: 1429,
    d: 'SERGIO AGUILAR',
  },
  {
    i: 1430,
    d: 'BABUL AHMED',
    e: 'March 27, 2020',
  },
  {
    i: 1431,
    d: 'WILMAN AJILA, Queens',
  },
  {
    i: 1432,
    d: 'LUIS ALBINO, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1433,
    d: 'ANGEL ALEJANDRO',
  },
  {
    i: 1434,
    d: 'ALI ALI',
  },
  {
    i: 1435,
    d: 'ISMAT ALI, Queens',
  },
  {
    i: 1436,
    d: 'HAZRAT ALI, Manhattan',
  },
  {
    i: 1437,
    d: 'KHANDAKER MOSADDEK ALI (SADEK), The Bronx',
  },
  {
    i: 1438,
    d: 'MICHELLE ALLEN, Brooklyn',
  },
  {
    i: 1439,
    d: 'ISMAEL ALMODOVAR, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1440,
    d: 'ISMAEL ALMODOVAR, Brooklyn',
  },
  {
    i: 1441,
    d: 'ISMAEL ALMODOVAR',
  },
  {
    i: 1442,
    d: 'RICARDO ALVARADO RIVAS',
  },
  {
    i: 1443,
    d: 'WALTER L ANCE, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1444,
    d: 'ARTHUR ANDERSON',
    e: 'April 14, 2020',
  },
  {
    i: 1445,
    d: 'WILLIAM ANDERSON',
  },
  {
    i: 1446,
    d: 'CORNELL ANDERSON',
  },
  {
    i: 1447,
    d: 'WILLIE ANDERSON, The Bronx',
  },
  {
    i: 1448,
    d: 'GOVINDA ANDIAPPEN, Queens',
  },
  {
    i: 1449,
    d: 'SABINO ANDRADE',
  },
  {
    i: 1450,
    d: 'SEGUNO ARCHIBALA',
  },
  {
    i: 1451,
    d: 'EVERARDO ARENAS, Queens',
    e: 'May 12, 2020',
  },
  {
    i: 1452,
    d: 'DONALD ARRINGTON',
  },
  {
    i: 1453,
    d: 'ELPIDIO ASPIROZ, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1454,
    d: 'RODRIGO ASTUDIILLO',
  },
  {
    i: 1455,
    d: 'JOSEPH AUFRICHTIG, Brooklyn',
  },
  {
    i: 1456,
    d: 'MUHAMMAD ALI BABUL, Queens',
  },
  {
    i: 1457,
    d: 'MIGEL BAEZ, Brooklyn',
  },
  {
    i: 1458,
    d: 'ALFRED BAGLEY',
  },
  {
    i: 1459,
    d: 'GWENDOLYN BAILEY',
  },
  {
    i: 1460,
    d: 'ABRAHAM BALLINAS, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 1461,
    d: 'ROBERT BARLEY',
  },
  {
    i: 1462,
    d: 'SALVATORE BATTAGLIA',
  },
  {
    i: 1463,
    d: 'ETHEL BAUMANN',
  },
  {
    i: 1464,
    d: 'THOMAS BEALS',
  },
  {
    i: 1465,
    d: 'DONALD BEARD',
  },
  {
    i: 1466,
    d: 'CHARLES H. BEATTY, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1467,
    d: 'KETTY BEAUBIEN, Brooklyn',
  },
  {
    i: 1468,
    d: 'YANICK BEAUBRUN',
  },
  {
    i: 1469,
    d: 'JAHANARA BEGUM, Queens',
  },
  {
    i: 1470,
    d: 'MATTHEW BERENGUER, The Bronx',
  },
  {
    i: 1471,
    d: 'MARGARITA BERMUDEZ',
  },
  {
    i: 1472,
    d: 'ANNA BLADES',
    e: 'April 8, 2020',
  },
  {
    i: 1473,
    d: 'DAVID BLAGROVE',
  },
  {
    i: 1474,
    d: 'JULIA BLANCAS',
  },
  {
    i: 1475,
    d: 'MANUEL BOITEL',
  },
  {
    i: 1476,
    d: 'MARTIN BOND',
  },
  {
    i: 1477,
    d: 'ROBERT BOOTH',
  },
  {
    i: 1478,
    d: 'ARISTEO BOSQUES',
    e: 'May 25, 2020',
  },
  {
    i: 1479,
    d: 'ROBERTO BRAVO',
    e: 'April 13, 2020',
  },
  {
    i: 1480,
    d: 'MELQUIADES “PAUL” BRAVO',
  },
  {
    i: 1481,
    d: 'JULIA BROWN, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 1482,
    d: 'RANDY BROWN',
  },
  {
    i: 1483,
    d: 'CATHERINE BRUNO',
  },
  {
    i: 1484,
    d: 'FIORE BRUSCO',
  },
  {
    i: 1485,
    d: 'TYSUN BURGESS',
  },
  {
    i: 1486,
    d: 'ALEJANDRO BUSTAMANTE',
    e: 'April 3, 2020',
  },
  {
    i: 1487,
    d: 'JOHN BUTTNER',
  },
  {
    i: 1488,
    d: 'HECTOR CABANA, Queens',
  },
  {
    i: 1489,
    d: 'MARCELO CAMPOS, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1490,
    d: 'IRIS MILAGROS CANCEL',
    e: 'April 14, 2020',
  },
  {
    i: 1491,
    d: 'SAL CAPITUMMINO',
  },
  {
    i: 1492,
    d: 'ROBERTO CARDONA',
  },
  {
    i: 1493,
    d: 'FELIPE “TITO” CARRION, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 1494,
    d: 'FRAN CARROLL',
  },
  {
    i: 1495,
    d: 'JUAN CASTILLO',
  },
  {
    i: 1496,
    d: 'HÉCTOR CASTILLO MENDEZ, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 1497,
    d: 'SANTIAGO CASTRO',
  },
  {
    i: 1498,
    d: 'HENRY CASTRO, Queens',
  },
  {
    i: 1499,
    d: 'HENRY CASTRO',
  },
  {
    i: 1500,
    d: 'ULYSSESE “ULICES” CASTRO, Queens',
  },
  {
    i: 1501,
    d: 'ERESMILDO CATIBLANCO',
  },
  {
    i: 1502,
    d: 'SALOME CAZARES, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1503,
    d: 'GERMANO CELANT, Manhattan',
    e: 'April 29, 2020',
  },
  {
    i: 1504,
    d: 'JOSEPH CERAMI',
  },
  {
    i: 1505,
    d: 'JOSEPH CERIALE',
  },
  {
    i: 1506,
    d: 'DENNIS CERRATO, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1507,
    d: 'JOSÉ R. CHABLA, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1508,
    d: 'THOMAS TECK KUWE CHAI, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1509,
    d: 'LUCILLE CHAPMAN',
  },
  {
    i: 1510,
    d: 'DANIEL CHAVEZ, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 1511,
    d: 'JOSE A FUENTES CHAVEZ',
  },
  {
    i: 1512,
    d: 'YEETANG CHEUNG',
  },
  {
    i: 1513,
    d: 'RICARDO CHILCHOA, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1514,
    d: 'MUTABBIR CHOWDHURY',
    e: 'March 28, 2020',
  },
  {
    i: 1515,
    d: 'DAVID RONALD CHRISTIAN, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1516,
    d: 'ERNIE CHUMPITAZ',
  },
  {
    i: 1517,
    d: 'MITTIE CLARK-JOHNSON, Brooklyn',
  },
  {
    i: 1518,
    d: 'RAUL CLARKE',
    e: 'March 31, 2020',
  },
  {
    i: 1519,
    d: 'DENISE COLBERT, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1520,
    d: 'RODOLFO COLON',
  },
  {
    i: 1521,
    d: 'CRISTIAN COLON',
  },
  {
    i: 1522,
    d: 'KATHY CORNEJO',
    e: 'May 6, 2020',
  },
  {
    i: 1523,
    d: 'ROBERTO “MEG BK” CORREA',
  },
  {
    i: 1524,
    d: 'RANULFO CORTEZ, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1525,
    d: 'PETER MICHAEL COSTA',
  },
  {
    i: 1526,
    d: 'CURTIS COVINGTON',
  },
  {
    i: 1527,
    d: 'ANITA CRUMPTON',
    e: 'April 26, 2020',
  },
  {
    i: 1528,
    d: 'NELSON CRUZ, Queens',
  },
  {
    i: 1529,
    d: 'CEASAR CRUZ',
  },
  {
    i: 1530,
    d: 'ZACARIAS DE LA CRUZ, Queens',
  },
  {
    i: 1531,
    d: 'GILDA CRUZ',
  },
  {
    i: 1532,
    d: 'CARLOS CRUZ',
  },
  {
    i: 1533,
    d: 'ZOILA CUZCO',
  },
  {
    i: 1534,
    d: 'JOHN DALESSANDRO',
  },
  {
    i: 1535,
    d: 'SALAJDIN DALIPI',
  },
  {
    i: 1536,
    d: 'WILBUR DAUGHTRY',
  },
  {
    i: 1537,
    d: 'HORACE DAVIS',
  },
  {
    i: 1538,
    d: 'CHARLOTTE DAVIS',
  },
  {
    i: 1539,
    d: 'ERNESTO “AUDIE” DELEON',
    e: 'April 13, 2020',
  },
  {
    i: 1540,
    d: 'ALBERTO DIAZ',
    e: 'March 21, 2020',
  },
  {
    i: 1541,
    d: 'HORALIA PALESTINO DIAZ',
  },
  {
    i: 1542,
    d: 'ROLANDO DIAZ',
  },
  {
    i: 1543,
    d: 'FREDDY DIAZ',
  },
  {
    i: 1544,
    d: 'MIGUEL DIAZ',
  },
  {
    i: 1545,
    d: 'CRYSTAL DIXON',
  },
  {
    i: 1546,
    d: 'MICHELLE DONALDOSN, Manhattan',
  },
  {
    i: 1547,
    d: 'ESSIE DORSEY',
  },
  {
    i: 1548,
    d: 'JOHN DUNSTON JR., Queens',
    e: 'April 14, 2020',
  },
  {
    i: 1549,
    d: 'JOHN HENRY EDINGER',
  },
  {
    i: 1550,
    d: 'ROBERT EDMOND, Brooklyn',
  },
  {
    i: 1551,
    d: 'DEIDRE EDWARDS',
    e: 'April 6, 2020',
  },
  {
    i: 1552,
    d: 'WAYNE EDWARDS, Queens',
  },
  {
    i: 1553,
    d: 'JEAN EMILE, Brooklyn',
  },
  {
    i: 1554,
    d: 'ALFREDO ESPINAL, The Bronx',
  },
  {
    i: 1555,
    d: 'FELIX ESPINAL',
  },
  {
    i: 1556,
    d: 'ANGEL ESPINOZA',
  },
  {
    i: 1557,
    d: 'ALFREDO ESTRADA',
  },
  {
    i: 1558,
    d: 'ELMER ROMEL EUCEDA',
  },
  {
    i: 1559,
    d: 'SUZETTE FACEY, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1560,
    d: 'NUPU FAKHRUZZAMAN, Queens',
    e: 'May 10, 2020',
  },
  {
    i: 1561,
    d: 'VICTOR FATTORUSSO',
  },
  {
    i: 1562,
    d: 'JOSEPH FELDER',
  },
  {
    i: 1563,
    d: 'MIQUEL FELMINE',
  },
  {
    i: 1564,
    d: 'TAI-DRIN FENG',
  },
  {
    i: 1565,
    d: 'SHARAN FERNANDEZ, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 1566,
    d: 'HARRY FERNANDEZ',
  },
  {
    i: 1567,
    d: 'LOUIS FERRER',
  },
  {
    i: 1568,
    d: 'WAYNE FINGALL, Brooklyn',
  },
  {
    i: 1569,
    d: 'GERMAN RAMALES FLORES',
    e: 'April 10, 2020',
  },
  {
    i: 1570,
    d: 'VICENTA FLORES, Queens',
  },
  {
    i: 1571,
    d: 'CLEMENTINA MORA FLORES',
  },
  {
    i: 1572,
    d: 'URSULA FLOWERS, The Bronx',
  },
  {
    i: 1573,
    d: 'LIZ FONTANEZ',
  },
  {
    i: 1574,
    d: 'ALVIN FRAZIER',
  },
  {
    i: 1575,
    d: 'LEMUEL FRAZIER',
  },
  {
    i: 1576,
    d: 'WILLIE FREEMAN',
  },
  {
    i: 1577,
    d: 'GUILLERMO “WILLY” FRESTAN, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 1578,
    d: 'KEVIN FRETT',
    e: 'April 11, 2020',
  },
  {
    i: 1579,
    d: 'FREDDY FUENTES, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1580,
    d: 'CONCEPTIONE FUENTES',
  },
  {
    i: 1581,
    d: 'MOHAMMED GAFFAR',
  },
  {
    i: 1582,
    d: 'ELY GALAN, Brooklyn',
  },
  {
    i: 1583,
    d: 'FERNANDO GALLEGO',
  },
  {
    i: 1584,
    d: 'NECITAS GALURA',
  },
  {
    i: 1585,
    d: 'ANDRE GANTHIER',
  },
  {
    i: 1586,
    d: 'OLGA GARCIA, The Bronx',
  },
  {
    i: 1587,
    d: 'LEON GARRETT',
  },
  {
    i: 1588,
    d: 'LUCIEN GEORGE SR.',
  },
  {
    i: 1589,
    d: 'HAROLD GERMAIN, Brooklyn',
  },
  {
    i: 1590,
    d: 'ALEXANDER GIGUEREDO',
    e: 'March 25, 2020',
  },
  {
    i: 1591,
    d: 'KENNETH GILLESPIE',
  },
  {
    i: 1592,
    d: 'HERSHUL GINN',
  },
  {
    i: 1593,
    d: 'GAIL GLASGOW',
  },
  {
    i: 1594,
    d: 'CAREN GOFF',
  },
  {
    i: 1595,
    d: 'SAUL GOMEZ, The Bronx',
  },
  {
    i: 1596,
    d: 'LUCIANO GOMEZ',
  },
  {
    i: 1597,
    d: 'MICHAEL GOMEZ',
  },
  {
    i: 1598,
    d: 'GIL GONZALES',
  },
  {
    i: 1599,
    d: 'MARIA E. “TELECO” GONZALEZ',
    e: 'April 13, 2020',
  },
  {
    i: 1600,
    d: 'MARIA BERTHA GONZALEZ',
    e: 'April 14, 2020',
  },
  {
    i: 1601,
    d: 'NEREIDA GONZALEZ, The Bronx',
    e: 'July 20, 2020',
  },
  {
    i: 1602,
    d: 'JOSE MARTIN ROMERO GONZALEZ',
  },
  {
    i: 1603,
    d: 'MARIA GONZALEZ',
  },
  {
    i: 1604,
    d: 'DENNIS GOULDING, Brooklyn',
  },
  {
    i: 1605,
    d: 'GREGORY GRAHAM, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 1606,
    d: 'GREGORY GRAHAM',
  },
  {
    i: 1607,
    d: 'JAMES GREEN',
  },
  {
    i: 1608,
    d: 'JACOB J. GREENBERG, Brooklyn',
  },
  {
    i: 1609,
    d: 'CLAUDE GREGOIRE',
  },
  {
    i: 1610,
    d: 'EUGENE GRIFFIN',
  },
  {
    i: 1611,
    d: 'SEGUNDO ESPIRO GUAMAN, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 1612,
    d: 'MARIA ZOILA GUAMAN, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    i: 1613,
    d: 'JORGE GUAMAN',
  },
  {
    i: 1614,
    d: 'EDWIN GUAMAN, Queens',
  },
  {
    i: 1615,
    d: 'EDWIN P. GUAMAN',
  },
  {
    i: 1616,
    d: 'DANIEL GUILLERMO',
  },
  {
    i: 1617,
    d: 'HUGO GUTIERREZ',
  },
  {
    i: 1618,
    d: 'HUGO GUTIERREZ',
  },
  {
    i: 1619,
    d: 'MAURILLO GUZMAN, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 1620,
    d: 'KOFI GYAMI',
    e: 'April 27, 2020',
  },
  {
    i: 1621,
    d: 'SHMUEL HAKOHEN MILLER, Brooklyn',
  },
  {
    i: 1622,
    d: 'RONALD HALL',
  },
  {
    i: 1623,
    d: 'EARL HARRIS',
  },
  {
    i: 1624,
    d: 'CHARLES HARRIS',
  },
  {
    i: 1625,
    d: 'AL HAVELIN',
    e: 'April 11, 2020',
  },
  {
    i: 1626,
    d: 'JANET HEADLEY',
  },
  {
    i: 1627,
    d: 'ALVIN HENDRICKS',
  },
  {
    i: 1628,
    d: 'JOSEMIQUEL “YOYA” HENRIQUEZ',
    e: 'April 11, 2020',
  },
  {
    i: 1629,
    d: 'MARCOS HERRERA',
  },
  {
    i: 1630,
    d: 'CECIL HEWITT, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1631,
    d: 'CARLOS ANDRADE HIDALGO',
  },
  {
    i: 1632,
    d: 'JOSEPHINE HILL, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1633,
    d: 'RICARDO HILL',
    e: 'May 14, 2020',
  },
  {
    i: 1634,
    d: 'CLINTON HINDS',
    e: 'April 29, 2020',
  },
  {
    i: 1635,
    d: 'LIONEL HOGAN, Queens',
  },
  {
    i: 1636,
    d: 'LIONEL HOGAN',
  },
  {
    i: 1637,
    d: 'ED HOLDER, Brooklyn',
  },
  {
    i: 1638,
    d: 'MD SHIPON HOSSAIN',
    e: 'March 29, 2020',
  },
  {
    i: 1639,
    d: 'LAURA HOWELL, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1640,
    d: 'CLIFTON HOWELL, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1641,
    d: 'ANNABEL HOWELL, Brooklyn',
  },
  {
    i: 1642,
    d: 'MONIRUL HUDA, Queens',
  },
  {
    i: 1643,
    d: 'MOHAMMAD ZAKIR HUSSEIN, Queens',
  },
  {
    i: 1644,
    d: 'MARTIN IBARRA',
  },
  {
    i: 1645,
    d: 'PIETRO FABRICIO IDROVO VAZA, Queens',
  },
  {
    i: 1646,
    d: 'LEROI ISOM',
  },
  {
    i: 1647,
    d: 'CHRIS JACKOWSKI',
  },
  {
    i: 1648,
    d: 'RUSSELL JACKSON',
  },
  {
    i: 1649,
    d: 'MARIE JACQUES, The Bronx',
  },
  {
    i: 1650,
    d: 'CLAUDE JAMES, The Bronx',
  },
  {
    i: 1651,
    d: 'MANUEL R. JARA',
    e: 'April 19, 2020',
  },
  {
    i: 1652,
    d: 'JESSICA JARAMILLO, Queens',
  },
  {
    i: 1653,
    d: 'MORENA TORREDES “TITA” JAVINES, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 1654,
    d: 'NELSON JENKINS',
  },
  {
    i: 1655,
    d: 'YESENIA MARIA JIMENEZ, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 1656,
    d: 'FRANCISCO ARIZA JIMENEZ, Queens',
  },
  {
    i: 1657,
    d: 'CARLYLE JOHNSON',
  },
  {
    i: 1658,
    d: 'DAVID JOHNSON',
  },
  {
    i: 1659,
    d: 'NOREEN JOHNSON',
  },
  {
    i: 1660,
    d: 'SHELLY JOHNSON',
  },
  {
    i: 1661,
    d: 'JOAN JOHNSON',
  },
  {
    i: 1662,
    d: 'JAMES JONES',
  },
  {
    i: 1663,
    d: 'JOHN JONES',
  },
  {
    i: 1664,
    d: 'DONALD JONES',
  },
  {
    i: 1665,
    d: 'LELAND JORDAN',
  },
  {
    i: 1666,
    d: 'JOHNNY JOYNER',
  },
  {
    i: 1667,
    d: 'SANTOS JUAREZ, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1668,
    d: 'ROGELIO JUSTIANIANO SR.',
  },
  {
    i: 1669,
    d: 'LABEL “(LEIBEL)” KATZ, Brooklyn',
  },
  {
    i: 1670,
    d: 'ALEXANDER KAUDERS, Brooklyn',
  },
  {
    i: 1671,
    d: 'ADVOCATE HAYAT ALI KHAN, Queens',
  },
  {
    i: 1672,
    d: 'SYED KHATUN, Queens',
  },
  {
    i: 1673,
    d: 'DEBORAH KING',
  },
  {
    i: 1674,
    d: 'HARVEY KNIGHT',
    e: 'April 23, 2020',
  },
  {
    i: 1675,
    d: 'FELICIA KNIGHT',
  },
  {
    i: 1676,
    d: 'PATRICK ANTONIO KNIGHT, The Bronx',
  },
  {
    i: 1677,
    d: 'JAY-NATALIE LA SANTA, The Bronx',
    e: 'April 20, 2020',
  },
  {
    i: 1678,
    d: 'SOOKNARINE LACHMINARAIN',
  },
  {
    i: 1679,
    d: 'EMANUEL LAGATTA',
  },
  {
    i: 1680,
    d: 'LUIS LEBRON',
  },
  {
    i: 1681,
    d: 'DAVID LEE, Manhattan',
    e: 'May 22, 2020',
  },
  {
    i: 1682,
    d: 'KEVIN LEE, Brooklyn',
  },
  {
    i: 1683,
    d: 'JOSE LEMA, Queens',
  },
  {
    i: 1684,
    d: 'ANGEL LEON, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1685,
    d: 'ANGELO LEOTTA, Staten Island',
    e: 'September 13, 2020',
  },
  {
    i: 1686,
    d: 'ANGELA LEWIS',
    e: 'April 5, 2020',
  },
  {
    i: 1687,
    d: 'JASON LEWIS, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1688,
    d: 'MANUEL LIMA',
  },
  {
    i: 1689,
    d: 'PIDIO LINARES, Queens',
    e: 'March 13, 2020',
  },
  {
    i: 1690,
    d: 'SHIRLEY LINDSEY',
  },
  {
    i: 1691,
    d: 'LOUISE LLOYD, Brooklyn',
  },
  {
    i: 1692,
    d: 'LIDIA LOPEZ',
  },
  {
    i: 1693,
    d: 'ALBERTO LUCERO',
  },
  {
    i: 1694,
    d: 'RAUL LUNA, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 1695,
    d: 'RAUL LUNA',
  },
  {
    i: 1696,
    d: 'ESTHER MAC, The Bronx',
  },
  {
    i: 1697,
    d: 'ANGEL MANUEL MAISONET, The Bronx',
  },
  {
    i: 1698,
    d: 'ANTHONY MALLANO, The Bronx',
  },
  {
    i: 1699,
    d: 'MARK MALONE',
  },
  {
    i: 1700,
    d: 'GARY MARBURY',
  },
  {
    i: 1701,
    d: 'CARLA MARCELO, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 1702,
    d: 'MENDEL MARGULIS, Brooklyn',
  },
  {
    i: 1703,
    d: 'RAUL MARRERO',
  },
  {
    i: 1704,
    d: 'ALE MARTIN, Queens',
  },
  {
    i: 1705,
    d: 'JORGE SAN MARTIN',
  },
  {
    i: 1706,
    d: 'ALFREDO MARTINEZ, Queens',
  },
  {
    i: 1707,
    d: 'MARIA MINERVA MARTINEZ, Queens',
  },
  {
    i: 1708,
    d: 'CARMEN MARTINEZ, The Bronx',
  },
  {
    i: 1709,
    d: 'FORTUNATO MARTINEZ',
  },
  {
    i: 1710,
    d: 'EDUARDO MARTINEZ HERNANDEZ, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1711,
    d: 'OLIVERIO DANIEL MARÍN LÓPEZ',
  },
  {
    i: 1712,
    d: 'PATRICIA MASON, Brooklyn',
  },
  {
    i: 1713,
    d: 'HAROLD MAYS',
  },
  {
    i: 1714,
    d: 'JOHN MCDONALD',
  },
  {
    i: 1715,
    d: 'NICOLA MCINTYRE, Brooklyn',
  },
  {
    i: 1716,
    d: 'HEARLY MCKINNON',
  },
  {
    i: 1717,
    d: 'ENOS MCKOY',
  },
  {
    i: 1718,
    d: 'DORIS MCRAE, The Bronx',
  },
  {
    i: 1719,
    d: 'JUAN MEDINA',
  },
  {
    i: 1720,
    d: 'YOSEF MEHLER, Brooklyn',
  },
  {
    i: 1721,
    d: 'LUZ DARY MEJIA QUICENO',
    e: 'April 21, 2020',
  },
  {
    i: 1722,
    d: 'ALEJANDRO MENDEZ, Staten Island',
    e: 'April 28, 2020',
  },
  {
    i: 1723,
    d: 'GUILLERMO MENDOZA',
    e: 'April 21, 2020',
  },
  {
    i: 1724,
    d: 'WALTER MENDOZA, Queens',
    e: 'June 1, 2020',
  },
  {
    i: 1725,
    d: 'MARIA MENDOZA',
  },
  {
    i: 1726,
    d: 'ISHAQ MIAH, Queens',
  },
  {
    i: 1727,
    d: 'STEVEN MICHAEL',
  },
  {
    i: 1728,
    d: 'EVERETT MILES',
  },
  {
    i: 1729,
    d: 'MARIA MERCEDES MILLAN, The Bronx',
  },
  {
    i: 1730,
    d: 'MIRIAM MILLER, Brooklyn',
  },
  {
    i: 1731,
    d: 'JAMES MILTON',
  },
  {
    i: 1732,
    d: 'JOSE RICARDO “RIVERA” MINAN',
  },
  {
    i: 1733,
    d: 'GLORIA MINOR',
    e: 'April 7, 2020',
  },
  {
    i: 1734,
    d: 'EDUARDO MIRANDA',
  },
  {
    i: 1735,
    d: 'LIAQUAT MOHAMMED, Queens',
  },
  {
    i: 1736,
    d: 'PIERRE MOISE',
    e: 'April 3, 2020',
  },
  {
    i: 1737,
    d: 'ORLANDO MONCADA',
  },
  {
    i: 1738,
    d: 'CARLOS MONCAYO',
  },
  {
    i: 1739,
    d: 'DEODORO MONGE GUTIERREZ, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 1740,
    d: 'HARRY MONTALVO',
  },
  {
    i: 1741,
    d: 'AGUSTIN MONTANEZ',
  },
  {
    i: 1742,
    d: 'MANUEL MONTEALEGRE, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1743,
    d: 'HELEN MOODY',
  },
  {
    i: 1744,
    d: 'WILLIE MOORE',
  },
  {
    i: 1745,
    d: 'GLENTON MOORE, Brooklyn',
  },
  {
    i: 1746,
    d: 'ANDRES MORALES, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 1747,
    d: 'JORGE O. MORALES, Queens',
  },
  {
    i: 1748,
    d: 'CARLOS MORENO',
    e: 'April 21, 2020',
  },
  {
    i: 1749,
    d: 'IMELDA MORENO-LUCERO',
  },
  {
    i: 1750,
    d: 'VIVIAN MOSS VOELPEL',
  },
  {
    i: 1751,
    d: 'ALBERT MUNGIN',
  },
  {
    i: 1752,
    d: 'ROGER MUSCADI, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1753,
    d: 'SAW THEIN “SAM” MYINT',
    e: 'April 19, 2020',
  },
  {
    i: 1754,
    d: 'PEDRO MÁRQUEZ',
  },
  {
    i: 1755,
    d: 'HANSARAJ NANKISSURE, Queens',
  },
  {
    i: 1756,
    d: 'MARGARET ADAM NAREL, The Bronx',
  },
  {
    i: 1757,
    d: 'BENNY NASTASI',
  },
  {
    i: 1758,
    d: 'WENDEL NAVARRO',
  },
  {
    i: 1759,
    d: 'ELIAS NELSON',
    e: 'April 12, 2020',
  },
  {
    i: 1760,
    d: 'MICHAEL NELSON',
  },
  {
    i: 1761,
    d: 'JUSTICE NANA YAW NYANTAKYI, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1762,
    d: 'FRANCISCO NÚÑEZ',
  },
  {
    i: 1763,
    d: "MICHAEL O'HAGAN",
  },
  {
    i: 1764,
    d: 'BLANCA “BLANQUITA” OLIVA TABORDA',
  },
  {
    i: 1765,
    d: 'BENJAMIN ONODU, Queens',
  },
  {
    i: 1766,
    d: 'NOE ORTIZ, The Bronx',
    e: 'June 6, 2020',
  },
  {
    i: 1767,
    d: 'SUCY ORTIZ',
  },
  {
    i: 1768,
    d: 'LLOYD OSBOURNE, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1769,
    d: 'RAMON OSORIA, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 1770,
    d: 'JULIO PACHECO, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 1771,
    d: 'FRANCISCO PACHECO',
  },
  {
    i: 1772,
    d: 'LUZ PALOMINO, Queens',
  },
  {
    i: 1773,
    d: 'ORLANDO PARRA',
  },
  {
    i: 1774,
    d: 'GIRISH PATEL',
  },
  {
    i: 1775,
    d: 'SERGE PAUL',
  },
  {
    i: 1776,
    d: 'VICENTE PAVIA, Staten Island',
  },
  {
    i: 1777,
    d: 'DOMINGO PEREZ RIVERA',
  },
  {
    i: 1778,
    d: 'DAVID PERSAUD',
  },
  {
    i: 1779,
    d: 'MICHAEL PETERSON',
  },
  {
    i: 1780,
    d: 'MARIE PETIT-HOMME',
    e: 'May 13, 2020',
  },
  {
    i: 1781,
    d: 'ADRIAN PHILLIPS',
  },
  {
    i: 1782,
    d: 'MARLENE PICONE',
    e: 'April 23, 2020',
  },
  {
    i: 1783,
    d: 'CINDY PICOU, Brooklyn',
  },
  {
    i: 1784,
    d: 'LORENZO W. PINCAY, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1785,
    d: 'LIVETTE PLAN, Queens',
  },
  {
    i: 1786,
    d: 'LENIN PORTILLO, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1787,
    d: 'JAMES POWERS, Queens',
  },
  {
    i: 1788,
    d: 'MAGGIE PRICE',
  },
  {
    i: 1789,
    d: 'URIAH PRYCE',
  },
  {
    i: 1790,
    d: 'FIDEL I. PULAGRIN',
  },
  {
    i: 1791,
    d: 'MANUEL SALVADOR PUMA',
  },
  {
    i: 1792,
    d: 'FELIX PUNO II',
    e: 'April 23, 2020',
  },
  {
    i: 1793,
    d: 'LUCY “MAMA” QUESADA, The Bronx',
  },
  {
    i: 1794,
    d: 'WILLIE QUEZADA, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1795,
    d: 'MOHAMMED RAHMAN, Queens',
  },
  {
    i: 1796,
    d: 'JOSE RAMON, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1797,
    d: 'ANTONIA RAMOS',
  },
  {
    i: 1798,
    d: 'STEVE RANNAZZISI',
  },
  {
    i: 1799,
    d: 'TAZIN RASHED',
  },
  {
    i: 1800,
    d: 'HARUNUR RASHID, Queens',
  },
  {
    i: 1801,
    d: 'WESTLY REED',
  },
  {
    i: 1802,
    d: 'RONNIE REID',
  },
  {
    i: 1803,
    d: 'RAYNARD REMBERT',
  },
  {
    i: 1804,
    d: 'JOSE REYES',
  },
  {
    i: 1805,
    d: 'RAMON REYES, The Bronx',
  },
  {
    i: 1806,
    d: 'RICARDO RAMOS RICARDO RAMOS CHAVEZ, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 1807,
    d: 'KENNETH RICKETTS, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1808,
    d: 'LEROY RIDDICK',
  },
  {
    i: 1809,
    d: 'OBDULIA RIVERA, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1810,
    d: 'HILDA RIVERA, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 1811,
    d: 'MIGUEL RIVERA',
  },
  {
    i: 1812,
    d: 'RONALD ROBINSON',
  },
  {
    i: 1813,
    d: 'J.C. ROBINSON',
  },
  {
    i: 1814,
    d: 'RUBEN RODRIGUEZ, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 1815,
    d: 'WILLIAM RODRIGUEZ',
  },
  {
    i: 1816,
    d: 'OSCAR RODRIGUEZ',
  },
  {
    i: 1817,
    d: 'HUMBERTO RODRIGUEZ, Brooklyn',
  },
  {
    i: 1818,
    d: 'ANAVELIO RODRIGUEZ',
  },
  {
    i: 1819,
    d: 'STEVE J. RODRIGUEZ, Queens',
  },
  {
    i: 1820,
    d: 'MIGUEL RODRIGUEZ, Queens',
  },
  {
    i: 1821,
    d: 'EDWIN RODRIGUEZ',
  },
  {
    i: 1822,
    d: 'ROBERTO RODRIGUEZ',
  },
  {
    i: 1823,
    d: 'THOMAS RODRIGUEZ',
  },
  {
    i: 1824,
    d: 'EDDY RODRÍGUEZ',
  },
  {
    i: 1825,
    d: 'ROMAXI ROJAS',
  },
  {
    i: 1826,
    d: 'FRANKLIN ROLANDO',
  },
  {
    i: 1827,
    d: 'MIGUEL ROLDAN, Queens',
    e: 'May 25, 2020',
  },
  {
    i: 1828,
    d: 'RAMON ROMAN',
    e: 'April 5, 2020',
  },
  {
    i: 1829,
    d: 'OMAR ROMERO, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 1830,
    d: 'JOSÉ MARTÍN ROMERO GONZÁLEZ',
  },
  {
    i: 1831,
    d: 'RAYMOND ROSA',
  },
  {
    i: 1832,
    d: 'MARIO ROSA',
  },
  {
    i: 1833,
    d: 'MARIA MERCEDES ROSARIO, The Bronx',
  },
  {
    i: 1834,
    d: 'PETER ROSCONI, Brooklyn',
  },
  {
    i: 1835,
    d: 'MARVIN ROSENFELD',
  },
  {
    i: 1836,
    d: 'ABDUR ROUF, The Bronx',
  },
  {
    i: 1837,
    d: 'JACQUELINE “JACKIE” ROWE, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1838,
    d: 'FRANCISCO SAAVEDRA',
  },
  {
    i: 1839,
    d: 'JOHNNY SABATER',
  },
  {
    i: 1840,
    d: 'ANAND SAHADEO, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1841,
    d: 'ROMAN GUERRERO SALDIVAR',
    e: 'April 20, 2020',
  },
  {
    i: 1842,
    d: 'WILLIAM SALES',
  },
  {
    i: 1843,
    d: 'JOSE SALMERON, Queens',
  },
  {
    i: 1844,
    d: 'JORGE SAN MARTIN, Queens',
  },
  {
    i: 1845,
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 1846,
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 1847,
    d: 'JULIO SANCHEZ',
  },
  {
    i: 1848,
    d: 'RICHARD MAURICIO SALINAS SANCHEZ',
  },
  {
    i: 1849,
    d: 'JOSE LUIS SANCHEZ PEREZ, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 1850,
    d: 'ELIEZER SANTIAGO, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 1851,
    d: 'GEORGE SANTIAGO',
    e: 'May 6, 2020',
  },
  {
    i: 1852,
    d: 'EDWIN SANTIAGO',
  },
  {
    i: 1853,
    d: 'MING SANTO',
  },
  {
    i: 1854,
    d: 'SHAH J. SARKAR, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 1855,
    d: 'LOUIS SCHMIDT',
  },
  {
    i: 1856,
    d: 'ZVI YEHUDA SCHMIDT, Brooklyn',
  },
  {
    i: 1857,
    d: 'WALTER SCOTT, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1858,
    d: 'PAUL SEBASTIAN',
  },
  {
    i: 1859,
    d: 'YVES MANUEL SEGUI',
  },
  {
    i: 1860,
    d: 'ERNST SEVERE, Brooklyn',
  },
  {
    i: 1861,
    d: 'ALBERTO “ZANELLY” SEVILLA',
  },
  {
    i: 1862,
    d: 'MAJUMDER SHAFIQUR RAHMAN',
    e: 'March 28, 2020',
  },
  {
    i: 1863,
    d: 'CHAIM SHROOT, Brooklyn',
  },
  {
    i: 1864,
    d: 'JOHN SIEGEL',
  },
  {
    i: 1865,
    d: 'QUINSEY SIMPSON',
  },
  {
    i: 1866,
    d: 'REGINALD SMALL',
  },
  {
    i: 1867,
    d: 'CORRINE SMITH',
  },
  {
    i: 1868,
    d: 'JUDITH SMITH',
  },
  {
    i: 1869,
    d: 'SHARON SOCKWELL',
  },
  {
    i: 1870,
    d: 'EVE STEIN',
  },
  {
    i: 1871,
    d: 'RALPH STEINBERG',
  },
  {
    i: 1872,
    d: 'ROBERT “STEVE THE BOOKMAN” STEVENS',
    e: 'April 21, 2020',
  },
  {
    i: 1873,
    d: 'EILEEN STEWART, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1874,
    d: 'DUANE EDWARD STEWART, The Bronx',
  },
  {
    i: 1875,
    d: 'ANTONIO SUAREZ',
  },
  {
    i: 1876,
    d: 'RAYMOND SUGRIM',
  },
  {
    i: 1877,
    d: 'SYLVAN SYLVESTER, Brooklyn',
  },
  {
    i: 1878,
    d: 'LUCIEN SZPIRO, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1879,
    d: 'VIRGINIA BARRON TAYLOE',
    e: 'May 26, 2020',
  },
  {
    i: 1880,
    d: 'ANTHONY “TONY” THOMAS, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1881,
    d: 'WILLIAM THOMAS, Manhattan',
  },
  {
    i: 1882,
    d: 'GENOVEVO “GENO” TLACZANI, Queens',
  },
  {
    i: 1883,
    d: 'MORENA TORREDES JAVINES',
  },
  {
    i: 1884,
    d: 'MIGUEL TORRES, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1885,
    d: 'TONY TORRES, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1886,
    d: 'PEDRO TORRES',
  },
  {
    i: 1887,
    d: 'MIGUEL ANTONIO TORRES',
  },
  {
    i: 1888,
    d: 'MILLIE TORRES, The Bronx',
  },
  {
    i: 1889,
    d: 'JULIO TORRES',
  },
  {
    i: 1890,
    d: 'CARLOS TORRES',
  },
  {
    i: 1891,
    d: 'HECTOR TORREZ, Brooklyn',
  },
  {
    i: 1892,
    d: 'LIEM TRAN, Manhattan',
  },
  {
    i: 1893,
    d: 'TOMMY TRAWICK',
  },
  {
    i: 1894,
    d: 'JOSE TRINIDAD',
  },
  {
    i: 1895,
    d: 'TENZING TSERING',
    e: 'May 24, 2020',
  },
  {
    i: 1896,
    d: 'WARREN TUCKER',
  },
  {
    i: 1897,
    d: 'DAWN TYSON',
  },
  {
    i: 1898,
    d: 'DR. MOHAMMAD IFTEKHAR UDDIN, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1899,
    d: 'GIYASH UDDIN, The Bronx',
  },
  {
    i: 1900,
    d: 'ENAM UDDIN',
  },
  {
    i: 1901,
    d: 'MOHAMMAD OZI ULLAH (KUKON), Brooklyn',
  },
  {
    i: 1902,
    d: 'JOSÉ URUCHIMA, Queens',
  },
  {
    i: 1903,
    d: 'MARGARITA UZHCA MIZHQUIRI, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 1904,
    d: 'MOISES VALENCIA, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1905,
    d: 'JAMILET VALENTE',
  },
  {
    i: 1906,
    d: 'LUIS VANEGAS, Queens',
    e: 'May 4, 2020',
  },
  {
    i: 1907,
    d: 'ANGEL VARGAS, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 1908,
    d: 'SIRIACO ROLANDO VASQUEZ',
  },
  {
    i: 1909,
    d: 'SIRIACO ORLANDO VASQUEZ',
  },
  {
    i: 1910,
    d: 'JOSHUA VASQUEZ',
  },
  {
    i: 1911,
    d: 'JOSE G. VASQUEZ-HERRE',
  },
  {
    i: 1912,
    d: 'HUGO VEGA, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1913,
    d: 'ENRIQUE “JUNIOR” VEGA, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1914,
    d: 'NICHOLAS VEGA, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1915,
    d: 'ALFREDO VEGAS',
  },
  {
    i: 1916,
    d: 'GREGORIO VELEZ',
  },
  {
    i: 1917,
    d: 'JULIAN MUNIZ VIDALS',
  },
  {
    i: 1918,
    d: 'GIROLAMO VILLAGGIO',
  },
  {
    i: 1919,
    d: 'JOSE VILLAGRAN, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1920,
    d: 'WILLANDE “ELVIS” VILME',
    e: 'May 12, 2020',
  },
  {
    i: 1921,
    d: 'DAVID VINE',
  },
  {
    i: 1922,
    d: 'JOSÉ VÁZQUEZ',
  },
  {
    i: 1923,
    d: 'PAUL WALTERS',
  },
  {
    i: 1924,
    d: 'JOCELYN WALTON',
  },
  {
    i: 1925,
    d: 'NAVIL WARREN',
  },
  {
    i: 1926,
    d: 'PAULINE WASHINGTON, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 1927,
    d: 'LORETTA WASHINGTON',
  },
  {
    i: 1928,
    d: 'EVELYN WATKINS',
  },
  {
    i: 1929,
    d: 'JAMES WATKINS',
  },
  {
    i: 1930,
    d: 'IRENE WEISS',
    e: 'March 26, 2020',
  },
  {
    i: 1931,
    d: 'NICHOLAS WEST',
    e: 'June 25, 2020',
  },
  {
    i: 1932,
    d: 'STEVEN WIGGINS, Queens',
  },
  {
    i: 1933,
    d: 'HEIDY WILCOX',
  },
  {
    i: 1934,
    d: 'JANET WILKES',
  },
  {
    i: 1935,
    d: 'SHARON WILLIAMS',
    e: 'April 21, 2020',
  },
  {
    i: 1936,
    d: 'PHILLIP WILLIAMS',
  },
  {
    i: 1937,
    d: 'KEVIN WILLIAMS',
  },
  {
    i: 1938,
    d: 'LARRY WILLIAMS',
  },
  {
    i: 1939,
    d: 'PETAL WILLIAMS RICHARDS',
  },
  {
    i: 1940,
    d: 'DORA WILSON',
  },
  {
    i: 1941,
    d: 'JOE WONG, Brooklyn',
  },
  {
    i: 1942,
    d: 'MING WONG, Brooklyn',
  },
  {
    i: 1943,
    d: 'JESUS “JAY” WONG',
  },
  {
    i: 1944,
    d: 'DENNIS ANTHONY WONGSANG',
  },
  {
    i: 1945,
    d: 'DONALD WOODSON',
  },
  {
    i: 1946,
    d: 'DAWN WORTHINGTON, Staten Island',
  },
  {
    i: 1947,
    d: 'CALVIN WRIGHT, The Bronx',
  },
  {
    i: 1948,
    d: 'MAI YING “SEAGULL” WU',
  },
  {
    i: 1949,
    d: 'ZALMAN YAAKOV, Brooklyn',
  },
  {
    i: 1950,
    d: 'ALEXANDER YOUNG',
  },
  {
    i: 1951,
    d: 'ROBERT YOUNG',
  },
  {
    i: 1952,
    d: 'MANUEL MESIAS YUPA, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 1953,
    d: 'SARINA ZALMANOVICH, Queens',
  },
  {
    i: 1954,
    d: 'CARMEN ZAPATA, Brooklyn',
  },
  {
    i: 1955,
    d: 'JULIO ZHICAY, Queens',
  },
  {
    i: 1956,
    d: 'MARIA ELENA ZHUMI, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1957,
    d: 'EDWIN ZHUNIO',
  },
  {
    i: 1958,
    d: 'WILLY ZUMARAN, Queens',
  },
  {
    i: 1959,
    d: 'MANUEL ZUNA, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1960,
    d: 'MANUEL “MAX” ZUNIGA',
  },
  {
    i: 1961,
    d: 'SCOTT ZWIREN, Brooklyn',
  },
  {
    i: 1962,
    d: 'IMELDA ZÁRATE, Queens',
    e: 'May 1, 2020',
  },
];
