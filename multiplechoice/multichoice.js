var multichoice = function(){
    
}

multichoice.prototype.setmultichoicedata = function(text){

    this.input = "<input type='text'/>";
    var option = "";
    
    var card = "<div layout='row' flex> <div> <div class=card>"+ 
    "<div class=card-content>#CONTENT</div> </div> </div></div>";

    var parentwrapper = "<div class = 'row'><div class = 'input-field col s12'>#CHILD</div></div>";

    for(var i=0;i<text.question.options.length;i++){
        var newoption = text.question.question;
        option = option  + "<p><input id = '"+text.question.options[i].id+"' type='radio' name='"+text.id+"' value ='"+newoption+"' /><label for = '"+text.question.options[i].id+"'>"+text.question.options[i].option+"</label></p>";
    }
   
    var childtemplet = '<p class="question">'+text.question.question+'</p>' + option;
    this.templet = card.replace('#CONTENT',parentwrapper.replace("#CHILD",childtemplet));
}