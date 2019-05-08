


$(".icon_left").click(function(){
     location.href='index.html';
  });

$(".books_rigth").click(function(){
   $(".books_date li").slice(2).css("display","block");
    $(".books_date li").slice(0,4).css("display","none");
   $(".books_rigth").css("display","none");
   $(".books_left").css("display","block");

  
  });
$(".books_left").click(function(){
   $(".books_date li").slice(4).css("display","none");
   $(".books_date li").slice(0,4).css("display","block");
   $(".books_left").css("display","none");
   $(".books_rigth").css("display","block");
   
  });


$(function(){
	$(".books_date li").click(function(){
	   $(".books_date li").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
	})
})



let temp =JSON.parse(sessionStorage.getItem("data_d"))||[];
var count=0;
$("table td").click(function () {

	var price=$(this).text()
    // price=price++
   console.log(price)
  
  var row = $(this).closest("tr").find("td").eq(0).text();//当前行第一个值
  console.log(row) 

  var trSeq = $(this).parent().parent().find("tr").index($(this).parent()[0]);//当前在第几行
   console.log(trSeq)

  var cloumNumber = $(this).index();
  var cloum =$('table tr th').eq(cloumNumber).text();//当前列第一个值
  console.log(cloum)  


	switch (trSeq)
	  {
	  case 1:
	    x="08:30-10:30";
	    break;
	  case 2:
	    x="10:30-12:30";
	    break;
	  case 3:
	    x="12:30-14:30";
	    break;
	  case 4:
	    x="14:30-16:30";
	    break;
	  case 5:
	    x="16:30-18:30";
	    break;
	  case 6:
	    x="18:30-20:30";
	    break;
	  case 7:
		x="20:30-22:30";
		break;
	 }
	  console.log(x)

   if ($(this).hasClass("td_time")) {
   	   var dat={
           cloum:cloum,
           x:x,
           price:price
            }
            console.log(dat)
            // var DATE_get =JSON.parse(sessionStorage.getItem("data_d"))
	        var DATE_get =temp
	       console.log(DATE_get)
 
         var arr=[]
         for (var index in DATE_get){
         	if(DATE_get.length==1){ 
         		temp.splice(0,DATE_get.length);
                // sessionStorage.removeItem("data_d")
                $('.footer_before').css("display","block")
                $('.footer_after').css("display","none")
         	} else{
	         	  if(JSON.stringify(dat) ==JSON.stringify((DATE_get[index])) ){
	         	
	         	

	         	}else{
	         		
	                 arr.push(DATE_get[index])
	                 console.log(arr)
	                 temp=arr
	                 //setTimeout(sessionStorage.setItem( "data_d", JSON.stringify(arr)),3000) 
			        //console.log(JSON.parse(sessionStorage.getItem("data_d")))
                      let t=temp;
			          let h1=template("time_Template",{list:t})
				      $(".footer_after_u").html(h1)
			        console.log()
	         	}
		  }
		 
		}  
        
      
      
	         $(this).removeClass("td_time");
       
   }else{
   	     $('.footer_before').css("display","none")
         $('.footer_after').css("display","block")
         $(this).addClass("td_time");
         var dataa={
		           cloum:cloum,
		           x:x,
		           price:price
		            }
         temp.push(dataa)
         console.log(dataa)
         console.log(temp)
        
        // sessionStorage.setItem( "data_d", JSON.stringify(temp))
         
        //    let t=JSON.parse(sessionStorage.getItem("data_d"))
           let t=temp;
           
          let h1=template("time_Template",{list:t})
	      $(".footer_after_u").html(h1)

    //       for(var i in t){
			 //     console.log(t[i].price.slice(1));
			 //     var pr=t[i].price.slice(1)
			 //     count+=parseInt(pr)
			 //     console.log(count)
			 //     let total=template("footer_total_Template",{l:count})
				//       $(".footer_total").html(total)
			 // }

     }
  });
 

  
	

 

// if () {
// 		 $('.footer_before').css("display","none")
//          $('.footer_after').css("display","block")
// }else{
//     $('.footer_before').css("display","block")
//     $('.footer_after').css("display","none")
// }



$("table #td_time").click(function () {
    $(this).replaceWith("<td id='td_time'>2小时</td>");
})

$(".user_notice").click(function () {
    $('.notice').css("display","block")
})
$(".x").click(function () {
    $('.notice').css("display","none")
})
$(".know").click(function () {
    $('.notice').css("display","none")
})