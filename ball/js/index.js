

$(".icon_down").click(function(){
   $(".books li").slice(4).show();
   $(".icon_up").css("display","block");
   $(".icon_down").css("display","none");
  });
$(".icon_up").click(function(){
   $(".books li").slice(4).hide();
   $(".icon_up").css("display","none");
   $(".icon_down").css("display","block");
  });

$(".books li").click(function(){
    let selectValue = $(this).find(".books_time").text(); 
    console.log(selectValue)
    location.href = "books.html?id=selectValue" ;

  });