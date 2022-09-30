//Echarts

//行业分布
var industryShowDom = document.getElementById('industryShow');
var industryShowChart = echarts.init(industryShowDom);
var industryShowoption;
industryShowoption = {
    tooltip: {
        //图形触发
        trigger: 'item'
    },
    legend: {
        top: '35%',
        show: false,
        left: 'left',
        orient: 'vertical',
    },
    series: [
        {
            name: '行业分布',
            type: 'pie',
            radius: ['28%', '55%'],
            avoidLabelOverlap: true,
            itemStyle: {
                borderRadius: 2,
                //borderColor: '#fff',
                borderWidth: 5
            },
            //环形外标签显示
            label: {
                show: true,
                position: 'outside',
                formatter: ['{top|{d}%}', '{buttom|{b}}'].join('\n'),
                rich: {
                    top: {
                        fontSize: 18
                    },
                    buttom: {
                        color: 'white',
                        fontSize: 12
                    }
                }
            },
            //视觉引导线
            labelLine: {
                show: true
            },
            //标签内容
            emphasis: {
                label: {
                    show: true,
                    //颜色跟随
                    color: (params) => params.color,
                    //上边的富文本写s了
                    //fontSize:30,
                    fontWeight: 'bold'
                    //点击再进行文本显示
                    /*formatter:[
                      '{d}%',
                      '{b}'
                      ].join('\n'),*/
                }
            },
            data: [
                {value: 1048, name: '城镇居民'},
                {value: 735, name: '乡村居民'},
                {value: 580, name: '综合零售'},
                {value: 484, name: '其他'},
                {value: 300, name: '其他餐饮服务'},
                {value: 300, name: '其他未列明服务'}
            ]
        }
    ]
};
industryShowoption && industryShowChart.setOption(industryShowoption);

//城乡分布
var urbanShowDom = document.getElementById('urbanShow');
var urbanShowChart = echarts.init(urbanShowDom);
var urbanShowoption;
urbanShowoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    dataZoom: {
        type: 'inside'
    },
    legend: {
        show: true,
        textStyle: {
            color: '#fff'
        }
    },
    grid: {
        //防止y轴标签溢出
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['城市', '农村', '边远地区'],
        axisLabel: {
            color: '#fff'
        }
    },
    yAxis: [
        {
            name: '户数',
            position: 'right',
            type: 'value',
            nameTextStyle: {
                fontStyle: "normal",
                align: "left",
                color: '#fff',
            },
            alignTicks: true,
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3a4e59'
                }
            },
        },
        {
            name: '万元',
            type: 'value',
            position: 'left',
            nameTextStyle: {
                fontStyle: "normal",
                align: "right",
                color: '#fff',
            },
            //多y轴自动对齐
            alignTicks: true,
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3a4e59'
                }
            },
        },
    ],
    series: [
        {
            name: '窃电金额',
            data: [6000, 8000, 10000],
            type: 'bar',
            barWidth: 25,
            yAxisIndex: 1,
            itemStyle: {
                borderRadius: [8, 8, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2ae87c'
                }, {
                    offset: 1,
                    color: '#67ffb4'
                }]),
            }
        },
        {
            name: '窃电户数',
            data: [2, 4, 8],
            type: 'bar',
            barWidth: 25,
            itemStyle: {
                borderRadius: [8, 8, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00A4FD'
                }, {
                    offset: 1,
                    color: '#00c7fe'
                }]),
            }
        },
    ]
};
urbanShowoption && urbanShowChart.setOption(urbanShowoption);

//用电类别分布
var useElecShowDom = document.getElementById('useElecShow');
var useElecShowChart = echarts.init(useElecShowDom);
var useElecShowoption;
useElecShowoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    dataZoom: {
        type: 'inside'
    },
    legend: {
        show: true,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        type: 'category',
        data: ['大工业', '居民', '非居民', '农业用电', '其他'],
        axisLabel: {
            color: '#fff'
        }
    },
    yAxis: [
        {
            name: '万kW',
            type: 'value',
            position: 'left',
            nameTextStyle: {
                fontStyle: "normal",
                align: "right",
                color: '#fff',
            },
            //多y轴自动对齐
            alignTicks: true,
            axisLabel: {
                color: '#fff'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3a4e59'
                }
            },
        },
    ],
    series: [
        {
            name: '窃电户数',
            data: [50, 100, 150, 200, 250, 300],
            type: 'bar',
            barWidth: 25,
            itemStyle: {
                borderRadius: [8, 8, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00A4FD'
                }, {
                    offset: 0.5,
                    color: '#3fc193'
                }, {
                    offset: 1,
                    color: '#e1d13d'
                }]),
            }
        },
        {
            name: '窃电金额',
            data: [50, 10, 50, 60, 150, 30],
            type: 'line',
            smooth: true
        }
    ]
};
useElecShowoption && useElecShowChart.setOption(useElecShowoption);

//模型因素
var modelFacterShowDom = document.getElementById('modelFacterShow');
var modelFacterShowChart = echarts.init(modelFacterShowDom);
var modelFacterShowption;
let data = [];//数据
let dataName = ['窃电记录', '线损趋势', '电量趋势', '负荷异常', '潮流反向',
    '流三相不平衡', '欠费记录', '电流表倒走', '失压断相', '磁场干扰',
    '电流失流', '线损趋势', '开箱时间', '开盖事件'];//名称
let defaultData = [];//默认背景，以最大值填充
let maxData = 0;
for (let i = 0; i < dataName.length; ++i) {
    data.push(Math.round(Math.random() * 200));
}
/*/!*找到data的最大值*!/
data.forEach((item) => maxData = item > maxData ? item : maxData);
/!*以最大值填充背景，将defaultData的值全部变为最大值*!/
for (let i = 0; i < data.length; i++) {
    defaultData.push(maxData);
}*/
modelFacterShowption = {
    //backgroundColor: '#000',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    xAxis: {
        show: false,
        type: 'value',
        max: 'dataMax'
    },
    yAxis: {
        type: 'category',
        data: dataName,
        //y线文字
        axisLabel: {
            color: '#fff'
        },
        //y线间隔
        axisTick: {
            show: false,
        },
        //y线
        axisLine: {
            show: false
        },
        inverse: true,
        //两个柱子一启动
        //animationDuration: 300,
        //不一起动
        //animationDurationUpdate: 300,
        //max: 2 // only the largest 3 bars will be displayed
    },
    series: [
        {
            realtimeSort: true,
            name: '窃电模型',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    color: (params) => {
                        return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#ffa',
                            },
                            {
                                offset: 0.3,
                                color: '#e1d13d',
                            },
                            {
                                offset: 0.7,
                                color: '#3fc193',
                            },
                            {
                                offset: 1,
                                color: '#00A4FD',
                            },
                        ]);
                    },
                },
            },
            data: data,
            //设置窃电模型的动画事件
            animationDuration: 1500,
        },
        {
            name: '背景',
            type: 'bar',
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: '#1B375E',
                    barBorderRadius: [0, 30, 30, 0],
                },
            },
            //完全取消背景图的动画
            animation: false,
        },
    ],
    legend: {
        show: true,
        textStyle: {
            color: '#fff'
        }
    },
};
/*刷新显示用的，与上方暂时无关*/
function run() {
    //debugger;
    for (var i = 0; i < data.length; ++i) {
        if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 2000);
        } else {
            data[i] += Math.round(Math.random() * 200);
        }
    }
    /*找到data的最大值*/
    data.forEach((item) => maxData = item > maxData ? item : maxData);
    /*以最大值填充背景，将defaultData的值全部变为最大值*/
    for (let i = 0; i < data.length; i++) {
        defaultData[i] = (maxData);
    }
    modelFacterShowChart.setOption({
        series: [
            {
                type: 'bar',
                data: data,
            },
            {
                type: 'bar',
                //将值重新渲染回去
                data: defaultData,
            },
        ]
    });
}
setTimeout(function () {
    run();
}, 0);
setInterval(function () {
    run();
}, 2000);
modelFacterShowption && modelFacterShowChart.setOption(modelFacterShowption);

//中间地图
var jiNingMapdom = document.getElementById('jiNingMap');
var jiNingMapChart = echarts.init(jiNingMapdom, {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};
var jiNingMapoption;
/*提示加载信息*/
jiNingMapChart.showLoading({
    text: '正在加载'
});
$.get('./js/济宁市.json', function (geoJson) {
    $.get('./js/济宁市边界轮廓.json', function (geoJsonOutLine) {
        //隐藏加载
        jiNingMapChart.hideLoading();
        //根据JSON文件注册地图
        echarts.registerMap('JiNing', geoJson);
        echarts.registerMap('JiNingOutLine1', geoJsonOutLine);
        //内容配置项
        jiNingMapChart.setOption(
            (jiNingMapoption = {
                title: {
                    show: false,
                    text: '济宁市地图',
                    textStyle: {
                        color: '#fff',
                        fontSize: 28,
                    },
                    subtext: '百度测试链接',
                    subtextStyle: {
                        fontSize: 18,
                        color: 'rgb(91,254,171)'
                    },
                    //子标题超链接
                    sublink:
                        'http://www.baidu.com'
                },
                //提示框组件
                tooltip: {
                    //图像响应标签
                    trigger: 'item',
                    //标签格式化
                    formatter: '{b}<br/>{c} (测试数据)'
                },
                //工具栏组件-下载、查看数据等功能
                toolbox: {
                    show: true,
                    //工具栏的纵横方向
                    orient: 'vertical',
                    left: 'left',
                    top: 'center',
                    //功能项
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                //视觉映射组件，将数据映射到视觉元素--如图像颜色根据数据变化
                /*visualMap: {
                    textStyle: {
                        color: "#fff",
                    },
                    top: '15%',
                    //高亮，并在拖拽条显示
                    hoverLink: true,
                    //拖拽条的颜色
                    //backgroundColor:'#fff',
                    show: true,
                    type: 'continuous',
                    min: 1000,
                    max: 9999,
                    text: ['High', 'Low'],
                    //拖拽实时更新
                    realtime: true,
                    //是否显示拖拽条
                    calculable: true,
                    //拖拽条从下到上的颜色渐变
                    inRange: {
                        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
                    }
                },*/
                //backgroundColor: '#404a59',
                visualMap: {
                    top:'15%',
                    min: 0,
                    max: 500,
                    splitNumber: 5,
                    inRange: {
                        color: ['#d94e5d','#eac736','#50a3ba'].reverse()
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
                //用来显示map，与阴影效果
                geo: {
                    map: 'JiNing',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    // 可缩放与拖动
                    roam: true,
                    zoom: 1.2,
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(255,255,255,0.5)',
                            borderColor: '#32dcf3',
                            borderWidth: 2,
                            shadowBlur: 2,
                            shadowColor: 'rgba(255,255,255,0.5)',
                            shadowOffsetX: 5,
                            shadowOffsetY: 10,
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                },
                //不显示地图，显示热力图
                series: [{
                    name: 'JINING',
                    type: 'heatmap',
                    coordinateSystem: 'geo',
                    data: [
                        [
                            116.595261,
                            35.414828,
                            423
                        ],
                        [
                            116.828996,
                            35.556445,
                            129
                        ],
                        [
                            117.12861,
                            34.809525,
                            549
                        ],
                        [
                            116.650023,
                            34.997706,
                            409
                        ],
                        [
                            116.310364,
                            35.06977,
                            311
                        ],
                        [
                            116.342885,
                            35.398098,
                            299
                        ],
                        [
                            116.487146,
                            35.721746,
                            209
                        ],
                        [
                            117.273605,
                            35.653216,
                            137
                        ],
                        [
                            116.08963,
                            35.801843,
                            491
                        ],
                        [
                            116.991885,
                            35.592788,
                            417
                        ],
                        [
                            116.96673,
                            35.405259,
                            236
                        ]
                    ]
                }],
                /*series: [

                    /!*{
                        name: '济宁市地图',
                        type: 'map',
                        map: 'JiNing',
                        //视角的缩放比例
                        zoom:1.2,
                        //起始标签，与tooltip提示标签不同
                        label: {
                            show: true
                        },
                        //和地图的json中name一致
                        data: [
                            {"name":"任城区","value":8971},
                            {"name":"兖州区","value":6735},
                            {"name":"微山县","value":2576},
                            {"name":"鱼台县","value":1255},
                            {"name":"金乡县","value":8600},
                            {"name":"嘉祥县","value":7896},
                            {"name":"汶上县","value":4261},
                            {"name":"泗水县","value":2795},
                            {"name":"梁山县","value":4377},
                            {"name":"曲阜市","value":3755},
                            {"name":"邹城市","value":4363}],
                    },*!/
                    // outline1
                    /!*{
                        name: '济宁市地图边界1',
                        type: 'map',
                        map: 'JiNingOutLine1',
                        //aspectScale: aspectScale, //地图长宽比
                        zoom: 1.2, //默认显示级别
                        z: 99,
                        // geoIndex: 0,
                        roam: false,
                        scaleLimit: {
                            //缩放级别
                            min: 0.5,
                            max: 2,
                        },
                        itemStyle: {
                            normal: {
                                shadowColor: 'rgb(55,212,234)',
                                shadowOffsetX: -10,
                                shadowOffsetY: 10,
                                areaColor: '#17caf0',
                                borderColor: '#17caf0',
                                borderWidth: 2,
                                borderType: 'solid',
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                            },
                            emphasis: {
                                show: false,
                            },
                        },
                    },*!/
                ]*/
            })
        )
    });
});
if (jiNingMapoption && typeof jiNingMapoption === 'object') {
    jiNingMapChart.setOption(jiNingMapoption);
}
/*监听与window窗口一起变化*/
window.addEventListener('resize', jiNingMapChart.resize);

//中间下方表格
//在layui_table.js当中

//窃电模型

var stealElecModelShowDom = document.getElementById('stealElecModelShow');
var stealElecModelShowChart = echarts.init(stealElecModelShowDom);
var stealElecModelShowoption;
stealElecModelShowoption = {
    tooltip: {
        show: true
    },
    legend: {
        show: false,
    },
    axisLabel:{
        margin:-8,
    },
    radar: {
        center: ['50%', '50%'], // 整体位置
        radius: '55%', //整体大小
        axisName: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular,PingFang SC',
            fontStyle: 'normal',
            //指示器文字换行 start
            //text在axisName下，即为标签文字
            formatter: function(text){
                var strlength = text.length;
                if(strlength % 4 !== 0){
                    text = text.replace(/\S{4}/g,function(match){
                        //console.log(match);
                        return match + '\n'
                    })
                }else{
                    text = text.replace(/\S{4}/g,function(match){
                        //console.log(match);
                        return match + '\n'
                    });
                    strlength = text.length;
                    text = text.substring(0,strlength - 1);
                }
                return text
            }
        },
        // TODO:
        indicator: [
            {
                name: '潮流反向',
                max: 100
            },
            {
                name: '功率因数异常',
                max: 100
            },
            {
                name: '线损趋势',
                max: 100
            },
            {
                name: '电能表倒走',
                max: 100
            },
            {
                name: '负电流',
                max: 100
            }
        ],
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
                // 分隔区域的样式设置。
                color: ['#1c2330'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: {
            // 指向外圈文本的分隔线样式
            lineStyle: {
                color: '#167374'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#167374', // 分隔线颜色
                width: 1 // 分隔线线宽
            }
        }
    },
    series: [
        {
            type: 'radar',
            symbolSize: 10,
            itemStyle: {
                borderColor: 'rgba(66, 242, 185, 1)',
                color: '#fff',
                borderWidth: 0.2
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: 'rgba(66, 242, 185, 1)'
                }
            },
            data: [
                {
                    // TODO:
                    value: [80, 80, 80, 70, 60, 50],
                    name: '窃电模型',
                    areaStyle: {
                        normal: {
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.5,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(46,203,255, 0.14)' // 0% 处的颜色
                                    },
                                    {
                                        offset: 0.15,
                                        color: 'rgba(46,203,255, 0.14)' // 100% 处的颜色
                                    },
                                    {
                                        offset: 0.75,
                                        color: 'rgba(46,203,255, 0.4)' // 100% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(46,203,255, 0.5)' // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            }
                        }
                    }
                },
            ]
        }
    ]
};
stealElecModelShowoption && stealElecModelShowChart.setOption(stealElecModelShowoption);



