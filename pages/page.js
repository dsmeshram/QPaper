var page = function(pagesjson){  
    this.fibs = [];
    this.multiplechaoice = [];
    this.draganddrops = [];
    if(pagesjson.hasOwnProperty('fib')){
        this.setfibdata(pagesjson.fib);
    }
    if(pagesjson.hasOwnProperty('multiplechoice')){
        this.setmultiplechoicequestiondata(pagesjson.multiplechoice);
    }  
}

page.prototype.setfibdata = function(fiblist){
   for(var i=0;i<fiblist.length;i++){
    var fibobj = new fib();
    fibobj.setfibdata(fiblist[i]);
    this.fibs.push(fibobj);
   }
}


page.prototype.setmultiplechoicequestiondata = function(fiblist){
    for(var i=0;i<fiblist.length;i++){
     var multichoiceobj = new multichoice();
     multichoiceobj.setmultichoicedata(fiblist[i]);
     this.multiplechaoice.push(multichoiceobj);
    }
 }