var timer = 4000;
var index = 1;
var length = 4;
var picTities = ["第一个图片的标题","第二个图片的标题","第三个图片的标题","第四个图片的标题"];

var clear = setInterval(changeImg,timer);

function changeImg () {
  if(index == length){
    index = 1;
    $("input[type='radio'][value='"+length+"']").removeAttr("checked");
  }else{
    index++;
    var val = index-1;
    $("input[type='radio'][value='"+val+"']").removeAttr("checked");
  }  
  /*注意：
     $("input[type='radio'][value='"+index+"']").attr("checked","checked");
    这样写不起作用，radio按钮没有被选中
    If in jQuery >= 1.6:
                        Use prop as seen here: .prop() vs .attr()
                        $itemVariantRowRadio.prop('checked', true);
    If in jQuery < 1.6:
                        $itemVariantRowRadio.attr('checked', true);
  */
  $( "input[type='radio'][value='"+index+"']" ).prop( "checked", true);
  $("#lunbo-Titie").html(picTities[index-1]);
}

/*向前翻页*/
function changeImg_Pre () {
  if(index == 1){
    index = length;
    $("input[type='radio'][value='1']").removeAttr("checked");
  }else{
    index--;
    var val = index+1;
    $("input[type='radio'][value='"+val+"']").removeAttr("checked");
  }  
  $("input[type='radio'][value='"+index+"']").prop("checked",true);
  $("#lunbo-Titie").html(picTities[index-1]);
}

/*点击翻页按钮*/
function clickBtn (num) {
  $("input[type='radio'][value='"+num+"']").prop("checked",true);
  $("#lunbo-Titie").html(picTities[num-1]);
  index = num;
}
