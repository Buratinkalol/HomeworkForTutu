function sortTable(table, col, reverse) {
    console.log(reverse);
    var tb = table.tBodies[0],
        tr = Array.prototype.slice.call(tb.rows, 0),
        i;
    reverse = -((+reverse) || -1);
    if (col === 0) {
        tr = tr.sort(function (a, b) {
            return reverse * (a.cells[col].textContent.trim() - b.cells[col].textContent.trim());
        });
    } else {
        tr = tr.sort(function (a, b) {
            return reverse * (a.cells[col].textContent.trim().localeCompare(b.cells[col].textContent.trim()));
        });
    }
    for(i = 0; i < tr.length; ++i) tb.appendChild(tr[i]);
}

function makeSortable() {
    var myTable = document.getElementById('myTable');
    var th = myTable.tHead, i;
    th && (th = th.rows[0]) && (th = th.cells);
    i=th.length;
    while (--i >= 0) (function (i) {
        var dir = 1;
        th[i].addEventListener('click', function () {sortTable(myTable, i, (dir = 1 - dir))});
    }(i));
}