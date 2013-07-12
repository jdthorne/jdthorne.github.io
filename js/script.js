$(document).ready(function() {

    var expandalob_visible = { "1": false,
                               "2": false };
    var other_expandalob = { "1": "2", 
                             "2": "1" };

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

    var setExpandalobVisible = function(expandalob, visible) {
        var isVisibleAlready = expandalob_visible[expandalob];

        if (visible == isVisibleAlready) return;

        if (visible)
        {
            $(".expandalob_" + expandalob).slideDown();
        }
        else
        {
            $(".expandalob_" + expandalob).slideUp();
        }
        expandalob_visible[expandalob] = visible;
    };

    $(".main_body").bind("click", function(e) {
        setExpandalobVisible("1", false);
        setExpandalobVisible("2", false);
    });

    $(".probutton").bind("click", function(e) {

        var t = $(e.target);
        if (t.attr("data-position") == undefined)
        {
            t = $(e.target.parentNode);
        }

        var position = t.attr("data-position");
        var expandalob = t.attr("data-expandalob");
        var contentclass = t.attr("data-content-class");

        $(".expand_content").hide();
        $(".expand_content_" + contentclass).show();

        if (expandalob_visible[expandalob])
        {
            $(".expandalob_arrow_" + expandalob).stop(true, true).animate( {"margin-left": position} );
        }
        else
        {
            $(".expandalob_arrow_" + expandalob).stop(true, true).css("margin-left", position);
        }
        setExpandalobVisible(expandalob, true);
        setExpandalobVisible(other_expandalob[expandalob], false);

        return false;
    });

});