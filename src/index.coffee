
$(document).ready ->
  $(".demo").each (i, demo)->
    do (demo) ->
      $(demo).click -> window.open $(demo).attr("data-url"), "_new"

