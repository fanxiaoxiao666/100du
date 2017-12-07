/**
 * Created by Administrator on 2017/12/3.
 */
$(function()
{
    $("#search li").click(function()
    {
        $("#search li").attr("class","")
        $(this).attr("class","active");
        $("#search input").hide();
        $("#search input").eq($(this).index()).show();
    })
    var n=0;
    setInterval(change,3000)
    function change()
    {
        $("#ul6").animate({"left":-n*224})
        $(".recommend-content .wrap-right div").attr("class","")
        $(".recommend-content .wrap-right div").eq(n).attr("class","active")
        n++;
        if(n==3)
        {
            n=0
        }
    }
    /* 点击效果*/
        $(".recommend-content .wrap-right div").click(function()
        {
            n=$(this).index()
            $("#ul6").animate({"left":-n*224})
            $(".recommend-content .wrap-right div").attr("class","")
            $(this).attr("class","active")
        })
    /*bbs论坛滑动*/
    $('.travel .section li').mouseover(function()
    {
        $(".travel .section li").attr("class","")
        $(this).attr("class","luntan")
    })

    $(".hot .tab li").click(function()
    {
        console.log($(this).index())
        var index=$(this).index()+1
        $(".hot ul:gt(0)").attr("class","")
        $(".hot ul:eq(0)").find("li").attr("class","")
        $(this).attr("class","active")
        $(".hot ul").eq(index).attr("class","show")
    });
   /* 知道分子栏滑动效果 */
    $(".question a").mouseover(function()
    {
        $(".remen").css("display","none")
        $(".question a").attr("class","")
        $(this).attr("class","active")
        $(".remen").eq($(this).index()).css("display","block")
    })

    $(".calendar .tese").hover(function(){
        $(this).find(".intro").show()
        $(this).find(".sanjiao").show()
    },function(){
        $(this).find(".intro").hide()
        $(this).find(".sanjiao").hide()
    })
});