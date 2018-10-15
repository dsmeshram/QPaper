var fib = function(){
   
    
}

fib.prototype.setfibdata = function(text){
    this.input = "<input type='text'/>";
    var textis = text.text.replaceAll("#FIB",this.input);
   
    this.templet = "<p>"+textis+"</p> <br>";
}

/**
 * replace all instances of a character in a string
 * @param {string} ext
 * @returns {boolean}
 * @memberof Core
 */
String.prototype.replaceAll = function(find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};