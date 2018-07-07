$(document).ready(function () {

    var interfaces = JSON.parse($.cookie('interfaces'))
    let local = $.cookie('localurl')
    $("#password").append($.cookie('password'))
    $("#name").append($.cookie('name'))
    $("#credentialtypeselect").val($.cookie('certificateStyle'))
    $("#zhengjianhao").append($.cookie('certificateNumber'))
    $("#phonenum").append($.cookie('phone'))
    $("#myemail").append($.cookie('email'))
    $(".change").click(function () {
        $("#changeall").show()
        $("#credentialtypeselect").hide()
        $("#username").html("<input id='usernameinput' class='form-control w-50 d-inline'  type='text' value=''/> ");
        $("#password").html("<input id='passwordinput' class='form-control w-50 d-inline'  type='text' value=''/> ");
        $("#name").html("<input id='nameinput' class='form-control w-50 d-inline'  type='text' value=''/> ")

        $("#zhengjianhao").html("<select name=\"credentialtype\" id=\"credentialtype\" class=\"form-control w-25 d-inline\" aria-invalid=\"false\">\n" +
            "    <option value=\"0\" selected=\"selected\">中华人民共和国居民身份证</option>\n" +
            "    <option value=\"3\">其他</option>\n" +
            "    <option value=\"1\">港澳台身份证</option>\n" +
            "    <option value=\"2\">华侨身份证(无身份证者可填护照号)</option>\n" +
            "</select><input id='zhengjianhaoinput' class='form-control w-25 d-inline'  type='text' value=''/> ")
        $("#phonenum").html("<input id='phonenuminput' class='form-control w-50 d-inline'  type='text' value=''/> ")
        $("#myemail").html("<input id='emailinput' class='form-control w-50 d-inline'  type='text' value=''/> ")
        $("#passwordinput").val($.cookie('password'))
        $("#nameinput").val($.cookie('name'))
        $("#credentialtype").val($.cookie('certificateStyle'))
        $("#zhengjianhaoinput").val($.cookie('certificateNumber'))
        $("#phonenuminput").val($.cookie('phone'))
        $("#emailinput").val($.cookie('email'))
    })


    $("#changeall").click(function () {

        $.ajax({
            url: local + '/commomuser/updateAccount',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                "id": $.cookie('accountid'),
                "name": $("#nameinput").val(),
                "password": $("#passwordinput").val(),
                "certificateStyle": $("#crdentialtype").val(),
                "certificateNumber": $("#zhengjianhaoinput").val(),
                "phone": $("#phonenuminput").val(),
                "email": $("#emailinput").val()

            }),
            contentType: 'application/json; charset=UTF-8',
            timeout: 1000,
            cache: false
        })
            .done(function (data) {
                console.log("成功")
                alert("修改成功!")
                window.location.href = interfaces.stdaccoutedit

            })
            .fail(function (data) {
                alert(data.message)
            })
            .always(function () {
                console.log("complete");
            });
        $.cookie('accountid', $.cookie('accountid'))
        $.cookie('password', $("#passwordinput").val())
        $.cookie('name', $("#nameinput").val())
        $.cookie('certificateStyle', $("#credentialtype").val())
        $.cookie('certificateNumber', $("#zhengjianhaoinput").val())
        $.cookie('phone', $("#phonenuminput").val())
        $.cookie('email', $("#emailinput").val())


    })

});

function changeinfo() {
    $("#changeall").show()
    $("#credentialtypeselect").hide()
    $("#username").html("<input id='usernameinput' class='form-control w-50 d-inline'  type='text' value=''/> ");
    $("#password").html("<input id='passwordinput' class='form-control w-50 d-inline'  type='text' value=''/> ");
    $("#name").html("<input id='nameinput' class='form-control w-50 d-inline'  type='text' value=''/> ")

    $("#zhengjianhao").html("<select name=\"credentialtype\" id=\"credentialtype\" class=\"form-control w-25 d-inline\" aria-invalid=\"false\">\n" +
        "    <option value=\"0\" selected=\"selected\">中华人民共和国居民身份证</option>\n" +
        "    <option value=\"3\">其他</option>\n" +
        "    <option value=\"1\">港澳台身份证</option>\n" +
        "    <option value=\"2\">华侨身份证(无身份证者可填护照号)</option>\n" +
        "</select><input id='zhengjianhaoinput' class='form-control w-25 d-inline'  type='text' value=''/> ")
    $("#phonenum").html("<input id='phonenuminput' class='form-control w-50 d-inline'  type='text' value=''/> ")
    $("#myemail").html("<input id='emailinput' class='form-control w-50 d-inline'  type='text' value=''/> ")
    $("#passwordinput").val($.cookie('password'))
    $("#nameinput").val($.cookie('name'))
    $("#credentialtype").val($.cookie('certificateStyle'))
    $("#zhengjianhaoinput").val($.cookie('certificateNumber'))
    $("#phonenuminput").val($.cookie('phone'))
    $("#emailinput").val($.cookie('email'))

}