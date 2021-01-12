var Links = {
  SetColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  SetColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === '밤으로 바꾸기'){
    Body.SetBackgroundColor('#483d8b');
    Body.SetColor('white');
    self.value = '낮으로 바꾸기';
    Links.SetColor('powderblue');

  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = '밤으로 바꾸기';
    Links.SetColor('black');
  }
}
