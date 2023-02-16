let yearOfBirth = prompt('enter year of birth');
let cityOfLife = prompt('enter the name of the city in which you live');
let favoriteSport = prompt('enter favorite kind of sport');
let currentOFYear = 2023;
let currentAge = currentOFYear - yearOfBirth;

if ( yearOfBirth === null ) {
alert('Шкода, що Ви не захотіли ввести свою дату народження');
} 

if (cityOfLife === 'Kyiv') {
alert(`${currentAge}.\nТи живеш у столиці України`);
} else if (cityOfLife === 'Washington') {
alert(`${currentAge}.\nТи живеш у столиці США`);
} else if (cityOfLife === 'London') {
alert(` ${currentAge}.\nТи живеш у столиці Великої Британії`);
}   else if ( cityOfLife != null) {
alert(`${currentAge}.\nТи живеш у місті ${cityOfLife}`);
} else if ( cityOfLife === null)  {
alert(`${currentAge}.\nШкода, що Ви не захотіли ввести своє місто`);
}
if (favoriteSport === 'football') {
alert(`Круто! Хочеш стати як Ліонель Мессі?`); 
}  else if (favoriteSport === 'boxing') {
alert(`Круто! Хочеш стати як Олександр Усик? `);
} else if (favoriteSport === 'chess') {
alert(`Круто! Хочеш стати як Магнус Карлсен?`);
} else {
alert(`Шкода, що Ви не захотіли ввести свій улюблений вид спорту`);
}
