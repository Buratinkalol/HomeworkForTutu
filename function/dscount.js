function dscount(row, firstSymbol, secondSymbol) {
    firstSymbol = firstSymbol.toString();
    secondSymbol = secondSymbol.toString();
    row = row.toString();
    firstSymbol = firstSymbol.toLowerCase();
    secondSymbol = secondSymbol.toLowerCase();
    row = row.toLowerCase();

    if (firstSymbol.length > 1 || secondSymbol.length > 1) {
        return "ERROR 1: Length of input symbols must be equals 1"
    }
    if (firstSymbol.length === 0 || secondSymbol.length === 0 || row.length === 0) {
        return "ERROR 2: Empty fields"
    }
    var count = 0;
    for(var i = 0; i<=row.length; i++) {
        if (firstSymbol === row[i] && secondSymbol === row[i+1]) {
            count +=1;
        }
    }
    return count;
}