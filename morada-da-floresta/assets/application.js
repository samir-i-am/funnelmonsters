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
      callToAction.attr("href", "selecione-acessorios-composteira-convencional.html");
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
    var acessorioSelected = $('input[name="product_id_2"]');
    acessorioSelected.val(kitSelected)
  }
  else if($(this).prop("checked") == false){
     alert("Selecione um acessório.");
  }
});


// Set the date we're counting down to
var dateForSecondVideo = new Date("Dec 25, 2019 01:00:00").getTime();
var dateForNewYearVideo = new Date("Jan 1, 2020 1:00:00").getTime();
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var timeToChangeSecond = dateForSecondVideo - now;
  var timeToChangeNewYear = dateForNewYearVideo - now;

  // If the count down is finished, write some text (default video is sMcy5025uHc)
  // depois do dia 25
  if (timeToChangeSecond < 0) {
    clearInterval(x);
    $(".fitst-section-video").attr("src", "https://www.youtube.com/embed/eEG0kHY3Rio");
    $(".composteira_humi_discount_image").attr("src", "assets/images/composteira-humi.jpg");
    console.log("dia 25");
  }
  // depois do dia 1
  if (timeToChangeNewYear < 0) {
    clearInterval(x);
    $(".fitst-section-video").attr("src", "https://www.youtube.com/embed/Zf7fqOaPdHU");
    console.log("hoje é dia 1 de 2020 feliz ano novo");
  }
});
