
$(document).ready ->
  
  current_panel = null
  shown_panels = []
  panels_to_show = []
  show_next_panel = ->
    return if panels_to_show.length == 0
    
    current_panel = panels_to_show[0]
    $(current_panel).animate { opacity: "1" }, 250, null, ->
      panels_to_show.shift()
      shown_panels.push current_panel
      show_next_panel()
  
  on_scroll = (e)->
    return if $(window).scrollTop() < 5
    visible_top = $(window).scrollTop()
    visible_bottom = $(window).scrollTop() + ( $(window).height() * 0.8 )
    $(".panel").each (i, panel) ->
      do (panel) ->
        panel_top = $(panel).offset().top
        panel_bottom = panel_top + $(panel).height()
        
        return if panel == current_panel        
        return if panel_top > visible_bottom
        return if panel in shown_panels
        return if panel in panels_to_show
        return $(panel).css 'opacity', 1 if panel_bottom < visible_top
        
        panels_to_show.push panel
        
        show_next_panel() if panels_to_show.length == 1
  
  $(document).scroll on_scroll
  on_scroll()
  
  $(".demo").each (i, demo) ->
    do (demo) ->
      $(demo).click (e) -> 
        if e.which == 2
          window.open $(demo).attr("data-url")
        else
          window.location = $(demo).attr("data-url")

