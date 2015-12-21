var smallDataCache = [],
    bigDataCache = [],
    buttonSel = 'button',
    tableTrSel = '#data tr',
    paginationSel = '#nav a',
    paginationSelFirst = "#nav a:first",
    loaderSel = "loader";
$(document).ready(function () {
    document.getElementById(loaderSel).setAttribute('style', 'visibility:hidden');
    document.getElementById('info').setAttribute('style', 'visibility:hidden');
    $(buttonSel).click(function (e) {
        console.log("control btns have been clicked");
        $(buttonSel).attr('disabled',true);
        $('tbody').children().remove();
        $('#nav').children().remove();
        switch (e.target.id) {
            case '1':
                cleanInfo();
                console.log("smallDataBtn");
                if (smallDataCache.length != 0) {
                    console.log("notEmptyCache");
                    drawingData(smallDataCache);
                    drawingPagination();
                    $(buttonSel).attr('disabled',false);
                } else {
                    document.getElementById(loaderSel).setAttribute('style', 'visibility:visible');
                    console.log("emptyCache");
                    $.ajax({
                        type: "GET",
                        url: "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}",
                        dataType: "json",
                        success: function(data) {
                            smallDataCache = data;
                            drawingData(data);
                            drawingPagination();
                            $(buttonSel).attr('disabled',false);
                            rowClick(data);
                            makeSortable();
                            document.getElementById(loaderSel).setAttribute('style', 'visibility:hidden');
                        }
                    });
                }
                break;
            case '2':
                cleanInfo();
                console.log("bigDataBtn");
                if (bigDataCache.length != 0) {
                    console.log("notEmptyCache");
                    drawingData(bigDataCache);
                    drawingPagination();
                    $(buttonSel).attr('disabled',false);
                } else {
                    document.getElementById(loaderSel).setAttribute('style', 'visibility:visible');
                    console.log("emptyCache");
                    $.ajax({
                        type: "GET",
                        url: "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}",
                        dataType: "json",
                        success: function(data) {
                            bigDataCache = data;
                            drawingData(data);
                            drawingPagination();
                            $(buttonSel).attr('disabled',false);
                            rowClick(data);
                            makeSortable();
                            document.getElementById(loaderSel).setAttribute('style', 'visibility:hidden');
                        }
                    });
                }
                break;
        }
    });
});
function drawingData(data){
    for(var i= 0;i<data.length; i++) {
        $('table tbody').append('<tr><th>' + data[i].id + '</th><th>' + data[i].firstName + '</th><th>' + data[i].lastName + '</th><th>' + data[i].email + '</th><th>' + data[i].phone + '</th></tr>');
    }
}