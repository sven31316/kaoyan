$(document).ready(function () {
    $.ajax({
        url: 'https://www.easy-mock.com/mock/5b3b731adae7213852e96707/a/account',
        type: 'get',
        dataType: 'json',
        timeout: 1000,
        cache: false,
        beforeSend: LoadFunction,
        error: errorFunction,
        success: succeedFunction
    });

    function LoadFunction() {

    }

    function errorFunction() {
        alert("错误")
    }

    //datatables的ajax方法
    function succeedFunction(data) {
        alert("已成功")
        alert(data.data.account.name)
        alert(data.data.account.password)
        $("#userinfo").dataTable({
            "data": data.data.account,
            "columns": [
                {"data": "id"},
                {"data": "name"},
                {"data": "phone"},
                {"data": "email"},
                {"data": "password"},
                {"data": "certificate_style"},
                {"data": "certificate_number"},
                {"data": "style"}

            ],
            language: {
                "sProcessing": "处理中...",
                "sLengthMenu": "显示 _MENU_ 项结果",
                "sZeroRecords": "没有匹配结果",
                "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
                "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
                "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
                "sInfoPostFix": "",
                "sSearch": "搜索:",
                "sUrl": "",
                "sEmptyTable": "表中数据为空",
                "sLoadingRecords": "载入中...",
                "sInfoThousands": ",",
                "oPaginate": {
                    "sFirst": "首页",
                    "sPrevious": "上页",
                    "sNext": "下页",
                    "sLast": "末页"
                },
                "oAria": {
                    "sSortAscending": ": 以升序排列此列",
                    "sSortDescending": ": 以降序排列此列"
                }
            },

        })

    }
})
