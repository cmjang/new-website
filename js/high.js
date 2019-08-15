function getRTime() {
    var NowTime = new Date();
    var NowYear = "2021";
    var EndTime = new Date(NowYear + "/06/07 09:00:00"); //截止时间

    var t = EndTime.getTime() - NowTime.getTime();
    var d = Math.floor(t / 1000 / 60 / 60 / 24);
    var h = Math.floor(t / 1000 / 60 / 60 % 24);
    var m = Math.floor(t / 1000 / 60 % 60);
    var s = Math.floor(t / 1000 % 60);

    document.getElementById("t_d").innerHTML = d + " 天";
    document.getElementById("t_h").innerHTML = h + " 时";
    document.getElementById("t_m").innerHTML = m + " 分";
    document.getElementById("t_s").innerHTML = s + " 秒";
    document.getElementById("t_y").innerHTML = NowYear + "年";
    //document.getElementById("t_y1").innerHTML = NowYear + "年";
    document.getElementById("t_y2").innerHTML = NowYear + "年";
    document.getElementById("t_y3").innerHTML = NowYear + "年";
}
setInterval(getRTime, 1000);