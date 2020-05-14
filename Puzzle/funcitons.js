var topEdge = [
            [[0,0], [100, 0]],
            
            [[0, 0], [38, 0], [36, 2], [35, 4], [34, 7], [34, 10], [35, 11], [37, 15], [39, 17], [40, 18], [43, 19], [46, 20], [48, 20], [50, 19], [53, 17], [55, 15], [57, 14], [58, 10], [58, 8], [58, 6], [57, 4], [57, 2], [56, 0], [100, 0]],
            
            [[0, 0], [4, 4], [8, 9], [13, 13], [19, 15], [24, 17], [29, 19], [34, 22], [38, 23], [40, 21], [38, 17], [35, 13], [35, 10], [35, 8], [37, 5], [40, 3], [44, 3], [48, 4], [50, 5], [53, 7], [55, 9], [54, 12], [54, 14], [53, 17], [52, 19], [52, 21], [53, 24], [55, 24], [59, 22], [63, 22], [67, 21], [70, 19], [74, 17], [77, 16], [80, 13], [85, 10], [89, 8], [93, 6], [100, 0]],
            
            [[0, 0], [18, 0], [18, 1], [16, 4], [15, 7], [15, 10], [15, 14], [17, 17], [20, 19], [23, 19], [27, 19], [31, 18], [33, 15], [34, 12], [34, 8], [33, 5], [32, 2], [32, 0], [100, 0]],
            
            [[0, 0], [4, 3], [8, 6], [14, 10], [21, 11], [28, 11], [33, 12], [40, 13], [39, 15], [38, 18], [37, 21], [37, 26], [40, 29], [45, 31], [49, 30], [54, 29], [56, 27], [58, 23], [58, 19], [55, 15], [54, 12], [59, 12], [65, 12], [70, 11], [78, 10], [83, 7], [89, 6], [95, 3], [100, 0]]




            
          ]
var rightEdge = [
            [[100,0], [100,100]],
            
            [[100, 0], [103, 7], [105, 11], [107, 15], [109, 19], [110, 22], [110, 26], [109, 31], [107, 35], [105, 39], [104, 44], [105, 48], [109, 47], [112, 44], [114, 41], [119, 42], [121, 48], [124, 53], [126, 60], [125, 66], [120, 69], [115, 66], [111, 63], [106, 63], [107, 68], [109, 74], [109, 81], [108, 87], [107, 91], [104, 94], [100, 100]],
            
            [[100, 0], [100, 65], [103, 64], [106, 63], [115, 63], [121, 63], [125, 70], [127, 75], [126, 81], [122, 83], [118, 86], [113, 86], [108, 86], [105, 82], [100, 78], [100, 100]],
            
            [[100, 0], [100, 17], [104, 21], [110, 25], [114, 32], [115, 40], [114, 46], [110, 43], [106, 39], [102, 45], [102, 53], [101, 64], [105, 70], [108, 67], [109, 64], [114, 61], [117, 65], [117, 73], [116, 79], [113, 87], [106, 93], [100, 100]]
          ]
var bottomEdge = [
            [[100,100],[0,100]],
            
            [[100, 100], [56, 100], [57, 102], [57, 104], [58, 106], [58, 108], [58, 110], [57, 114], [55, 115], [53, 117], [50, 119], [48, 120], [46, 120], [43, 119], [40, 118], [39, 117], [37, 115], [35, 111], [34, 110], [34, 107], [35, 104], [36, 102], [38, 100], [0, 100]],
            
            [[100, 100], [93, 106], [89, 108], [85, 110], [80, 113], [77, 116], [74, 117], [70, 119], [67, 121], [63, 122], [59, 122], [55, 124], [53, 124], [52, 121], [52, 119], [53, 117], [54, 114], [54, 112], [55, 109], [53, 107], [50, 105], [48, 104], [44, 103], [40, 103], [37, 105], [35, 108], [35, 110], [35, 113], [38, 117], [40, 121], [38, 123], [34, 122], [29, 119], [24, 117], [19, 115], [13, 113], [8, 109], [4, 104], [0, 100]],
            
            [[100, 100], [32, 100], [32, 102], [33, 105], [34, 108], [34, 112], [33, 115], [31, 118], [27, 119], [23, 119], [20, 119], [17, 117], [15, 114], [15, 110], [15, 107], [16, 104], [18, 101], [18, 100], [0, 100]],
            
            [[100, 100], [95, 103], [89, 106], [83, 107], [78, 110], [70, 111], [65, 112], [59, 112], [54, 112], [55, 115], [58, 119], [58, 123], [56, 127], [54, 129], [49, 130], [45, 131], [40, 129], [37, 126], [37, 121], [38, 118], [39, 115], [40, 113], [33, 112], [28, 111], [21, 111], [14, 110], [8, 106], [4, 103], [0, 100]]
          ]
var leftEdge = [
            [[0,100],[0,0]],
            
            [[0, 100], [4, 94], [7, 91], [8, 87], [9, 81], [9, 74], [7, 68], [6, 63], [11, 63], [15, 66], [20, 69], [25, 66], [26, 60], [24, 53], [21, 48], [19, 42], [14, 41], [12, 44], [9, 47], [5, 48], [4, 44], [5, 39], [7, 35], [9, 31], [10, 26], [10, 22], [9, 19], [7, 15], [5, 11], [3, 7], [0, 0]],
            
            [[0, 100], [0, 78], [5, 82], [8, 86], [13, 86], [18, 86], [22, 83], [26, 81], [27, 75], [25, 70], [21, 63], [15, 63], [6, 63], [3, 64], [0, 65], [0, 0]],
            
            [[0, 100], [6, 93], [13, 87], [16, 79], [17, 73], [17, 65], [14, 61], [9, 64], [8, 67], [5, 70], [1, 64], [2, 53], [2, 45], [6, 39], [10, 43], [14, 46], [15, 40], [14, 32], [10, 25], [4, 21], [0, 17], [0, 0]]



          ]
var puzzle = []
$( document ).ready(function() {
    var current = 0
    var x;
    var y;
    for(y = 0; y < 10; y++){
        for(x = 0; x < 10; x++){
            var img = document.createElement('img')
            img.style.zIndex = current
            var clip = getClip(x,y,10, current)
            img.style.clipPath = clip
            img.style.webkitClipPath = clip
            img.src = "201.jpg"
            img.classList.add("drag")
            img.id = current
            img.setAttribute('data-x',x);
            img.setAttribute('data-y',y);
            img.setAttribute('data-connect', current);
            document.getElementById("screen").appendChild(img)
            dragElement(document.getElementById(current))
            current +=1;
        }
    }
    
})

function getClip(x, y,width,current){
    var bottom
    var right
    var polygon = ""
    if( y != 0){
        puzzle[current-10][0]
        polygon += getSide(x,y,width,topEdge[ puzzle[current-10][0]])
    }
    else{
        polygon += getSide(x,y,width,topEdge[0])
    }
    
    if(x !=9){
        right = getRandomInt(rightEdge.length-1)+ 1;
        polygon += getSide(x,y,width,rightEdge[right])
    }
    else{
        polygon += getSide(x,y,width,rightEdge[0])
    }
    if( y!= 9){
        bottom = getRandomInt(bottomEdge.length-1)+ 1
        polygon += getSide(x,y,width,bottomEdge[bottom])
        
    }
    else{
        polygon += getSide(x,y,width,bottomEdge[0])
    }
    if(x!=0){
         polygon += getSide(x,y,width,leftEdge[puzzle[current-1][1]]).slice(0,-2)
    }
    else{
        polygon += getSide(x,y,width,leftEdge[0]).slice(0,-2)
    }
    puzzle.push([bottom, right])
    return "polygon("+polygon+")"
}
function getSide(x, y, width, arr){
    var out = ""
    arr.forEach( function(point){
        var temp1 = x*width + point[0]/width
        var temp2 = y*width + point[1]/width
        out += temp1+"% "+temp2+"%, "
    })
    return out
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    document.getElementById(elmnt.id + "header").addEventListener("touchstart", touchStart, false);
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    elmnt.addEventListener("touchstart", touchStart, false);
  }

  function dragMouseDown(e) {
    var ele = document.getElementById(elmnt.id)
    var zChange = ele.style.zIndex
    ele.style.zIndex = 100
    $('img').each(function(pic){
        var temp = $(this).css('z-index')
        if(parseInt(temp) > parseInt(zChange)){
            $(this).css('z-index', temp-1);
            
        }
    })
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
   document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }


  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    var x = $('#'+elmnt.id).attr("data-x")
    var y = $('#'+elmnt.id).attr("data-y")
    var h = $('#area').height() / 10
    var w = $('#area').width() / 10
    // set the element's new position:
    elmnt.style.top = pos4-(y*h)-(h/2)+"px";//(elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = pos3-(x*w)-(w/2)+"px";
    
    var imgAttached = $('#'+elmnt.id).attr('data-connect').split(',');
    if(imgAttached != '[]'){
        imgAttached.forEach(function(id){
            $('#'+id).css('left',pos3-(x*w)-(w/2)+"px")
            $('#'+id).css('top',pos4-(y*h)-(h/2)+"px");
        })
    }
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    if(checkPosition(elmnt.id) == true){
        elmnt.onmousedown = null;
        elmnt.removeEventListener("touchstart", touchStart);
    }
    
    else{
        checkIfAttatched(elmnt.id)
    }
  }  
  function touchStart(e){
      if(elmnt.onmousedown !=null){
        var ele = document.getElementById(elmnt.id)
        var zChange = ele.style.zIndex
        ele.style.zIndex = 100
        $('img').each(function(pic){
            var temp = $(this).css('z-index')
            if(parseInt(temp) > parseInt(zChange)){
                $(this).css('z-index', temp-1);
                
            }
        })
        
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        ele.addEventListener("touchend", closeTouchElement, false);
        // call a function whenever the cursor moves:
        ele.addEventListener("touchmove",elementTouch, false);
      }
    }
  function elementTouch(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    var x = $('#'+elmnt.id).attr("data-x")
    var y = $('#'+elmnt.id).attr("data-y")
    var h = $('#area').height() / 10
    var w = $('#area').width() / 10
    // set the element's new position:
    //offset like random and half a piece
    elmnt.style.top = pos4-(y*h)-(h/2)+"px";//(elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = pos3-(x*w)-(w/2)+"px";//(elmnt.offsetLeft - pos1) + "px";
    
    var imgAttached = $('#'+elmnt.id).attr('data-connect').split(',');
    if(imgAttached != '[]'){
        imgAttached.forEach(function(id){
            $('#'+id).css('top',pos4-(y*h)-(h/2)+"px");
            $('#'+id).css('left', pos3-(x*w)-(w/2)+"px");
        })
    }
  }
  function closeTouchElement() {
    // stop moving when mouse button is released:
    elmnt.removeEventListener("touchend", closeTouchElement);
        // call a function whenever the cursor moves:
    elmnt.removeEventListener("touchmove", elementTouch);
    if(checkPosition(elmnt.id) == true){
        elmnt.onmousedown = null;
        elmnt.removeEventListener("touchstart", touchStart);
    }
    else{
        checkIfAttatched(elmnt.id)
    }
  }
}

function mixPieces(){
    $('button').css('display','none')
    $('.drag').each(function(pic){
        var pos = getRandomPosition($(this).attr("data-x"),$(this).attr("data-y"),10)
        $(this).css('left', pos.horizontalOffset);
        $(this).css('top', pos.verticalOffset);
    })
}
function getRandomPosition(x, y, width){
    var verticalOffset
    var horizontalOffset
    var offset = $('#area').height() / width
    var yLoc = getRandomInt(90)
    yLoc += 2.5
    var xLoc = getRandomInt(90);
    xLoc +=2.5
    if(yLoc > 25 && yLoc < 75){
        var widthPercent = ($('#area').width() / $('#screen').width())*100
        if( xLoc > ((100 - widthPercent)/2) && xLoc < (((100 - widthPercent)/2)+widthPercent)){
            if( $('#screen').width() > $('#screen').height()){
                
                xLoc = getRandomInt(90-widthPercent)
                xLoc += 2.5
                if(xLoc > ((90-widthPercent)/2)){
                    xLoc +=widthPercent
                }
            }
            else{
                yLoc = getRandomInt(40)
                yLoc +=2.5
                if(yLoc > 20){
                    yLoc += 50
                }
            }
        }
        
    }
    verticalOffset = "calc("+yLoc+"% - "+(offset*y)+"px)" 
    horizontalOffset = "calc("+xLoc+"% - "+(offset *x)+"px)"
    
    
    return {
        verticalOffset: verticalOffset,
        horizontalOffset: horizontalOffset
    };
    
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function checkPosition(id){
    var img = $("#"+id).offset()
    var area = $('#area').offset()
    if((Math.abs(img.left - area.left) < 9) && (Math.abs(img.top - area.top) < 9)){
        var child = document.getElementById(id)
        child.classList.remove("drag")
        child.classList.add("completed")
        $("#"+id).css('left', 0);
        $("#"+id).css('top', 0);
        document.getElementById("area").appendChild(child)
        var imgAttached = $('#'+child.id).attr('data-connect').split(',');
        if(imgAttached != '[]'){
            imgAttached.forEach(function(attatchedId){
                var temp = document.getElementById(attatchedId)
                temp.classList.remove("drag")
                temp.classList.add("completed")
                $("#"+attatchedId).css('left', 0);
                $("#"+attatchedId).css('top', 0);
                document.getElementById("area").appendChild(temp)
                temp.onmousedown = null;
                //temp.removeEventListener("touchstart", touchStart);
            })
        }
        return true
    }
}
function checkIfAttatched(id){
    var img = $("#"+id).offset()
    var primaryConnectList = $('#'+id).attr('data-connect').split(',')
    $('.drag').each(function(x){
        var temp = $(this).offset()
        
        if(($(this).attr('id') != id) && ! $("#"+id).attr('data-connect').includes($(this).attr('id')) &&(Math.abs(img.left - temp.left) < 9) && (Math.abs(img.top - temp.top) < 9)){
            var tempConnectList = $(this).attr('data-connect').split(',')
            var tempId = $(this).attr('id')+""
            var combine = tempConnectList.concat(primaryConnectList)
            combine = combine.concat([tempId,id])
            var set = new Set(combine);
            var finalList = Array.from(set);
            $(this).css('left',img.left)
            $(this).css('top',img.top);
            $(this).attr('data-connect',finalList);
            $('#'+id).attr('data-connect',finalList);
            
            tempConnectList.forEach(function(tempConId){
                $('#'+tempConId).attr('data-connect',finalList);
                $('#'+tempConId).css('left',img.left)
                $('#'+tempConId).css('top',img.top);
                
            })
            primaryConnectList.forEach(function(tempConId){
                //add to connectie
                $('#'+tempConId).attr('data-connect',finalList);
                $('#'+tempConId).css('left',img.left)
                $('#'+tempConId).css('top',img.top);
            })            
        }
    })
}


