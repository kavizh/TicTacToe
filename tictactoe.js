var noOfClick=1;
function write1(){
    if((noOfClick%2)==0){
        document.querySelector('.one').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.one').innerHTML='X';
        noOfClick++;
    }
}
function write2(){
    if((noOfClick%2)==0){
        document.querySelector('.two').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.two').innerHTML='X';
        noOfClick++;
    }
}
function write3(){
    if((noOfClick%2)==0){
        document.querySelector('.three').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.three').innerHTML='X';
        noOfClick++;
    }
}
function write4(){
    if((noOfClick%2)==0){
        document.querySelector('.four').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.four').innerHTML='X';
        noOfClick++;
    }
}
function write5(){
    if((noOfClick%2)==0){
        document.querySelector('.five').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.five').innerHTML='X';
        noOfClick++;
    }
}
function write6(){
    if((noOfClick%2)==0){
        document.querySelector('.six').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.six').innerHTML='X';
        noOfClick++;
    }
}
function write7(){
    if((noOfClick%2)==0){
        document.querySelector('.seven').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.seven').innerHTML='X';
        noOfClick++;
    }
}
function write8(){
    if((noOfClick%2)==0){
        document.querySelector('.eigth').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.eigth').innerHTML='X';
        noOfClick++;
    }
}
function write9(){
    if((noOfClick%2)==0){
        document.querySelector('.nine').innerHTML='0';
        noOfClick++;
    }
    else{
        document.querySelector('.nine').innerHTML='X';
        noOfClick++;
    }
}
function reset(){
    location.reload()
}
setInterval(
    check,500
)
function check(){
    //IF THE INNER IS X
    if (document.querySelector('.one').innerHTML == 'X' && document.querySelector('.two').innerHTML == 'X' && document.querySelector('.three').innerHTML == 'X') {
       document.querySelector('.status').innerHTML = 'X is the winner'
   }
   if (document.querySelector('.four').innerHTML == 'X' && document.querySelector('.five').innerHTML == 'X' && document.querySelector('.six').innerHTML == 'X') {
    document.querySelector('.status').innerHTML = 'X is the winner'
}
   if (document.querySelector('.seven').innerHTML == 'X' && document.querySelector('.eigth').innerHTML == 'X' && document.querySelector('.nine').innerHTML == 'X') {
    document.querySelector('.status').innerHTML = 'X is the winner'
}
   if (document.querySelector('.one').innerHTML == 'X' && document.querySelector('.five').innerHTML == 'X' && document.querySelector('.nine').innerHTML == 'X') {
    document.querySelector('.status').innerHTML = 'X is the winner'
}
   if (document.querySelector('.one').innerHTML == 'X' && document.querySelector('.four').innerHTML == 'X' && document.querySelector('.seven').innerHTML == 'X') {
    document.querySelector('.status').innerHTML = 'X is the winner'
}
   if (document.querySelector('.two').innerHTML == 'X' && document.querySelector('.five').innerHTML == 'X' && document.querySelector('.eigth').innerHTML == 'X') {
    document.querySelector('.status').innerHTML = 'X is the winner'
}
if (document.querySelector('.three').innerHTML == 'X' && document.querySelector('.six').innerHTML == 'X' && document.querySelector('.nine').innerHTML == 'X') {
    document.querySelector('.status').innerHTML = 'X is the winner'
}
 
   if (document.querySelector('.three').innerHTML == 'X' && document.querySelector('.five').innerHTML == 'X' && document.querySelector('.seven').innerHTML == 'X') {  document.querySelector('.status').innerHTML = 'X is the winner'
}

   

if (document.querySelector('.one').innerHTML == '0' && document.querySelector('.two').innerHTML == '0' && document.querySelector('.three').innerHTML == '0') {
    document.querySelector('.status').innerHTML = '0 is the winner'
}
if (document.querySelector('.four').innerHTML == '0' && document.querySelector('.five').innerHTML == '0' && document.querySelector('.six').innerHTML == '0') {
 document.querySelector('.status').innerHTML = '0 is the winner'
}
if (document.querySelector('.seven').innerHTML == '0' && document.querySelector('.eigth').innerHTML == '0' && document.querySelector('.nine').innerHTML == '0') {
 document.querySelector('.status').innerHTML = '0 is the winner'
}
if (document.querySelector('.one').innerHTML == '0' && document.querySelector('.five').innerHTML == '0' && document.querySelector('.nine').innerHTML == '0') {
 document.querySelector('.status').innerHTML = '0 is the winner'
}
if (document.querySelector('.one').innerHTML == '0' && document.querySelector('.four').innerHTML == '0' && document.querySelector('.seven').innerHTML == '0') {
 document.querySelector('.status').innerHTML = '0 is the winner'
}
if (document.querySelector('.two').innerHTML == '0' && document.querySelector('.five').innerHTML == '0' && document.querySelector('.eigth').innerHTML == '0') {
 document.querySelector('.status').innerHTML = '0 is the winner'
}
if (document.querySelector('.three').innerHTML == '0' && document.querySelector('.six').innerHTML == '0' && document.querySelector('.nine').innerHTML == '0') {
 document.querySelector('.status').innerHTML = '0 is the winner'
}

if (document.querySelector('.three').innerHTML == '0' && document.querySelector('.five').innerHTML == '0' && document.querySelector('.seven').innerHTML == '0') {  document.querySelector('.status').innerHTML = '0 is the winner'
}



}

