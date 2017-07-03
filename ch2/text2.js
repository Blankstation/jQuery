/**
 * Created by 蛋 on 2017/5/15.
 */
//基本选择器
/*$(document).ready(function () {
    $("#one").css("background","#baf");
    $(".mini").css("background","#bdc");
    $("div").css("border-color","#adf");
    $("*").css("border-style","dashed");
    $("span,#two").css("background","#dfd");
    }
);*/
//层次选择器
/*$(document).ready(function(){
    $("body div").css("background","#bfd");
    $("body>div").css("background","#bad");
    //next()方法
    // nextAll()方法选取..之后的所有同辈元素
    //siblings()方法选取..所有的同辈元素

});*/
//过滤选择器
/*$(document).ready(function () {
    $("div:first").css("background","#dfd");
    $(":focus").css("background","#aff");//改变当前获取焦点的元素
    $("div:contains(mi)").css("color","#c096ef");
    $("div:hidden").show(2000);
    $("div[title~='other']").css("background","#fff");
    $("div.one:first-child").css("background","#aaf");
});*/
//表单过滤器
$(document).ready(function () {
    $("#form1 input:enabled").val("这里改变了！");
    $("#form1 input:disabled").val("这里也改变了！");
        var n = $("input:checked").length;
    $('#div1').html("有"+n+"个");
    var m=$("select option:selected").text();
    $("#div2").html(m);

});
