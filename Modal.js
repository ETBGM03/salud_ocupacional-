$('.imagen').click(function (f){
    var sus= f.target.src;
    var mod= '<div id="moodal" class="Modal"><img  src="'+ sus + '" class="Modal_img" ><div class="Botton_Modal" id="modal_boot">X</div></div>;'
    $('body').append(mod);
    $('#modal_boot').click(function(){
      $('#moodal').remove();
    })
})
