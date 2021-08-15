function add(name, price) {
    var localStg = localStorage.getItem('arr');
    var arr;
    if (localStg === null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStg);
    }
    var data = {
        "Name": name,
        "Price": price
    };
    arr.push(data);
    localStorage.setItem('arr', JSON.stringify(arr));
    var a = "<h4> Quantities: ";
    var b = arr.length;
    var z = "</h4>";
  document.getElementById("quantities").innerHTML = a + b + z;
}
// function checkIfEmpty() {
//     if (localStorage.getItem("arr") == null) {
//         var empty = "<h4> Quantities: 0 </h4>";
//         document.getElementById("items").innerHTML = empty;
//     }
//   var quantitiesArray = localStorage.getItem("arr");
//   var quantitiesJson = JSON.parse(quantitiesArray);
//     var a1 = "<h4> Quantities: ";
//   var b1 = quantitiesJson.length;
//     var z1 = "</h4>";
//     document.getElementById("items").innerHTML = a1 + b1 + z1;
// }
function emptyData() {
    localStorage.clear();
    var a = "<h4 style=color: aliceblue;> Quantities: 0 </h4>";
  document.getElementById("quantities").innerHTML = a;
}
function checkout() {
    if (localStorage.getItem("arr") == null) {
        var empty = "Your cart is empty!";
        document.getElementById("total").innerHTML = empty;
    }
    else {
      var quantitiesArray = localStorage.getItem("arr");
      var quantitiesJson = JSON.parse(quantitiesArray);
        var tableContent = "";
        var startTable = "\n    <table class=table>\n    <thead class=thead-dark>\n        <tr>\n            <th scope=col>Product Name</th>\n            <th scope=col> Product Price</th>\n        </tr>\n    </thead>\n    \n   ";
        var element1 = 0;
        var sum = 0;
        var element2 = 0;
        var str = "";
        var num = 0;
      while (element1 < quantitiesJson.length) {
          str = JSON.stringify(quantitiesJson[element1].Price);
            num = Number(str);
            sum += num;
            element1++;
        }
      while (element2 < quantitiesJson.length) {
          tableContent += "<tr><td>" + quantitiesJson[element2].Name + "</td><td>" + quantitiesJson[element2].Price + "</td></tr>";
            element2++;
        }
        tableContent = startTable + tableContent + endTable;
        document.getElementById("main").innerHTML = tableContent;
        var endTable = "</table>";
        var total = " Total Price  = " + sum;
        document.getElementById("total").innerHTML = total;
    }
}
