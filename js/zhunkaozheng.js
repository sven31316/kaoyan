$(document).ready(function () {
    let local = $.cookie('localurl')
    var interfaces = JSON.parse($.cookie('interfaces'))
    $.ajax({
        url: local + "/commomuser/lookExam/" + $.cookie("accountid"),
        type: 'post',
        dataType: 'json',

        contentType: 'application/json; charset=UTF-8',
        timeout: 1000,
        cache: false
    })
        .done(function (data) {
            $("#stdname").append(data.data.name)
            $("#stdexamway").append(data.data.examWay)
            $("#specialplan").append(data.data.specialPlan)
            $("#sex").append(data.data.sex)
            $("#fieldplace").append(data.data.filePlace)
            $("#certifiatesy").append(data.data.certificateStyle)
            $("#certificatenum").append(data.data.certificateNumber)
            $("#wantdepartment").append(data.data.wantDepartmentName)
            $("#wantmajor").append(data.data.wantMajorName)
            $("#exampoint").append(data.data.examPointName)
        })
        .fail(function () {
            console.log("error");
        })
        .always(function () {
            console.log("complete");
        });

    $('#down').click(function () {

        bdhtml = window.document.body.innerHTML;
        sprnstr = "<!--startprint-->";
        eprnstr = "<!--endprint-->";
        prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
        prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
        window.document.body.innerHTML = prnhtml;
        window.print();
    });
})