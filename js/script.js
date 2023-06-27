function drop_01(){
 let result = 0;
 let m1 =  Number(document.getElementById('main_01').value)
 let m2 =  Number(document.getElementById('main_02').value)
 let m3 =  Number(document.getElementById('main_03').value)
 let m4 =  Number(document.getElementById('main_04').value)
 let m5 =  Number(document.getElementById('main_05').value)
 let m6 =  Number(document.getElementById('main_06').value)
 let m7 =  Number(document.getElementById('main_07').value)
 let m8 =  Number(document.getElementById('main_08').value)
 let m9 =  Number(document.getElementById('main_09').value)
 let m10 = Number(document.getElementById('main_10').value)



 if(m1 == 11){
  result += 2
  document.getElementById('main_01').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_01').style.borderColor = 'red'
 }
 
 
 if(m2 == 49){
  result += 2
  document.getElementById('main_02').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_02').style.borderColor = 'red'
 }
 
 
 if(m3 == 1){
  result +=2;
  document.getElementById('main_03').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_03').style.borderColor = 'red'
 }
 
 
 
 if(m4 == 2){
  result +=2;
  document.getElementById('main_04').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_04').style.borderColor = 'red'
 }
 
 
 if(m5 == 15){
  result += 2;
  document.getElementById('main_05').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_05').style.borderColor = 'red'
 }
 
 if(m6 == 14){
  result +=2;
  document.getElementById('main_06').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_06').style.borderColor = 'red'
 }
 
 
 if(m7 == 3){
  result +=2;
  document.getElementById('main_07').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_07').style.borderColor = 'red'
 }
 
 
 if(m8 == 17){
  result += 2;
  document.getElementById('main_08').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_08').style.borderColor = 'red'
 }
 
 
 if(m9 == 16){
  result +=2
  document.getElementById('main_09').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_09').style.borderColor = 'red'
 }
 
 if(m10 == 25){
  result +=2;
  document.getElementById('main_10').style.borderColor = 'yellow'
 }else{
  document.getElementById('main_10').style.borderColor = 'red'
 }
 
 if(result == 20){
 document.getElementById('patasxan').innerHTML = result + " You got excellent" 

}else if(result < 20 && result > 8){
  document.getElementById('patasxan').innerHTML = result + " You have got enough points" 

}else if(result < 8){
  document.getElementById('patasxan').innerHTML = result + " You didn't get enough points" 
  
}
}

