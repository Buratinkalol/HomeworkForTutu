function drawingPagination() {
    var rowsShown = 50;
    var rowsTotal = $('table tr').length;
    var numPages = rowsTotal/rowsShown;
    for (var i = 0; i< numPages; i++) {
        var pageNum = i + 1;
        $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+" "+'</a>');
    }
    $(tableTrSel).hide();
    $(tableTrSel).slice(0 , rowsShown).show();
    $(paginationSelFirst).addClass('active');
    $(paginationSel).bind('click', function(){
        $(paginationSel).removeClass('active');
        $(this).addClass('active');
        var curPage = $(this).attr('rel');
        var startItem = curPage * rowsShown;
        var endItem = startItem + rowsShown;
        $(tableTrSel).css('opacity','0.0').hide().slice(startItem, endItem).css('display', 'table-row').animate({opacity:1}, 300);
    });
}