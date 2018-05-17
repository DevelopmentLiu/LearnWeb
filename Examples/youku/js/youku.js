$(function () {
    var page=0;
    setInterval(function () {
        if (page>=$(".background li").length-1){
            page=0;
        }else {
            page=page+1;
        }
        console.log(page);
        $(".background li").addClass("hide");
        $(".background li").eq(page).removeClass("hide");

    },8000);
})