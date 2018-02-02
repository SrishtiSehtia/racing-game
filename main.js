var car1 = document.getElementById('car1');
var car2 = document.getElementById('car2');
var startButton = document.getElementById('start');

var hasStarted = false;

// <element>.setAttribute('style','left:10px;')
// <element>.getAttribute('style')7
function move(car) {
  console.log(car.style.left)
  var lastPosition = parseInt(car.style.left || 0, 10);
  if (document.body.offsetWidth >= lastPosition) {
    console.log(lastPosition + 100)
    car.setAttribute('style', 'left:' + (lastPosition + 100)  +"px");
  } else {
    alert("You won!")
  }
}
document.body.addEventListener('keyup',function(event){
  if( hasStarted === false ){
    return;
  }
  if(event.key === 'ArrowRight'){
    console.log('CAR1')
    move(car1)
  } else if(event.key === "ArrowLeft"){
    console.log('CAR2')
    move(car2)
  }
});


startButton.addEventListener('click',function(){
  hasStarted = true;
});
