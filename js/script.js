/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var fabric = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore=q1+q2+q3;
        var q1=question1(q1Result); 
        var q2=question1(q2Result); 
        var q3=question1(q3Result); 
        var fabric=total(totalScore, name)
    $(".result").text(fabric);

    
    
    
});


 function question1(answer){
    if (answer==='reading'){
        return 1;
    } else if (answer==='coding'){
        return 2; 
    } else if (answer==='playing a sport'){
        return 3;
    } else if (answer==='designing clothing'){
        return 4; 
    } else {
        return "0";

}};

function question2(answer){
    if (answer==='waffles'){
        return 1;
   }else if (answer==='pancakes'){
        return 2; 
    }else if (answer==='french toast'){
        return 3;
}else {
    return "0";
    
}}

 function question3(answer){
  if (answer==='dog'){
     return 1; 
 }else if (answer==='hippo'){
     return 2; 
 }else if (answer==='duck'){
     return 3; 
 }else if (answer==='cat'){
     return 4;
 }else {
     return "0";
}}
    
function total (sum, name){
if (sum >=3 && sum<=5){
        return 'Congrats' +name+ ' You are velvet!';
   } else if (sum>=6 && sum<=8){
        return 'Congrats' +name+ ' You are denim';
    }else if (sum>=9 && sum<=11){
        return 'Congrats' +name+ ' You are silk'
    }else {
    return 'Congrats' +name+ ' You are cotton!'; 
    
}}

    
    
    
    


  }); 