function rowClick(data) {
    $("table").on("click", "tbody tr", function(e){
        e.stopImmediatePropagation();
        document.getElementById('info').setAttribute('style', 'visibility:visible');
        console.log("Testing rowClickFunc");
//            try to clear fields different ways, but no success :/
//            for (var i = 0; i<document.getElementsByTagName('li').length; i++){
//                document.getElementsByTagName('li')[i].child.innerHTML = "";
//            }
//            dirty method, no proud
        cleanInfo();
        data.forEach(function(i) {
            if (i["id"].toString() === e.currentTarget.children[0].innerHTML) {
                console.log(i);
                $("#userField").append(i["lastName"] + " " + i["firstName"]);
                $("#descriptionField").append(i["description"]);
                $("#addressField").append(i["adress"]["streetAddress"] + " " + i["firstName"]);
                $("#cityField").append(i["adress"]["city"]);
                $("#districtField").append(i["adress"]["state"]);
                $("#postcodeField").append(i["adress"]["zip"]);
            }
        })
    });
}
function cleanInfo() {
    document.getElementById('userField').innerHTML = "";
    document.getElementById('descriptionField').innerHTML = "";
    document.getElementById('addressField').innerHTML = "";
    document.getElementById('cityField').innerHTML = "";
    document.getElementById('districtField').innerHTML = "";
    document.getElementById('postcodeField').innerHTML = "";
}