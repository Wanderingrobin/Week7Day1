var hello = 'Hello World'
var year = 1942;
var dogAtHome = true;

var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()

var amount = 5.45;
var letter = 'x';

var elem2 = document.getElementById('demo3');

elem2.innerHTML = document.write(hello);
document.write('<br/>');
document.write('Colmbus sailed the world in ' + year);
document.write('<br/>');
document.write('it is ' + dogAtHome + ' that I will soon have a dog at home.');
document.write('<br/>');
document.write('Today is ' + month + "/" + day + "/" + year);
document.write('<br/>');
document.write('I spent &#36;' + amount + ' on a cheeseburger.');
document.write('<br/>');
document.write(letter + ' marks the spot!');

var books = ['Dark Matter', 'House of Leaves', 'SOS Series', 'Penpal', 'Heroes of Olympus Series', 'NewsFlesh Series','The Mithermages Series'];
document.write(books);
books.push('Hunger Games');
books.pop();
