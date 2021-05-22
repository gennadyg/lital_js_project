var d = new Date();
var days = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
var currentDay = days[d.getDay()];
var hours = d.getHours();
var minutes = d.getMinutes();
document.write("היום יום " + currentDay + "," + "השעה " + hours + ":" + minutes);
