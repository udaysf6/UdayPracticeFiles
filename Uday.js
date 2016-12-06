/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calculate(){
    var Number_of_Sides = parseInt(document.getElementById("Number_of_Sides").value) ;
    var Radius = parseFloat(document.getElementById("Radius").value);
    var apothem = Radius * (Math.cos((Math.PI)/Number_of_Sides));
    var Side_Length =  2 * apothem * (Math.tan((Math.PI)/ Number_of_Sides));
    var Perimeter = Number_of_Sides * Side_Length;
    var Area = (Side_Length * apothem * Number_of_Sides) / 2;
    document.getElementById("Side_Length").value=Side_Length.toFixed(3);
    document.getElementById("Perimeter").value=Perimeter.toFixed(3);
    document.getElementById("Area").value=Area.toFixed(3);
    
}

window.onload = function(){
    document.getElementById("calculate").onclick=calculate;
    document.getElementById("Number_of_Sides").focus();
    };