$(document).ready(function(){
  $('#cone').click(function () {
    console.log('clicked')
    $('#cone').detach().css("z-index" , "1").prependTo($('#users-creation'));
});  
  $('#cup').click(function () {
    console.log('clicked')
    $('#cup').detach().css("z-index" , "1").prependTo($('#users-creation'));
}); 
  $('#Van-Icecream').click(function () {
    console.log('clicked')
    $('#Van-Icecream').detach().css("margin-bottom" , "-25px").css("z-index" , "2").prependTo($('#users-creation'));
}); 
  $('#Choc-Icecream').click(function () {
    console.log('clicked')
    $('#Choc-Icecream').detach().css("margin-bottom" , "-25px").css("z-index" , "2").prependTo($('#users-creation'));
}); 
  $('#SB-Icecream').click(function () {
    console.log('clicked')
    $('#SB-Icecream').detach().css("margin-bottom" , "-25px").css("z-index" , "2").prependTo($('#users-creation'));
}); 
  $('#sprinkles').click(function () {
    console.log('clicked')
    $('#sprinkles').detach().css("margin-bottom" , "-25px").css("z-index" , "2").prependTo($('#users-creation'));
}); 
})
