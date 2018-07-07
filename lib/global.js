$(document).ready(function () {

    htmls = {
        "stdindex": "../student/index.html",
        "stdenroll": "../student/enroll.html",
        "stdlogin": "../student/login.html",
        "adminlogin": "../admin/adminlogin.html",
        "stdsignup": "../student/signup.html",
        "zhunkaozheng": "../student/zhunkaozheng.html",
        "stdcenter": "../student/center.html",
        "mbaindex": "../student/mbaindex.html",
        stdpay: "../student/pay.html",
        stdaccoutedit: "../student/accountedit.html",
        superindex: '../admin/superindex.html'
    }
    interfs = JSON.stringify(htmls)
    // var jsonhtml = $.cookie('htmls', interfacesarr)
    var jsonhtml = $.cookie('interfaces', interfs)
    local = $.cookie('localurl', 'http://se7mv5.natappfree.cc')

    var interfaces = JSON.parse($.cookie('interfaces'))
    $("#logout").click(function () {
        $.removeCookie('name')
        $.removeCookie('password')
        $.cookie('islogin', 'no')
        window.location.href = jsonhtml.stdlogin
    })
    $("#adminlogout").click(function () {
        $.removeCookie('name')
        $.removeCookie('password')
        $.cookie('islogin', 'no')
        window.location.href = jsonhtml.adminlogin
    })
    //  $.session.set(obj)
    // alert($.session.get('obj.abc'))
    $("#jiaofei").click(function () {
        $("#jiaofei").hide();
        $("#alipayimage").show()
        $("#jiaofeiwarning").removeClass("d-none")

        setInterval(showsuccess, 5000);
    })
    $("#accountinfolink").click(function () {
       location.assign(interfaces.stdaccoutedit)
    })
    $("#toenrolllink").click(function () {
       location.assign(interfaces.stdenroll)
    })
    $("#tombaindexlink").click(function () {
       location.assign(interfaces.mbaindex)
    })
    $("#zhunkaozzhenglink").click(function () {
       location.assign(interfaces.zhunkaozheng)
    })
});


function showsuccess() {
    $("#alipayimage").addClass("d-none")
    $("#jiaofeiwarning").html("缴费成功!").removeClass("text-danger").addClass("text-info")
    $("#enrollsuccess").removeClass("d-none")
    $("#downzhunkaozheng").removeClass("d-none")
}
