var multichoice = function(){
    
}

multichoice.prototype.setmultichoicedata = function(text){

    this.input = "<input type='text'/>";
    var option = "";
    
    var card = "<div class='row'> <div class='col s12 m10 push-m1'> <div class=card>"+ 
    "<div class=card-content>#CONTENT</div> </div> </div></div>";

    var parentwrapper = "<div class = 'row'><div class = 'input-field col s12'>#CHILD</div></div>";

    for(var i=0;i<text.options.length;i++){
        var newoption = text.options[i].text;
        option = option  + "<p><input id = '"+text.options[i].id+"' type='radio' name='"+text.id+"' value ='"+newoption+"' /><label for = '"+text.options[i].id+"'>"+newoption+"</label></p>";
    }
   
    var childtemplet = '<p class="question">'+text.text+'</p>' + option;
    this.templet = card.replace('#CONTENT',parentwrapper.replace("#CHILD",childtemplet));
}