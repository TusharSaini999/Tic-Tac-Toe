//Devloped By Tushar Saini
var boxes = document.querySelectorAll(".div");
const g1=document.getElementById("g1");
var g2=document.getElementById("g2");
let mes=document.getElementById("mes");
let body=document.getElementById("sg")
let c=0;
let lc=0;
let la=0;
var lt=[["a","b","c"],["d","e","f"],["g","h","i"]];
    boxes.forEach(function(box) {
        box.onclick = function() {
            if (c==0) {
                if (this.innerHTML=='<i id="i2"></i>' || this.innerHTML=='<i class="fas fa-times"></i>') {
                    mes.innerHTML="<div id='myModal' class='modal'><div class='modal-content' style='background:#ff0049;'><div class='modal-header'><h2>Wrong Entry</h2></div><div class='modal-body'><b>Element already Inserted in Box</b></div><div class='modal-footer'><button class='btn btn-primary' id='close'>Close</button></div></div></div>"; 
                    var modal = document.getElementById("myModal");
            var span = document.getElementById("close")
            span.onclick = function() {
                modal.style.display = "none";
                }
                }
                else {
                this.innerHTML="<i class='fas fa-times'></i>";
               g2.style.boxShadow = "0px 0px 10px 4px #f800ff";
               g2.style.border="2px solid #f800ff";
                g1.style.boxShadow = "none";
                g1.style.border="none";
              let digits =  (this.id).toString().split('');   
              var i=parseInt(digits[0]);
              var j=parseInt(digits[1]);
              lt[i][j]=1;
               c=1;
               lc++;        
               if (lc>=3) {
                if (
  (lt[0][0] == 1 && lt[0][1] == 1 && lt[0][2] == 1) ||
  (lt[0][0] == 1 && lt[1][1] == 1 && lt[2][2] == 1) ||
  (lt[0][0] == 1 && lt[1][0] == 1 && lt[2][0] == 1) ||
  (lt[0][2] == 1 && lt[1][1] == 1 && lt[2][0] == 1) ||
  (lt[2][0] == 1 && lt[2][1] == 1 && lt[2][2] == 1) ||
  (lt[2][2] == 1 && lt[1][2] == 1 && lt[0][2] == 1) ||
  (lt[1][0] == 1 && lt[1][1] == 1 && lt[1][2] == 1) ||
  (lt[0][1] == 1 && lt[1][1] == 1 && lt[2][1] == 1)
) {
mes.innerHTML="<div id='myModal' class='modal'><div class='modal-content'><div class='modal-header'><h2>Congratulations</h2></div><div class='modal-body'><b>Gamer 1 (❌) is Winner</b></div><div class='modal-footer'><button class='btn btn-primary' onclick='location.reload()'>Reset</button></div></div></div>";
}
else if(lc==5){
   mes.innerHTML="<div id='myModal' class='modal'><div class='modal-content'><div class='modal-header'><h2>Game Drow</h2></div><div class='modal-body'><b>Never is Winner</b></div><div class='modal-footer'><button class='btn btn-primary' onclick='location.reload()'>Restart</button></div></div></div>";
}
           }
             }
            }
            else if(c==1) {
            if (this.innerHTML=='<i class="fas fa-times"></i>' || this.innerHTML=='<i id="i2"></i>') {
                    mes.innerHTML="<div id='myModal' class='modal'><div class='modal-content' style='background:#ff0049;'><div class='modal-header'><h2>Wrong Entry</h2></div><div class='modal-body'><b>Element already Inserted in Box</b></div><div class='modal-footer'><button class='btn btn-primary' id='close'>Close</button></div></div></div>"; 
                    var modal = document.getElementById("myModal");
            var span = document.getElementById("close")
            span.onclick = function() {
                modal.style.display = "none";
            }
                }
                else {
                this.innerHTML="<i id='i2'></i>"
                g1.style.boxShadow = "0px 0px 10px 4px #f800ff";
                g1.style.border="2px solid #f800ff";
                g2.style.boxShadow = "none";
                g2.style.border="none";
                c=0;
                la++;
               let digits =  (this.id).toString().split('');   
              var i=parseInt(digits[0]);
              var j=parseInt(digits[1]);
              lt[i][j]=0;
              if(la>=3){
                  if((lt[0][0]==0 && lt[0][1]==0 && lt[0][2]==0) || (lt[0][0]==0 && lt[1][1]== 0 && lt[2][2]==0) || (lt[0][0]==0 && lt[1][0]==0 && lt[2][0]==0) || (lt[0][2]==0 && lt[1][1]==0 && lt[2][0]==0) || (lt[2][0]==0 && lt[2][1]==0 && lt[2][2]==0) || (lt[2][2]== 0 && lt[1][2]==0 && lt[0][2]==0) || (lt[1][0]==0 && lt[1][1]==0 && lt[1][2]==0) || (lt[0][1]==0 && lt[1][1]==0 && lt[2][1]==0)){
                 mes.innerHTML="<div id='myModal' class='modal'><div class='modal-content'><div class='modal-header'><h2>Congratulations</h2></div><div class='modal-body'><b>Gamer 2 (⭕) is Winner</b></div><div class='modal-footer'><button class='btn btn-primary' onclick='location.reload()'>Reset</button></div></div></div>";
                 }
              }
            }
           }
        };
  });
