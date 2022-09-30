//LayUI

// 表格滚动器
/*
   tableContainer:表格容器
   interval:定时时间
 */
function TableScroller(tableContainer, interval) {

    // 响应鼠标事件
    //let that = this;
    //元素上方
    /*    tableContainer.on('mouseover', function () {
            that.pause();
        });
        //鼠标离开
        tableContainer.on('mouseleave', function () {
            that.resume();
        });*/

    // 隐藏表格滚动条
    let bodyContainer = tableContainer.find('.layui-table-body');
    bodyContainer.css('overflow-x', 'hidden');//x轴的滚动条
    bodyContainer.css('overflow-y', 'hidden');

    this.timerID = null;
    this.interval = interval;
    this._bodyTable = bodyContainer.find('table');
    this._tbody = this._bodyTable.find('tbody');

    this.start = function () {
        let that = this;
        //每隔interval时间，执行_scroll
        that.timerID = setInterval(function () {
            that._scroll(that._bodyTable, that._tbody, that.interval);
        }, that.interval);
    };
    /*    this.pause = function () {
            let that = this;
            if (that.timerID === null) {
                return;
            }

            clearInterval(that.timerID);
            that.timerID = null;
        };
        this.resume = function () {
            let that = this;
            if (that.timerID !== null || that.callback === null || that.interval === null) {
                return;
            }

            that.timerID = setInterval(function () {
                that._scroll(that._bodyTable, that._tbody, that.interval);
            }, that.interval);
        };*/
    /*    this.stop = function () {
            let that = this;
            if (this.timerID === null) {
                return;
            }

            clearInterval(that.timerID);
            that.callback = null;
            that.interval = null;
            that.timerID = null;
        };*/

    /*
        bodyTable表格
        tbody表格数据
        interval时间
     */
    this._scroll = function (bodyTable, tbody, interval) {
        let firstRow = tbody.find('tr:first');
        let rowHeight = firstRow.height();
        bodyTable.animate(
            {top: '-' + rowHeight + 'px'},//设置每次上移一行大小的动画，
            interval * 0.5,//interval * 0.5  动画时间
            function () {  //回调
                tbody.append(firstRow.prop("outerHTML"));//获取第一行的html代码，加到tbody的最后一行
                bodyTable.css('top', '0px');//
                firstRow.remove();//每次上移之后删掉第一行
            });
    }
}
let alarmTableContainer = $('#userDetailsTable');
layui.use('table', function () {
    var table = layui.table;

    //第一个实例
    table.render({
        elem: '#table',
        height: 205,
        //whith: 850,//whith受外层div限制,默认跟随父容器
        skin: 'nob',//数据无边框风格
        even: true,  //开启隔行背景
        url: './js/user.json',//数据接口
        page: false,//开启分页
        cols: [[ //表头
            {field: 'id', title: '用户编号', width: 81, sort: true},
            {field: 'username', title: '用户名称', width: 100},
            {field: 'sex', title: '用电类别', width: 110, sort: true},
            {field: 'city', title: '用户分类', width: 110},
            {field: 'sign', title: '行业分类', width: 110},
            {field: 'experience', title: '用电地址', width: 125, sort: true},
            {field: 'score', title: '数据日期', width: 100, sort: true},
            {field: 'classify', title: '窃电概率(%)', width: 100},
        ]],
        done: function (res, curr, count) {
            if (count > 4) {
                //debugger;
                let scroller = new TableScroller(alarmTableContainer, 2000);
                scroller.start();
            }
        }
    });

});

