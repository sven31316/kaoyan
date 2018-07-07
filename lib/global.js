$(document).ready(function () {

    htmls = {
        "stdindex": "../student/index.html",
        "stdenroll": "../student/enroll.html",
        "stdlogin": "../student/login.html",
        "adminlogin": "../admin/adminlogin.html",
        "adminindex": "../admin/adminindex.html",
        "stdsignup": "../student/signup.html",
        "zhunkaozheng": "../student/zhunkaozheng.html",
        "stdcenter": "../student/center.html",
        "mbaindex": "../student/mbaindex.html",
        stdpay: "../student/pay.html",
        stdaccoutedit: "../student/accountedit.html",
        superindex: '../admin/superindex.html'
    }
    let interfs = JSON.stringify(htmls)
    $.cookie('interfaces', interfs)//把接口写入cookie  不能呢删除!
    let local = $.cookie('localurl', 'http://hmesda.natappfree.cc')

    var interfaces = JSON.parse($.cookie('interfaces'))
    $("#logout").click(function () {
        $.removeCookie('name')
        $.removeCookie('password')
        $.removeCookie('accountid')
        $.cookie('islogin', 'no')
        alert("注销成功!")
        window.location.href = interfaces.stdlogin
    })
    $("#adminlogout").click(function () {
        $.removeCookie('name')
        $.removeCookie('password')
        $.cookie('isadminlogin', false)
        alert("注销成功!")
        window.location.href = interfaces.adminlogin
    })


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
        if ($.cookie('isenrolled') === 'no' || $.cookie('isenrolled') == null) {
            alert("您未报名!请报名!")

        } else if ($.cookie("isenrolled") == "yes") {
            location.assign(interfaces.zhunkaozheng)
        }
    })
});


function showsuccess() {
    $("#alipayimage").addClass("d-none")
    $("#jiaofeiwarning").html("缴费成功!").removeClass("text-danger").addClass("text-info")
    $("#enrollsuccess").removeClass("d-none")
    $("#downzhunkaozheng").removeClass("d-none")
}
