$(function(){
  $('.del2').on('click', function(){
    
    var iddata = $(this).attr('id');
    console.log("OK");
    
    flag = confirm("本当に削除しますか？");
    if ( flag == true ){
      document.querySelector("#audio2").play();
      $('#box-' + iddata).fadeOut(1700).queue(function() {
        $('#box-' + iddata).remove();
      })
    }else{    // 「いいえ」が押されたときの処理
      alert("キャンンセルしました");
      document.querySelector("#audio").play();
      return false;
    }
  });
});