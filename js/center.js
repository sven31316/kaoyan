$(document).ready(function () {

    var interfaces = JSON.parse($.cookie('interfaces'))
    let local = $.cookie('localurl')
    switch ($.cookie('key')) {
        case null:
            for (i = 2; i < 6; i++) {
                $("#span" + i).removeClass('noinfor-text')
                $("#span" + i).html('已开通')
                $("#span" + i).addClass('infor-text')
            }
            break;
        case "1":
            for (i = 2; i < 6; i++) {
                $("#span" + i).removeClass('noinfor-text')
                $("#span" + i).html('已开通')
                $("#span" + i).addClass('infor-text')
            }
            break;
        case "2":
            for (i = 2; i < 6; i++) {
                $("#span" + i).removeClass('noinfor-text')
                $("#span" + i).html('已开通')
                $("#span" + i).addClass('infor-text')
            }
            $("#span8").html("已开通")
            $("#span8").addClass('infor-text')
            break;
        case "3":
            for (i = 2; i < 6; i++) {
                $("#span" + i).removeClass('noinfor-text')
                $("#span" + i).html('已开通')
                $("#span" + i).addClass('infor-text')
            }
            $("#span7").html("已开通")
            $("#span7").addClass('infor-text')
            break;
        case '4':
            for (i = 2; i < 6; i++) {
                $("#span" + i).removeClass('noinfor-text')
                $("#span" + i).html('已开通')
                $("#span" + i).addClass('infor-text')
            }
            break;
        case '5':
            for (i = 1; i < 7; i++) {
                $("#span" + i).removeClass('noinfor-text')
                $("#span" + i).html('已开通')
                $("#span" + i).addClass('infor-text')
            }
    }
});