// Listas aceesíveis
var allPanels = $('.section-faq--accordion > dd').hide();
$('.section-faq--accordion > dt > a').click(function(e) {
  var faqQuestionBtn = $('.section-faq--accordion > dt > a');
  allPanels.slideUp();
  $(this).parent().next().stop().toggle(function(){
    if($(this).hasClass('is-active')){
      faqQuestionBtn.attr('aria-expanded', 'false');
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
      faqQuestionBtn.attr('aria-expanded', 'true');
    }
  });
  e.preventDefault();
});


// Select Composteira
$('input[name="composteira"]').click(function(){
  if($(this).prop("checked") == true){
    var composteiraSelected = this.value;
    const callToAction = $(".button-select-composteira");
    if (composteiraSelected == "composteira_humi") {
      callToAction.attr("href", "selecione-a-cor-da-composteira.html");
    } else if (composteiraSelected == "composteira_morada") {
      callToAction.attr("href", "selecione-acessorios-composteira-morada.html");
    }
  }
  else if($(this).prop("checked") == false){
     alert("Selecione uma composteira.");
  }
});

// Select color
$('input[id="grey"]').prop('checked', true);
$('input[name="color"]').click(function(){
  if($(this).prop("checked") == true){
    var colorSelected = this.value;
    const callToAction = $(".button-select-color");
    $(".image-color").attr('src', 'assets/images/colors/' + colorSelected + '.jpg');
    callToAction.attr("href", "selecione-acessorios-composteira-humi-" + colorSelected + ".html")
  }
  else if($(this).prop("checked") == false){
     alert("Ops, selecione uma cor");
  }
});

// Select Kit
$('input[id="none"]').prop('checked', true);
$('input[name="kit"]').click(function(){
  if($(this).prop("checked") == true){
    var kitSelected = this.value;
    console.log(kitSelected);
  }
  else if($(this).prop("checked") == false){
     alert("Selecione um acessório.");
  }
});
