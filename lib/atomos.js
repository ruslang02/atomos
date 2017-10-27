$("body").on("click",function() {
  $(window.top).find("context-menu").hide("fade",200,function() {$(this).remove()})
})
