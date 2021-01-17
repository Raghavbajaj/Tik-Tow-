var move=1;
var play=true;
 $("table tr td").click(function(){
   if( $(this).text()== "" && play){
     if((move%2)==1){
       $(this).append("X")
       $(this).css('color','#61892f');
     } else {
       $(this).append("O")
       $(this).css('color','#e85a4f');
     }
     move++;
     if(findWinner()!= -1 && findWinner()!= ""){
       if(findWinner() =="X"){
         $('body').append('<div class="result"><div class="winner"><span style="color: #2c3531">Winner-</span>X</div></div>');
         $('.result').append('<button onclick="location.reload()">PlayAgain</button>');
         $('.winner').css('background-color','#61892f');
         $('button').css('color','#61892f');
       }else {
         $('body').append('<div class="result"><div class="winner"><span style="color: #2c3531">Winner-</span>O</div></div>');
         $('.result').append('<button onclick="location.reload()">PlayAgain</button>');
         $('.winner').css('background-color','#e85a4f');
         $('button').css('color','#e85a4f');
       }
     }
   }
 });

 function findWinner(){
   sp1 = $('table tr:nth-child(1) td:nth-child(1)').text();
   sp2 = $('table tr:nth-child(1) td:nth-child(2)').text();
   sp3 = $('table tr:nth-child(1) td:nth-child(3)').text();
   sp4 = $('table tr:nth-child(2) td:nth-child(1)').text();
   sp5 = $('table tr:nth-child(2) td:nth-child(2)').text();
   sp6 = $('table tr:nth-child(2) td:nth-child(3)').text();
   sp7 = $('table tr:nth-child(3) td:nth-child(1)').text();
   sp8 = $('table tr:nth-child(3) td:nth-child(2)').text();
   sp9 = $('table tr:nth-child(3) td:nth-child(3)').text();
   //check rows
   if((sp1 == sp2)&& (sp2==sp3)){
     return sp2;
   }
   else if ((sp4 == sp5)&&(sp5==sp6)){
     return sp5;
   }
   else if ((sp7 == sp8) &&(sp8==sp9)){
     return sp7;
   }

   //checkingcolumn
   else if ((sp1 == sp4)&&(sp4==sp7)){
     return sp4;
   }
   else if ((sp2 == sp5) &&(sp5==sp8)){
     return sp5;
   }
   else if ((sp3 == sp6)&&(sp6==sp9)){
     return sp6;
   }
   //checinf diagonal
   else if ((sp1 == sp5) &&(sp5==sp9)){
     return sp5;
   }
   else if ((sp3 == sp5)&&(sp5==sp7)){
     return sp5;
   }
   else {
     return -1;
   }

 }
