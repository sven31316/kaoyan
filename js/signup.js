$(document).ready(function () {
    let local = $.cookie('localurl')
    var interfaces = JSON.parse($.cookie('interfaces'))
    $("#phonenumber").blur(function () {
        checkMobile()
    });
    $("#phonenumber").on('input propertychange', function () {
        checkMobile()
    });
    $("#password1").on('input propertychange', function () {
        checkpassstrenth();
        checktwopass()
    });
    $("#password2").on('input propertychange', function () {
        checktwopass()
    });
    $("#credentnumber").on('input propertychange', function () {
        checkcredentnumber()
    });
    $("#signupbtn").click(function (event) {
        let flag = ($("#name").val().length == 0) && ($("#password1").val() == 0) && ($("#phonenumber").val().length == 0) && ($("#signemail").val().length == 0)

        if (flag) {
            alert("不能为空!")
        } else {
            $.ajax({
                url: local + "/commomuser/rigesterCommomUser",
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify({
                    "id": "identity",
                    "name": $("#name").val(),
                    "phone": $("#phonenumber").val(),
                    "email": $("#signemail").val(),
                    "password": $("#password1").val(),
                    "certificateStyle": $("#credentialtype").val(),
                    "certificateNumber": $("#credentnumber").val(),
                }),
                contentType: 'application/json; charset=UTF-8',
                timeout: 1000,
                cache: false,
            })
                .done(function () {
                    console.log("success");

                    $.cookie('islogin', 'yes')
                    $.cookie("name",$("#name").val(),)
                    $.cookie("password",$("#password1").val(),)

                    alert("注册成功!");
                    window.location.href = interfaces.stdcenter
                })
                .fail(function () {
                    console.log("error");
                })
                .always(function () {
                    console.log("complete");
                });
        }
        /* Act on the event */
    });
});


/**
 * @Author: yanni
 * @Description:检查电话号码
 * @Date: 12:56 2018/7/3
 * @Modified By:
 * @Params:
 */
function checkMobile() {
    var sMobile = $("#phonenumber").val();
    if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(sMobile))) {
        $("#nophonenumber").show('slow');
        $("#phonenumber").focus();
        console.log($("#phonenumber").val())
        return false;
    } else {
        $("#nophonenumber").hide()
    }
}


function checkpassstrenth() {

    var pwd1 = $("#password1").val();
    var pwd2 = $("#password2").val();
    if (pwd1.length >= 6) {
        if (/[a-zA-Z]+/.test(pwd1) && /[0-9]+/.test(pwd1) && /\W+\D+/.test(pwd1)) {
            $("#nopassword1").show("slow")
        } else if (/[a-zA-Z]+/.test(pwd1) || /[0-9]+/.test(pwd1) || /\W+\D+/.test(pwd1)) {
            if (/[a-zA-Z]+/.test(pwd1) && /[0-9]+/.test(pwd1)) {
                $("#nopassword2").show("slow")
            } else if (/\[a-zA-Z]+/.test(pwd1) && /\W+\D+/.test(pwd1)) {
                $("#nopassword2").show("slow")
            } else if (/[0-9]+/.test(pwd1) && /\W+\D+/.test(pwd1)) {
                $("#nopassword2").show("slow")
            } else {
                $("#nopassword3").show("slow")
            }
        }
    }


}

function checktwopass() {
    var pwd1 = $("#password1").val();
    var pwd2 = $("#password2").val();
    <!-- 对比两次输入的密码 -->
    if (pwd1.length >= 1) {
        if (pwd1 == pwd2) {
            $("#passdismatch").hide();
            $("#passmatch").show("slow")
        } else {
            $("#passmatch").hide()
            $("#passdismatch").show("slow")
        }
    }
}

function checkcredentnumber() {
    if (isNaN($("#credentnumber").val())) {
        $("#nocredent").show()
    } else {
        $("#nocredent").hide()
    }
}
