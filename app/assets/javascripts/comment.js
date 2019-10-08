$(function(){
  function buildComment(comment){
    var html = `
                <div class="usercommet" id="${comment.id}">
                    ${comment.name} : 
                    ${comment.text} 
                </div>
              `
    return html;
  }

  function buildComment2(){
    console.log("OK");
    var html2 = `
                <img class="bulue" src="/assets/bulue.jpg">
              `
    return html2;
  }

  $('.new_comment').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    if($('.textname').val() == ''){
      document.querySelector("#audio").play();
      alert('名前');
      var html2 = buildComment2()
      $('.top').append(html2);
      $(".submitbottan").removeAttr("disabled");
      Materialize.toast("You Answered", 4000,'rounded')
      return false;
    }
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(comment){
      document.querySelector("#audio3").play();
      var html = buildComment(comment)
      $('.comments').append(html).fadeIn(2000);
      $('form').get(0).reset();
      $('html, body').animate({
        scrollTop: $(document).height()
      },2000);
      return false;
    })
    .fail(function(){
      alert('error');
    })
    .always(() => {
      $(".submitbottan").removeAttr("disabled");
    });
  });
});