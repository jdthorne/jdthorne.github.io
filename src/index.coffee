
show_panel_functions = {}
show_panel = (name, action)->
  show_panel_functions[name] = action

$(document).ready ->
  show_panel_functions['#jamesthorne']()

$(window).scroll ->
  $('.panel').each ->
    center_of_panel = $(this).position().top + ($(this).outerHeight() / 2)
    one_third_of_window = $(window).scrollTop() + ($(window).height() * 0.7)

    return unless (center_of_panel < one_third_of_window)
    return unless show_panel_functions["##{this.id}"]?
    
    show_panel_functions["##{this.id}"]()
    delete show_panel_functions["##{this.id}"]

chain = (actions)->
  run_next_action = -> actions.shift()(run_next_action) if actions.length > 0
  run_next_action()

show_panel '#jamesthorne', ->
  chain [
    ((next) -> $("#jamesthorne .picture").animate     { opacity: 1 }, 200, next),
    ((next) -> $("#jamesthorne .name").animate        { opacity: 1 }, 200, next),
    ((next) -> $("#jamesthorne .title").animate       { opacity: 1 }, 200, next),
    ((next) -> $("#jamesthorne .description").animate { opacity: 1 }, 200, next),
  ]
  
show_panel '#printtopeer', ->
  console.log 'hello'