var my_birthday = new Date(1994,06,24,11,30);
var age = new Date( new Date() - my_birthday).getFullYear()-1970;

var age_span = document.getElementById('my_age');
age_span.textContent=age.toString();
