/*var models = ['Opel', 'Mazda', 'Toyota'];

function print(array) {
    array.forEach(function(item) {
        console.log(item);

    });
}


print(models);
*/
var cumle = "Türklerde yazının kullanılması eskidir alfabe  harfleri yazma şekli. İnci gibi bir yazı.";

var maxcharecter = 26;
var ozetcumle = [];

if (maxcharecter > cumle) {
    console.log(cumle);
} else {
    var words = cumle.split(' ');

    var multicharecter = 0;
    for (var i = 0; i < words.length; i++) {
        ozetcumle.unshift(words[i]);
        multicharecter += words[i].length;
        if (multicharecter > maxcharecter) {
            break;

        }
    }
}
console.log(ozetcumle);