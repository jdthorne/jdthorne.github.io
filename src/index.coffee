
$(document).ready ->
  $(".demo").each (i, demo)->
    do (demo) ->
      $(demo).click (e) -> 
        if e.which == 2
          window.open $(demo).attr("data-url")
        else
          window.location = $(demo).attr("data-url")

