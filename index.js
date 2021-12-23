const hour = $('#hour');
const minute = $('#minute');
const second = $('#second');
const clock = $('#ClockContainer');
const hhmmss = $('#hhmmss');
const ddmmyyyy = $('#ddmmyyyy');
var kdhfg = 1;

setInterval(() =>{
    if (kdhfg == 1) { clock.css('display', 'flex'); kdhfg=0;}
    var d = new Date();
    var htime = d.getHours();
    var mtime= d.getMinutes();
    var stime= d.getSeconds();
    var hrotation = 30*htime + mtime/2;
    var mrotation = 6*mtime;
    var srotation = 6*stime;

    hour.css('transform', 'rotate(' + hrotation + 'deg');
    minute.css('transform', 'rotate(' + mrotation + 'deg');
    second.css('transform', 'rotate(' + srotation + 'deg');

    hhmmss.text(d.toTimeString().split(' ')[0]);
    ddmmyyyy.text(d.toDateString())
} , 1000);