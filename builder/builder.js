

var builder = function (jsondata) {
    builder = this;
    builder.pages = [];
    builder.pageList = [];
    builder.domElement = '';
    buildpages(jsondata);
}

builder.prototype.buildOn = function (elemnt) {
    var doc = elemnt.ownerDocument;
    builder.domElement = elemnt;
    var finaltemplet = "";
    builder.pageList = [];
    for (var i = 0; i < builder.pages.length; i++) {
        for (var j = 0; j < builder.pages[i].fibs.length; j++) {
            finaltemplet = finaltemplet + builder.pages[i].fibs[j].templet;
            builder.pageList.push(builder.pages[i].fibs[j].templet);
        }
        for (var j = 0; j < builder.pages[i].multiplechaoice.length; j++) {
            finaltemplet = finaltemplet + builder.pages[i].multiplechaoice[j].templet;
            builder.pageList.push(builder.pages[i].multiplechaoice[j].templet);
        }

    }
    // set initial page as 0... we can use session cache to know last visited question on refresh...
    builder.currentPage = 0;
    builder.loadPage(0);
    // removing following line to stop loading of all questions at once and adding pagination
    // elemnt.innerHTML = finaltemplet;
}

builder.prototype.loadNextPage = function () {
    // loadnext method automaticaly finds next valid question number from current question
    if (!isNaN(builder.currentPage) && builder.currentPage >= 0) {
        if ((builder.currentPage + 1) < builder.pageList.length) {
            builder.currentPage = builder.currentPage + 1;
            builder.loadPage(builder.currentPage);
            // (current + 1) next is valid question number
        } else if (!isNaN(builder.currentPage) && (builder.currentPage + 1) == builder.pageList.length) {
            loadFinishPage();
        }
    } else {
        // currentPage is not valid number. start from 0
        builder.currentPage = 0;
        builder.loadPage(0);
    }
}

builder.prototype.submitTest = function () {
    alert('Test submitted');
    document.getElementById('startBtn').style.display = 'none';
}

loadFinishPage = function () {
    builder.domElement.innerHTML = '';
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('startBtn').addEventListener('click', builder.submitTest);
    document.getElementById('startBtn').innerHTML = 'Finish';
    document.getElementById('startBtn').classList.remove('right');
    document.getElementById('startBtn').style.display = 'inline-block';
}

builder.prototype.loadPage = function (number) {
    // accepts numbers as input and display appropriate question if a valid number;
    if (builder.domElement && builder.domElement.id && !isNaN(number) && number < builder.pages.length && number >= 0) {
        console.log('fetching page number : ' + number);
        builder.domElement.innerHTML = builder.pageList[number];
    } else {
        console.log('Invalid Page Number');
    }
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
