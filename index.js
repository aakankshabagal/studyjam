  //calculate total
  var grandTotal = billTotal + total;
​
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  billTotal = Math.round(billTotal * 100) / 100;
  grandTotal = Math.round(grandTotal * 100) / 100;
​
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  billTotal = billTotal.toFixed(2);
  grandTotal = grandTotal.toFixed(2);
​
//Display the split total
//if there is only 1 hide this area
if (numPeople === "" || numPeople <= 1) {
  numPeople = 1;
  document.getElementById("billSplit").style.display = "hidden";
  document.getElementById("split").innerHTML = billTotal;
} else {
    document.getElementById("billSplit").style.display = "block";
    document.getElementById("split").innerHTML = billTotal;
}
//Display the tip
    document.getElementById("totalTip").style.display = "block";

    document.getElementById("tip").innerHTML = total;
    ​
    //Display the Grand Totals
        document.getElementById("grandTotal").style.display = "block";
    
