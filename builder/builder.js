

var builder = function (jsondata) {
    builder = this;
    builder.pages = [];
    buildpages(jsondata);
}

builder.prototype.buildOn = function (elemnt) {
    var doc = elemnt.ownerDocument;

    var finaltemplet = "";
    for (var i = 0; i < builder.pages.length; i++) {
        for (var j = 0; j < builder.pages[i].fibs.length; j++) {
            finaltemplet = finaltemplet + builder.pages[i].fibs[j].templet;
        }
        for (var j = 0; j < builder.pages[i].multiplechaoice.length; j++) {
            finaltemplet = finaltemplet + builder.pages[i].multiplechaoice[j].templet;
        }

    }
    elemnt.innerHTML = finaltemplet;
}


buildpages = function (jsonobj) {
    if (!jsonobj.hasOwnProperty('pages')) {
        return;
    }

    for (var a = 0; a < jsonobj.pages.length; a++) {
        var pageobj = new page(jsonobj.pages[a]);
        builder.pages.push(pageobj);
    }
}
