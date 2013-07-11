$(document).ready(function() {

    $(".video_pick").bind("click", function(e) {

        var new_iframe = $(e.target).attr("data-youtube");

        $(".actual_film").html(new_iframe);

        $(".video_pick").each(function(i, obj) {
            if ($(obj).attr("data-youtube") == new_iframe)
            {
                $(obj).addClass("active");
            }
            else
            {
                $(obj).removeClass("active");
            }
        });
    });

});