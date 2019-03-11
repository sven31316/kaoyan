$(document).ready(function () {

    var interfaces = JSON.parse($.cookie('interfaces'))
    let local = $.cookie('localurl')
    show_time();
    $("#tombaindex").click(function () {
        location.assign(interfaces.mbaindex)
    })
    $("#tologinbtn").click(function () {
        var flag = $.cookie("islogin")
        if (flag === 'no' || flag == null||$.cookie('accountid')==null) {

            location.assign(interfaces.stdlogin)
        } else if (flag === 'yes') {

            location.assign(interfaces.stdcenter)
        }
    })

})

function show_time() {
    window.setTimeout("show_time()", 1000);
  let  BirthDay = new Date("2018-12-24");//改成你的计时日期
  let  today = new Date();
  let  timeold = (BirthDay.getTime() - today.getTime());
  let  sectimeold = timeold / 1000
  let  secondsold = Math.floor(sectimeold);
  let  msPerDay = 24 * 60 * 60 * 1000
  let  e_daysold = timeold / msPerDay
  let  daysold = Math.floor(e_daysold);
  let  e_hrsold = (e_daysold - daysold) * 24;
  let  hrsold = Math.floor(e_hrsold);
  let  e_minsold = (e_hrsold - hrsold) * 60;
  let  minsold = Math.floor((e_hrsold - hrsold) * 60);
  let  seconds = Math.floor((e_minsold - minsold) * 60);
    daojishi.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}

