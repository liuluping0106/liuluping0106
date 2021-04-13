var ele=document.getElementById('biiframe');
if(ele){
  var hh=ele.offsetWidth*0.65;
  ele.height = hh;
}

var ele=document.getElementById('pdfiframe');
if(ele){
  var hh=Math.min(window.screen.availHeight*0.85, ele.offsetWidth*1.6);
  ele.height = hh;
}

var ele=document.getElementById('epubiframe')
if(ele){
  var hh=Math.min(window.screen.availHeight*0.85, ele.offsetWidth*1.6)
  ele.height = hh;
}

var ele=document.getElementById('md5iframe')
if(ele){
  ele.width= Math.min(ele.offsetWidth, 1200);
  var hh=Math.min(ele.offsetWidth*0.65, 700)
  ele.height = hh;
}

// var viewflag=1;
function viewchange(){
  var ele = document.getElementById('la_20899205');
  allt = ele.firstChild;
  if(allt){
    alltin = allt.innerHTML;
    if(alltin){
      st = alltin.split("&nbsp;");
      allout = st[1].split('，')[0];
      todout = st[4].split('，')[0];
      // ele.innerHTML= '';
      var tele = document.getElementById('laout');
      tele.innerHTML = allout;
    }
    
  }
}setInterval(viewchange, 500);


function runtime(){// 初始时间，日/月/年 时:分:秒
  X = new Date("07/08/2020 8:30:00");
  Y = new Date();
  T = (Y.getTime()-X.getTime());
  M = 24*60*60*1000;
  a = T/M;
  A = Math.floor(a);
  b = (a-A)*24;
  B = Math.floor(b);
  c = (b-B)*60;
  C = Math.floor((b-B)*60);
  D = Math.floor((c-C)*60);//信息写入到DIV中
  spantime.innerHTML = A+"天"+B+"小时"+C+"分"+D+"秒"}setInterval(runtime, 1000);


  if (document.getElementById('upper_ele')) {
    new Viewer(document.getElementById('upper_ele'), {
        toolbar: false,
    });
}
