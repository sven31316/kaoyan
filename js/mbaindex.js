$(document).ready(function () {
    var interfaces = JSON.parse($.cookie('interfaces'))
    let local = $.cookie('localurl');
    $("#searchbtn").click(function () {


        $.ajax({
            url: local + '/commomuser/search/1/全日制',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json; charset=UTF-8',
            timeout: 1000,
            cache: false
        })
            .done(function (data) {
                $("#searchout").dataTable({
                    "data": data.data,
                    "aLengthMenu": [5, 10, 15, 20, 25], //更改显示记录数选项     "iDisplayLength" : 2, //默认显示的记录数
                    "bLengthChange": true,                  //是否允许用户自定义每页显示条数。
                    "bPaginate": true,                      //是否分页。
                    "bProcessing": true,                    //当datatable获取数据时候是否显示正在处理提示信息。
                    "sPaginationType": 'full_numbers',      //分页样式
                    "columns": [
                        {"data": "name"},
                        {"data": "province"},
                        {"data": "address"},
                        {
                            "data": null
                        }


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
                    }, columnDefs: [{
                        targets: 3,
                        render: function (data, type, row, meta) {
                            return "<a  class='btn btn-primary' href='#' >修改</a>"
                        }
                    }]

                })
            })
            .fail(function (data) {
            })
            .always(function () {
                console.log("complete");
            });
    })
})