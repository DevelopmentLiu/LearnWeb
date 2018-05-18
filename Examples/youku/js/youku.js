$(function () {
    var page=0;
    setInterval(function () {
        if (page>=$(".background li").length-1){
            page=0;
        }else {
            page=page+1;
        }
        // console.log(page);
        $(".background li").addClass("hide");
        $(".background li").eq(page).removeClass("hide");

    },8000);

    $(".text").click(function () {
        $(".append-search-div").show();
        $(".append-search-div").append("<ul class='search-div'>" +
            "<li><a href='#'><span class='search-div-number'>1</span>温柔的弦，TV版</a></li>" +
            "<li><a href='#'><span class='search-div-number'>2</span>秦时明月之兵临天下</a></li>" +
            "<li><a href='#'><span class='search-div-number'>3</span>这！就是街舞 第一季</a></li>" +
            "<li><a href='#'><span>4</span>北京女子图鉴</a></li>" +
            "<li><a href='#'><span>5</span>极限挑战第四季</a></li>" +
            "<li><a href='#'><span>6</span>飞虎之潜行激战</a></li>" +
            "<li><a href='#'><span>7</span>小猪佩奇第四季</a></li>" +
            "<li><a href='#'><span>8</span>火影忍者</a></li>" +
            "<li><a href='#'><span>9</span>相亲时代第一季</a></li>" +
            "<li><a href='#'><span>10</span>下一站，离别</a></li>" +
            "</ul>");
    });

    $(".background img").click(function () {
       $(".append-search-div").hide();
    });

    $(".right-ul li:eq(2)").mouseenter(function () {
        $(".right-ul a:eq(2)").css("color","#4593FD");
        $(".recording-div").show();
    });

    $(".right-ul li:eq(2)").mouseleave(function () {
        $(".right-ul a:eq(2)").css("color","white");
        $(".recording-div").hide();
    });

    $(".right-ul li:eq(3)").mouseenter(function () {
        $(".right-ul a:eq(3)").css("color","#4593FD");
        $(".upload-div").show();
    });

    $(".right-ul li:eq(3)").mouseleave(function () {
        $(".right-ul a:eq(3)").css("color","white");
        $(".upload-div").hide();
    });

})

