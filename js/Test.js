returninfo=
[
    {
        "农村": 8000,
        "城市": 6000,
        "边远地区": 10000
    },
    {
        "农村": 4,
        "城市": 2,
        "边远地区": 8
    }
];

var xdata=[];
var ydata1=[];
var ydata2=[];

xdata=Object.keys(returninfo[0])
ydata1=Object.values(returninfo[0])
ydata2=Object.values(returninfo[1])
console.log(xdata)
console.log(ydata1)
console.log(ydata2)
