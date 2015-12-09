
window.clouds = []

window.place_clouds = (dx, dy) ->
  for cloud in window.clouds
    h = 96 * cloud.size
    w = 128 * cloud.size
    
    x = cloud.x * ($(window).width() + w)
    y = cloud.y * ($(window).height() + h)
    
    x -= cloud.z * dx * $(window).width() * 0.25
    y -= cloud.z * dy * $(window).height() * 0.25
    
    cloud.div.css 'bottom', y + 'px'
    cloud.div.css 'right',  x + 'px'
    cloud.div.css 'height', h + 'px'
    cloud.div.css 'width',  w + 'px'

$(document).ready ->
  $(".cloud").each (index, cloud) ->
    window.clouds.push
      x: Math.random()
      y: Math.random()
      z: Math.random() + 0.25
      size: (Math.random() * 3) + 0.5
      div: $(cloud)
    
    window.place_clouds 0, 0
    
  $('body').mousemove (e) ->
    window.place_clouds (e.clientX / $(window).width()) - 0.5,
                        (e.clientY / $(window).height()) - 0.5
      