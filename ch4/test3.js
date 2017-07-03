/**
 * Created by 蛋 on 2017/5/23.
 */
$(function () {
    var page=1;
    var i=4;
    $("span.next").click(function () {
        var $parent=$("div.v_show");
        var $v_content=$parent.find("div.v_content");
        var $v_show=$parent.find("div.v_content_list");
        var v_width=$v_content.width();
        var len=$v_show.find("li").length;
        var p_page=Math.ceil(len/i);
        if(!$v_show.is(":animated")){
            if(page==p_page){
                $v_show.animate({left:"0px"},'slow');
                page=1;
            }else{
                $v_show.animate({left:"-="+v_width},'slow');
                page++;
            }
            $parent.find("span").eq((page-1)).addClass("current")
                .siblings().removeClass("current");
        }
        $("span.prev").click(function () {
            if(!$v_show.is(":animated")){
                if(page==1){
                    $v_show.animate({left:"-="+v_width*(p_page-1)},'slow');
                    page=p_page;
                }else{
                    $v_show.animate({left:"+="+v_width},'slow');
                    page--;
                }
                $parent.find("span").eq((page-1)).addClass("current")
                    .siblings().removeClass("current");
            }
        });
    });
});