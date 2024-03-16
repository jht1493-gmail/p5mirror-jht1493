// https://projects.thecity.nyc/covid-19-deaths/

// a_refs created by running scrape_refs in console
// and cleaning up result with search and replace
//
function scrape_refs() {
  let m = document.querySelectorAll("li");
  let q = []
  let i = 0;
  m.forEach((n) => {
    let d = n.querySelector('.obit-description');
    if (d) {
      let o = {i};
      i++;
      o.d = d.innerText;
      if (d.nextElementSibling) {
        o.e = d.nextElementSibling.innerHTML
      }
      let h = n.querySelector('img');
      if (h && h.src.startsWith('https://projects')) {
        o.h = h.src;
      }
      q.push(o)
    }
  });
  let s = JSON.stringify(q, null, 2);
  console.log(s);
}

let a_refs = [{
    d: 'CYNTHIA L. ADAMS, 69, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cynthia_L_Adams.jpeg',
  },
  {
    d: 'ALPHONSE JUNIOR “J.R.” AGOVINO, 67, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alphonse_Agovino.jpeg',
  },
  {
    d: 'STANLEY ALBERT, 83, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stanley_Albert.jpg',
  },
  {
    d: 'MICHELLE ALEXANDER, 29, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Alexander.jpg',
  },
  {
    d: 'MIGUEL ALMARANTE JR., 32, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Almarante.jpg',
  },
  {
    d: 'JOSEPH “JOE” ALOE, 82, Manhattan',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joe_Aloe.jpeg',
  },
  {
    d: 'ETTA B. ALSTON, 87, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Alston.jpg',
  },
  {
    d: 'DOLORES ALTAGRACIA MENA, 84',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dolores_Mena.JPG',
  },
  {
    d: 'ILLUYSHA AMINOV, 77, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Illuysha_Aminov.jpg',
  },
  {
    d: 'JEAN ANDERSON, 78, The Bronx',
    e: 'March 31, 2020',
  },
  {
    d: 'ELOY CALIXTO ANDON, 66, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eloy_Calixto_Andon.jpg',
  },
  {
    d: 'JUSTO CALIXTO ANDON, 53, Brooklyn',
    e: 'May 26, 2020',
  },
  {
    d: 'MARIA ARAGON, 66, The Bronx',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Aragon.jpeg',
  },
  {
    d: 'SAMUEL W. “SAM THE FENCE MAN” ARBEENY, 70, Staten Island',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Samuel_Arbeeny.png',
  },
  {
    d: 'CRAIG AUGUSTE, 32, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    d: 'ISABELLA ANN AXELROD, 73, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Isabella_Axelrod.jpg',
  },
  {
    d: 'LORRAINE JOY BAGWELL, 71, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lorraine_Bagwell.JPG',
  },
  {
    d: 'LOUIS C. “MACGYVER” BARBATO JR., 74, Staten Island',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Barbato.jpg',
  },
  {
    d: 'MILDRED BARGEBUHR KUNIN, 88, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mildred_Kunin.jpeg',
  },
  {
    d: 'SHARON BASCOM, 61, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sharon_Bascom.jpg',
  },
  {
    d: 'AJAZ MOHAMMED “BASHIR” BASHIR, 54, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Bashir_Ajaz_Mohammed.jpeg',
  },
  {
    d: 'FAREEDA BEHARRY, 60, Queens',
    e: 'May 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Beharry.jpeg',
  },
  {
    d: 'IVONNE “SANDY” BENOIT, 74, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ivonne_Benoit.jpg',
  },
  {
    d: 'MICHAEL BESSER, 84, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Besser.jpg',
  },
  {
    d: 'IDRIS BEY, 60, Brooklyn',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Idris_Bey.PNG',
  },
  {
    d: 'HAROLD JAMES BLAKE, 91, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Blake.jpg',
  },
  {
    d: 'ANTHONY PETER BONELLI, 76, The Bronx',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Bonelli.JPG',
  },
  {
    d: 'PASQUALE BRUNO, 87, Brooklyn',
  },
  {
    d: 'EVELYN BULCOCK, 98, Brooklyn',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Bullcock.jpeg',
  },
  {
    d: 'CHARLES BURROWS, 54, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Burrows.jpg',
  },
  {
    d: 'ETTA REBECCA BUSH, 98, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Rebecca_Bush.png',
  },
  {
    d: 'JUAN M. CABAN, 68, The Bronx',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Caban.jpg',
  },
  {
    d: 'ISMAEL CABRERA, 73, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ismael_Cabrera.jpg',
  },
  {
    d: 'MIGUEL ANGEL CALDERON, 90',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Calderon.JPG',
  },
  {
    d: 'CARMEN M. CALERO, 69, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Calero.jpeg',
  },
  {
    d: 'DANNY CAMACHO, 45',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Danny_Camacho.jpg',
  },
  {
    d: 'ROBERT CARDONA, 41, Manhattan',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Cardona.PNG',
  },
  {
    d: 'MIREYA VARGAS CARDONA, 62',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mireya_Cardona.jpg',
  },
  {
    d: 'RAUL AGUSTÍN CARMONA, 61, The Bronx',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Raul_Carmona.jpeg',
  },
  {
    d: 'MARCOS CASTRO, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marcos_Castro.jpg',
  },
  {
    d: 'PIK CHI CHAN, 82, Queens',
    e: 'June 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pik_Chi_Chan.jpg',
  },
  {
    d: 'OK J. CHOI, 81, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ok_Choi.jpeg',
  },
  {
    d: 'EZZARD “BURNHAM” CHRISTOPHER, 68, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ezzard_Christopher.jpg',
  },
  {
    d: 'ROSEMARY GRILLO CLEMENTI, 74, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    d: 'STEPHEN A. COOPER, 78, Queens',
    e: 'March 28, 2020',
  },
  {
    d: 'RUTH MAZYCK “DEACON CORBETT” CORBETT, 76, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruth_Corbett.jpeg',
  },
  {
    d: 'LENORE CORCORAN, 90, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lenore_Corcoran.jpg',
  },
  {
    d: 'THOMAS CORI, 83, Staten Island',
    e: 'April 3, 2020',
  },
  {
    d: 'THOMAS “TC” CRATER JR., 75',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Crater.png',
  },
  {
    d: 'JACOB CREDELL, 64, Brooklyn',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jacob_Credell.jpg',
  },
  {
    d: 'IRIS CRUZ, 77, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Iris_Cruz.jpg',
  },
  {
    d: 'VIDAL CRUZ, Staten Island',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vidal_Cruz.jpg',
  },
  {
    d: 'CHRISTINA “TINA” DANIELO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Christina_Danielo.jpg',
  },
  {
    d: 'JONATHON DAVIS, 36, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jonathon_Davis.png',
  },
  {
    d: 'ANTHONY C. DAZZO, 73, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_C_Dazzo.JPG',
  },
  {
    d: 'JOHN “YASHO” DEARDEN, 80, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dearden.jpg',
  },
  {
    d: 'GAETANA DESERTO, 63, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gaetana_Deserto.jpg',
  },
  {
    d: 'LARRY DEVITO, 71, Brooklyn',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Larry_DeVito.JPG',
  },
  {
    d: 'ANDRES DIAZ, 85, Staten Island',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Andres_Diaz.jpeg',
  },
  {
    d: 'MARTHA DIAZ, 90, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Martha_Diaz.jpg',
  },
  {
    d: 'MICHAEL DIMIN, 67, Brooklyn',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Dimin.JPG',
  },
  {
    d: 'JOEL GOMEZ DOMINGUEZ, 37, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Gomez.jpg',
  },
  {
    d: 'EDWARD FREDERICK DOTY, 65',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Doty.jpeg',
  },
  {
    d: 'JOHN DUNSTON JR., Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dunston_Jr.png',
  },
  {
    d: 'BAO DUONG, 79',
    e: 'March 30, 2020',
  },
  {
    d: 'THOMAS ECKER, 89, Queens',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Ecker.JPG',
  },
  {
    d: 'EDITH ECKER, 87, Queens',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edith_Ecker.jpg',
  },
  {
    d: 'IRVING ENGELSON, 89, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irving_Engelson.jpg',
  },
  {
    d: 'ELSIE LOPEZ ESCOBAR, 82, Brooklyn',
    e: 'April 21, 2020',
  },
  {
    d: 'GLORIA MARIA ESPERTIN, 65',
  },
  {
    d: 'MICHAEL FIELD, 59',
    e: 'April 8, 2020',
  },
  {
    d: 'LUIS A. FIGUEROA, 64, Queens',
    e: 'May 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Figueroa.jpg',
  },
  {
    d: 'AGATHA FINA, 93, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agatha_Fina.jpg',
  },
  {
    d: 'PHYLLIS FIORAVANTI, 89, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Fioravanti.jpg',
  },
  {
    d: 'JOSEPH FLETCHER, 60, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Fletcher.JPG',
  },
  {
    d: 'PEDRO FLORES, 76, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Flores.jpeg',
  },
  {
    d: 'ANTONIETTA FLORIO, 56, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonietta_Florio.png',
  },
  {
    d: 'VERONA FRASER, 70, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Verona_Fraser.JPG',
  },
  {
    d: 'SHAIMEEK RAIJEEN FRAZIER, 21, The Bronx',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shaimeek_Frazier.jpg',
  },
  {
    d: 'JASON FUCHS, 77, The Bronx',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jason_Fuchs.jpg',
  },
  {
    d: 'HARVEY CHESTER FUCHS, 71',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harvey_Fuchs.jpg',
  },
  {
    d: 'ED FULD, 85, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ed_Fuld.jpg',
  },
  {
    d: 'VINCENZO GALLINA, 93, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'DR. JAY MARTIN GALST, 69, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Galst.jpg',
  },
  {
    d: 'PABLO GARCIA, 46, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Garcia.JPG',
  },
  {
    d: 'KAREN GARVIN, 63, The Bronx',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Karen_Garvin.jpg',
  },
  {
    d: 'MARION M. GAVIN, 94, Brooklyn',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marion_Gavin.JPG',
  },
  {
    d: 'RALPH T. GISMONDI, 68',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Gismondi.jpg',
  },
  {
    d: 'PATRICK J. GLYNN, 63, Queens',
    e: 'April 1, 2020',
  },
  {
    d: 'JAY GOLDSTEIN, 75, Manhattan',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Goldstein.jpg',
  },
  {
    d: 'ELSA GOMEZ, 82, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elsa_Gomez.jpg',
  },
  {
    d: 'ROSARIO GONZALEZ, 91, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosario_Gonzalez.png',
  },
  {
    d: 'MARC J. GOODMAN, 67, Manhattan',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marc_Goodman.jpg',
  },
  {
    d: 'GRACE GRANTER, 95, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    d: 'BEVERLY RUBOCK GRAY, 70, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Beverly_Gray.jpeg',
  },
  {
    d: 'JENNIE GRAZIANO, 93, Brooklyn',
    e: 'March 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jennie_Graziano.jpg',
  },
  {
    d: 'GLORIA CHRISTINE GREEN, 68, Manhattan',
    e: 'April 11, 2020',
  },
  {
    d: 'JAMES GREEN, The Bronx',
  },
  {
    d: 'HAROLD GROSSMAN, 98, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Grossman.jpg',
  },
  {
    d: 'JUANA GRULLON DE PENA, 53',
    e: 'March 25, 2020',
  },
  {
    d: 'MIGUEL GUAMAN, 59, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Guaman.jpg',
  },
  {
    d: 'MANUEL J. GUANAQUIZA, 59, Queens',
    e: 'May 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Guanaquiza.jpg',
  },
  {
    d: 'ROSEMARY C. GUERRERO, 73, Queens',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Guerrero.jpeg',
  },
  {
    d: 'GRACE HARRIS, 87, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'KENNETH “KENNY” HENDERSON, 68, The Bronx',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Henderson.jpg',
  },
  {
    d: 'CLYDE WILLIAM HENRY, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clyde_William_Henry.jpg',
  },
  {
    d: 'EDWARD HENRY, 79, Brooklyn',
    e: 'May 5, 2020',
  },
  {
    d: 'JOSE A. HERNANDEZ JR., 56, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Hernandez.jpg',
  },
  {
    d: 'GABRIELLA “GABBY” HERNANDEZ, 57, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gabriella_Hernandez.jpeg',
  },
  {
    d: 'MARIA ADIELA HERNANDEZ, 83, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Hernandez.jpeg',
  },
  {
    d: 'ERNESTO HERNANDEZ, 57, Brooklyn',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernesto_Hernandez.jpeg',
  },
  {
    d: 'GREGORY HODGE, 59, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gregory_Hodge.PNG',
  },
  {
    d: 'ABUL HOSSAIN, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Abul_Hossain.JPG',
  },
  {
    d: 'YI GAO HUANG, 62, Queens',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Yi_Gao_Huang.jpg',
  },
  {
    d: 'ARTHUR C. HURWITZ, 54, Queens',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Hurwitz.jpg',
  },
  {
    d: 'JAMES L. HUTCHERSON, 93, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_L_Hutcherson.JPG',
  },
  {
    d: 'JAY HYMAN, 71',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Hyman.jpg',
  },
  {
    d: 'ROSE MARY INFANTINO, 88, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rose_Mary_Infantino.jpg',
  },
  {
    d: 'ANTHONY R. IRACI, 48, Staten Island',
    e: 'March 27, 2020',
  },
  {
    d: 'GARY JAEGER, 71, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gary_Jaeger.jpg',
  },
  {
    d: 'BRILLA GARCES “TITA BRILLA” JARLDANE, 77, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brilla_Jarldane.jpg',
  },
  {
    d: 'NATHANIEL “SONNY” JOHNSON, 77, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'MICHELLE JOHNSON, 59, The Bronx',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Johnson.jpeg',
  },
  {
    d: 'MUDADA KABIR, 57, Brooklyn',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mudada_Kabir.jpg',
  },
  {
    d: 'FAREEDA ANN KADWANI, 75, The Bronx',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Ann_Kadwani.jpg',
  },
  {
    d: 'STANLEY KAPLAN, 84, The Bronx',
    e: 'April 17, 2020',
  },
  {
    d: 'LAURICE KASOW, 86, Queens',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Laurice_Kasow.jpg',
  },
  {
    d: 'MOHAMMAD SHAMSUZZOHA “PINTU” KHAN, 66, The Bronx',
    e: 'April 3, 2020',
  },
  {
    d: 'BIBI MAIMOON NEISHA KHAN, 80',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/BibiMaimoonNeisha_Khan.jpg',
  },
  {
    d: 'MAURICE KIRBY, 51, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    d: 'ELI KLAUSNER, 64',
    e: 'April 13, 2020',
  },
  {
    d: 'JOHN KNOX, 84, Queens',
    e: 'March 16, 2020',
  },
  {
    d: 'DIONYSIOS S. KOTSONIS, 89, Manhattan',
    e: 'May 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dionysios_Kotsonis.JPG',
  },
  {
    d: 'ANN KROSS, 94, The Bronx',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ann_Kross.jpg',
  },
  {
    d: 'ARTHUR LACKER, 73',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Lacker.PNG',
  },
  {
    d: 'ELIZABETH LAMBERTY, 71, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_Lamberty.jpg',
  },
  {
    d: 'ADALBERTO “TITO” LEBRON JR., 53, Brooklyn',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Adalberto_Lebron.jpeg',
  },
  {
    d: 'RICHARD LENIHAN, 55',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Lenihan.jpg',
  },
  {
    d: 'RICHARD LITKOFSKY, 72, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Litofsky.jpg',
  },
  {
    d: 'LUIS LIZ, 47, The Bronx',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Liz.jpeg',
  },
  {
    d: 'LISA G. MACK, 61, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'GERARD EVANS MANOLOVICI, 83',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gerard_Manolovici.jpg',
  },
  {
    d: 'INDARJIT MARAJ, 73, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Indarjit_Maraj.jpg',
  },
  {
    d: 'RALPH WILLIAM MARTEL JR., 84, Manhattan',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Martel.jpeg',
  },
  {
    d: 'LUIS E. MARTINEZ, 65, Queens',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Martinez.jpg',
  },
  {
    d: 'YITZCHAK MATATOV, 26',
    e: 'April 2, 2020',
  },
  {
    d: 'THANKACHAN MATHAI, 56, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thankachan_Mathai.jpg',
  },
  {
    d: 'ESTEBAN MATOS, 80, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Esteban_Matos.jpeg',
  },
  {
    d: 'ALAN MATZA, 50, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'ELIZABETH “BETTY” MCCOLLUM, 79, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_McCollum.jpeg',
  },
  {
    d: 'LORENA “LORI” MCDONALD, 76',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lori_McDonald.jpg',
  },
  {
    d: 'ELIAS LANE “MR. LANE” MELTON, 83, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elias_Melton.jpeg',
  },
  {
    d: 'GISELE MENARD, 67, Queens',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gisele_Menard.jpg',
  },
  {
    d: 'ANTHONY MEOLI, 62, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Meoli.jpg',
  },
  {
    d: 'BLANCA CASTAÑO MERO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Blanca_Mero.jpg',
  },
  {
    d: 'SHIRLEY ANN MILLER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shirley_Ann_Miller.JPG',
  },
  {
    d: 'MARY MARGARET MINERLY, 60, Queens',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mary_Minerly.jpg',
  },
  {
    d: 'RANDIP S. “BOBBY” MINHAS, 49, Queens',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Randip_Minhas.JPG',
  },
  {
    d: 'LISA LOUISE MONTANINO, 65, Staten Island',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lisa_Louise_Montanino.png',
  },
  {
    d: 'TIMOTHY OLAN MONTGOMERY, 56, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tim_Montgomery.jpg',
  },
  {
    d: 'MATTHEW F. MOORE JR., 52, Staten Island',
    e: 'April 17, 2020',
  },
  {
    d: 'ERNEST “ERNIE” MORENCY, 82, Brooklyn',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernest_Morency.jpg',
  },
  {
    d: 'THERESA ESTELLE MORRIS, 91, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Theresa_Estelle_Morris.png',
  },
  {
    d: 'PEDRO MUNIZ, 87, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Muniz.JPG',
  },
  {
    d: 'CARMEN NEREIDA MUNIZ, 89, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Muniz.JPG',
  },
  {
    d: 'TRACEY M. MURCHISON, 55',
    e: 'July 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tracey_Murchison.jpg',
  },
  {
    d: 'ROBERT “ROB” NATHAN, 51',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Nathan.jpg',
  },
  {
    d: 'ARTHUR “ARTIE” NELSON, 74, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Nelson.jpeg',
  },
  {
    d: 'LUCY NICOLELIS, 90, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lucy_Nicolelis.jpeg',
  },
  {
    d: 'KANE “KENNY” NOEL, 42',
    e: 'March 31, 2020',
  },
  {
    d: "RONALD O'LOUGHLIN, 80, Brooklyn",
    e: 'March 31, 2020',
    h: "https://projects.thecity.nyc/covid-19-deaths-img/Ronald_O'Loughlin.png",
  },
  {
    d: 'JUAN ANDRES OLLARVIDE, 60, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Ollarvide.jpg',
  },
  {
    d: 'FRANK ORSINI, 62',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frank_Orsini.jpg',
  },
  {
    d: 'MANUEL J. “MEME” ORTIZ, 68, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Ortiz.jpg',
  },
  {
    d: 'ANA ORTIZ, 82, The Bronx',
    e: 'May 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ana_Ortiz.jpeg',
  },
  {
    d: 'PANAYIOTIS “PETER” PANAYIOTOU, 65, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Peter_Panayiotou.jpeg',
  },
  {
    d: 'ROBERT PAPIK, 52',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Papik.png',
  },
  {
    d: 'MARIA ROSA PARRELLI, 87, Brooklyn',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/MariaRosa_Parrelli.jpeg',
  },
  {
    d: 'RUSTICO PASIG, 66, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rustico_Pasig.jpg',
  },
  {
    d: 'JUDITH PATOCS, 91, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judith_Patocs.jpg',
  },
  {
    d: 'PATRICK PATOIR, 57, Brooklyn',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Patrick_Patoir.jpeg',
  },
  {
    d: 'GREGORY PENNY SR., 74, The Bronx',
    e: 'April 30, 2020',
  },
  {
    d: 'ANTONIO PEPENELLA, 82, The Bronx',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Pepenella.jpg',
  },
  {
    d: 'DAVID PEREZ, 56, Manhattan',
    e: 'March 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez.jpg',
  },
  {
    d: 'DAVID PEREZ, 74, The Bronx',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez2.jpg',
  },
  {
    d: 'DUSTIN J. PETRIE, 39, Manhattan',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dustin_Petrie.jpg',
  },
  {
    d: 'ALBERT “AL” PETROCELLI SR., 73, Staten Island',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Albert_Petrocelli.jpg',
  },
  {
    d: 'PETER PINTO, 65, Staten Island',
    e: 'March 29, 2020',
  },
  {
    d: 'MARIO J. “PIPI” POBEGA, 85, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mario_Pobega.jpg',
  },
  {
    d: 'DALE RICHARD PON, 75, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dale_Richard_Pon.jpg',
  },
  {
    d: 'SYED RAHMAN, 59',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Syed_Rahman.jpg',
  },
  {
    d: 'JOHN REDD, 63, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Redd.jpg',
  },
  {
    d: 'MELODY REED, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Melody_Reed.jpg',
  },
  {
    d: 'ANTONIA REYNOSO, 81',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonia_Reynoso.jpeg',
  },
  {
    d: 'LUIS EDUARDO RIASCOS, 59, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Riascos.jpeg',
  },
  {
    d: 'REV. BARBARA RICHARDSON, 68, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Barbara_Richardson.jpg',
  },
  {
    d: 'JUDY RICHHEIMER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judy_Richheimer.jpg',
  },
  {
    d: 'JOSE H. RICO, 84, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Rico.png',
  },
  {
    d: 'GELBERT A. RIOS, 58, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'DANILO RIVAS, 83, The Bronx',
  },
  {
    d: 'LUIS RIVERA, 50, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Rivera.jpeg',
  },
  {
    d: 'EVELYN RIVERA, 47, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Rivera.jpg',
  },
  {
    d: 'MANUEL RIVERA, 88, Manhattan',
    e: 'April 13, 2020',
  },
  {
    d: 'DAVID RIVERA JR., 23, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Rivera.jpeg',
  },
  {
    d: 'JUAN “MACHO” RODRIGUEZ, 35, Brooklyn',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Rodriguez.jpg',
  },
  {
    d: 'EMELDA RODRIGUEZ, 77, Manhattan',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emelda_Rodriguez.jpg',
  },
  {
    d: 'CORINNE ROGATNICK, 89, Queens',
    e: 'March 30, 2020',
  },
  {
    d: 'HECTOR ROMAIN, 66, The Bronx',
    e: 'May 6, 2020',
  },
  {
    d: 'SALVATORE ROMEO, 84, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'PABLO GUSTAVO ROSAS, 70, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Rosas.jpeg',
  },
  {
    d: 'ELISABETH “LIS” RUBERT, 64, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elisabeth_Rubert.jpg',
  },
  {
    d: 'NATALIYA RUDNICHENKO, 82, Staten Island',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Nataliya_Rudnichenko.jpg',
  },
  {
    d: 'BRIAN KEITH SADDLER, 60',
    e: 'May 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brian_Saddler.png',
  },
  {
    d: 'AGUSTIN SALVADOR',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agustin_Salvador.jpeg',
  },
  {
    d: 'MARILU LOPEZ SANTIAGO, 69, Staten Island',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marilu_Santiago.jpg',
  },
  {
    d: 'CESAR MAURO SARMIENTO LOPEZ, 58, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'EMILY SAVITSKY, 95, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emily_Savitsky.jpg',
  },
  {
    d: 'WILLIAM “BILLY” SCANLAN JR.',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Scanlan.jpg',
  },
  {
    d: 'LOUIS SCHMIDT, 99',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Schmidt.jpg',
  },
  {
    d: 'ARLENE SCHNEIDMAN, 84, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arlene_Schneidman.jpeg',
  },
  {
    d: 'ALAN SCHOENBERG, 73, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alan_Schoenberg.jpeg',
  },
  {
    d: 'MICHAEL A. SCURA, 68, Manhattan',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Scura.jpg',
  },
  {
    d: 'RICHARD C. SEABERRY, 63, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Seaberry.jpg',
  },
  {
    d: 'JODY G. SETTLE, 58',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jody_Settle.jpg',
  },
  {
    d: 'MAHMOODA SHAHEEN, 71, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mahmooda_Shaheen.jpg',
  },
  {
    d: 'JOEL LAWRENCE SHATZKY, 76, Brooklyn',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Shatzky.jpg',
  },
  {
    d: 'CHANDRAKANT F. SHETH, 85, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Chandrakant_Sheth.jpg',
  },
  {
    d: 'CARMEN SILVA, 79, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Silva.jpg',
  },
  {
    d: 'ROSEMARY “RORY” SISCO, 71, Queens',
    e: 'March 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Sisco.jpg',
  },
  {
    d: 'LEMUEL “BOYET” SISON, 56, Queens',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lemuel_Sison.jpg',
  },
  {
    d: 'ROVIN ANTHONY SMITH, 39',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rovin_Smith.jpeg',
  },
  {
    d: 'ERIC S. SOBEL, 57, Manhattan',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eric_Sobel.png',
  },
  {
    d: 'JANINE SOLEIL, 75, Brooklyn',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Janine_Soleil.jpg',
  },
  {
    d: 'ANTONIO SOLOMON, 71, Queens',
    e: 'March 26, 2020',
  },
  {
    d: 'ESTELITA ATIENZA SOLOMON, 72, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'EMILIO SOSA, 73, The Bronx',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emilio_Sosa.jpg',
  },
  {
    d: 'CLARENCE JESSIE “SONNY” SPANN, 80, Brooklyn',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clarence_Spann.jpg',
  },
  {
    d: 'ANNA SPARACINO, 79, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    d: 'WAYNE STEELE, 60',
    e: 'May 20, 2020',
  },
  {
    d: 'MICHAEL ANTHONY STEVENS SR., 60, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Stevens.jpg',
  },
  {
    d: 'RICHARD “FAST FEETS; COD-FATHER” STEWART-JOHNSON, 59, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Johnson.jpg',
  },
  {
    d: 'MIRIAM STOLZENBERG, 96, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miriam_Stolzenberg.JPG',
  },
  {
    d: 'AVINAASH TAKDARI, 31, The Bronx',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Avinaash_Takdari.jpg',
  },
  {
    d: 'GUSTAVO PETUZ TAPIA, 55, Queens',
    e: 'April 23, 2020',
  },
  {
    d: 'JULES TAYLOR JR., 58, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jules_Taylor.jpg',
  },
  {
    d: 'ROSEMARY “ROSIE” TERIO, 82, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Terio.jpg',
  },
  {
    d: 'ANTHONY “TONY” TERIO, 86, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Terio.jpeg',
  },
  {
    d: 'JOAN TERRERO, 86, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joan_Terrero.jpg',
  },
  {
    d: 'ROBERT THOERING, 56, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Thoering.jpg',
  },
  {
    d: 'PHYLLIS ANNE THOMPSON, 77, Manhattan',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Thompson.JPG',
  },
  {
    d: 'JAMES C. THOMPSON, 75, Brooklyn',
    e: 'May 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_Thompson.jpg',
  },
  {
    d: 'CHARLES THORPE, 69, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Thorpe.jpg',
  },
  {
    d: 'JOSEPH TRANCHINA, 72',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Tranchina.jpg',
  },
  {
    d: 'OLGA VASQUEZ, 84, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Olga_Vasquez.jpg',
  },
  {
    d: 'JUAN VAZQUEZ, 53, Brooklyn',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Vazquez.jpg',
  },
  {
    d: 'FRANTZ VITAL, 32, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frantz_Vital.jpg',
  },
  {
    d: 'ADA MAE VOID RIVERS, 79, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ada_Rivers.jpg',
  },
  {
    d: 'DR. GUIDO VOLCOVICI, 79',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Guido_Volcovici.jpg',
  },
  {
    d: 'JOSEPH DANIEL VOLCY, 70, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Daniel_Volcy.jpeg',
  },
  {
    d: 'KHANA VOROVICH, 92, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Khana_Vorovich.jpeg',
  },
  {
    d: 'RAYMOND VÁZQUEZ MUÑOZ, 66',
    e: 'April 7, 2020',
  },
  {
    d: 'JOHN WALTER, 80, Queens',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Walter.jpg',
  },
  {
    d: 'INGRID MOHAMMED WARNER, 63, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ingird_Warner.jpeg',
  },
  {
    d: 'WILLIS CEPHUS “MARQUE” WASHINGTON JR., 57, Manhattan',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Willis_Washington.jpg',
  },
  {
    d: 'CLINTON WASHINGTON, 40, The Bronx',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clinton_Washington.jpg',
  },
  {
    d: 'LILA CHARLOTTE SWEDELSON WEISSMAN, 83, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lila_Weissman.jpg',
  },
  {
    d: 'JULIAN CLYDE WESTON, Brooklyn',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Julian_Clyde_Weston.jpg',
  },
  {
    d: 'JOHN PATRICK WHYTE, 69, Staten Island',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Whyte.jpg',
  },
  {
    d: 'ROBERT J. WOLFSON, 95',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Wolfson.jpg',
  },
  {
    d: 'KELLY K. WONG, 49, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kelly_Wong.jpg',
  },
  {
    d: 'FOOK SHEONG WONG, 74, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fook_Sheong_Wong.jpg',
  },
  {
    d: 'LUKE JAMES WORKOFF, 33, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luke_Workoff.png',
  },
  {
    d: 'FERNANDO ZAPATA, 65, Queens',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fernando_Zapata.JPG',
  },
  {
    d: 'ROBERT “BOB” ZOLNERACK, 83, Brooklyn',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Zolnerack.jpg',
  },
  {
    d: 'RAYMOND ABEAR, 43, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'BINYOMIN ABRAMOWITZ, 42, Brooklyn',
  },
  {
    d: 'FRANK ABREU, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    d: 'ROSALIE ACAMPORA, 83, Staten Island',
    e: 'April 9, 2020',
  },
  {
    d: 'ANTHONY ACHAN, 64, The Bronx',
    e: 'May 3, 2020',
  },
  {
    d: 'KWABENA ACHEAMPONG',
  },
  {
    d: 'MARILYN ACLUFI, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    d: 'LUIS ACOSTA, 59',
  },
  {
    d: 'LAURO ACUNA',
    e: 'April 26, 2020',
  },
  {
    d: 'EUGENE ADAMS',
  },
  {
    d: 'JOHNATHAN ADEWUMI, 57, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    d: 'LUZ INES AGRAZAL',
  },
  {
    d: 'ROMEO OCAMPO “ROMY” AGTARAP, 63',
    e: 'April 24, 2020',
  },
  {
    d: 'SERGIO AGUILAR',
  },
  {
    d: 'REMBERTO AGUILAR, 59, Queens',
  },
  {
    d: 'BABUL AHMED',
    e: 'March 27, 2020',
  },
  {
    d: 'KAMAL AHMED, 69, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'KAMAL AHMED, 69, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'RASHIDA AHMED, 46, Queens',
    e: 'April 20, 2020',
  },
  {
    d: 'AFZAL AHMED, 51, Queens',
  },
  {
    d: 'MOHAMMED AHSAN, 49, The Bronx',
    e: 'April 25, 2020',
  },
  {
    d: 'WILMAN AJILA, Queens',
  },
  {
    d: 'SAMUEL AKOPOV, 57, Brooklyn',
  },
  {
    d: 'RASHIDA AKTER, 45, Queens',
  },
  {
    d: 'JAYED ALAM, 29, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'TANASIA SHAKIA “NAY NAY” ALAMO, 25',
    e: 'March 31, 2020',
  },
  {
    d: 'MOE “MOE THE BUTCHER” ALBANESE, 95',
    e: 'April 7, 2020',
  },
  {
    d: 'LUIS ALBINO, The Bronx',
    e: 'April 3, 2020',
  },
  {
    d: 'ANGEL ALEJANDRO',
  },
  {
    d: 'LIBORIO “LEE” ALESSI JR., 52, Queens',
    e: 'April 17, 2020',
  },
  {
    d: 'AHMED ALI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    d: 'MOHAMMAD EUSUP ALI, 55, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    d: 'ALI ALI',
  },
  {
    d: 'ISMAT ALI, Queens',
  },
  {
    d: 'HAZRAT ALI, Manhattan',
  },
  {
    d: 'KHANDAKER MOSADDEK ALI (SADEK), The Bronx',
  },
  {
    d: 'NANCY M. ALLEN, 91',
    e: 'April 15, 2020',
  },
  {
    d: 'MICHELLE ALLEN, Brooklyn',
  },
  {
    d: 'NATHAN “NATE/ NAT” ALLMAN, 85',
    e: 'March 22, 2020',
  },
  {
    d: 'ISMAEL ALMODOVAR, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'ISMAEL ALMODOVAR, Brooklyn',
  },
  {
    d: 'ISMAEL ALMODOVAR',
  },
  {
    d: 'JEFFREY ALSTON, 56, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'YIMEL ALVARADO, 40, Queens',
  },
  {
    d: 'RAMON ALVARADO, 80, Manhattan',
  },
  {
    d: 'RICARDO ALVARADO RIVAS',
  },
  {
    d: 'OSCAR ALVAREZ, 35',
    e: 'April 1, 2020',
  },
  {
    d: 'ALTAGRACIA ALVAREZ, 68, The Bronx',
    e: 'April 23, 2020',
  },
  {
    d: 'HELENE ALYON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'ARTURO AMARO, 42, Queens',
  },
  {
    d: 'FRANK AMATO, 60, The Bronx',
    e: 'April 10, 2020',
  },
  {
    d: 'FRANK AMATO, 89, Staten Island',
  },
  {
    d: 'ROSEMARIE AMEROSI, 87, Staten Island',
    e: 'April 9, 2020',
  },
  {
    d: 'WALTER L ANCE, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'WALTER ANCE, 63',
    e: 'April 11, 2020',
  },
  {
    d: 'OLGA ANCHUMBIA, 80, Manhattan',
  },
  {
    d: 'ARTHUR ANDERSON',
    e: 'April 14, 2020',
  },
  {
    d: 'WILLIAM ANDERSON',
  },
  {
    d: 'CORNELL ANDERSON',
  },
  {
    d: 'WILLIE ANDERSON, The Bronx',
  },
  {
    d: 'REYNOLD ANDERSON-HEWITT, 37, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'GOVINDA ANDIAPPEN, Queens',
  },
  {
    d: 'SABINO ANDRADE',
  },
  {
    d: 'SALVATORE ANDREOTTI, 61',
  },
  {
    d: 'GREGORY ANDREWS, 66, Manhattan',
    e: 'May 12, 2020',
  },
  {
    d: 'FOTIOS ANGELOPOULOS, 77, Queens',
    e: 'March 30, 2020',
  },
  {
    d: 'JOHN D. “POP POP” ANNETTA, 92, Staten Island',
    e: 'May 22, 2020',
  },
  {
    d: 'PHYLLIS BEATRICE ANTONETZ, 103',
    e: 'April 17, 2020',
  },
  {
    d: 'EDWARD J. “ED” ANTONIO II, 79, Queens',
    e: 'April 14, 2020',
  },
  {
    d: 'JUAN “MIÑOSO” ARAUJO, 82, The Bronx',
  },
  {
    d: 'ROLANDO “SONNY” ARAVENA, 44, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'SAMUEL W. “SAM THE FENCE MAN” ARBEENY, 70, Staten Island',
    e: 'April 25, 2020',
  },
  {
    d: 'SEGUNO ARCHIBALA',
  },
  {
    d: 'RAFAEL ARCINIEGAS, 83, The Bronx',
    e: 'March 8, 2020',
  },
  {
    d: 'EVERARDO ARENAS, Queens',
    e: 'May 12, 2020',
  },
  {
    d: 'LOUIS ARLEO, 79, Queens',
  },
  {
    d: 'DNYNIA ARMSTRONG, 80, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    d: 'MICHAEL ARMSTRONG, 79, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    d: 'JENNIFER ROBIN ARNOLD, 68, The Bronx',
    e: 'April 1, 2020',
  },
  {
    d: 'LUZ MARIA AROCHO MALDONADO, 82',
    e: 'April 11, 2020',
  },
  {
    d: 'DANIELLE CHRISTINE ARRE, 36, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'SHA-KING “SYCHO” ARRINDELL, 34, Brooklyn',
  },
  {
    d: 'DONALD ARRINGTON',
  },
  {
    d: 'SEAN ARTIS, 41',
    e: 'April 9, 2020',
  },
  {
    d: 'SEAN ARTIS, 41',
    e: 'April 9, 2020',
  },
  {
    d: 'BEVERLY ARTZ, 72',
    e: 'April 7, 2020',
  },
  {
    d: 'YAW A. ASANTE, 60, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'JAIME ASENCIO, 82, The Bronx',
    e: 'April 21, 2020',
  },
  {
    d: 'ELPIDIO ASPIROZ, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'RODRIGO ASTUDIILLO',
  },
  {
    d: 'RUBY ATKINS, 67, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    d: 'BENNY AU, 90, Manhattan',
  },
  {
    d: 'JOSEPH AUFRICHTIG, Brooklyn',
  },
  {
    d: 'MOSHE AUGENSTEIN, 73, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'RICHARD AUSTIN JR., 66, Staten Island',
  },
  {
    d: 'MADHVI AYA, 61, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    d: 'BIBI AYESHA, 69, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    d: 'HELENE AYLON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'IBRAHIMA BA, 44, Manhattan',
  },
  {
    d: 'MUHAMMAD ALI BABUL, Queens',
  },
  {
    d: 'MIGEL BAEZ, Brooklyn',
  },
  {
    d: 'ALFRED ANTHONY BAFUMI, 75',
    e: 'April 15, 2020',
  },
  {
    d: 'ALFRED BAGLEY',
  },
  {
    d: 'GIL “THE GODFATHER OF CARIBBEAN RADIO” BAILEY, 84, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'GWENDOLYN BAILEY',
  },
  {
    d: 'MARYANN BAKER, 76, The Bronx',
    e: 'March 31, 2020',
  },
  {
    d: 'MELITA ELIZABETH “FLYNN” BAKER, 86',
    e: 'April 30, 2020',
  },
  {
    d: 'GERRY BALASTA, 49, Queens',
    e: 'April 15, 2020',
  },
  {
    d: 'ABRAHAM BALLINAS, Queens',
    e: 'April 29, 2020',
  },
  {
    d: 'NICANOR “NICK” BALTAZAR, 60, Queens',
    e: 'March 31, 2020',
  },
  {
    d: 'IRVING BARASH, 93, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'GAETANO BARBIERI, 79, Queens',
    e: 'April 19, 2020',
  },
  {
    d: 'LOUIS S. BARCELO JR., 54, The Bronx',
    e: 'April 16, 2020',
  },
  {
    d: 'ROBERT W. BARGHAAN, 88, Staten Island',
    e: 'April 5, 2020',
  },
  {
    d: 'VIRGINIA FAITH BARGHAAN, 88, Staten Island',
  },
  {
    d: 'ROBERT BARLEY',
  },
  {
    d: 'CLAUDETTE BARR, 69, Staten Island',
  },
  {
    d: 'GIACOMINA BARR-BROWN, 61, The Bronx',
    e: 'March 26, 2020',
  },
  {
    d: 'FRANCES H. BARRY, 82',
  },
  {
    d: 'DR. DOUG BASS, 64, Manhattan',
    e: 'March 28, 2020',
  },
  {
    d: 'MONROE M.K. “MONTY” BATES II, 39',
    e: 'April 13, 2020',
  },
  {
    d: 'SALVATORE BATTAGLIA',
  },
  {
    d: 'ETHEL BAUMANN',
  },
  {
    d: 'HARVEY BAYARD, 88, Manhattan',
    e: 'March 28, 2020',
  },
  {
    d: 'JOHNNY LEE BAYNES, 64, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    d: 'THOMAS BEALS',
  },
  {
    d: 'DONALD BEARD',
  },
  {
    d: 'CELESTER BEASELY, 79, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'CHARLES H. BEATTY, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'KETTY BEAUBIEN, Brooklyn',
  },
  {
    d: 'YANICK ROSE BEAUBRUN, 64, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    d: 'YANICK BEAUBRUN',
  },
  {
    d: 'YAKARA BEAUVOIR, 58, Manhattan',
    e: 'May 20, 2020',
  },
  {
    d: 'EDUARDO ANTONIO BECERRIL, 56, The Bronx',
  },
  {
    d: 'WALTER BECKETT, 82, Brooklyn',
  },
  {
    d: 'JAHANARA BEGUM, Queens',
  },
  {
    d: 'DAVID BEHRBOM, 47, The Bronx',
    e: 'April 5, 2020',
  },
  {
    d: 'DR. HOOSHANG BEHROOZI, 92',
    e: 'April 16, 2020',
  },
  {
    d: 'HUBERT BELGRAVE, 61, Queens',
  },
  {
    d: 'CALVIN BELL, 29, The Bronx',
    e: 'March 25, 2020',
  },
  {
    d: 'DR. TRACI BELTON, 55',
    e: 'April 17, 2020',
  },
  {
    d: 'TUFAN BENER, 79, Manhattan',
    e: 'March 22, 2020',
  },
  {
    d: 'CAROLYN ANNA “[UNKNOWN]” BENFANTE, 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'ELOY BENITEZ, 71, The Bronx',
  },
  {
    d: 'LUCHNER BENOIT, 62',
  },
  {
    d: 'ROXANNE BENT, 48, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    d: 'CHARLES BERENGUER JR., 70, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'MATTHEW BERENGUER, The Bronx',
  },
  {
    d: 'MAURICE BERGER, 63, Manhattan',
    e: 'March 22, 2020',
  },
  {
    d: 'BEIRISH BERGER, 80, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'MARGARITA BERMUDEZ',
  },
  {
    d: 'JUDITH EVANGELINE BERNARD, 72, Queens',
  },
  {
    d: 'BERYL BERNAY, 94, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'DAVID JOSEPH BERNSTEIN, 78, Queens',
    e: 'May 1, 2020',
  },
  {
    d: 'GIANMARCO BERTOLOTTI, 42, Queens',
    e: 'April 22, 2020',
  },
  {
    d: 'BETZALEL BERTRAM, 70, Brooklyn',
  },
  {
    d: 'IQBAL HAQ BHUIYAN PRINCE, 60, Queens',
  },
  {
    d: 'CLAIRE BIEN-AIME, 59, Brooklyn',
  },
  {
    d: 'REV. HARRY DEAN BIGBY, 82, Manhattan',
    e: 'May 26, 2020',
  },
  {
    d: 'JERI ELLEN BILUS, 74, Manhattan',
    e: 'March 31, 2020',
  },
  {
    d: 'MOSTAFIZUR RAHMAN BIPU, 48, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'RAFAEL LEONARD BLACK, 71, Brooklyn',
    e: 'May 15, 2020',
  },
  {
    d: 'ANNA BLADES',
    e: 'April 8, 2020',
  },
  {
    d: 'DAVID BLAGROVE',
  },
  {
    d: 'JULIA BLANCAS',
  },
  {
    d: 'KEILA BLANK, 67, Brooklyn',
  },
  {
    d: 'MARK BLUM, 69, Manhattan',
    e: 'March 25, 2020',
  },
  {
    d: 'MATIS BLUM, 63, Queens',
  },
  {
    d: 'EILISH BOCHNER, 65, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'MANUEL BOITEL',
  },
  {
    d: 'MICHAEL ANGEL BONANO, 77, Manhattan',
    e: 'May 6, 2020',
  },
  {
    d: 'MARTIN BOND',
  },
  {
    d: 'DELORES BOONE, 68, The Bronx',
  },
  {
    d: 'ROBERT BOOTH',
  },
  {
    d: 'DONALD C. BORBELL SR., 85, Brooklyn',
  },
  {
    d: 'YOSSI BORENSTEIN, 73, Brooklyn',
  },
  {
    d: 'LORENA BORJAS, 59, Queens',
    e: 'March 20, 2020',
  },
  {
    d: 'MICHAEL BORLAND, 62, Queens',
    e: 'May 5, 2020',
  },
  {
    d: 'ARISTEO BOSQUES',
    e: 'May 25, 2020',
  },
  {
    d: 'KEVIN BOSTIC, 55, Queens',
    e: 'May 6, 2020',
  },
  {
    d: 'PATRICIA BOSWORTH, 86, Manhattan',
    e: 'April 2, 2020',
  },
  {
    d: 'RABBI ELI BOTKNECHT, 60, Brooklyn',
  },
  {
    d: 'BRYSON KENT BOWMAN, 59',
    e: 'April 4, 2020',
  },
  {
    d: 'FRANK JEFFERSON BOWMAN JR., 54, Brooklyn',
  },
  {
    d: 'DIMITRIY BOZHOVSKIY, 66',
    e: 'April 21, 2020',
  },
  {
    d: 'DOMINICK J BRANCATO, 69, Staten Island',
    e: 'May 21, 2020',
  },
  {
    d: 'DERIK BRASWELL, 57, Queens',
  },
  {
    d: 'ROBERTO BRAVO',
    e: 'April 13, 2020',
  },
  {
    d: 'MELQUIADES “PAUL” BRAVO',
  },
  {
    d: 'JOSEPH BROSTEK, 87, Queens',
    e: 'March 25, 2020',
  },
  {
    d: 'JULIA BROWN, The Bronx',
    e: 'April 25, 2020',
  },
  {
    d: 'LARICTER BROWN, 35, The Bronx',
  },
  {
    d: 'RANDY BROWN',
  },
  {
    d: 'ROBBY BROWNE, 72, Manhattan',
    e: 'April 11, 2020',
  },
  {
    d: 'DOROTHY BRUNETTI, 76',
    e: 'April 2, 2020',
  },
  {
    d: 'ALEX BRUNO, 58, Brooklyn',
  },
  {
    d: 'CATHERINE BRUNO',
  },
  {
    d: 'FIORE BRUSCO',
  },
  {
    d: 'ANNA BUCCELLATO, 98, Queens',
    e: 'May 1, 2020',
  },
  {
    d: 'ISHMAEL BURCH, 56',
  },
  {
    d: 'TYSUN BURGESS',
  },
  {
    d: 'IRENE “RENE” BURGONIO, 44, Queens',
    e: 'May 9, 2020',
  },
  {
    d: 'VANESSA BURKETT, 62, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'VANESSA BURKETT, 61, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'VIRDREE BURNS JR., 60, Manhattan',
    e: 'April 19, 2020',
  },
  {
    d: 'MICHELLE BURREL, 44, The Bronx',
  },
  {
    d: 'ALEJANDRO BUSTAMANTE',
    e: 'April 3, 2020',
  },
  {
    d: 'EDUARDO BUSTAMANTE, 78, Queens',
    e: 'April 30, 2020',
  },
  {
    d: 'DR. JULIE BUTLER, 62, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'JOHN BUTTNER',
  },
  {
    d: 'MICHAEL CHARLES BYRNE, 69, Staten Island',
    e: 'April 24, 2020',
  },
  {
    d: 'HECTOR CABANA, Queens',
  },
  {
    d: 'MARIA GUIA “MAMA GUIA” CABILLON, 63, Brooklyn',
    e: 'April 26, 2020',
  },
  {
    d: 'MARLINO T. CAGAS, 66, Manhattan',
    e: 'April 20, 2020',
  },
  {
    d: 'KEVIN JOHN CAHILL, 83, Staten Island',
    e: 'April 6, 2020',
  },
  {
    d: 'JOHN CALDER, 72, Queens',
  },
  {
    d: 'CARLOS CALDERON, 65, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'SALVADOR CALDERON, 69, Queens',
    e: 'April 20, 2020',
  },
  {
    d: 'RODRIGO CALENO, 62, Queens',
  },
  {
    d: 'MURIEL A. CALLENDER, 84, Brooklyn',
    e: 'May 3, 2020',
  },
  {
    d: 'RAUL CAMBIAN, 70, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'SHIRLEY CAMPBELL, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    d: 'GREGORIO CAMPIS, 65, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    d: 'SALVATORE “SAL” CAMPO, 76, Staten Island',
    e: 'March 28, 2020',
  },
  {
    d: 'MARCELO CAMPOS, Queens',
    e: 'April 17, 2020',
  },
  {
    d: 'ANGEL CAMPOS, 45, The Bronx',
  },
  {
    d: 'FRANCISCO CANARTE, 69, Queens',
  },
  {
    d: 'IRIS MILAGROS CANCEL',
    e: 'April 14, 2020',
  },
  {
    d: 'KATIA MARIA CAPELLAN, 80, Queens',
    e: 'April 16, 2020',
  },
  {
    d: 'SAL CAPITUMMINO',
  },
  {
    d: 'SALVATORE “CAPPI” CAPOZUCCA, 65, Brooklyn',
    e: 'May 13, 2020',
  },
  {
    d: 'RAMON CARANDANG, 69, Queens',
    e: 'April 16, 2020',
  },
  {
    d: 'IFGENIA “IFI” CARDENAS, 82, Manhattan',
  },
  {
    d: 'IFGENIA “IFI” CARDENAS, 82, Manhattan',
  },
  {
    d: 'LUIS CARDENAS, 64',
  },
  {
    d: 'ROBERTO CARDONA',
  },
  {
    d: 'EUCARIO CARDOSO-PABLO, 66, The Bronx',
    e: 'April 5, 2020',
  },
  {
    d: 'FLOYD CARDOZ, 59, Manhattan',
    e: 'March 25, 2020',
  },
  {
    d: 'LORRAINE CARLISLE, 73, The Bronx',
  },
  {
    d: 'KAREN CARMELLO, 57',
    e: 'April 16, 2020',
  },
  {
    d: 'THOMAS TOMMY CARNEY, 70, Queens',
    e: 'March 27, 2020',
  },
  {
    d: 'ALEX CARRAZANA, 60, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alex_Carrazana.jpg',
  },
  {
    d: 'FELIPE “TITO” CARRION, The Bronx',
    e: 'March 27, 2020',
  },
  {
    d: 'FRAN CARROLL',
  },
  {
    d: 'PRISCILLA “SWEET PEA” CARROW, 65, Queens',
    e: 'March 30, 2020',
  },
  {
    d: 'LEONARD CARTER, 60, Queens',
    e: 'April 14, 2020',
  },
  {
    d: 'PAUL DAVID CARY, 66',
    e: 'April 30, 2020',
  },
  {
    d: 'AURELIO CASILLA, 80, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'LENORA CASSO, 61, Queens',
  },
  {
    d: 'RICARDO CASTANEDA, 64, Manhattan',
    e: 'March 25, 2020',
  },
  {
    d: 'MARIANO CASTELLANOS, 64, The Bronx',
  },
  {
    d: 'ROSALIA CASTELLI, 63, Staten Island',
  },
  {
    d: 'ERESMILDO CASTIBLANCO, 70, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'ERESMILDO CASTIBLANCO, 71, Queens',
  },
  {
    d: 'HUBEL ISIDRO ONOFRE CASTILLO, 68, Queens',
    e: 'April 29, 2020',
  },
  {
    d: 'JUAN CASTILLO, 50, The Bronx',
  },
  {
    d: 'JUAN CASTILLO',
  },
  {
    d: 'HÉCTOR CASTILLO MENDEZ, The Bronx',
    e: 'April 15, 2020',
  },
  {
    d: 'SANTIAGO CASTRO',
  },
  {
    d: 'HENRY CASTRO, Queens',
  },
  {
    d: 'HENRY CASTRO',
  },
  {
    d: 'ULYSSESE “ULICES” CASTRO, Queens',
  },
  {
    d: 'CALOGERO CASTROGIOVANNI, 58, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    d: 'ERESMILDO CATIBLANCO',
  },
  {
    d: 'ANTHONY CAUSI, 48, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    d: 'HESRONNI ST. ANTHONY CAYENNE, 48, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'SALOME CAZARES, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    d: 'GERMANO CELANT, Manhattan',
    e: 'April 29, 2020',
  },
  {
    d: 'LOUIS JOSEPH CELI, 93, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'MARÍA ELSA CENTENO, 57, The Bronx',
    e: 'May 26, 2020',
  },
  {
    d: 'ELIAR CENTENO, 60',
  },
  {
    d: 'MARIA CORAZON CENTRON, 58, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'JOSEPH CERAMI',
  },
  {
    d: 'JOSEPH CERIALE',
  },
  {
    d: 'DENNIS CERRATO, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'JOSÉ R. CHABLA, Queens',
    e: 'April 8, 2020',
  },
  {
    d: 'THOMAS TECK KUWE CHAI, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    d: 'LYNFORD GEORGE CHAMBERS, 65, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'FAT CHAN, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    d: 'RUBY LAIWAN CHANG, 79, Manhattan',
    e: 'May 7, 2020',
  },
  {
    d: 'LUCILLE CHAPMAN',
  },
  {
    d: 'MAVIS CHARLES, 63, Brooklyn',
    e: 'May 12, 2020',
  },
  {
    d: 'LAIDEZE CHARLES, 60, Brooklyn',
  },
  {
    d: 'LAIDEZE CHARLES, 61, Brooklyn',
  },
  {
    d: 'ERIC CHASANOFF, 69',
    e: 'May 5, 2020',
  },
  {
    d: 'MANUEL “VICTOR” CHAVEZ, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    d: 'DANIEL CHAVEZ, Queens',
    e: 'April 21, 2020',
  },
  {
    d: 'JOSE A FUENTES CHAVEZ',
  },
  {
    d: 'ANTONIO CHECO, 67, Queens',
    e: 'April 1, 2020',
  },
  {
    d: 'MORDECHAI LEIB “MOTTEL” CHEIN, 82, Brooklyn',
  },
  {
    d: 'STANLEY I. CHERA, 77, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'GARY CHERRY SR., 56, Staten Island',
    e: 'April 4, 2020',
  },
  {
    d: 'ARNOLD CHERRY, 78, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    d: 'YEETANG CHEUNG',
  },
  {
    d: 'RICARDO CHILCHOA, Queens',
    e: 'April 17, 2020',
  },
  {
    d: 'KELLIE CHILDS, 54, The Bronx',
    e: 'April 11, 2020',
  },
  {
    d: 'RICHARD W. CHIN, 61, Staten Island',
    e: 'April 12, 2020',
  },
  {
    d: 'ROLANDO CHIRINOS, 79, Staten Island',
    e: 'April 17, 2020',
  },
  {
    d: 'ERNIE CHIU, 59, Queens',
  },
  {
    d: 'MEZAC CHOSSON, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    d: 'DIEGO CHOUTE, 54, Brooklyn',
  },
  {
    d: 'MUTABBIR CHOWDHURY',
    e: 'March 28, 2020',
  },
  {
    d: 'MOHAMMED CHOWDHURY, 54, Queens',
    e: 'April 19, 2020',
  },
  {
    d: 'DEWAN AFJOL CHOWDHURY, 69',
  },
  {
    d: 'DR. REZA CHOWDURY, 58, The Bronx',
    e: 'April 8, 2020',
  },
  {
    d: 'DAVID RONALD CHRISTIAN, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'RASHMI CHRISTIAN, 47, Brooklyn',
  },
  {
    d: 'SCOTT CHRISTIAN-RAGINS, 42, Manhattan',
    e: 'May 27, 2020',
  },
  {
    d: 'JANEE CHRISTIANSEN, 65, Queens',
    e: 'April 22, 2020',
  },
  {
    d: 'JIM CHRISTOFOROU, 67',
    e: 'May 6, 2020',
  },
  {
    d: 'SUSAN CHUANG, 42, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'SUSAN CHUANG, 42, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'MIGUEL CHUMPITAZ, 60, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'ERNIE CHUMPITAZ',
  },
  {
    d: 'MITTIE CLARK-JOHNSON, Brooklyn',
  },
  {
    d: 'RAUL CLARKE',
    e: 'March 31, 2020',
  },
  {
    d: 'LILLIAN CLOWNEY, 45',
  },
  {
    d: 'CHRISOPHER “CHRIS” COGNATO, 61, Staten Island',
    e: 'April 30, 2020',
  },
  {
    d: 'HAL STUART COHEN, 54, Manhattan',
    e: 'April 5, 2020',
  },
  {
    d: 'STUART COHEN, 73',
    e: 'April 8, 2020',
  },
  {
    d: 'ELY COHEN, 88, Staten Island',
    e: 'May 24, 2020',
  },
  {
    d: 'LEONA COHEN, 64, Brooklyn',
  },
  {
    d: 'RUTHANN COHEN-AIKENS, 65, Manhattan',
  },
  {
    d: 'ROMI COHN, 91',
    e: 'March 24, 2020',
  },
  {
    d: 'AVRAHAM HAKOHEN “ROMI” COHN, 92, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    d: 'MYLES COKER, 69, Manhattan',
    e: 'April 9, 2020',
  },
  {
    d: 'DENISE COLBERT, Manhattan',
    e: 'April 10, 2020',
  },
  {
    d: 'THERESA “TERRY” COLLINS, 87, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'RODOLFO COLON',
  },
  {
    d: 'CRISTIAN COLON',
  },
  {
    d: 'MARIA “MAYITO” COLÓN, 95, The Bronx',
  },
  {
    d: 'RICHARD “RICHIE” COMMESSO, 76, Staten Island',
    e: 'April 29, 2020',
  },
  {
    d: 'BERNEL CONNELLY, 89, Queens',
  },
  {
    d: 'BERNEL CONNELLY, 89, Queens',
  },
  {
    d: 'GILBERT CONSTANT, 48, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    d: 'NACHUM COOPER, 58, Brooklyn',
  },
  {
    d: 'RAYMOND DERRICK “RAY” COPELAND, 46, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'ADELINE COPPOLA, 97, The Bronx',
  },
  {
    d: 'NICK CORDERO, 41, Manhattan',
    e: 'July 5, 2020',
  },
  {
    d: 'KATHY CORNEJO',
    e: 'May 6, 2020',
  },
  {
    d: 'ROBERTO “MEG BK” CORREA',
  },
  {
    d: 'MARTHA CORTES, 66, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'RANULFO CORTEZ, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'PETER MICHAEL COSTA',
  },
  {
    d: 'JUDITH L. COULSTON, 75, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'EZEKIEL “ZEKE” COUSINS, 46, Manhattan',
    e: 'April 10, 2020',
  },
  {
    d: 'CURTIS COVINGTON',
  },
  {
    d: 'LINDY WILLIAM CRESCITELLI, 89, Staten Island',
    e: 'April 23, 2020',
  },
  {
    d: 'PABLO CRIOLO, 58',
  },
  {
    d: 'OLIVIA CRUM, 69, Queens',
  },
  {
    d: 'ANITA CRUMPTON',
    e: 'April 26, 2020',
  },
  {
    d: 'IRVING CRUZ, 64, The Bronx',
    e: 'April 13, 2020',
  },
  {
    d: 'PABLO CRUZ, 57, The Bronx',
    e: 'April 14, 2020',
  },
  {
    d: 'NELSON CRUZ, Queens',
  },
  {
    d: 'CEASAR CRUZ',
  },
  {
    d: 'ZACARIAS DE LA CRUZ, Queens',
  },
  {
    d: 'GILDA CRUZ',
  },
  {
    d: 'CARLOS CRUZ',
  },
  {
    d: 'NELSON E. CUEVAS, 80, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: "EILEEN O'SHEA CUMMINGS, 78, Staten Island",
    e: 'July 5, 2020',
  },
  {
    d: 'MICHAEL J. CUMMINS, 77, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    d: 'RICHARD CURRIE, 78, Staten Island',
    e: 'April 16, 2020',
  },
  {
    d: 'ZOILA CUZCO',
  },
  {
    d: 'OLIVER “BROTHER CYRUS” CYRUS, 61, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    d: 'RULX DAGUS, 65, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    d: 'RABBI CHAIM YECHEZKEL SHRAGA DAHAN, 56, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'JOHN DALESSANDRO',
  },
  {
    d: 'SALAJDIN DALIPI',
  },
  {
    d: 'JAMES EDWARD DALY, 59, Staten Island',
    e: 'May 6, 2020',
  },
  {
    d: 'JAMES DANIELS III, 53, Queens',
    e: 'May 1, 2020',
  },
  {
    d: 'WILLIAM “KIING SHOOTER” DANIELS, 24, Queens',
    e: 'May 5, 2020',
  },
  {
    d: 'KARISMA DARGAN, 33, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    d: 'BIDYUT B DAS, 68, Staten Island',
    e: 'April 21, 2020',
  },
  {
    d: 'WILBUR DAUGHTRY',
  },
  {
    d: 'THOMAS “BIJU” DAVID, 47, Queens',
    e: 'March 31, 2020',
  },
  {
    d: 'EDDY DAVIS, 79, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'PHILLIP DAVIS, 55, The Bronx',
    e: 'April 23, 2020',
  },
  {
    d: 'HORACE DAVIS',
  },
  {
    d: 'CHARLOTTE DAVIS',
  },
  {
    d: 'ISAIAH DE LA TORRE, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    d: 'ONIELO DE LUZIO, 90, Staten Island',
    e: 'April 6, 2020',
  },
  {
    d: 'CHRISTOPHER DEAN, 37',
    e: 'April 15, 2020',
  },
  {
    d: 'NOACH DEAR, 66, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    d: 'LAURA DECKELMAN, 66, Queens',
    e: 'May 5, 2020',
  },
  {
    d: 'DR. YDELFONSO DECOO, 70, Manhattan',
    e: 'April 23, 2020',
  },
  {
    d: 'ERNESTO “AUDIE” DELEON',
    e: 'April 13, 2020',
  },
  {
    d: 'PAULINE DELGADO, 69, Queens',
    e: 'April 1, 2020',
  },
  {
    d: 'ANATHOL DESAMOURS, 66, Brooklyn',
  },
  {
    d: 'MARIE CHARLOTTE DESTIN, 65, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    d: 'ANDRE “DRE” DEVORE, 55, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'VITO J. DI BENEDETTO, 87, Staten Island',
    e: 'March 28, 2020',
  },
  {
    d: 'YVETTE DIAMOND, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'ALBERTO DIAZ',
    e: 'March 21, 2020',
  },
  {
    d: 'DIONY DIAZ, 33, Staten Island',
    e: 'April 2, 2020',
  },
  {
    d: 'JUAN DIAZ, 41',
    e: 'April 3, 2020',
  },
  {
    d: 'VENANCIO “BENNY” DIAZ, 58, Staten Island',
    e: 'April 30, 2020',
  },
  {
    d: 'HORALIA PALESTINO DIAZ',
  },
  {
    d: 'YIRA DIAZ, 39, The Bronx',
  },
  {
    d: 'ROLANDO DIAZ',
  },
  {
    d: 'FREDDY DIAZ',
  },
  {
    d: 'MIGUEL DIAZ',
  },
  {
    d: 'NORMAN “NACHUM” DICK, 85, Brooklyn',
  },
  {
    d: 'DENNIS C. DICKSON, 62, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'BENJAMIN “BEN” DIGIOVANNI, 91, Staten Island',
    e: 'April 15, 2020',
  },
  {
    d: 'MARY DILLARD-CARTER, 72, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'DR. WILLIAM TULIO DIVALE, 78, Queens',
  },
  {
    d: 'DENNIS C. DIXON, 62',
    e: 'March 26, 2020',
  },
  {
    d: 'CEDRIC GEORGE DIXON, 48, The Bronx',
    e: 'March 28, 2020',
  },
  {
    d: 'CRYSTAL DIXON',
  },
  {
    d: 'MICHELLE DONALDOSN, Manhattan',
  },
  {
    d: 'VINICIO DONATO, 86, Queens',
  },
  {
    d: 'JOSEPH DONOFRIO, 72, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'ALISON DONOVAN, 61, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'ESSIE DORSEY',
  },
  {
    d: 'ARNULFO DORVILLE, 66, Brooklyn',
  },
  {
    d: 'MARTIN JOHN “DOUGIE” DOUGLAS, 71, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'REGINALD DOWDY, 72, Manhattan',
  },
  {
    d: 'RICKEY DOWTIN JR., 37, Staten Island',
  },
  {
    d: 'ROY DREISTADT, 89, Manhattan',
    e: 'April 5, 2020',
  },
  {
    d: 'STANLEY B. DREYER, 95, Manhattan',
    e: 'April 17, 2020',
  },
  {
    d: 'JOHN DUNSTON JR., Queens',
    e: 'April 14, 2020',
  },
  {
    d: 'NECOLE L. DURANT, 43, Brooklyn',
  },
  {
    d: 'DONNA DURKIN, 62, Staten Island',
    e: 'April 5, 2020',
  },
  {
    d: 'GERARD ANDERSON KIRBY DUVILLIER, 80, Staten Island',
    e: 'June 25, 2020',
  },
  {
    d: 'ARMAND D’AVIGNON, 75, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'TERRENCE EARLINGTON, 42, Brooklyn',
  },
  {
    d: 'LILLIAN ECKSTEIN, 93',
    e: 'April 12, 2020',
  },
  {
    d: 'MICHAEL N. EDELMAN, 72, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    d: 'GEORGE EDELSTEIN, 78, Manhattan',
    e: 'April 26, 2020',
  },
  {
    d: 'LARRY D. EDGEWORTH, 61, Manhattan',
    e: 'March 19, 2020',
  },
  {
    d: 'JOHN HENRY EDINGER',
  },
  {
    d: 'ROBERT EDMOND, Brooklyn',
  },
  {
    d: 'DAVID “DAVE” EDWARDS JR., 48, Queens',
    e: 'March 23, 2020',
  },
  {
    d: 'DEIDRE EDWARDS',
    e: 'April 6, 2020',
  },
  {
    d: 'STEVEN MARK EDWARDS, 73, Manhattan',
    e: 'April 8, 2020',
  },
  {
    d: 'WAYNE EDWARDS, Queens',
  },
  {
    d: 'SAADYA EHRENPREIS, 36, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    d: 'MICHAEL ELGIN, 82, Manhattan',
    e: 'April 30, 2020',
  },
  {
    d: 'RAFAEL ELI, 68, Manhattan',
    e: 'April 16, 2020',
  },
  {
    d: 'SCOTT ELIJAH, 67',
    e: 'March 29, 2020',
  },
  {
    d: 'BERTINA ELLIS, 97',
    e: 'April 8, 2020',
  },
  {
    d: 'JEAN EMILE, Brooklyn',
  },
  {
    d: 'YESHAYA ENGLARD, 65, Brooklyn',
    e: 'March 18, 2020',
  },
  {
    d: 'ADALILA M. ENGSONG, 78',
  },
  {
    d: 'DAVID ERNST, 74',
  },
  {
    d: 'GLORIA MARIA ESPERTIN, 65, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'ALFREDO ESPINAL, The Bronx',
  },
  {
    d: 'FELIX ESPINAL',
  },
  {
    d: 'JORGE ERASMO ZAMBRANO ESPINOSA, 77, The Bronx',
    e: 'April 13, 2020',
  },
  {
    d: 'ANGEL ESPINOZA',
  },
  {
    d: 'MARGARET ESSELBORN, 72, Staten Island',
    e: 'May 3, 2020',
  },
  {
    d: 'DR. SUNDAY ESTEKYME, 57, The Bronx',
  },
  {
    d: 'THELMA ESTEVEZ, 72, Manhattan',
    e: 'April 13, 2020',
  },
  {
    d: 'ROSITA ESTINFIL, 61, Brooklyn',
  },
  {
    d: 'ALFREDO ESTRADA',
  },
  {
    d: 'SABRINA ALICIA EUBANKS, 53, Queens',
  },
  {
    d: 'ELMER ROMEL EUCEDA',
  },
  {
    d: 'LUCIUS EWAN, 82, The Bronx',
    e: 'March 25, 2020',
  },
  {
    d: 'MARIA FABBRICINI, 77, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    d: 'SUZETTE FACEY, Queens',
    e: 'April 17, 2020',
  },
  {
    d: 'ROBERT THOMAS FAHS, 65',
    e: 'May 7, 2020',
  },
  {
    d: 'NUPU FAKHRUZZAMAN, Queens',
    e: 'May 10, 2020',
  },
  {
    d: 'STEVE FALCO, 36',
    e: 'April 26, 2020',
  },
  {
    d: 'STEVANUS “STEFAN” FARIZ, 41, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'VICTOR FATTORUSSO',
  },
  {
    d: 'LEVI FAULK, 78, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'JOSEPH FEINGOLD, 97, Manhattan',
    e: 'April 15, 2020',
  },
  {
    d: 'JOSEPH FELDER',
  },
  {
    d: 'IRWIN FELDMAN, 54, Queens',
    e: 'April 4, 2020',
  },
  {
    d: 'DONALD FELDSTEIN, 88, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'MIGUEL J. FELICIANO, 55, Queens',
  },
  {
    d: 'MIQUEL FELMINE',
  },
  {
    d: 'WILLIAM FRANK “WILLIE” FELONG, 80, Staten Island',
    e: 'May 18, 2020',
  },
  {
    d: 'KAREN FELTON, 63, The Bronx',
  },
  {
    d: 'TAI-DRIN FENG',
  },
  {
    d: 'LILA A. FENWICK, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'SHARAN FERNANDEZ, The Bronx',
    e: 'April 18, 2020',
  },
  {
    d: 'HARRY FERNANDEZ',
  },
  {
    d: 'JAIME “JIMMY” FERNANDO, 62, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'DEBRA FERRARI, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    d: 'JOHN STEVEN “JOHNNY” FERRARI, 67, Staten Island',
    e: 'April 10, 2020',
  },
  {
    d: 'LOUIS FERRER',
  },
  {
    d: 'JOHN L. FERRI JR., 59, Manhattan',
    e: 'May 13, 2020',
  },
  {
    d: 'ANITA FIAL, 87, Manhattan',
    e: 'April 9, 2020',
  },
  {
    d: "LENIN RICARDO 'LENNY' FIERRO, 43, Queens",
    e: 'March 31, 2020',
  },
  {
    d: 'ALAN AARON FINDER, 72',
    e: 'March 24, 2020',
  },
  {
    d: 'WAYNE FINGALL, Brooklyn',
  },
  {
    d: 'WAYNE R. FINGALL, 59, Brooklyn',
  },
  {
    d: 'HARVEY FINKE, 85, Manhattan',
    e: 'April 13, 2020',
  },
  {
    d: 'MAZEL FINKENSTEIN, 85',
  },
  {
    d: 'DAVID FINN, 66, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'DR. DAVID WALTER FINN, 66, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'HERBERT F. “HERB” FISCHER, 89',
    e: 'May 3, 2020',
  },
  {
    d: 'MARTIN FLANZBAUM, 88, Staten Island',
  },
  {
    d: 'JOSE FLORES, 56, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'OMARA FLORES, 55, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'GERMAN RAMALES FLORES',
    e: 'April 10, 2020',
  },
  {
    d: 'REMIGIO ROSALES FLORES, 63, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    d: 'VICENTA FLORES, Queens',
  },
  {
    d: 'CLEMENTINA MORA FLORES',
  },
  {
    d: 'CHRISTIAN FLORES DELIM, 46',
  },
  {
    d: 'URSULA FLOWERS, The Bronx',
  },
  {
    d: 'PHILIP FOGLIA, 69, The Bronx',
    e: 'April 21, 2020',
  },
  {
    d: 'STANLEY FONG, 47, Queens',
  },
  {
    d: 'CATHERINE FONT, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'LIZ FONTANEZ',
  },
  {
    d: 'LOUISE [UNKNOWN] “[UNKNOWN]” FONTAO, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    d: 'ARTHUR FORTE, 80, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'HELEN FORTE, 79, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    d: 'DONNY FOSTNER, 34',
    e: 'April 2, 2020',
  },
  {
    d: 'DENNIS FOX, 63, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    d: 'NELSON MANUEL FRANKY, 79, The Bronx',
    e: 'April 14, 2020',
  },
  {
    d: 'CAROLYN FRAZIER, 71, Queens',
    e: 'March 27, 2020',
  },
  {
    d: 'ALVIN FRAZIER',
  },
  {
    d: 'LEMUEL FRAZIER',
  },
  {
    d: 'WINIFRED FREDERICKS, 92, Staten Island',
  },
  {
    d: 'WILLIE FREEMAN',
  },
  {
    d: 'YAAKOV SHMUEL FREILACH, 66, Brooklyn',
  },
  {
    d: 'RENEE FRENCH, 54, Manhattan',
    e: 'May 19, 2020',
  },
  {
    d: 'GUILLERMO “WILLY” FRESTAN, The Bronx',
    e: 'March 28, 2020',
  },
  {
    d: 'GUILLERMO FRESTAN, 51, The Bronx',
    e: 'March 28, 2020',
  },
  {
    d: 'KEVIN FRETT',
    e: 'April 11, 2020',
  },
  {
    d: 'AVROHOM SHIYA FREUND, 63, Brooklyn',
    e: 'March 20, 2020',
  },
  {
    d: 'RABBI YISROEL FRIEDMAN, 83, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    d: 'YITZ “ADAM” FRIEDMAN, 75, Manhattan',
    e: 'April 20, 2020',
  },
  {
    d: 'DR. ARTHUR FRIEDMAN, 62',
    e: 'April 30, 2020',
  },
  {
    d: 'FELICIA FRIEDMAN, 94, The Bronx',
    e: 'May 19, 2020',
  },
  {
    d: 'BETTY N/A “N/A” FRUNZI (NEE RAMONDETTA), 85, Staten Island',
    e: 'April 19, 2020',
  },
  {
    d: 'JAIME E. FUENTES, 61, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'FREDDY FUENTES, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'PATRICIA FUENTES, 61',
    e: 'April 17, 2020',
  },
  {
    d: 'CONCEPTIONE FUENTES',
  },
  {
    d: 'VALARIE FULTON, 54, The Bronx',
    e: 'April 3, 2020',
  },
  {
    d: 'JANEE MICHELLE FUNCHESS, 51, The Bronx',
  },
  {
    d: 'DR. FRANK GABRIN, 60, Manhattan',
    e: 'March 31, 2020',
  },
  {
    d: 'MOHAMMED GAFFAR',
  },
  {
    d: 'SADIE GAGLIANO, 89, Staten Island',
    e: 'May 5, 2020',
  },
  {
    d: 'MARIE GAGLIANO, 62, The Bronx',
  },
  {
    d: 'ELY GALAN, Brooklyn',
  },
  {
    d: 'ERLIN “FLINSTONE” GALARZA, 66, The Bronx',
  },
  {
    d: 'FERNANDO GALEANO, 61, Brooklyn',
  },
  {
    d: 'FERNANDO GALLEGO',
  },
  {
    d: 'ROBERT GALLETTA II, 53, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    d: 'NECITAS GALURA',
  },
  {
    d: 'EDUARDO L. GANCAYCO, 62, Queens',
    e: 'May 6, 2020',
  },
  {
    d: 'ANDRE GANTHIER',
  },
  {
    d: 'DANIEL M. GARCIA, 70, The Bronx',
    e: 'June 4, 2020',
  },
  {
    d: 'MERCEDES GARCIA, 65',
  },
  {
    d: 'OLGA GARCIA, The Bronx',
  },
  {
    d: 'HECTOR GARCIA, 57',
  },
  {
    d: 'LEON GARRETT',
  },
  {
    d: 'RHONDA GARVIN, 63, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    d: 'FERNANDO GARZON, 42, The Bronx',
    e: 'April 15, 2020',
  },
  {
    d: 'ELYA GELBERT, 97, Brooklyn',
  },
  {
    d: 'BORUCH GELFAND, 87, Brooklyn',
  },
  {
    d: 'MIGUEL GELPI, 82, Manhattan',
    e: 'May 25, 2020',
  },
  {
    d: 'FANNY GELPIERYN, 81, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'PATRICIA GEORGE, 67, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'LUCIEN GEORGE SR., 82',
    e: 'April 5, 2020',
  },
  {
    d: 'LUCIEN GEORGE SR.',
  },
  {
    d: 'MICHAEL GERACI, 47',
    e: 'April 14, 2020',
  },
  {
    d: 'MICHAEL GERACI, 47, Queens',
  },
  {
    d: 'WILLIAM H. “BILL” GERDTS, 91',
    e: 'April 14, 2020',
  },
  {
    d: 'HAROLD GERMAIN, Brooklyn',
  },
  {
    d: 'FERDI AMAURY GERMAN, 41, The Bronx',
    e: 'April 9, 2020',
  },
  {
    d: 'ALEXANDER GIGUEREDO',
    e: 'March 25, 2020',
  },
  {
    d: 'KENNETH GILLESPIE',
  },
  {
    d: 'DENNY GILLIAM, 53, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    d: 'HERSHUL GINN',
  },
  {
    d: 'LOTTIE LUCILLE GLADDEN, 68, Brooklyn',
    e: 'May 18, 2020',
  },
  {
    d: 'PHOEBE GLADSTONE, 95, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'MILDRED GLASER, 93, Queens',
  },
  {
    d: 'GAIL GLASGOW',
  },
  {
    d: 'JAMES “JIMMY” GLENN, 89',
    e: 'May 7, 2020',
  },
  {
    d: 'JIMMY GLENN, 89, Manhattan',
  },
  {
    d: 'GEORGIANNA GLOSE, 73, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    d: 'JERZY GLOWCZEWSKI, 97, Manhattan',
    e: 'April 13, 2020',
  },
  {
    d: 'ANSTAY GODDARD, 67, Queens',
    e: 'April 16, 2020',
  },
  {
    d: 'CAREN GOFF',
  },
  {
    d: 'RABBI YAAKOV MORDECHAI GOLDBERG, 87, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'JOEL S. GOLDBERG, 69, Staten Island',
    e: 'May 6, 2020',
  },
  {
    d: 'RABBI BRUCE GOLDMAN, 84, Manhattan',
    e: 'April 2, 2020',
  },
  {
    d: 'LEV GOLUBOV, 58, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'JOEL GOMEZ, 37, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    d: 'LUCIANO GOMEZ, 82, Queens',
  },
  {
    d: 'SAUL GOMEZ, The Bronx',
  },
  {
    d: 'LUCIANO GOMEZ',
  },
  {
    d: 'MICHAEL GOMEZ',
  },
  {
    d: 'GIL GONZALES',
  },
  {
    d: 'JOSE GONZALEZ, 68, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    d: 'ELENA GONZALEZ, 68, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'ALFREDO MENESES GONZALEZ, 59, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'MARIA E. “TELECO” GONZALEZ',
    e: 'April 13, 2020',
  },
  {
    d: 'MARIA BERTHA GONZALEZ',
    e: 'April 14, 2020',
  },
  {
    d: 'INEZ “MAMA T” GONZALEZ, 55, Staten Island',
    e: 'April 20, 2020',
  },
  {
    d: 'FRANKY GONZALEZ, 59',
    e: 'May 15, 2020',
  },
  {
    d: 'NEREIDA GONZALEZ, The Bronx',
    e: 'July 20, 2020',
  },
  {
    d: 'JOSE MARTIN ROMERO GONZALEZ',
  },
  {
    d: 'MARIA GONZALEZ',
  },
  {
    d: 'ANDREW “ANDY” GONZÁLEZ, 69, The Bronx',
    e: 'April 9, 2020',
  },
  {
    d: 'VALERIE R. GOODLEY, 53, Brooklyn',
  },
  {
    d: 'DR. JAMES T. GOODRICH, 73',
    e: 'March 30, 2020',
  },
  {
    d: 'EMMA GOOLSBY, 56, Manhattan',
    e: 'April 14, 2020',
  },
  {
    d: 'ZELIG GOTTLIEB, 71, Brooklyn',
  },
  {
    d: 'DENNIS GOULDING, Brooklyn',
  },
  {
    d: 'ANTHONY GRAFFIGNA, 60, Staten Island',
    e: 'May 9, 2020',
  },
  {
    d: 'ISAAC GRAHAM, 66, Manhattan',
    e: 'March 22, 2020',
  },
  {
    d: 'GREGORY GRAHAM, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'GREGORY GRAHAM',
  },
  {
    d: 'KEVIN GRAIANI, 56, The Bronx',
    e: 'March 30, 2020',
  },
  {
    d: 'BEATRICE “BEA” GRANBERG, 79, Staten Island',
    e: 'May 9, 2020',
  },
  {
    d: 'MIGUEL “THE PASTA KING” GRANDE, 52, Queens',
    e: 'April 24, 2020',
  },
  {
    d: 'JENNIE “AUNT JENNIE” GRAZIANO, 93, Brooklyn',
    e: 'March 22, 2020',
  },
  {
    d: 'ARTHUR LEE “EL DORADO; THE GREEN MILE” GREEN, 49, The Bronx',
    e: 'March 23, 2020',
  },
  {
    d: 'JAMES GREEN',
  },
  {
    d: 'GARRY GREENBERG, 68, Manhattan',
    e: 'April 25, 2020',
  },
  {
    d: 'JACOB J. GREENBERG, Brooklyn',
  },
  {
    d: 'ROBERT GREENBERGER, 89',
    e: 'March 23, 2020',
  },
  {
    d: 'TONY GREER, 62, Manhattan',
  },
  {
    d: 'HILLARY GREGG, 73, Queens',
    e: 'May 3, 2020',
  },
  {
    d: 'CLAUDE GREGOIRE',
  },
  {
    d: 'JOHN “JACK” GREGORIE, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    d: 'NICHOLAS A. GRIECO, 83, Staten Island',
    e: 'March 26, 2020',
  },
  {
    d: 'EMMA L. GRIFFIN, 57, Brooklyn',
    e: 'March 21, 2020',
  },
  {
    d: 'EUGENE GRIFFIN',
  },
  {
    d: 'HENRY GRIMES, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    d: 'ERIC GRIMES, 49',
  },
  {
    d: 'DEBRA GRIMSLEY, 65',
  },
  {
    d: 'RABBI LEIBEL GRONER, 88, Brooklyn',
  },
  {
    d: 'HARRIET “HANI” GROSSMAN, 91, The Bronx',
    e: 'May 16, 2020',
  },
  {
    d: 'MOSHE GRUNWALD, 93, Brooklyn',
  },
  {
    d: 'SEGUNDO ESPIRO GUAMAN, Queens',
    e: 'April 21, 2020',
  },
  {
    d: 'MARIA ZOILA GUAMAN, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    d: 'JORGE GUAMAN',
  },
  {
    d: 'EDWIN GUAMAN, Queens',
  },
  {
    d: 'EDWIN P. GUAMAN',
  },
  {
    d: 'RICHARD J. GUASTELLA, 73, Staten Island',
    e: 'April 9, 2020',
  },
  {
    d: 'HENRI M. GUERON, 83, Manhattan',
    e: 'May 1, 2020',
  },
  {
    d: 'ALI DENNIS GUILLERMO, 44',
    e: 'April 7, 2020',
  },
  {
    d: 'DANIEL GUILLERMO',
  },
  {
    d: 'JOANALEE GUINESS, 61',
  },
  {
    d: 'MOLLIE “GRANDMA DUKES” GUSTINE, 90, Queens',
  },
  {
    d: 'RENE GUTIERREZ, 44',
    e: 'April 12, 2020',
  },
  {
    d: 'RAMON GUTIERREZ, 62, The Bronx',
  },
  {
    d: 'HUGO GUTIERREZ',
  },
  {
    d: 'HUGO GUTIERREZ',
  },
  {
    d: 'REUBEN GUTOFF, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'MAURILLO GUZMAN, Queens',
    e: 'April 4, 2020',
  },
  {
    d: 'KOFI GYAMI',
    e: 'April 27, 2020',
  },
  {
    d: 'SHMUEL HAKOHEN MILLER, Brooklyn',
  },
  {
    d: 'MICHAEL HALKIAS, 82, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    d: 'RONALD HALL',
  },
  {
    d: 'LEROY “POPS” HAMMETT, 71, The Bronx',
    e: 'March 30, 2020',
  },
  {
    d: 'WYNN HANDMAN, 97, Manhattan',
    e: 'April 11, 2020',
  },
  {
    d: 'STEVE HANN, 67, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'LINDA HANSEN, 78, Staten Island',
    e: 'May 15, 2020',
  },
  {
    d: 'NAZMUL HAQUE, 56, Queens',
  },
  {
    d: 'MOHAMMED HAQUE, 60',
  },
  {
    d: 'STEPHEN JOEL HARDING, 66, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'REV. SIDNEY HARGRAVE, 70, The Bronx',
  },
  {
    d: 'SAMUEL “SAM” HARGRESS JR., 84, Manhattan',
    e: 'April 10, 2020',
  },
  {
    d: 'EARL HARRIS',
  },
  {
    d: 'CHARLES HARRIS',
  },
  {
    d: 'OLSON HART, 69, The Bronx',
  },
  {
    d: 'IRENA HARTELL, 68',
    e: 'April 12, 2020',
  },
  {
    d: 'AL HAVELIN',
    e: 'April 11, 2020',
  },
  {
    d: 'BARUCH HAVIV, 82',
    e: 'May 27, 2020',
  },
  {
    d: 'CONNIE JONES HAWKINS, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'EVA KONRAD HAWKINS, 90, The Bronx',
    e: 'April 18, 2020',
  },
  {
    d: 'WILLIAM HAYES, 61, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'PAMELA EVETTE HAYNES, 60, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'JANET HEADLEY',
  },
  {
    d: 'WILLIAM HELMREICH, 74',
    e: 'March 28, 2020',
  },
  {
    d: 'ANA ISABEL HENAO, 75, Queens',
  },
  {
    d: 'ALVIN HENDRICKS',
  },
  {
    d: 'TAMMY HENDRIKS, 50, Queens',
  },
  {
    d: 'STANLEY HENESON, 66, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    d: 'JOSEPH C. “JOE” HENNESSY, 82, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'JOSEMIQUEL “YOYA” HENRIQUEZ',
    e: 'April 11, 2020',
  },
  {
    d: 'MARIANNE “PEACHY” HERLIHY, 79, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'BAMBANG HERMANTO, 69, Queens',
  },
  {
    d: 'ARTURO FRANCISCO HERNANDEZ, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'GUSTAVO ADOLFO SALAS HERNANDEZ SR., 34, Queens',
    e: 'April 14, 2020',
  },
  {
    d: 'VICTOR VAZQUEZ HERNANDEZ, 52, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    d: 'ANTHONY HERNANDEZ, 66, The Bronx',
  },
  {
    d: 'ABIGIAL HERNANDEZ, 75, Brooklyn',
  },
  {
    d: 'ADRIAN HERNANDEZ LOPEZ, 38, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'ALEJANDRO HERNÁNDEZ, 46, Queens',
    e: 'June 13, 2020',
  },
  {
    d: 'HAILEY MARIE HERRERA, 25, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'MARCOS HERRERA',
  },
  {
    d: 'MICHAEL WALLACE HERRON, 73',
    e: 'May 14, 2020',
  },
  {
    d: 'CECIL HEWITT, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    d: 'CAROLE ANN HEWITT HAMILTON, 73',
    e: 'April 12, 2020',
  },
  {
    d: 'PAMELA HICKS-LEWIS, 53, Brooklyn',
  },
  {
    d: 'CARLOS ANDRADE HIDALGO',
  },
  {
    d: 'JOSEPHINE HILL, Manhattan',
    e: 'April 25, 2020',
  },
  {
    d: 'RICARDO HILL',
    e: 'May 14, 2020',
  },
  {
    d: 'CLINTON HINDS',
    e: 'April 29, 2020',
  },
  {
    d: 'YOSEF HIRSCH, 92, Brooklyn',
  },
  {
    d: 'ALLEN L. HIRSCHMAN, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    d: 'ARTHUR HIRSHKOWITZ, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    d: 'SHMUEL HOCH, 91, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    d: 'LEON SANDY HODGE, 72, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    d: 'DR. DONALD B. “DON” HOFFMAN, 80, The Bronx',
  },
  {
    d: 'THOMAS J. “TOMMY, TOM” HOGAN, 54, Staten Island',
    e: 'April 3, 2020',
  },
  {
    d: 'LIONEL HOGAN, Queens',
  },
  {
    d: 'LIONEL HOGAN',
  },
  {
    d: 'ED HOLDER, Brooklyn',
  },
  {
    d: 'MICHAEL D. HOLLEY, 49',
  },
  {
    d: 'PHYLLIS SUSAN HOLLEY, 61',
  },
  {
    d: 'BABETTE SOLON HOLLISTER, 87, Manhattan',
    e: 'April 14, 2020',
  },
  {
    d: 'MIRIAM HOMNICK, 82, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    d: 'MOSHE HOMNICK, 88, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    d: 'RAYMOND “RAY” HOOBLER, 78',
    e: 'April 29, 2020',
  },
  {
    d: 'SEAN HOOK, 23, Staten Island',
    e: 'April 20, 2020',
  },
  {
    d: 'IRVING HOPPENWASSER, 87',
    e: 'May 17, 2020',
  },
  {
    d: 'WILLIAM E. HORNER, 87',
    e: 'April 19, 2020',
  },
  {
    d: 'DAVID HOROWITZ, 77',
    e: 'April 6, 2020',
  },
  {
    d: 'YISROEL HOROWITZ, 72, Brooklyn',
  },
  {
    d: 'LATIFA HOSKINS, 46, The Bronx',
    e: 'April 16, 2020',
  },
  {
    d: 'MD SHIPON HOSSAIN',
    e: 'March 29, 2020',
  },
  {
    d: 'ADEM HOT, 78, Queens',
  },
  {
    d: 'MARILYN HOWARD, 53, Queens',
    e: 'April 4, 2020',
  },
  {
    d: 'CHRISTOPHER N. HOWARD, 52',
    e: 'May 3, 2020',
  },
  {
    d: 'LAURA HOWELL, The Bronx',
    e: 'April 27, 2020',
  },
  {
    d: 'CLIFTON HOWELL, The Bronx',
    e: 'April 27, 2020',
  },
  {
    d: 'ANNABEL HOWELL, Brooklyn',
  },
  {
    d: 'YUEN KAN HSU, 90, Manhattan',
    e: 'April 18, 2020',
  },
  {
    d: 'CECILIA WANG “CC” HSU, 84, Manhattan',
  },
  {
    d: 'MIRZA HUDA, 44, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'MONIRUL HUDA, Queens',
  },
  {
    d: 'YOLANDA HUERTERO, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    d: 'YOLANDA HUERTERO, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    d: 'MI LYNN HUNT, 48, Queens',
    e: 'April 4, 2020',
  },
  {
    d: 'MOHAMMAD ZAKIR HUSSEIN, Queens',
  },
  {
    d: 'AKMOL HUSSEIN (TANTU), 60, Brooklyn',
  },
  {
    d: 'MARTIN IBARRA',
  },
  {
    d: 'MOHAMMAD IBRAHIM, 76, Brooklyn',
  },
  {
    d: 'PIETRO FABRICIO IDROVO VAZA, Queens',
  },
  {
    d: 'LEONARD D. IMPERIO, 79, The Bronx',
    e: 'March 25, 2020',
  },
  {
    d: 'BULGER L “IRV” IRVING JR., 86, Staten Island',
  },
  {
    d: 'SHIRAJUL ISLAM, 58',
    e: 'April 4, 2020',
  },
  {
    d: 'BABUL ISLAM, 58, Queens',
  },
  {
    d: 'LEROI ISOM',
  },
  {
    d: 'VADIM IVLEV, 50, Staten Island',
  },
  {
    d: 'KALIN IZEVBIZUA, 43, Queens',
  },
  {
    d: 'CHRIS JACKOWSKI',
  },
  {
    d: 'HENRY ARTHUR JACKSON, 71, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'PATRICIA HARRIET “MS. PAT OR MOMMA CONDOM” JACKSON, 67, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'VIRGINIA JACKSON, 78, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    d: 'RUSSELL JACKSON',
  },
  {
    d: 'EMMANUEL “JAKE THE SNAKE” JACOB, 60, Brooklyn',
  },
  {
    d: 'MARIE JACQUES, The Bronx',
  },
  {
    d: 'MOHAMMED JAFOR, 56, The Bronx',
    e: 'April 1, 2020',
  },
  {
    d: 'SAMEER JALEEL, 59, Queens',
  },
  {
    d: 'DAVID JAMAL, 66, Brooklyn',
  },
  {
    d: 'LESTER JAMES, 76',
    e: 'April 16, 2020',
  },
  {
    d: 'CLAUDE JAMES, The Bronx',
  },
  {
    d: 'JAY JANKELEWICZ, 31, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'MANUEL R. JARA',
    e: 'April 19, 2020',
  },
  {
    d: 'JORGE JARA, 62, Queens',
  },
  {
    d: 'JESSICA JARAMILLO, Queens',
  },
  {
    d: 'MORENA TORREDES “TITA” JAVINES, Queens',
    e: 'April 18, 2020',
  },
  {
    d: 'CEYBIL “SWEET SABLE” JEFFERIES, 57, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    d: 'SABRINA “BB” JEFFERSON, 63, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'BESSIE MAE JEFFRESS, 93',
    e: 'May 15, 2020',
  },
  {
    d: 'MILENA JELINEK, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    d: 'RABBI DAVID JEMAL, 70, Brooklyn',
  },
  {
    d: 'NELSON JENKINS',
  },
  {
    d: 'ANICK “NICK” JESDANUN, 51, Manhattan',
    e: 'April 2, 2020',
  },
  {
    d: 'PETER JI, 49, Manhattan',
  },
  {
    d: 'YESENIA MARIA JIMENEZ, The Bronx',
    e: 'March 28, 2020',
  },
  {
    d: 'FRANCISCO ARIZA JIMENEZ, Queens',
  },
  {
    d: 'RONNIE JIMENO, 59, Brooklyn',
  },
  {
    d: 'BETTY JOBLOVE, 90, The Bronx',
    e: 'April 10, 2020',
  },
  {
    d: 'CHRISTOPHER ALAN JOE, 45, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'ALEYAMMA JOHN, 65, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'DAVID JOHNSON, 49, Brooklyn',
    e: 'March 25, 2020',
  },
  {
    d: 'RALPH JOHNSON, 58, The Bronx',
    e: 'March 31, 2020',
  },
  {
    d: 'CHERYL JOHNSON, 61, Queens',
    e: 'April 25, 2020',
  },
  {
    d: 'ROBERT JOHNSON, 81, Manhattan',
    e: 'June 14, 2020',
  },
  {
    d: 'CARLYLE JOHNSON',
  },
  {
    d: 'DAVID JOHNSON',
  },
  {
    d: 'NOREEN JOHNSON',
  },
  {
    d: 'SHELLY JOHNSON',
  },
  {
    d: 'JOAN JOHNSON',
  },
  {
    d: 'ALFRED JOLLON, 86, Manhattan',
  },
  {
    d: 'JAMES JONES',
  },
  {
    d: 'JOHN JONES',
  },
  {
    d: 'DONALD JONES',
  },
  {
    d: 'HORATIO JORDAN, 60',
  },
  {
    d: 'PEARSON JORDAN, 69, Brooklyn',
  },
  {
    d: 'LELAND JORDAN',
  },
  {
    d: 'DEBORAH C. JOSEPH-SAUNDERS, 65, Staten Island',
  },
  {
    d: 'JOSEPH E. “JOE” JOYCE, 74, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'JOHNNY JOYNER',
  },
  {
    d: 'ARNELA JUANICO, 45, Queens',
    e: 'June 2, 2020',
  },
  {
    d: 'SANTOS JUAREZ, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'ALBA JULIANO, 73, Staten Island',
    e: 'March 25, 2020',
  },
  {
    d: 'JOSEPH JURCZAK, 60, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'ROGELIO JUSTIANIANO SR.',
  },
  {
    d: 'BETZALEL KAHAN, 90, Brooklyn',
  },
  {
    d: 'PHILIP KAHN, 100',
    e: 'April 17, 2020',
  },
  {
    d: 'MALKA KALMANOWITZ, 94, Brooklyn',
  },
  {
    d: 'SAKINAH KAMA, 46',
    e: 'April 16, 2020',
  },
  {
    d: 'DR. STEPHEN KAMHOLZ, 72, Brooklyn',
    e: 'June 11, 2020',
  },
  {
    d: 'BRAHM KANCHIBHOTLA, 66, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'BRAHM KANCHIBHOTLA, 66, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'STEPHEN W. KANN, 93, Queens',
    e: 'March 30, 2020',
  },
  {
    d: 'KOSTA KASIMIS, 84, Manhattan',
    e: 'March 30, 2020',
  },
  {
    d: 'ARYEH “LEIBEL” KATZ, 57, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    d: 'LABEL “(LEIBEL)” KATZ, Brooklyn',
  },
  {
    d: 'ALEXANDER KAUDERS, Brooklyn',
  },
  {
    d: 'SHARON KAUFMAN, 63, Staten Island',
    e: 'April 6, 2020',
  },
  {
    d: 'BARRY KAYE, 91, Manhattan',
    e: 'April 21, 2020',
  },
  {
    d: 'CAROLE MAE KAYE, 87, Manhattan',
    e: 'April 26, 2020',
  },
  {
    d: 'VINCENT KELLEHER, 71, Staten Island',
    e: 'April 14, 2020',
  },
  {
    d: 'KIOUS JORDAN “JAMES; JAMIE” KELLY, 48, Manhattan',
    e: 'March 24, 2020',
  },
  {
    d: 'JOSEPH F. KELLY JR., 81, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'GEORGE WILLIAM KELLY, 92, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'KAREN KELLY, 64, The Bronx',
    e: 'April 11, 2020',
  },
  {
    d: 'ALAA M. KHALIL, 60, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'MOHAMMAD SAIFUL HAYDER “AJAD” KHAN, 49',
    e: 'April 5, 2020',
  },
  {
    d: 'AZHAR [UNKNOWN] “[UNKNOWN]” KHAN, 61, Staten Island',
    e: 'April 7, 2020',
  },
  {
    d: 'ADVOCATE HAYAT ALI KHAN, Queens',
  },
  {
    d: 'SAIFUL KHAN, 54, Queens',
  },
  {
    d: 'SYED KHATUN, Queens',
  },
  {
    d: 'EDWARD DESMOND KHELAWAN, 65, Queens',
    e: 'April 28, 2020',
  },
  {
    d: 'MORTEZA KHOSROVA, 95, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'EDWARD D. KILLEA, 89, Staten Island',
    e: 'April 12, 2020',
  },
  {
    d: 'RAKKHON KIM, 50, The Bronx',
    e: 'March 25, 2020',
  },
  {
    d: 'GWENDOLYN KING, 58',
    e: 'March 30, 2020',
  },
  {
    d: 'CURWIN KING, 59, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    d: 'DEBORAH KING',
  },
  {
    d: 'CAROL KING-GRANT, 58, Queens',
  },
  {
    d: 'DORIS KIRKLAND, 56, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    d: 'LEWIS J. KIRSCH, 57',
    e: 'April 15, 2020',
  },
  {
    d: 'JOSEPH M. KISSANE, 89, Manhattan',
    e: 'April 19, 2020',
  },
  {
    d: 'ALEX KLEIN, 70',
    e: 'March 28, 2020',
  },
  {
    d: 'YOSEF TZVI KLEIN, 50, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    d: 'FRED KLEIN, 85, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'RICHARD G. KLEIN SR., 86, Staten Island',
    e: 'June 4, 2020',
  },
  {
    d: 'RICHARD G. KLEIN SR., 86, Staten Island',
    e: 'June 4, 2020',
  },
  {
    d: 'CHARLES KLEINBERG, 71, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    d: 'RABBI ARON HERSH KLEINMAN, 60, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    d: 'HARVEY KNIGHT',
    e: 'April 23, 2020',
  },
  {
    d: 'FELICIA KNIGHT',
  },
  {
    d: 'PATRICK ANTONIO KNIGHT, The Bronx',
  },
  {
    d: 'YUPADEE KOBKULBOONSIRI, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    d: 'ANN CHEEVERS KOLB, 78, Manhattan',
    e: 'April 3, 2020',
  },
  {
    d: 'NATHAN KOLODNEY, 80',
    e: 'May 24, 2020',
  },
  {
    d: 'SHLOMO TZVI KONIG, 73, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'LEE KONITZ, 92, Manhattan',
    e: 'April 15, 2020',
  },
  {
    d: 'DEBORAH KORCZYNSKI, 64, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'ANDREAS “ANDY” KOUTSOUDAKIS SR., 59, Staten Island',
    e: 'March 27, 2020',
  },
  {
    d: 'ADAM KOVACS, 72, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'MARSHA KRAMER, 74, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    d: 'MADELINE KRIPKE, 76, Manhattan',
    e: 'April 25, 2020',
  },
  {
    d: 'MELISSA MARIE KRUPPA, 50, Staten Island',
    e: 'June 20, 2020',
  },
  {
    d: 'RABBI MOSHE KWALBRUN, 85, Queens',
  },
  {
    d: 'JAY-NATALIE LA SANTA, The Bronx',
    e: 'April 20, 2020',
  },
  {
    d: 'KHALID LABDUL AHAD, 77',
  },
  {
    d: 'DARYL LABORDE, 56',
    e: 'April 4, 2020',
  },
  {
    d: 'NEVIE LACAYO, 41',
    e: 'May 25, 2020',
  },
  {
    d: 'MAURICE LACEY, 35, Queens',
  },
  {
    d: 'SOOKNARINE LACHMINARAIN',
  },
  {
    d: 'YVES LAFOND, 71, Queens',
  },
  {
    d: 'EMANUEL LAGATTA',
  },
  {
    d: 'MARGARET LAMBERT, 78, Manhattan',
  },
  {
    d: "ERWIN 'TITO' LAMBRENTO, 59, Queens",
    e: 'May 9, 2020',
  },
  {
    d: 'MINDELLA LAMM, 88, Manhattan',
    e: 'April 16, 2020',
  },
  {
    d: 'DR. ELI LANDAU, 60, Queens',
  },
  {
    d: 'EDWARD LATOURETTE, 46, Staten Island',
    e: 'April 24, 2020',
  },
  {
    d: 'GUY A. “N/A” LAVIGNERA, 76',
    e: 'May 5, 2020',
  },
  {
    d: 'ALEX LAYNE, 80, Manhattan',
    e: 'April 20, 2020',
  },
  {
    d: 'LUIS LEBRON',
  },
  {
    d: 'CAROLINE LEDDY, 58, Staten Island',
  },
  {
    d: 'LEIBEL LEDERMAN, 70',
    e: 'May 20, 2020',
  },
  {
    d: 'DELPHINE TAZAIR LEE, 61, Queens',
    e: 'March 22, 2020',
  },
  {
    d: 'FRANK LEE LEE, 64, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    d: 'SAU LEE, 52',
    e: 'April 18, 2020',
  },
  {
    d: 'DAVID LEE, Manhattan',
    e: 'May 22, 2020',
  },
  {
    d: 'KEVIN LEE, Brooklyn',
  },
  {
    d: 'SALOMON A LEGARDA SR., 73',
  },
  {
    d: 'JOSE LEMA, Queens',
  },
  {
    d: 'ANGEL LEON, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'JOHN C LEONARD, 71, The Bronx',
  },
  {
    d: 'FRANK LEONG, 63',
  },
  {
    d: 'ANGELO LEOTTA, Staten Island',
    e: 'September 13, 2020',
  },
  {
    d: 'FLORENCE LEVESQUE, 73, Manhattan',
  },
  {
    d: 'ANNA LEVINE, 91, Queens',
    e: 'April 22, 2020',
  },
  {
    d: 'YITZHAK LEVY LEVYAWAMI, 69, Brooklyn',
  },
  {
    d: 'DR. HERMAN J. LEW, 90, Staten Island',
    e: 'April 1, 2020',
  },
  {
    d: 'ALLEN Y. LEW, 69, Queens',
    e: 'June 23, 2020',
  },
  {
    d: 'DR. KENNETH LEWES, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'JOSEPH “JOE; J-LEW” LEWINGER, 42, Queens',
    e: 'March 28, 2020',
  },
  {
    d: 'ANGELA LEWIS',
    e: 'April 5, 2020',
  },
  {
    d: 'JASON LEWIS, Manhattan',
    e: 'April 18, 2020',
  },
  {
    d: 'TIAN LIANG, 83, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    d: 'SYLVIA NESTEL “GINGER LIEF” LIEF, 88, Manhattan',
    e: 'June 4, 2020',
  },
  {
    d: 'MANUEL LIMA',
  },
  {
    d: 'ANIL SUBBA “RAMESH SAMBAHAMFE” LIMBU, 49, Queens',
    e: 'March 23, 2020',
  },
  {
    d: 'PIDIO LINARES, Queens',
    e: 'March 13, 2020',
  },
  {
    d: 'SHIRLEY LINDSEY',
  },
  {
    d: 'VINCENT J. “VINNIE” LIONTI, 60, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'LOUISE LLOYD, Brooklyn',
  },
  {
    d: 'THERESA M. LOCOCO JR., 48, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'SAL LOMBARDO, 57, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sal_Lombardo.jpg',
  },
  {
    d: 'ROCCO LOMBARDO, 61, Brooklyn',
  },
  {
    d: 'ALGION LONDON, 55, The Bronx',
  },
  {
    d: 'MICHAEL JOSEF “MIKE” LONGO, 83, Manhattan',
    e: 'March 22, 2020',
  },
  {
    d: 'LIDIA LOPEZ',
  },
  {
    d: 'JORGE LOPEZ, 68',
  },
  {
    d: 'OWEN LORD, 77, Brooklyn',
  },
  {
    d: 'MIRVIL LOUIS, 62',
  },
  {
    d: 'IRIS CORNELIA LOVE, 86, Manhattan',
    e: 'April 17, 2020',
  },
  {
    d: 'JUDITH LOWIN, 76, The Bronx',
    e: 'March 21, 2020',
  },
  {
    d: 'RAE LUCCHESE, 91, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'ELADIO LUCERO, 80',
    e: 'April 25, 2020',
  },
  {
    d: 'ALBERTO LUCERO',
  },
  {
    d: 'FRANK N/A “N/A” LUMINI, 70, Staten Island',
    e: 'April 9, 2020',
  },
  {
    d: 'RAUL LUNA, Queens',
    e: 'April 30, 2020',
  },
  {
    d: 'RAUL LUNA',
  },
  {
    d: 'MARGARETTA H. “MARGO” LUNDELL, 78, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'MAUREEN PATRICIA LUNNEY, 59, Staten Island',
    e: 'April 16, 2020',
  },
  {
    d: 'CUONG LUU, 56, Queens',
  },
  {
    d: 'SYLVIA LYONS, 57, The Bronx',
  },
  {
    d: 'ANNA LYRIST, 67, Queens',
    e: 'June 5, 2020',
  },
  {
    d: 'ESTHER MAC, The Bronx',
  },
  {
    d: 'TARLACH MACNIALLAIS, 57, Queens',
    e: 'April 1, 2020',
  },
  {
    d: 'JUN MADEA, 79, Manhattan',
    e: 'April 16, 2020',
  },
  {
    d: 'LOURDES MAGO, 59, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    d: 'KHEMRAJ MAHADEO, 55, Brooklyn',
  },
  {
    d: 'DR. JAMES MAHONEY, 62',
    e: 'April 27, 2020',
  },
  {
    d: 'GEORGE R. MAIRA, 73, Staten Island',
    e: 'March 30, 2020',
  },
  {
    d: 'ANGEL MANUEL MAISONET, The Bronx',
  },
  {
    d: 'CLAUDIO MALAVE, 66, Manhattan',
  },
  {
    d: 'ANTHONY MALLANO, The Bronx',
  },
  {
    d: 'ROBERT MALLER, 74, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    d: 'MICHAEL A. MALLON, 55, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    d: 'MARK MALONE',
  },
  {
    d: 'IRVING A. MALONEY, 56, Queens',
    e: 'March 31, 2020',
  },
  {
    d: 'VICTOR MANGAL, 59, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    d: 'DR. ABDUL MANNAN, 80',
  },
  {
    d: 'JULIET MANRAGH, 41, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    d: 'CARMEN MANTO, 75, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'JOSE MAQUEDA, 61, Manhattan',
  },
  {
    d: 'MARLON MARAGH, 42, Brooklyn',
  },
  {
    d: 'LEROY MARAGH, 64, The Bronx',
  },
  {
    d: 'GARY MARBURY',
  },
  {
    d: 'CARLA MARCELO, Queens',
    e: 'April 23, 2020',
  },
  {
    d: 'MORDECHAI R. MARCUS, 77, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    d: 'MENDEL MARGULIS, Brooklyn',
  },
  {
    d: 'TRISHA MARIAM, 38, Queens',
  },
  {
    d: 'RAUL MARRERO',
  },
  {
    d: 'DR. STEPHEN R. MARRONE, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    d: 'ALE MARTIN, Queens',
  },
  {
    d: 'JORGE SAN MARTIN',
  },
  {
    d: 'FERMIN MARTINEZ, 61, Queens',
    e: 'March 30, 2020',
  },
  {
    d: 'ROMARICO “RAMON” MARTINEZ, 45',
    e: 'May 9, 2020',
  },
  {
    d: 'ALFREDO MARTINEZ, Queens',
  },
  {
    d: 'MARIA MINERVA MARTINEZ, Queens',
  },
  {
    d: 'CARMEN MARTINEZ, The Bronx',
  },
  {
    d: 'FORTUNATO MARTINEZ',
  },
  {
    d: 'EDUARDO MARTINEZ HERNANDEZ, The Bronx',
    e: 'April 19, 2020',
  },
  {
    d: 'SADIE MARTUCCI, 96, Queens',
    e: 'March 28, 2020',
  },
  {
    d: 'OLIVERIO DANIEL MARÍN LÓPEZ',
  },
  {
    d: 'PATRICIA MASON, Brooklyn',
  },
  {
    d: 'DANIEL MATIAS, 53, Queens',
  },
  {
    d: 'NICHOLAS MATTEI, 65',
  },
  {
    d: 'THYCE MATTIS, 59, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'DARREL MATTOCKS, 23, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'HAROLD MAYS',
  },
  {
    d: 'EDWARD MAZZA, 73, Staten Island',
    e: 'April 12, 2020',
  },
  {
    d: 'DIANE MCCARREN, 52, Staten Island',
    e: 'April 15, 2020',
  },
  {
    d: 'LEONARD MCCOLLOUGH, 46',
  },
  {
    d: 'DONALD PHILIP MCCOMB, 84, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'JOHN MCCORMACK, 61, Queens',
    e: 'May 20, 2020',
  },
  {
    d: 'JOHN MCDONALD',
  },
  {
    d: 'KEITH MCDONALD, 32',
  },
  {
    d: 'CHRISTOPHER B. MCDONNELL, 54',
    e: 'May 6, 2020',
  },
  {
    d: 'EDWIN MCDOWELL, 52',
  },
  {
    d: 'MECEO RAY MCEADDY, 69, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    d: 'ROZELLA MCFARLAN, 62, The Bronx',
    e: 'April 14, 2020',
  },
  {
    d: 'PATRICIA MCGOWAN, 80, The Bronx',
    e: 'April 19, 2020',
  },
  {
    d: 'EDWARD PAUL MCGUIRE, 85',
    e: 'May 15, 2020',
  },
  {
    d: 'MICHAEL MCINTOSH, 40',
  },
  {
    d: 'NICOLA MCINTYRE, Brooklyn',
  },
  {
    d: 'ALICEN MCKEON, 75, Staten Island',
    e: 'April 13, 2020',
  },
  {
    d: 'KALEMA D. MCKETHAN, 36, Queens',
    e: 'March 31, 2020',
  },
  {
    d: 'HEARLY MCKINNON',
  },
  {
    d: 'LEON J. MCKNIGHT JR., 49, The Bronx',
  },
  {
    d: 'ELVESTER MCKOY, 38, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'ENOS MCKOY',
  },
  {
    d: 'KATHLEEN ELIZABETH MCNULTY, 80, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'DORIS MCRAE, The Bronx',
  },
  {
    d: 'VINCENT MEAD, 78, The Bronx',
  },
  {
    d: 'JUAN MEDINA',
  },
  {
    d: 'YOSEF MEHLER, Brooklyn',
  },
  {
    d: 'FREDERIKKE NESSA MEISTER, 68, Manhattan',
    e: 'April 5, 2020',
  },
  {
    d: 'JULIO MEJIA, 58, Queens',
  },
  {
    d: 'LUZ DARY MEJIA QUICENO',
    e: 'April 21, 2020',
  },
  {
    d: 'JESUS ROMAN MELENDEZ, 49, Queens',
    e: 'April 1, 2020',
  },
  {
    d: 'MARIE ELIZABETH MELENDEZ, 64, Manhattan',
    e: 'May 1, 2020',
  },
  {
    d: 'ALCENIO “A/K/A FELIZ MENA” MENA, 60, Brooklyn',
  },
  {
    d: 'DR. FREDERICK MENDELSOHN, 87, Manhattan',
    e: 'April 17, 2020',
  },
  {
    d: 'GABRIEL MENDEZ, 45, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'NEMECIO MENDEZ, 72, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'ALEJANDRO MENDEZ, Staten Island',
    e: 'April 28, 2020',
  },
  {
    d: 'GUILLERMO MENDOZA',
    e: 'April 21, 2020',
  },
  {
    d: 'WALTER MENDOZA, Queens',
    e: 'June 1, 2020',
  },
  {
    d: 'BRENDA MENDOZA, 28, Queens',
  },
  {
    d: 'MARIA MENDOZA',
  },
  {
    d: 'MARIA CARLA MERCADER, 54, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'ALAN MERRILL, 69, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'VINCENT MESA, 76',
    e: 'April 15, 2020',
  },
  {
    d: 'ALFREDO DOROJA “JUN” MESCALLADO JR., 70, Queens',
    e: 'April 19, 2020',
  },
  {
    d: 'ANNA MESSINA, 98',
    e: 'May 1, 2020',
  },
  {
    d: 'ALLYSON MESTEL-SCHAPIRA, 48, Queens',
  },
  {
    d: 'ABBEY METZGER, 69, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'ALEXANDER MEYERS, 88, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'ISHAQ MIAH, Queens',
  },
  {
    d: 'STEVEN MICHAEL',
  },
  {
    d: 'PETROS “PETER” MICHAELS, 81, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'MARISE MICIAL, 55, Brooklyn',
  },
  {
    d: 'EDWARD MICKUS, 84, Brooklyn',
    e: 'March 12, 2020',
  },
  {
    d: 'JOSEPH MIGLIUCCI, 81, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'HAZEL PIA MIJARES, 66',
    e: 'March 30, 2020',
  },
  {
    d: 'EVERETT MILES',
  },
  {
    d: 'BRUCE B. MILEY, 61, The Bronx',
    e: 'April 9, 2020',
  },
  {
    d: 'ARTURO MILLAN, 69, Queens',
    e: 'April 18, 2020',
  },
  {
    d: 'MARIA MERCEDES MILLAN, The Bronx',
  },
  {
    d: 'MIRIAM MILLER, Brooklyn',
  },
  {
    d: 'SHIRLEY MILLER, 70',
  },
  {
    d: 'JAMES MILTON',
  },
  {
    d: 'JOSE RICARDO “RIVERA” MINAN',
  },
  {
    d: 'ISIDRO MINDIOLAZA, 68, Queens',
  },
  {
    d: 'GLORIA MINOR',
    e: 'April 7, 2020',
  },
  {
    d: 'EDUARDO MIRANDA',
  },
  {
    d: 'ARNETTE MITCHELL, 57',
  },
  {
    d: 'FERNANDO “NIC 707” MITEFF, 60, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'RAHMAN MIZANUR, 31, The Bronx',
    e: 'April 28, 2020',
  },
  {
    d: 'MANUEL MIZHQUIRI, 70, Queens',
  },
  {
    d: 'LIAQUAT MOHAMMED, Queens',
  },
  {
    d: 'PIERRE MOISE',
    e: 'April 3, 2020',
  },
  {
    d: 'HECTOR MOLINA, 68, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'EFRAIN MOLINA SR., 83, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    d: 'ORLANDO MONCADA',
  },
  {
    d: 'CARLOS MONCAYO',
  },
  {
    d: 'CHRISTOPHER MONDAL, 30, The Bronx',
    e: 'March 26, 2020',
  },
  {
    d: 'DEODORO MONGE GUTIERREZ, Queens',
    e: 'April 21, 2020',
  },
  {
    d: 'HARRY MONTALVO',
  },
  {
    d: 'AGUSTIN MONTANEZ',
  },
  {
    d: 'MANUEL MONTEALEGRE, Queens',
    e: 'April 16, 2020',
  },
  {
    d: 'MARCOS GUTIERREZ MONTERO, 46, Queens',
    e: 'April 1, 2020',
  },
  {
    d: 'ADIEL MONTGOMERY, 39, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    d: 'ROBERT MOODY JR., 55, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'HELEN MOODY',
  },
  {
    d: 'ANANDA MOOLIYA, 38, Queens',
  },
  {
    d: 'FOSTER MOORE JR., 58, The Bronx',
    e: 'April 2, 2020',
  },
  {
    d: 'BENNIE MOORE, 64, Brooklyn',
  },
  {
    d: 'WILLIE MOORE',
  },
  {
    d: 'GLENTON MOORE, Brooklyn',
  },
  {
    d: 'ARISTEDES MORAITIS, 49, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'ANDRES MORALES, Queens',
    e: 'April 22, 2020',
  },
  {
    d: 'VICTOR MORALES, 33, The Bronx',
    e: 'April 24, 2020',
  },
  {
    d: 'JORGE O. MORALES, Queens',
  },
  {
    d: 'FERNANDO MORALES GONZÁLEZ, 43, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'SALVADOR MORAN, 42, Queens',
    e: 'April 19, 2020',
  },
  {
    d: 'CARLOS MORENO',
    e: 'April 21, 2020',
  },
  {
    d: 'IMELDA MORENO-LUCERO',
  },
  {
    d: 'WILLIAM T. MORRIS, 61',
    e: 'June 6, 2020',
  },
  {
    d: 'FLORENCIO ALMAZO “TIO” MORÁN, 65, Staten Island',
    e: 'April 1, 2020',
  },
  {
    d: 'LINOSEE MOSLEY, 57, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'VIVIAN MOSS VOELPEL',
  },
  {
    d: 'YOSEF ZUNDEL MOTZEN, 90, Brooklyn',
  },
  {
    d: 'MAXWELL M. MOZELL, 90, Manhattan',
    e: 'March 28, 2020',
  },
  {
    d: 'JAMIYLAH A. MUHAMMAD, 63, Queens',
  },
  {
    d: 'RANA ZOE MUNGIN, 30, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    d: 'ALBERT MUNGIN',
  },
  {
    d: 'EDWARD MUNGIN, 56, Brooklyn',
  },
  {
    d: 'JORGE MUNOZ, 60',
  },
  {
    d: 'JOSEPH P. MURPHY, 91, Staten Island',
    e: 'May 16, 2020',
  },
  {
    d: 'ERIC MURRAY, 38, The Bronx',
    e: 'April 9, 2020',
  },
  {
    d: 'ROGER MUSCADI, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    d: 'JOSE RODRIGUEZ MUÑOZ, 74, Brooklyn',
  },
  {
    d: 'SAW THEIN “SAM” MYINT',
    e: 'April 19, 2020',
  },
  {
    d: 'PEDRO MÁRQUEZ',
  },
  {
    d: 'PREA NANKIESHORE, 34, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'HANSARAJ NANKISSURE, Queens',
  },
  {
    d: 'MAGDA NAPOLEONI, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    d: 'AJIT NARAIN, 42, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'AJIT NARAIN, 42, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'MARIUS NARCISSE, 64, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'MARGARET ADAM NAREL, The Bronx',
  },
  {
    d: 'BENNY NASTASI',
  },
  {
    d: 'CARLO NATHAN, 70, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    d: 'WENDEL NAVARRO',
  },
  {
    d: 'SHARON NEARBY, 52, Staten Island',
    e: 'April 4, 2020',
  },
  {
    d: 'ELIAS NELSON',
    e: 'April 12, 2020',
  },
  {
    d: 'MICHAEL NELSON',
  },
  {
    d: 'DARLISA C. NESBITT, 51, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'KIMARLEE “KIM” NGUYEN, 33, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    d: 'PAT NICHOLLS, 60, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    d: 'LAWRENCE NIEUENKIRK, 54, Brooklyn',
    e: 'June 4, 2020',
  },
  {
    d: 'FRANCOIS NIEUWENDAM, 60, Manhattan',
    e: 'May 3, 2020',
  },
  {
    d: 'IRIS NIEVES-MITCHELL, 69',
    e: 'April 6, 2020',
  },
  {
    d: 'TOBIAS NOBOA, 82, Queens',
  },
  {
    d: 'DAVID NOCERA, 63, Manhattan',
    e: 'March 26, 2020',
  },
  {
    d: 'LEROY NOEL, 64, Brooklyn',
  },
  {
    d: 'JUSTICE NANA YAW NYANTAKYI, The Bronx',
    e: 'April 9, 2020',
  },
  {
    d: 'FRANCISCO NÚÑEZ',
  },
  {
    d: "MICHAEL O'HAGAN",
  },
  {
    d: "HUNTER O'KELLY-RODRIGUEZ, 34, Brooklyn",
    e: 'March 29, 2020',
  },
  {
    d: 'ARNOLD FRANCIS OBEY, 73, Staten Island',
    e: 'March 22, 2020',
  },
  {
    d: 'MAGDALENA ELIZABETH OCAMPO FRANCO, 46, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    d: 'CAROLE OCERA, 80, Staten Island',
    e: 'April 13, 2020',
  },
  {
    d: 'JOSE OCHOA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'EVELYN OCHOA-CELANO, 63',
    e: 'May 13, 2020',
  },
  {
    d: 'FREDA OCRAN, 50, The Bronx',
    e: 'March 28, 2020',
  },
  {
    d: 'EUNICE ODEN, 78, Brooklyn',
  },
  {
    d: 'DOVID OLEWSKI, 69, Brooklyn',
  },
  {
    d: 'BLANCA “BLANQUITA” OLIVA TABORDA',
  },
  {
    d: 'BOSEDE OLOWURO, 51, The Bronx',
  },
  {
    d: 'BENJAMIN ONODU, Queens',
  },
  {
    d: 'FRANKLIN ORDONEZ, 74, The Bronx',
    e: 'April 28, 2020',
  },
  {
    d: 'FRANKLIN V. ORDOÑEZ, 74, The Bronx',
    e: 'April 28, 2020',
  },
  {
    d: 'QUINTINO ORTEGA, 65, The Bronx',
    e: 'April 19, 2020',
  },
  {
    d: 'MARTHA ORTEGA, 51, Queens',
    e: 'May 24, 2020',
  },
  {
    d: 'LAURELINA ORTIZ, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'EZEQUIEL ORTIZ, 52, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'NOE ORTIZ, The Bronx',
    e: 'June 6, 2020',
  },
  {
    d: 'CARLOS ORTIZ, 75, Brooklyn',
  },
  {
    d: 'CESAR E. “DON CESAR” ORTIZ, 69, Staten Island',
  },
  {
    d: 'LINDA ORTIZ, 72, Staten Island',
  },
  {
    d: 'SUCY ORTIZ',
  },
  {
    d: 'JORGE “FATHER GEORGE” ORTIZ-GARAY, 49, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'LLOYD OSBORNE, 68, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'LLOYD OSBOURNE, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    d: 'RAMON OSORIA, Queens',
    e: 'March 23, 2020',
  },
  {
    d: 'JULIO PACHECO, The Bronx',
    e: 'April 15, 2020',
  },
  {
    d: 'FRANCISCO PACHECO',
  },
  {
    d: 'EMILIANO PADILLA, 67, Queens',
  },
  {
    d: 'JOSE PAEZ, 53',
  },
  {
    d: 'THAD H. PAIGE, 80, The Bronx',
    e: 'April 3, 2020',
  },
  {
    d: 'JOSE MARIA PALAGUACHI, 58, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'MARIA ESTHER PALAGUACHI CUZCO, 62, Queens',
    e: 'April 4, 2020',
  },
  {
    d: 'BOGDAN PALKA, 71, Brooklyn',
  },
  {
    d: 'LUZ PALOMINO, Queens',
  },
  {
    d: 'ALYSSA PANTILIERIS, 45, The Bronx',
    e: 'April 5, 2020',
  },
  {
    d: 'KYONG HE PARK, 89',
    e: 'March 28, 2020',
  },
  {
    d: 'JOYCE ELAINE PARKER, 94, Queens',
    e: 'March 27, 2020',
  },
  {
    d: 'ORLANDO PARRA',
  },
  {
    d: 'RALPH PASTENA, 72, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'GIRISH PATEL',
  },
  {
    d: 'DR. TOMAS PATTUGALAN, 70, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'REV. NARCISO PATZAN, 67, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'NESLY PAUL, 58, Brooklyn',
  },
  {
    d: 'SERGE PAUL',
  },
  {
    d: 'VICENTE PAVIA, Staten Island',
  },
  {
    d: 'DANIEL PAVODANO-GULACK, 58, Manhattan',
  },
  {
    d: 'BERNADETTE PAYNE, 51, The Bronx',
    e: 'March 24, 2020',
  },
  {
    d: 'VICTOR PEI, 65',
    e: 'May 7, 2020',
  },
  {
    d: 'VICTOR PEI, 65',
    e: 'May 7, 2020',
  },
  {
    d: 'JOSEPH T. PELLETTERI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    d: 'BARRY PENN, 69',
    e: 'April 4, 2020',
  },
  {
    d: 'SEBASTIAN FRANCIS PEPI, 82',
    e: 'April 5, 2020',
  },
  {
    d: 'ALBA PEREA, 79, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'MILAGROS PEREZ, 50, The Bronx',
    e: 'April 21, 2020',
  },
  {
    d: 'MYRIAM PEREZ, 80, Brooklyn',
  },
  {
    d: 'BENIGNO “BENNY” PEREZ JR., 74, Queens',
  },
  {
    d: 'DOMINGO PEREZ RIVERA',
  },
  {
    d: 'YAAKOV PERLOW, 89, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'BARRY PERSARD, 56, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    d: 'HARRICHAND PERSAUD, 69, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'DAVID PERSAUD',
  },
  {
    d: 'IVAN PETER, 38, Queens',
  },
  {
    d: 'MICHAEL PETERSON',
  },
  {
    d: 'MARIE PETIT-HOMME',
    e: 'May 13, 2020',
  },
  {
    d: 'PETER PETRASSI, 49, Queens',
    e: 'March 26, 2020',
  },
  {
    d: 'BARBARA PETTIWAY, 48, Manhattan',
  },
  {
    d: 'JOHN PHILLIP, 65, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    d: 'ADRIAN PHILLIPS',
  },
  {
    d: 'MARLENE PICONE',
    e: 'April 23, 2020',
  },
  {
    d: 'MARLENE PICONE, 53, Staten Island',
    e: 'April 23, 2020',
  },
  {
    d: 'CINDY PICOU, Brooklyn',
  },
  {
    d: 'DR. BREDY PIERRE-LOUIS JR., 74',
  },
  {
    d: 'QUEBIY PIGOTT, 41, The Bronx',
  },
  {
    d: 'ROY PIKSER, 59, Queens',
    e: 'April 23, 2020',
  },
  {
    d: 'LORENZO W. PINCAY, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'MARIO PINNA, 62, Queens',
  },
  {
    d: 'CARLOS LEONARDO PINTADO, 43, Queens',
  },
  {
    d: 'JAIME ARMANDO PINZON, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'NITA PIPPINS, 93, Manhattan',
    e: 'May 10, 2020',
  },
  {
    d: 'ANGELO “POPPY” PIRO, 87, Staten Island',
    e: 'March 30, 2020',
  },
  {
    d: 'BUCKY PIZZARELLI, 94',
    e: 'April 1, 2020',
  },
  {
    d: 'LIVETTE PLAN, Queens',
  },
  {
    d: 'GABRIEL POLANCO, 63, Queens',
  },
  {
    d: 'JACK POLIMENI, 51, Manhattan',
    e: 'April 10, 2020',
  },
  {
    d: 'MYRTLE POLLARD, 80, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    d: 'MARK POMPA, 53, Staten Island',
    e: 'April 20, 2020',
  },
  {
    d: 'LINDA POPE, 67, The Bronx',
  },
  {
    d: 'MARY ELLEN PORTER, 65, Staten Island',
    e: 'April 9, 2020',
  },
  {
    d: 'LLOYD CORNELIOUS PORTER, 49, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    d: 'OMAR PORTILLO, 63, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'CHARINA “CHERRY” PORTILLO, 49',
    e: 'March 28, 2020',
  },
  {
    d: 'LENIN PORTILLO, The Bronx',
    e: 'April 14, 2020',
  },
  {
    d: 'JAMES POWERS, Queens',
  },
  {
    d: 'GORDON M. PRADL, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'DR. PETER I. PRESSMAN, 84, Manhattan',
    e: 'April 27, 2020',
  },
  {
    d: 'MAGGIE PRICE',
  },
  {
    d: 'DENISE PRINCE, 53, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    d: 'ANUCHA PROMSGAN, 59',
  },
  {
    d: 'URIAH PRYCE',
  },
  {
    d: 'PAULA PRYCE-BREMMER, 51',
    e: 'March 26, 2020',
  },
  {
    d: 'AZINET PUDPUD, 62, The Bronx',
    e: 'April 27, 2020',
  },
  {
    d: 'TOMAS PUEBLA, 55, Queens',
  },
  {
    d: 'FIDEL I. PULAGRIN',
  },
  {
    d: 'MANUEL SALVADOR PUMA',
  },
  {
    d: 'FELIX PUNO II',
    e: 'April 23, 2020',
  },
  {
    d: 'YISROEL YECHEZKIEL PUTCHOK, 77, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    d: 'JAMES PUYOL, 71',
  },
  {
    d: 'LUCY “MAMA” QUESADA, The Bronx',
  },
  {
    d: 'WILLIE QUEZADA, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'ELIZABETH QUINDE, 66, Queens',
    e: 'April 26, 2020',
  },
  {
    d: 'CARLOS ARTURO QUINTERO, 76, Queens',
    e: 'April 17, 2020',
  },
  {
    d: 'JOHN ANDERSON “JACK; QUIS” QUISENBERRY, 81, Manhattan',
    e: 'April 9, 2020',
  },
  {
    d: 'MACARIO QUIZHPI GALLEGOS, 57, Queens',
    e: 'April 21, 2020',
  },
  {
    d: 'PHILIP RABIN, 80, Manhattan',
    e: 'April 10, 2020',
  },
  {
    d: 'MOHAMED RAHAMAN, 61, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'MOHIBUR RAHMAN, 67, Queens',
    e: 'May 11, 2020',
  },
  {
    d: 'MOHAMMED RAHMAN, Queens',
  },
  {
    d: 'DR. AZIZUR RAHMAN, 75, Manhattan',
  },
  {
    d: 'ATAUR RAHMAN DEALER, 67, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'RICHARD RAINES, 88, Manhattan',
    e: 'April 5, 2020',
  },
  {
    d: 'JOAN S. RAINES, 81, Manhattan',
    e: 'May 17, 2020',
  },
  {
    d: 'GARY RAMDATT, 55, Queens',
  },
  {
    d: 'BUDLINO RAMIREZ, 58, The Bronx',
    e: 'June 6, 2020',
  },
  {
    d: 'JOSE RAMON, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'ANTONIA RAMOS',
  },
  {
    d: 'RAÚL RAMÍREZ, 52, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'STEVE RANNAZZISI',
  },
  {
    d: 'MELVIN RASCOE, 57, Queens',
    e: 'May 14, 2020',
  },
  {
    d: 'TAZIN RASHED',
  },
  {
    d: 'HARUNUR RASHID, Queens',
  },
  {
    d: 'JOEL M. REED, 86',
    e: 'April 13, 2020',
  },
  {
    d: "JAMES D. 'JIM' REED, 83, Manhattan",
    e: 'April 15, 2020',
  },
  {
    d: 'WESTLY REED',
  },
  {
    d: 'JAMES W. REEL JR., 67, Queens',
  },
  {
    d: 'MEHMOODA REHMAN, 71, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'RENNIE REID, 64, The Bronx',
  },
  {
    d: 'RONNIE REID',
  },
  {
    d: 'RAYNARD REMBERT',
  },
  {
    d: 'MARK N/A “N/A” REMOLINO, 59, Staten Island',
    e: 'May 4, 2020',
  },
  {
    d: 'DR. MARK ALLEN RESPLER, 66, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    d: 'JOEL REVZEN, 74',
    e: 'May 25, 2020',
  },
  {
    d: 'JOSE REYES',
  },
  {
    d: 'RAMON REYES, The Bronx',
  },
  {
    d: 'EUGENIO REYES, 76, The Bronx',
  },
  {
    d: 'FRINE REYES, 60, Brooklyn',
  },
  {
    d: 'RICARDO RAMOS RICARDO RAMOS CHAVEZ, Queens',
    e: 'April 20, 2020',
  },
  {
    d: 'ANNA PRIOLO RICCOBONO, 96, Staten Island',
    e: 'April 18, 2020',
  },
  {
    d: 'EDITH “BIG” RICHEMOND, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    d: 'KENNETH RICKETTS, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'LUIS M. RICO, 74, Queens',
    e: 'March 23, 2020',
  },
  {
    d: 'LEROY RIDDICK',
  },
  {
    d: 'DIANE L. RIEGGER, 72, Queens',
    e: 'April 8, 2020',
  },
  {
    d: 'GILBERT RIOS, 59',
  },
  {
    d: 'ZISHA RITTERMAN, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    d: 'LUIS “BOYIE” RIVERA, 25, The Bronx',
    e: 'March 30, 2020',
  },
  {
    d: 'OBDULIA RIVERA, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'HILDA RIVERA, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'MIGUEL RIVERA',
  },
  {
    d: 'JUAN RIVERA, 59, The Bronx',
  },
  {
    d: 'MARY M. RIZZO, 87, Staten Island',
    e: 'April 22, 2020',
  },
  {
    d: 'CURTIS L. ROBERTSON JR., 58, Brooklyn',
  },
  {
    d: 'PHYLLIS ROBINSON, 68, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    d: 'EDITH ROBINSON, 77, The Bronx',
    e: 'April 14, 2020',
  },
  {
    d: 'DARLEY ROBINSON, 63',
  },
  {
    d: 'RONALD ROBINSON',
  },
  {
    d: 'J.C. ROBINSON',
  },
  {
    d: 'JANICE “MISS JANICE” RODMAN, 52, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'PIERREPAUL RODRIGUE, 65, Brooklyn',
  },
  {
    d: 'RUBEN RODRIGUEZ, Queens',
    e: 'April 4, 2020',
  },
  {
    d: 'MIGDALIA RODRIGUEZ, 71, The Bronx',
    e: 'April 27, 2020',
  },
  {
    d: 'DR. IVAN RODRIGUEZ SR., 61',
    e: 'May 25, 2020',
  },
  {
    d: 'WILLIAM RODRIGUEZ',
  },
  {
    d: 'OSCAR RODRIGUEZ',
  },
  {
    d: 'HUMBERTO RODRIGUEZ, Brooklyn',
  },
  {
    d: 'ANAVELIO RODRIGUEZ',
  },
  {
    d: 'STEVE J. RODRIGUEZ, Queens',
  },
  {
    d: 'BARBARELLA RODRIGUEZ, 51, Queens',
  },
  {
    d: 'MIGUEL RODRIGUEZ, Queens',
  },
  {
    d: 'EDWIN RODRIGUEZ',
  },
  {
    d: 'ROBERTO RODRIGUEZ',
  },
  {
    d: 'THOMAS RODRIGUEZ',
  },
  {
    d: 'EDDY RODRÍGUEZ',
  },
  {
    d: 'ROMAXI ROJAS',
  },
  {
    d: 'MEIR ROKEACH, 78, Brooklyn',
  },
  {
    d: 'FRANKLIN ROLANDO',
  },
  {
    d: 'MIGUEL ROLDAN, Queens',
    e: 'May 25, 2020',
  },
  {
    d: 'DEZ-ANN ROMAIN, 36, Queens',
    e: 'March 23, 2020',
  },
  {
    d: 'JENNIFER ROMAIN-HINDS, 41, Queens',
    e: 'April 28, 2020',
  },
  {
    d: 'RAMON ROMAN',
    e: 'April 5, 2020',
  },
  {
    d: 'MARIO CÉSAR ROMERO, 78, Manhattan',
    e: 'April 17, 2020',
  },
  {
    d: 'MIREYA ROMERO, 62, Queens',
    e: 'April 24, 2020',
  },
  {
    d: 'OMAR ROMERO, Queens',
    e: 'May 1, 2020',
  },
  {
    d: 'JOSÉ MARTÍN ROMERO GONZÁLEZ',
  },
  {
    d: 'ANGELA MARIE ROONEY, 103, The Bronx',
    e: 'May 27, 2020',
  },
  {
    d: 'RAYMOND ROSA',
  },
  {
    d: 'MARIO ROSA',
  },
  {
    d: 'PRIMO REYES ROSALES, 76',
  },
  {
    d: 'JOSE ROSALES, 53, Staten Island',
  },
  {
    d: 'MARISOL ROSARIO, 49, The Bronx',
    e: 'April 5, 2020',
  },
  {
    d: 'MARIA MERCEDES ROSARIO, The Bronx',
  },
  {
    d: 'PETER ROSCONI, Brooklyn',
  },
  {
    d: 'GERARD H. “GERRY” ROSENBERG, 85, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    d: 'MARVIN ROSENFELD',
  },
  {
    d: 'JANE ROSENTHAL, 78, Manhattan',
    e: 'April 2, 2020',
  },
  {
    d: 'MITCHELL ROSENWASSER, 55, Queens',
    e: 'April 26, 2020',
  },
  {
    d: 'DR. YVES Y. ROSEUS, 66, Queens',
    e: 'April 5, 2020',
  },
  {
    d: 'PAMELA ROSS, 55, Manhattan',
    e: 'April 2, 2020',
  },
  {
    d: 'KEVIN ROSSITER, 54, Staten Island',
    e: 'April 25, 2020',
  },
  {
    d: 'KEVIN P. ROSSITER, 54, Staten Island',
    e: 'April 25, 2020',
  },
  {
    d: 'ALBERTO ROTTURA, 77, Manhattan',
    e: 'May 25, 2020',
  },
  {
    d: 'ABDUR ROUF, The Bronx',
  },
  {
    d: 'JACQUELINE “JACKIE” ROWE, Queens',
    e: 'April 15, 2020',
  },
  {
    d: 'ABRAHAM A. RUBASHKIN, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'RABBI MORDECHAI DOVID RUBIN, 95, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'FRANCES ROBERTA RUDLAND, 66, The Bronx',
    e: 'April 20, 2020',
  },
  {
    d: 'DIANNA RUSSELL, 50',
    e: 'May 30, 2020',
  },
  {
    d: 'KRISTOFER M. “KRIS” RUSSO, 45, Staten Island',
    e: 'March 29, 2020',
  },
  {
    d: 'JACQUEL D. RYAN, 56, The Bronx',
  },
  {
    d: 'STEVE JOSEPH RYBKIN, 59',
    e: 'April 5, 2020',
  },
  {
    d: 'CAROL RYER, 60, The Bronx',
  },
  {
    d: 'FRANCISCO SAAVEDRA, 55, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'FRANCISCO SAAVEDRA',
  },
  {
    d: 'JOHNNY SABATER',
  },
  {
    d: 'VINCENT CIRELLI “VINNY PEANUTS” SABATINO, 68, Manhattan',
    e: 'April 13, 2020',
  },
  {
    d: 'WILLIAM SACKEY, 54, The Bronx',
  },
  {
    d: 'BRIAN SADDLER, 60',
    e: 'May 8, 2020',
  },
  {
    d: 'ANAND SAHADEO, The Bronx',
    e: 'April 27, 2020',
  },
  {
    d: 'ANNUNZIATA SAHID, 36, Manhattan',
  },
  {
    d: 'YVES SAJOUS, 59, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    d: 'ALEXANDRA SAKS, 71',
    e: 'April 3, 2020',
  },
  {
    d: 'MARIA SALAMAN, 81, The Bronx',
    e: 'April 1, 2020',
  },
  {
    d: 'JORGE SALDARRIAGA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'ROMAN GUERRERO SALDIVAR',
    e: 'April 20, 2020',
  },
  {
    d: 'WILLIAM SALES',
  },
  {
    d: 'JOSE SALMERON, Queens',
  },
  {
    d: 'JORGE SAN MARTIN, Queens',
  },
  {
    d: 'JUAN SANABRIA, 52, The Bronx',
  },
  {
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 23, 2020',
  },
  {
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 24, 2020',
  },
  {
    d: 'JULIO SANCHEZ',
  },
  {
    d: 'RICHARD MAURICIO SALINAS SANCHEZ',
  },
  {
    d: 'DANIEL SANCHEZ, 61, The Bronx',
  },
  {
    d: 'GENARO SANCHEZ, 65',
  },
  {
    d: 'JOSE LUIS SANCHEZ PEREZ, Queens',
    e: 'April 30, 2020',
  },
  {
    d: 'YOEL SANDEL, 39, Brooklyn',
  },
  {
    d: 'RICHARD [UNKNOWN] “RICHIE” SANTANGELO, 62, Staten Island',
    e: 'March 29, 2020',
  },
  {
    d: 'CARIDAD SANTIAGO, 43, The Bronx',
    e: 'March 28, 2020',
  },
  {
    d: 'ELIEZER SANTIAGO, The Bronx',
    e: 'April 21, 2020',
  },
  {
    d: 'GEORGE SANTIAGO',
    e: 'May 6, 2020',
  },
  {
    d: 'EDWIN SANTIAGO',
  },
  {
    d: 'MING SANTO',
  },
  {
    d: 'DARRIN M. SANTOS SR., 50',
    e: 'April 4, 2020',
  },
  {
    d: 'SANDRA SANTOS-VIZCAINO, 54, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    d: 'SHAH J. SARKAR, Queens',
    e: 'April 18, 2020',
  },
  {
    d: 'RITA D. MCLAUGHLIN SARLO, 77',
    e: 'April 25, 2020',
  },
  {
    d: 'ROBERT SARUTTO, 59, Staten Island',
  },
  {
    d: 'ARLENE SAUNDERS, 89, The Bronx',
    e: 'April 17, 2020',
  },
  {
    d: 'LEONARD SBORDONE, 90, The Bronx',
    e: 'May 1, 2020',
  },
  {
    d: 'JEFFREY ALLEN SCALF, 46, The Bronx',
    e: 'April 13, 2020',
  },
  {
    d: 'PIETRO SCARSO, 76, Staten Island',
    e: 'March 31, 2020',
  },
  {
    d: 'RITA SCARSO, 72, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'PETER EDWARD SCHAEFER, 62',
    e: 'April 2, 2020',
  },
  {
    d: 'BENJAMIN WOLF “BEN” SCHAEFFER, 58, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    d: 'MEYER SCHEINBERG, 75, Brooklyn',
  },
  {
    d: 'GARY JOHN SCHIAVI, 68, Staten Island',
    e: 'April 19, 2020',
  },
  {
    d: 'ALLAN SCHLANGER, 87, Brooklyn',
    e: 'March 13, 2020',
  },
  {
    d: 'ADAM SCHLESINGER, 52, Manhattan',
    e: 'April 1, 2020',
  },
  {
    d: 'FATIMA SCHMIDT, 57, The Bronx',
    e: 'April 13, 2020',
  },
  {
    d: 'LOUIS SCHMIDT',
  },
  {
    d: 'PATRICIA A. SCHMIDT, 84, Staten Island',
  },
  {
    d: 'ZVI YEHUDA SCHMIDT, Brooklyn',
  },
  {
    d: 'PETER SCHURR, 59, Queens',
  },
  {
    d: 'ALFRED SCHWARTZ, 93, The Bronx',
    e: 'April 8, 2020',
  },
  {
    d: 'ERNEST H. SCHWARZ, 88, Staten Island',
  },
  {
    d: 'YAAKOV SCHWEI, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    d: 'DR. GARY SCLAR, 67, Queens',
    e: 'April 12, 2020',
  },
  {
    d: 'WALTER SCOTT, Queens',
    e: 'April 2, 2020',
  },
  {
    d: 'WILLIAM SCOTT, 51',
    e: 'April 2, 2020',
  },
  {
    d: 'MICHAEL SCURA, 68, Manhattan',
  },
  {
    d: 'ANDREA SEARS, 69, Brooklyn',
  },
  {
    d: 'PAUL SEBASTIAN',
  },
  {
    d: 'YVES MANUEL SEGUI',
  },
  {
    d: 'JOSEPH SELBY, 53, Queens',
  },
  {
    d: 'ROSEMARY N/A “N/A” SELL, 80',
    e: 'April 17, 2020',
  },
  {
    d: 'SIGFRIDO SEPULVEDA, 60, Manhattan',
    e: 'April 29, 2020',
  },
  {
    d: 'MERVIN SERAPHIN, 58, Queens',
  },
  {
    d: 'GABRIEL DE JESUS MARIN SERNA, 84, Queens',
    e: 'April 8, 2020',
  },
  {
    d: 'ROSA SERRANO, 84, The Bronx',
    e: 'April 10, 2020',
  },
  {
    d: 'ERNST SEVERE, Brooklyn',
  },
  {
    d: 'ALBERTO “ZULMA ZANELLY” SEVILLA, 51, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'ALBERTO “ZANELLY” SEVILLA',
  },
  {
    d: 'WILLIAM SHACKLEFORD, 67, Manhattan',
  },
  {
    d: 'MAJUMDER SHAFIQUR RAHMAN',
    e: 'March 28, 2020',
  },
  {
    d: 'ALI SHAIBI, 65, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'IQBAL SHAIKH, 63, Queens',
  },
  {
    d: 'BETTY SHAIN, 92, Manhattan',
    e: 'April 17, 2020',
  },
  {
    d: 'ULLAH SHARIAT, 67, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    d: 'ABRAHAM “AVI” SHARONI, 78, Staten Island',
  },
  {
    d: 'J. EDWARD “ED” SHAW, 76',
  },
  {
    d: 'YVETTE SHEFFER, 56, Brooklyn',
  },
  {
    d: 'YVONNE SHERWELL, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'CLAUDIA SHIRLEY, 67, Brooklyn',
  },
  {
    d: 'EDWIN SHOSTAK, 78',
    e: 'April 8, 2020',
  },
  {
    d: 'CHAIM SHROOT, Brooklyn',
  },
  {
    d: 'YEHUDIS “JUDITH” SHUBERT-FINKELSTEIN, 91, Brooklyn',
  },
  {
    d: 'JOHN SIEGEL',
  },
  {
    d: 'CONCEPCION SILVA, 61, Brooklyn',
  },
  {
    d: 'WINSTON SILVERA, 82, The Bronx',
    e: 'April 11, 2020',
  },
  {
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
  },
  {
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
  },
  {
    d: 'ARLENE SIMON, 70',
  },
  {
    d: 'QUINSEY SIMPSON',
  },
  {
    d: 'SUSAN SISGUNDO, 50, Queens',
    e: 'April 8, 2020',
  },
  {
    d: 'FAUSTINA MONZI SLOBODZIAN, 84, Staten Island',
    e: 'April 15, 2020',
  },
  {
    d: 'REGINALD SMALL',
  },
  {
    d: 'GLORIA SMALL-JONES, 72, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    d: 'BENJAMIN SMALLS, 72',
    e: 'May 7, 2020',
  },
  {
    d: 'ANDREA PEDOWITZ SMITH, 68, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    d: 'TOMMY SMITH III, 62, Staten Island',
    e: 'April 10, 2020',
  },
  {
    d: 'JANET J. SMITH, 69, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'JIM SMITH, 79, Staten Island',
    e: 'June 28, 2020',
  },
  {
    d: 'CORRINE SMITH',
  },
  {
    d: 'JUDITH SMITH',
  },
  {
    d: 'ANN YOUNGERMAN SMOLER, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'JOSEPH JEROME SNEAD, 94, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'JARROD SOCKWELL, 38, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    d: 'SHARON SOCKWELL',
  },
  {
    d: 'HAROLD JOHN SOLOMAN JR., 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'HAROLD JOHN SOLOMON JR., 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    d: 'SOOKRAJ SOOKCHAN, 77, Queens',
    e: 'April 15, 2020',
  },
  {
    d: 'MICHAEL DAVID SORKIN, 71',
    e: 'March 26, 2020',
  },
  {
    d: 'MICHAEL DAVID SORKIN, 71, Manhattan',
    e: 'March 26, 2020',
  },
  {
    d: 'GLORIA SOSA, 48, Queens',
    e: 'April 23, 2020',
  },
  {
    d: 'MIGUEL A. SOSA, 42',
    e: 'May 3, 2020',
  },
  {
    d: 'THOMAS SOTO, 59, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'RODNEY SPARROW, 50, Brooklyn',
  },
  {
    d: 'SAFRA SPILMAN, 78, Brooklyn',
  },
  {
    d: 'CALEB ST. SURIN, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    d: 'CARL STANBURY, 66, Brooklyn',
  },
  {
    d: 'FRANK STEARNS, 73, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'ANTONIO STEELE, 62',
  },
  {
    d: 'EVE STEIN',
  },
  {
    d: 'YITZCHOK STEINBERG, 59, Brooklyn',
  },
  {
    d: 'RALPH STEINBERG',
  },
  {
    d: 'STEVE STEINER, 75, Queens',
    e: 'March 30, 2020',
  },
  {
    d: 'ELLIS JAMES STEPHENS JR., 56, Queens',
    e: 'April 6, 2020',
  },
  {
    d: 'ELGIN STEPHENSON, 54, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'IRA STERN, 67, Manhattan',
    e: 'April 6, 2020',
  },
  {
    d: 'ESTHER STERN, 75, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'ZEV STERN, 68, Brooklyn',
  },
  {
    d: 'ROBERT “STEVE THE BOOKMAN” STEVENS',
    e: 'April 21, 2020',
  },
  {
    d: 'EILEEN STEWART, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    d: 'CLETUS STEWART, 83, Manhattan',
    e: 'April 18, 2020',
  },
  {
    d: 'DUANE EDWARD STEWART, The Bronx',
  },
  {
    d: 'ARLENE STRINGER-CUEVAS, 86, The Bronx',
    e: 'April 3, 2020',
  },
  {
    d: 'RAYMOND STRYPE, 92, Brooklyn',
  },
  {
    d: 'LILLIAN STUGENSKY, 88, The Bronx',
    e: 'March 27, 2020',
  },
  {
    d: 'RICHARD J. STURGES, 76, Staten Island',
    e: 'April 2, 2020',
  },
  {
    d: 'ANTONIO SUAREZ',
  },
  {
    d: 'RAYMOND SUGRIM',
  },
  {
    d: 'KARN VIR SURI, 85, Manhattan',
    e: 'April 25, 2020',
  },
  {
    d: 'CHAI SUTHAMMANONT, 68',
    e: 'May 26, 2020',
  },
  {
    d: 'WINSTON STEPHEN SWAN, 69, The Bronx',
    e: 'April 24, 2020',
  },
  {
    d: 'KYRA MICHELLE SWARTZ, 33, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'TROY LEE SWEENEY, 53',
    e: 'April 8, 2020',
  },
  {
    d: 'DARRYL K. SWEENEY, 58, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    d: 'VANEE SYKES, 53, Brooklyn',
    e: 'May 24, 2020',
  },
  {
    d: 'DUROCHER SYLVAIN, 64, Brooklyn',
  },
  {
    d: 'SYLVAN SYLVESTER, Brooklyn',
  },
  {
    d: 'LUCIEN SZPIRO, Manhattan',
    e: 'April 18, 2020',
  },
  {
    d: 'FRANK TAORMINA, 75, Staten Island',
    e: 'April 24, 2020',
  },
  {
    d: 'LUCILLE D. TAPPE, 90, Manhattan',
  },
  {
    d: 'DOREEN TAY, 43, The Bronx',
    e: 'April 21, 2020',
  },
  {
    d: 'VIRGINIA BARRON TAYLOE',
    e: 'May 26, 2020',
  },
  {
    d: 'ROBERTO TEJADA, 45, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'LAFAYETTE TERRELL, 65, Queens',
    e: 'May 2, 2020',
  },
  {
    d: 'BENILDO TEXEIRA, 68, The Bronx',
  },
  {
    d: 'LORENZO JACQUES THAGGARD, 59, The Bronx',
    e: 'April 18, 2020',
  },
  {
    d: 'ANTHONY “TONY” THOMAS, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    d: 'FREDERICK “FRED THE GODSON” THOMAS, 35, The Bronx',
    e: 'April 23, 2020',
  },
  {
    d: 'WILLIAM THOMAS, Manhattan',
  },
  {
    d: 'LEVESTER “L.T.” THOMPSON, 46, Staten Island',
    e: 'April 7, 2020',
  },
  {
    d: 'MICHAEL THOMPSON SR., 60',
    e: 'April 17, 2020',
  },
  {
    d: 'ADLIN R. THOMPSON, 56, Manhattan',
    e: 'April 24, 2020',
  },
  {
    d: 'HOWARD THOMPSON, 57',
    e: 'April 30, 2020',
  },
  {
    d: 'GOLDIE THOMSON, 72, Brooklyn',
  },
  {
    d: 'GENOVEVO “GENO” TLACZANI, Queens',
  },
  {
    d: 'MEDER TLATELPA BALBUENA, 55, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    d: 'ROBERTO S TOBIAS SR., 72, Queens',
    e: 'May 30, 2020',
  },
  {
    d: 'ROBERTO TOBIAS SR., 72, Queens',
    e: 'May 30, 2020',
  },
  {
    d: 'LOIDA TOBIAS, 62, Queens',
    e: 'June 30, 2020',
  },
  {
    d: 'SANTA TORAL, 78, Brooklyn',
  },
  {
    d: 'MORENA TORREDES JAVINES',
  },
  {
    d: 'JUAN LEONARDO TORRES, 65, Queens',
    e: 'March 31, 2020',
  },
  {
    d: 'LOLITA “LELY” TORRES, 73, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'LOUIS TORRES, 47, Queens',
    e: 'April 8, 2020',
  },
  {
    d: 'MIGUEL TORRES, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'GILBERT J. TORRES JR., 56, Staten Island',
    e: 'April 12, 2020',
  },
  {
    d: 'JOE TORRES, 73, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'GILBERT “TORO” TORRES JR., 56, Staten Island',
    e: 'April 12, 2020',
  },
  {
    d: 'TONY TORRES, The Bronx',
    e: 'April 14, 2020',
  },
  {
    d: 'PEDRO TORRES',
  },
  {
    d: 'MIGUEL ANTONIO TORRES',
  },
  {
    d: 'THERESA TORRES, 53',
  },
  {
    d: 'MILLIE TORRES, The Bronx',
  },
  {
    d: 'JULIO TORRES',
  },
  {
    d: 'CESAR TORRES, 55',
  },
  {
    d: 'CARLOS TORRES',
  },
  {
    d: 'HECTOR TORREZ, Brooklyn',
  },
  {
    d: 'PETER JOHN TOSO, 92, The Bronx',
    e: 'April 19, 2020',
  },
  {
    d: 'LIEM TRAN, Manhattan',
  },
  {
    d: 'TOMMY TRAWICK',
  },
  {
    d: 'GREGORY TREADWELL, 64, The Bronx',
  },
  {
    d: 'JOSE TRINIDAD',
  },
  {
    d: 'WILLIAM TROY, 71, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'SUNG TRUONG, 56, Queens',
  },
  {
    d: 'SUNG C. TRUONG, 56, Queens',
  },
  {
    d: 'TENZING TSERING',
    e: 'May 24, 2020',
  },
  {
    d: 'TADASHI TSUFURA, 89, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'WARREN TUCKER',
  },
  {
    d: 'STEWART ALAN TURNER, 61, Manhattan',
    e: 'April 27, 2020',
  },
  {
    d: 'JOSEPH TUSIANI, 96, Manhattan',
    e: 'April 11, 2020',
  },
  {
    d: 'MICHAEL TYSON, 53, The Bronx',
    e: 'April 5, 2020',
  },
  {
    d: 'DAWN TYSON',
  },
  {
    d: 'DR. MOHAMMAD IFTEKHAR UDDIN, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'JAMAL UDDIN, 68, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    d: 'GIYASH UDDIN, The Bronx',
  },
  {
    d: 'ENAM UDDIN',
  },
  {
    d: 'MOHAMMAD RAFIQ UDDIN, 57, Brooklyn',
  },
  {
    d: 'MADALINE ULICNY, 100, Queens',
    e: 'April 3, 2020',
  },
  {
    d: 'MOHAMMAD OZI ULLAH (KUKON), Brooklyn',
  },
  {
    d: 'RICK A. UNTERBERG, 61, Manhattan',
  },
  {
    d: 'ALDO URRIOLA, 50, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    d: 'PETER URSINO, 51, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    d: 'JOSÉ URUCHIMA, Queens',
  },
  {
    d: 'MARGARITA UZHCA MIZHQUIRI, Queens',
    e: 'May 2, 2020',
  },
  {
    d: 'MOISES VALENCIA, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'JAMILET VALENTE',
  },
  {
    d: 'ANA VALERIO, 64',
    e: 'April 3, 2020',
  },
  {
    d: 'JULES G. VALESTIN, 82, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    d: 'LUIS VANEGAS, Queens',
    e: 'May 4, 2020',
  },
  {
    d: 'MARCELINO VAQUERO JR., 38, Brooklyn',
  },
  {
    d: 'ANGEL VARGAS, Queens',
    e: 'May 6, 2020',
  },
  {
    d: 'DONAHUE VARGAS, 56',
  },
  {
    d: 'SIRIACO ROLANDO VASQUEZ',
  },
  {
    d: 'SIRIACO ORLANDO VASQUEZ',
  },
  {
    d: 'JUAN VASQUEZ, 53, Brooklyn',
  },
  {
    d: 'JOSHUA VASQUEZ',
  },
  {
    d: 'JOSE G. VASQUEZ-HERRE',
  },
  {
    d: 'HUGO VEGA, Queens',
    e: 'April 10, 2020',
  },
  {
    d: 'ENRIQUE “JUNIOR” VEGA, The Bronx',
    e: 'April 12, 2020',
  },
  {
    d: 'NICHOLAS VEGA, Queens',
    e: 'April 13, 2020',
  },
  {
    d: 'DOMINGO VEGA, 45, Queens',
    e: 'May 16, 2020',
  },
  {
    d: 'ALFREDO VEGAS',
  },
  {
    d: 'GUADALUPE VELASQUEZ, 47, Queens',
  },
  {
    d: 'LUIS EDUARDO VELECELA, 53, Queens',
    e: 'April 9, 2020',
  },
  {
    d: 'ZLATKO VELESKI, 53, Queens',
  },
  {
    d: 'GREGORIO VELEZ',
  },
  {
    d: 'JOSE VELEZ, 55',
  },
  {
    d: 'LESLIE SOLIUS VERNERET, 63, Brooklyn',
  },
  {
    d: 'DR. J. RONALD VERRIER, 59, Queens',
    e: 'April 8, 2020',
  },
  {
    d: 'JULIAN MUNIZ VIDALS',
  },
  {
    d: 'GONZALO “GEE” VIDANOS JR., 39, Queens',
    e: 'April 17, 2020',
  },
  {
    d: 'GIROLAMO VILLAGGIO',
  },
  {
    d: 'JOSE VILLAGRAN, Queens',
    e: 'April 11, 2020',
  },
  {
    d: 'LUIS VILLARREAL, 73, Queens',
  },
  {
    d: 'JORGE VILLARROEL, 61, Queens',
  },
  {
    d: 'JAMES MICHAEL VILLECCO, 54, Staten Island',
    e: 'March 29, 2020',
  },
  {
    d: 'WILLANDE “ELVIS” VILME',
    e: 'May 12, 2020',
  },
  {
    d: 'DAVID VINE',
  },
  {
    d: 'SVETLANA VINOKUR, 56, Brooklyn',
    e: 'May 1, 2020',
  },
  {
    d: 'MARLYN M. VINUYA, 62, Queens',
    e: 'May 22, 2020',
  },
  {
    d: 'VIVIAN MOSS VOELPEL, 66, The Bronx',
    e: 'April 23, 2020',
  },
  {
    d: 'JOSÉ VÁZQUEZ',
  },
  {
    d: 'EDNA SANDY WACKMAN, 46, Brooklyn',
  },
  {
    d: 'RONALD VINCENT WAITE, 71, Staten Island',
    e: 'May 12, 2020',
  },
  {
    d: 'AVA WALKER, 56, Manhattan',
    e: 'March 31, 2020',
  },
  {
    d: 'ALAIN WALKER, 54',
    e: 'May 19, 2020',
  },
  {
    d: 'JOSHUA “JOSH” WALLWORK, 45, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    d: 'PAUL WALTERS',
  },
  {
    d: 'JOCELYN WALTON',
  },
  {
    d: 'COURTNEY WARREN, 81, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    d: 'NAVIL WARREN',
  },
  {
    d: 'PAULINE WASHINGTON, The Bronx',
    e: 'April 7, 2020',
  },
  {
    d: 'LORETTA WASHINGTON',
  },
  {
    d: 'THOMAS J. “TOM” WATERS, 56, The Bronx',
    e: 'April 4, 2020',
  },
  {
    d: 'EVELYN WATKINS',
  },
  {
    d: 'JAMES WATKINS',
  },
  {
    d: 'RONIECE WATSON, 38, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    d: 'WALTER WATSON, 55, Manhattan',
    e: 'May 4, 2020',
  },
  {
    d: 'URAUL WATTS, 46',
  },
  {
    d: 'DR. BARRY WEBBER, 67',
    e: 'April 18, 2020',
  },
  {
    d: 'RICHARD E. WEBER JR., 57, Manhattan',
    e: 'March 19, 2020',
  },
  {
    d: 'ALBERT KNICKERBOCKER “NICK” WEBSTER, 82, Manhattan',
    e: 'April 3, 2020',
  },
  {
    d: 'MORDECHAI “MORDY” WEINER, 57, Brooklyn',
  },
  {
    d: 'ROBERT M. “BOB” WEINTRAUB, 96, Manhattan',
    e: 'March 29, 2020',
  },
  {
    d: 'ALEXANDER “ALEX” WEIR, 65, Staten Island',
    e: 'April 12, 2020',
  },
  {
    d: 'JEAN WEISMAN, 72, Brooklyn',
  },
  {
    d: 'JEAN BARBARA WEISMAN, 72, Brooklyn',
  },
  {
    d: 'IRENE WEISS',
    e: 'March 26, 2020',
  },
  {
    d: 'BERNARD “BERNIE” WEISSMAN, 93, Manhattan',
    e: 'April 9, 2020',
  },
  {
    d: 'KLARA WEISZ, 99',
    e: 'April 3, 2020',
  },
  {
    d: 'JEAN POLSKY WEITZ, 88, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    d: 'RUTH M. WERRA, 79, Staten Island',
    e: 'April 11, 2020',
  },
  {
    d: 'NICHOLAS WEST',
    e: 'June 25, 2020',
  },
  {
    d: 'KIMBERLY “KIM” WETZEL, 50, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    d: 'CURTIS I WHITTED JR., 52, Manhattan',
  },
  {
    d: 'MORDECHAI MENDEL WIEDER, 90, Brooklyn',
  },
  {
    d: 'STEVEN WIGGINS, Queens',
  },
  {
    d: 'HEIDY WILCOX',
  },
  {
    d: 'VICTORIA WILHELM, 65, Staten Island',
    e: 'April 18, 2020',
  },
  {
    d: 'JANET WILKES',
  },
  {
    d: 'LORNA WILKINSON, 70, Queens',
  },
  {
    d: 'DERYCK WILLIAMS, 77',
    e: 'April 5, 2020',
  },
  {
    d: 'SHARON WILLIAMS',
    e: 'April 21, 2020',
  },
  {
    d: 'ELECIER WILLIAMS, 41, The Bronx',
    e: 'May 3, 2020',
  },
  {
    d: 'A. EDWARD WILLIAMS III, 40',
    e: 'May 7, 2020',
  },
  {
    d: 'PHILLIP WILLIAMS',
  },
  {
    d: 'KEVIN WILLIAMS',
  },
  {
    d: 'KIYOTO “BREEZE” WILLIAMS, 47, Staten Island',
  },
  {
    d: 'LARRY WILLIAMS',
  },
  {
    d: 'CATHY WILLIAMS, 65',
  },
  {
    d: 'PETAL WILLIAMS RICHARDS',
  },
  {
    d: 'HAL WILLNER, 64, Manhattan',
    e: 'April 7, 2020',
  },
  {
    d: 'VALERIE WILSON, 65, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    d: 'DORA WILSON',
  },
  {
    d: 'WILLAMAE WILSON-MORRIS, 77, The Bronx',
    e: 'April 6, 2020',
  },
  {
    d: 'WILLIAM WOLF, 94, Manhattan',
    e: 'March 28, 2020',
  },
  {
    d: 'DAVID ALLEN WOLIN, 74',
    e: 'March 30, 2020',
  },
  {
    d: 'MORTON WOLITZER, 90, Manhattan',
    e: 'April 11, 2020',
  },
  {
    d: 'JOE WONG, Brooklyn',
  },
  {
    d: 'MING WONG, Brooklyn',
  },
  {
    d: 'JESUS “JAY” WONG',
  },
  {
    d: 'DENNIS ANTHONY WONGSANG',
  },
  {
    d: 'WILLIE WOOD, 76, The Bronx',
  },
  {
    d: 'NASHOM WOODEN, 50, Manhattan',
    e: 'March 24, 2020',
  },
  {
    d: 'FRANCHETTE WOODLEY, 64, The Bronx',
  },
  {
    d: 'DONALD WOODSON',
  },
  {
    d: 'DOROTHY L WORRELL, 88, Staten Island',
    e: 'May 4, 2020',
  },
  {
    d: 'DAWN WORTHINGTON, Staten Island',
  },
  {
    d: 'KENNETH WRIGHT, 56',
  },
  {
    d: 'CALVIN WRIGHT, The Bronx',
  },
  {
    d: 'DEAN PATRICK WRZESZCZ, 62, Manhattan',
    e: 'April 3, 2020',
  },
  {
    d: 'MAI YING “SEAGULL” WU',
  },
  {
    d: 'RABBI SOLOMON “SHLOMO ELAZAR” WULLIGER, 81, Brooklyn',
  },
  {
    d: 'ZALMAN YAAKOV, Brooklyn',
  },
  {
    d: 'EMILIO YAGUAL, 67, Queens',
  },
  {
    d: 'DOROTHY RUTH ALAJI YASIN, 84, Queens',
    e: 'March 31, 2020',
  },
  {
    d: 'DR. ALFRED YASSKY, 87, Manhattan',
  },
  {
    d: 'REBECCA YEE, 48, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    d: 'SONIA YETMAN, 57, The Bronx',
    e: 'May 3, 2020',
  },
  {
    d: 'DAW KWUN YOON, 62',
  },
  {
    d: 'ALEXANDER YOUNG',
  },
  {
    d: 'ROBERT YOUNG',
  },
  {
    d: 'DOROTHY YUELLES, 72, Manhattan',
    e: 'April 4, 2020',
  },
  {
    d: 'MANUEL MESIAS YUPA, Queens',
    e: 'April 19, 2020',
  },
  {
    d: 'RICHARD T. ZAIB, 83, Queens',
    e: 'June 25, 2020',
  },
  {
    d: 'AVREMY ZAKON, 55, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    d: 'SARINA ZALMANOVICH, Queens',
  },
  {
    d: 'VICTOR ZAPANA SR., 61, Queens',
    e: 'March 29, 2020',
  },
  {
    d: 'ALEX ZAPATA, 49, Brooklyn',
  },
  {
    d: 'CARMEN ZAPATA, Brooklyn',
  },
  {
    d: 'DR. CIRINO R. ZAPPALA, 54',
    e: 'April 7, 2020',
  },
  {
    d: 'ANGELA ZEMAN, 71, Manhattan',
    e: 'April 30, 2020',
  },
  {
    d: 'JULIO ZHICAY, Queens',
  },
  {
    d: 'MARIA ELENA ZHUMI, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'EDWIN ZHUNIO',
  },
  {
    d: 'ROSE ZUBKO, 71, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    d: 'WILLY ZUMARAN, Queens',
  },
  {
    d: 'MANUEL ZUNA, Queens',
    e: 'April 7, 2020',
  },
  {
    d: 'MANUEL “MAX” ZUNIGA',
  },
  {
    d: 'SCOTT ZWIREN, Brooklyn',
  },
  {
    d: 'YITZCHOCK ZYLBERMINC, 56, Queens',
    e: 'March 25, 2020',
  },
  {
    d: 'IMELDA ZÁRATE, Queens',
    e: 'May 1, 2020',
  },
];