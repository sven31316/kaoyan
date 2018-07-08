$(document).ready(function () {

    interfaces = {
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
    // interfaces = {
    //     "stdindex": "/index",
    //     "stdenroll": "/stdenroll",
    //     "stdlogin": "/stdlogin",
    //     "adminlogin": "/adminlogin",
    //     "adminindex": "/adminindex",
    //     "stdsignup": "/stdsignup",
    //     "zhunkaozheng": "/zhunkaozheng",
    //     "stdcenter": "/stdcenter",
    //     "mbaindex": "/stdmbaindex",
    //     stdpay: "/stdpay",
    //     stdaccoutedit: "/stdaccountedit",
    //     superindex: '/superindex'
    // }


    // let local = $.cookie('localurl', 'http://localhost:8081')
    let local = $.cookie('localurl', 'http://56gfhs.natappfree.cc')

    //给url添加地址
    // for (let inter in interfaces) {
    //     interfaces[inter] = $.cookie('localurl').concat('/' + interfaces[inter])
    //     createJson(inter, interfaces[inter])
    //     console.log(interfaces[inter])
    //
    // }
    console.log(interfaces)
    let interfs = JSON.stringify(interfaces)
    $.cookie('interfaces', interfs)//把接口写入cookie  不能呢删除!
    // 参数：prop = 属性，val = 值
    function createJson(prop, val) {
        // 如果 val 被忽略
        if (typeof val === "undefined") {
            // 删除属性
            delete interfaces[prop];
        }
        else {
            // 添加 或 修改
            interfaces[prop] = val;
        }
    }

    console.log(interfaces)
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
