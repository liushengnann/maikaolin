var json = {
        "data": {
            "theyImages": [
                {
                    "img": "7957_thumb_G_1469482697514.jpg"
                },
                {
                    "img": "8931_thumb_G_1486321915642.jpg"
                },
                {
                    "img": "9403_thumb_P_1504639176756.jpg"
                },
                {
                    "img": "9841_thumb_P_1515954241612.jpg"
                },
                {
                    "img": "8306_thumb_G_1468368514070.jpg"
                },
                {
                    "img": "9842_thumb_P_1515954177203.jpg"
                },
                {
                    "img": "1188_thumb_G_1457573340950.jpg"
                },
                {
                    "img": "906_thumb_G_1472168990351.jpg"
                },
                {
                    "img": "5459_thumb_G_1470965156975.jpg"
                },
                {
                    "img": "6624_thumb_G_1455663760630.jpg"
                },
                 {
                    "img": "6625_thumb_G_1453844893011.jpg"
                },
                 {
                    "img": "8510_thumb_G_1484074549510.jpg"
                },
                 {
                    "img": "4669_thumb_G_1461786774416.jpg"
                },
                 {
                    "img": "6626_thumb_G_1455748355701.jpg"
                },
                {
                    "img": "7669_thumb_G_1472148897932.jpg"
                },
                 {
                    "img": "4093_thumb_G_1472408092289.jpg"
                },
            ],
            "theyName": [
                {
                    "name": "万宴香亚麻籽油500ml*2"
                },
                {
                    "name": "维您轻伊复合粉固体饮料"
                },
                {
                    "name": "阳澄湖牌大闸蟹福星高照"
                },
                {
                    "name": " 意锋五常稻花香大米礼盒"
                },

                {
                    "name": "联豪进口牛排礼盒-398型"
                },
                {
                    "name": "意锋五常稻花香大米礼盒"
                },
                {
                    "name": "联豪进口牛排礼盒-588型"
                },
                {
                    "name": "维您蓝莓片（压片糖果）"
                },
                {
                    "name": "维您天然宝螺旋藻片"
                },
                {
                    "name": "维您百合康牌越橘叶黄素软胶囊"
                },
                {
                    "name": "维您百合康牌芦荟软胶囊"
                },
                 {
                    "name": "龙粹有机稻花香米1kg（新）"
                },
                {
                    "name": "维您氢之源珊瑚海藻复合胶囊"
                },
                {
                    "name": "维您蛋白粉"
                },
                 {
                    "name": "维您葡萄片（压片糖果）60片"
                },
                 {
                    "name": "维您正和大昭牌维生素C咀嚼片"
                }
            ],
             "theyMoney": [
                {
                    "Money": "￥256 "
                },
                {
                    "Money": "￥980 "
                },
                {
                    "Money": "￥698 "
                },
                {
                    "Money": "￥398 "
                },
                {
                    "Money": "￥298"
                },
                {
                    "Money": "￥588 "
                },
                {
                    "Money": "￥256 "
                },
                {
                    "Money": "￥256 "
                },
                {
                    "Money": "￥366 "
                },
                {
                    "Money": "￥128"
                },
                {
                    "Money": "￥158 "
                },
                {
                    "Money": "￥138 "
                },
                {
                    "Money": "￥78 "
                },

                {
                    "Money": "￥720 "
                },
                {
                    "Money": "￥398 "
                },
                {
                    "Money": "￥148 "
                },
                {
                    "Money": "￥68 "
                }
            ]
        }
}
var $ul= $('#nav2 ul:nth-of-type(1)');
var data=json.data;
createList( data );
function createList( itemData ){
for (var i = 0; i < 17; i++) {
    $ul.get(0).innerHTML+='\
        <li>\
            <p><img src="../images/xiangqing/'+itemData.theyImages[i].img+'"/></p>\
            <p><a href="xiangqing.html">'+itemData.theyName[i].name+'</a></p>\
            <p>'+itemData.theyMoney[i].Money+'<span></span></p>\
        </li>'

};
 var $p = $('#nav2 ul:nth-of-type(1) li p')
 var p1Images = itemData.theyImages;
        for(var i=0;i<p1Images.length;i++){
            var img = document.createElement('img');
            img.src = p1Images[i].img;
            $p.get(0).appendChild(img);
        }

 var p2Names = itemData.theyName;
        for(var i=0;i<p2Names.length;i++){
            var a = document.createElement('a');
            a.innerHTML = p2Names[i].name;
            $p.get(1).appendChild(a);
        }

var p3Moneys = itemData.theyMoney;
        for(var i=0;i<p3Moneys.length;i++){
            $p.get(2).innerHTML = p3Moneys[i].money;
        }
}