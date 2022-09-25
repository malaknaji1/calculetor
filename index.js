let result=document.getElementById("result_box");
function display(num){
    result.value += num;

}
function calculate(){
 try{
      result.value=eval(result.value);   
 }
  catch{
    alert("Invalid Operation");
  }
}

function clear_box(){
  result.value=" ";
}
function del(){
 
  result.value=result.value.slice(0,-1);

}