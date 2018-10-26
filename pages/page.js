var page = function(pagesjson){  
    this.fibs = [];
    this.multiplechaoice = [];
    this.draganddrops = [];
    if(pagesjson.hasOwnProperty('fib')){
        this.setfibdata(pagesjson.fib);
    }
    if(pagesjson.hasOwnProperty('type') && pagesjson.type == 'mcq'){
        this.setmultiplechoicequestiondata(pagesjson);
    } 
    if(pagesjson.hasOwnProperty('cover')){

    } 
    if(pagesjson.hasOwnProperty('details')){

    }
    if(pagesjson.hasOwnProperty('analysis')){

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
    //for(var i=0;i<fiblist.length;i++){
     var multichoiceobj = new multichoice();
     multichoiceobj.setmultichoicedata(fiblist);
     this.multiplechaoice.push(multichoiceobj);
    //}
 }