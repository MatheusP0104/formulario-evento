function suportaPlaceholder() {
    var elemento = document.createElement('input');
    return ('placeholder' in elemento);
  }

$(function(){
    $('[placeholder]').focus(function(e) {
    var elemento = $(e.target);
    if (elemento.val() == elemento.attr('placeholder')) {
      elemento.val('');
    }
    }).blur(function(e) {
    var elemento = $(e.target);
    if (elemento.val() == '' || elemento.val() == elemento.attr('placeholder')) {
      elemento.val(elemento.attr('placeholder'));
    }
    }).trigger('blur');
  });
  $(function(){
    $('[placeholder]').parents('form').bind('submit', function(e) {
      var $form = $(e.target);
      if(!!$form.data('binded') == false){
        $(e.target).find('[placeholder]').each(function(i,el) {
          if (el.val() == el.attr('placeholder')) {
            el.val('');
          }
        });
        $form.data('binded',true);
      }
    });
  });