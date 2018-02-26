
/*
* @Author: Marte
* @Date:   2018-02-01 17:02:10
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-01 17:04:29
*/

'use strict';
/*
* @Author: Marte
* @Date:   2018-02-01 17:02:10
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 13:13:30
*/

'use strict';
var $con=$('#con');

var brandArr = [
        { name: '蚂蚁车贷', src: '../img/pp/1.jpg' },
        { name: '兹德洛夫', src: '../img/pp/2.jpg'},
        { name: '仁和', src: '../img/pp/3.jpg'},
        { name: 'U9', src: '../img/pp/4.jpg' },
        { name: '迪诺', src: '../img/pp/5.jpg'},
        { name: '迪诺', src: '../img/pp/5.jpg' },
        { name: '蚂蚁车贷', src: '../img/pp/1.jpg' },
        { name: 'U9', src: '../img/pp/4.jpg' },
        { name: '兹德洛夫', src: '../img/pp/2.jpg'},
        { name: '仁和', src: '../img/pp/3.jpg'},
        { name: 'U9', src: '../img/pp/4.jpg' },
        { name: '迪诺', src: '../img/pp/5.jpg'},
        { name: '谭氏', src: '../img/pp/6.jpg' },
        { name: '蚂蚁车贷', src: '../img/pp/1.jpg' },
        { name: '蚂蚁车贷', src: '../img/pp/3.jpg' },
        { name: '兹德洛夫', src: '../img/pp/2.jpg'},
        { name: '仁和', src: '../img/pp/3.jpg'},
        { name: 'U9', src: '../img/pp/4.jpg' },
        { name: '迪诺', src: '../img/pp/5.jpg'},
        { name: '仁和', src: '../img/pp/3.jpg' },
        { name: '兹德洛夫', src: '../img/pp/2.jpg' },
        { name: '迪诺', src: '../img/pp/5.jpg' },
        { name: '谭氏', src: '../img/pp/6.jpg' }

    ];
var picArr = [
        { title:'分销价', price:'￥164',name: '长款羽绒服', src: '../img/1f/4.jpg' },
        { title:'分销价', price:'￥132',name: '毛呢外套', src: '../img/1f/5.jpg' },
        { title:'分销价', price:'￥103',name: '秋冬款', src: '../img/1f/6.jpg' },
        { title:'分销价', price:'￥109',name: '时尚短羽绒服', src: '../img/1f/7.jpg' },
        { title:'分销价', price:'￥109',name: '双面羽绒服', src: '../img/1f/8.jpg' },
        { title:'分销价', price:'￥88', name: '一点不凡', src: '../img/1f/9.jpg' },
        { title:'分销价', price:'￥66', name: '秋冬灯笼', src: '../img/1f/10.jpg' },
        { title:'分销价', price:'￥90', name: '女装潮装针织', src: '../img/1f/11.jpg' }
    ];

create();
function create(){
for(var i=0;i<20;i++){
    $con.find('.up ul').append('<li><img src="'+brandArr[i].src+'"> </li>')
}
}

$con.find('.up ul li').css('border-left','none');
var $lis=$con.find('.up ul li');
var $uls=$con.find('.up');


foo();
function foo(){

   for(var i=0;i<10;i++){
   $lis.eq(i).css('border-bottom','none');
   $lis.eq(0).css('border-left','1px solid #eee');
$lis.eq(10).css('border-left','1px solid #eee');

}
}

zzc();
function zzc(){
$lis.on('mouseover',function(){

  var index=$lis.index(this);
  $(this).append('<div id="cj"><span> '+brandArr[index].name+' </span><i>点击进入</i></div>');
     //$(document).onmouseout=null;
} );

    $(document).on('mouseout',function(){

    //$(this).off();
    //$(document).onmouseover=null;
    $(document).find('#cj').remove();
    $(document).children('#cj').empty();

})


 return false;  //阻止冒泡 + 阻止默认事件

}






product();
createMall();
function createMall(){
var $le=$('#mallnav .left');
var $mall=$le.find('.mall .xq');
var $clickmall=$le.find('#clickmall');

  $mall.on('mouseover',function(){
 // var index=$mall.index(this);
    $(this).css('display','none');
    $(this).parent('.mall').append('<div id="clickmall"><li>'+$(this).html()+' </li></div>');
});

$mall.on('mouseout',function(){
    $mall.css('display','block');
    $le.children('.mall').find('#clickmall').remove();
    $mall.parent('.mall').find($clickmall).empty();

});
return false;
}

/*============ middle ====================*/


function product(){
    var $producter=$('#mallnav .middle');

    for(var i=0;i<8;i++){
        $producter.find('.pic').append('<ul><li><a href="index2.html"><img src="'+picArr[i].src+'"></a></li> <li><a href="index2.html">'+picArr[i].name+'</a></li><li><span>'+picArr[i].title+'</span><span>'+picArr[i].price+'</span></li></ul>');

 }
}





/*======================#mallheader=======================*/
var  mallheaderArr = [
 {name:'全部商品分类'},
 {name:'首页'},
 {name:'报活动'},
 {name:'女装'},
 {name:'男装'},
 {name:'箱包'},
 {name:'鞋靴'},
 {name:'美妆'},
 {name:'母婴'},
 {name:'家电'},
 {name:'食品'},
 {name:'内衣'},
 {name:'家具日用'},
 {name:'多学商院'}

];
var catalog_listArr = [
  {title:'时尚女装',sty1:'上衣',sty2:'裙子',sty3:'针织毛衣',sty4:'裤子'},
  {title:'风情鞋靴',sty1:'女士单鞋',sty2:'女士单鞋',sty3:'休闲女鞋',sty4:''},
  {title:'精品男装',sty1:'内搭',sty2:'裙子',sty3:'针织毛衣',sty4:'裤子'},
  {title:'美容美妆',sty1:'外套',sty2:'裙子',sty3:'套装',sty4:'裤子'},
  {title:'男婴童装',sty1:'美容护肤',sty2:'彩妆化妆工具',sty3:'身体护理',sty4:''},
  {title:'精品男装',sty1:'童装',sty2:'孕婴用品',sty3:'洗护',sty4:'喂养'},
  {title:'性感内衣',sty1:'文胸',sty2:'内裤',sty3:'家居服',sty4:'特色内衣'},
  {title:'数码电器',sty1:'生活电器',sty2:'厨房电器',sty3:'个人护理',sty4:''}


];
createmallHeader();
function createmallHeader(){
    for(var i=0;i<mallheaderArr.length;i++){
        $('#index2mallheader .w .index2mallheaderUl').append('<li><a href="index.html" style="color:#fff;">'+mallheaderArr[i].name+'</a></li>');

 }
}
$('#index2mallheader .w .index2mallheaderUl li').eq(0).append('<a href="index.html"><span style="border:5px solid #aa1800;width:0;height:0;border-top:5px solid #fff;display:inline;"></span></a>');


  for(var i=0;i<catalog_listArr.length;i++){
         $('#index2mallheader .w .catalogList').append('<ul class="catalogListUl"><li>'+catalog_listArr[i].title+'</li><li><span>'+catalog_listArr[i].sty1+'</span><span>'+catalog_listArr[i].sty2+'</span><span>'+catalog_listArr[i].sty3+'</span><span>'+catalog_listArr[i].sty4+'</span></li></ul>');
      }
/*catalogListD();
function catalogListD(){
     $('#index2mallheader .w .index2mallheaderUl li').eq(0).hover(function(){
     $('#index2mallheader .w .catalogList').css('display','block');
 });
}*/


catalogListCreateright();



$('#index2mallheader .w .catalogList .catalogListUl').append('<ul class="catalogListdownUl"></ul>');



var $detail=$('#index2mallheader .w .catalogList .catalogListUl').find('.catalogListdownUl');



function catalogListCreateright(){
     $('#index2mallheader .w .catalogList .catalogListUl').on('mouseover',function(){
        var index=$('#index2mallheader .w .catalogList .catalogListUl').index(this);
        $detail.append('<ul class="cre"><li>热门品牌</li> <li>'+catalog_listArr[index].sty1+'</li><li>'+catalog_listArr[index].sty2+'</li><li>'+catalog_listArr[index].sty3+'</li><li>'+catalog_listArr[index].sty4+'</li></ul>');

     });
     $(document).on('mouseout',function(){
        $detail.remove('.cre');
        $detail.empty();
     })

     return false;

}