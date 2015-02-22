
$(document).ready ->
  $("a").attr 'target', '_new'


toggle_deerfoot = ->
  $("#isthereanaccidentondeerfoot .toggles").toggle()
  
window.setInterval toggle_deerfoot, 2000