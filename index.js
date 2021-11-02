
// first Calulation part starts here column 1
function multc5(value){

    var c5 = value * 40;
    document.getElementById('output1').value = c5;
  }


// first Calulation part starts here column 2
  function multf5(value){

    var f5 = value * 40;
    document.getElementById('output2').value = f5;
   
  }



//Second table Calulation part starts here 

//section 2 row1
function hour9(value) {

  var h1 = value/50/40;
  document.getElementById("outh1").value = "$"+h1;

  //passing perhour result in a function to make it global
  funcPerHourCal1(h1);
}


 //receiving function for section 2 row1 per hour
 function funcPerHourCal1(x){
  var passed1 = x;
  window.perHour1=passed1;
  console.log("PAssed1 the perhour data " + x);

} 


//section 2 row2
function hour10(value) {
  var h2 = value/50/40;
  document.getElementById("outh2").value = "$"+h2;

  //this is for passing data purpose
   funcPerHourCal2(h2);
}

//receiving function for section 2 row2
 function funcPerHourCal2(x){
  var passed2 = x;
  window.perHour2=passed2;
  console.log("PAssed2 the perhour data " + x);
} 




//section 2 row3
function hour11(value) {
  var h3 = value/50/40;
  document.getElementById("outh3").value = "$"+h3;


  //this is for passing data purpose
   funcPerHourCal3(h3);
}

//receiving function for section 2 row3
 function funcPerHourCal3(x){
  var passed3 = x;
  window.perHour3=passed3;
  console.log("PAssed3 the perhour data " + x);
} 


//do not touch the upper section----------------------------------





//Third section starts 

//button part  for third section

function calcSec3() {
  
  //input variables for first row
  var s1Sec3 = parseFloat(document.getElementById("stffN1Sec3").value);
  var hour1Sec3 = parseFloat(document.getElementById("totalhoursN1Sec3").value);
  //var peryearRM1 = parseFloat(document.getElementById("peryearN1").value);
  //console.log(peryearRM1);
   
   //input variables for second row
   var s2Sec3 = parseFloat(document.getElementById("stffN2Sec3").value);
   var hour2Sec3 = parseFloat(document.getElementById("totalhoursN2Sec3").value);
   //var peryearRM2 = parseFloat(document.getElementById("peryearN2").value);
   //console.log(peryearRM2);

   //input variables for third row
   var s3Sec3 = parseFloat(document.getElementById("stffN3Sec3").value);
   var hour3Sec3 = parseFloat(document.getElementById("totalhoursN3Sec3").value);
   //var peryearRM3 = parseFloat(document.getElementById("peryearN3").value);
  // console.log(peryearRM3);
  
  //------------------------------------------------------------------------------------------
  //calculation and result part

  //first row hour result 
   var totalHour1Sec3 = s1Sec3 * hour1Sec3;
  document.getElementById("h1outSec3").value = totalHour1Sec3; //result for Hour1

   //console.log(totalHour1)
   //window.perHour1 passing value from second section row 1
  console.log("Window " + window.perHour1);

  //first row total cost1 calculation
  var totalcost1Sec3 = window.perHour1 * totalHour1Sec3;
  console.log("totalcost1Sec3 " +totalcost1Sec3);
  document.getElementById("totalcost1Sec3").value = "$" +totalcost1Sec3;

 

   //second row hour result 
  var totalHour2Sec3 = s2Sec3 * hour2Sec3;
  document.getElementById("h2outSec3").value = totalHour2Sec3; //result for hour2

   //second row total cost2 calculation
  var totalcost2Sec3 = window.perHour2 * totalHour2Sec3;
  console.log("totalcost2Sec3 " +totalcost2Sec3);
  document.getElementById("totalcost2Sec3").value = "$" +totalcost2Sec3;

   //third row hour result
  var totalHour3Sec3 = s3Sec3 * hour3Sec3;
  document.getElementById("h3outSec3").value = totalHour3Sec3; //result for hour2

  //third row total cost3 calculation
  var totalcost3Sec3 = window.perHour3 * totalHour3Sec3;
  console.log("totalcost3Sec3 " +totalcost3Sec3);
  document.getElementById("totalcost3Sec3").value = "$" +totalcost3Sec3;


  //final table answer:
 var finalTotalCostSec3 = totalcost1Sec3 + totalcost2Sec3 + totalcost3Sec3;
 document.getElementById("FinalresultSec3").value = "$" +finalTotalCostSec3;

 
 //this is for passing the final result for section3
 var fCostSection3 = finalTotalCostSec3;
  finalResSec3(fCostSection3);
}

//this will pass the final cost Section 3 to the end
function finalResSec3(n){
  var finalCostSec3 = n;
  console.log("Final REsult for Section 3: " + finalCostSec3);
  window.FinalCostSec3 = finalCostSec3;
  console.log("Final Window REsult for Section3 " +window.FinalCostSec3);
}

//-----------------------------------------------------------------------------------------------------------
//Do not touch above code for section 3


//fourth section starts here

//using button for fourth section

function calcSec4() {
  
 
   
   //input variables for second row
   var s2Sec4 = parseFloat(document.getElementById("stffN2Sec4").value);
   var hour2Sec4 = parseFloat(document.getElementById("totalhoursN2Sec4").value);
   //var peryearRM2 = parseFloat(document.getElementById("peryearN2").value);
   //console.log(peryearRM2);

   //input variables for third row
   var s3Sec4 = parseFloat(document.getElementById("stffN3Sec4").value);
   var hour3Sec4 = parseFloat(document.getElementById("totalhoursN3Sec4").value);
   //var peryearRM3 = parseFloat(document.getElementById("peryearN3").value);
  // console.log(peryearRM3);
  
  //------------------------------------------------------------------------------------------
  //calculation and result part

 

   //second row hour result 
  var totalHour2Sec4 = s2Sec4 * hour2Sec4;
  document.getElementById("h2outSec4").value = totalHour2Sec4; //result for hour2

   //second row total cost2 calculation
  var totalcost2Sec4 = window.perHour2 * totalHour2Sec4;
  console.log("totalcost2Sec4 " +totalcost2Sec4);
  document.getElementById("totalcost2Sec4").value = "$" +totalcost2Sec4;

   //third row hour result
  var totalHour3Sec4 = s3Sec4 * hour3Sec4;
  document.getElementById("h3outSec4").value = totalHour3Sec4; //result for hour2

  //third row total cost3 calculation
  var totalcost3Sec4 = window.perHour3 * totalHour3Sec4;
  console.log("totalcost3Sec4 " +totalcost3Sec4);
  document.getElementById("totalcost3Sec4").value = "$" +totalcost3Sec4;


  //final table answer:
 var finalTotalCostSec4 = totalcost2Sec4 + totalcost3Sec4;
 document.getElementById("FinalresultSec4").value = "$" +finalTotalCostSec4;

 
 //this is for passing the final result for section4
 var fCostSection4 = finalTotalCostSec4;
  finalResSec4(fCostSection4);
}

//this will pass the final cost Section 4 to the end
function finalResSec4(n){
  var finalCostSec4 = n;
  console.log("Final REsult for Section 4: " + finalCostSec4);
  window.FinalCostSec4 = finalCostSec4;
  console.log("Final Window REsult for Section4 " +window.FinalCostSec4);
}

//-----------------------------------------------------------------------------------------------------------
//Do not touch above code for section 4



//Fifth section starts here

//using button for Fifth section

function calcSec5() {
  
  //input for Total Cost variable for first row
  var totalCostInput1Sec3 = parseFloat(document.getElementById("totalCostN1Sec5").value);
  //var hour1Sec3 = parseFloat(document.getElementById("totalhoursN1Sec3").value);
  //var peryearRM1 = parseFloat(document.getElementById("peryearN1").value);
  //console.log(peryearRM1);
   
   //input variables for second row
   var s2Sec5 = parseFloat(document.getElementById("stffN2Sec5").value);
   var hour2Sec5 = parseFloat(document.getElementById("totalhoursN2Sec5").value);
   //var peryearRM2 = parseFloat(document.getElementById("peryearN2").value);
   //console.log(peryearRM2);

   //input variables for third row
   var s3Sec5 = parseFloat(document.getElementById("stffN3Sec5").value);
   var hour3Sec5 = parseFloat(document.getElementById("totalhoursN3Sec5").value);
   //var peryearRM3 = parseFloat(document.getElementById("peryearN3").value);
  // console.log(peryearRM3);
  
  //------------------------------------------------------------------------------------------
  //calculation and result part

  //first row hour result 
  // var totalHour1Sec3 = s1Sec3 * hour1Sec3;
 // document.getElementById("h1outSec3").value = totalHour1Sec3; //result for Hour1

   //console.log(totalHour1)
   //window.perHour1 passing value from second section row 1
 // console.log("Window " + window.perHour1);

  //first row total cost1 calculation
  //var totalcost1Sec3 = window.perHour1 * totalHour1Sec3;
  //console.log("totalcost1Sec3 " +totalcost1Sec3);
 // document.getElementById("totalcost1Sec3").value = "$" +totalcost1Sec3;

 

   //second row hour result 
  var totalHour2Sec5 = s2Sec5 * hour2Sec5;
  document.getElementById("h2outSec5").value = totalHour2Sec5; //result for hour2

   //second row total cost2 calculation
  var totalcost2Sec5 = window.perHour2 * totalHour2Sec5;
  console.log("totalcost2Sec5 " +totalcost2Sec5);
  document.getElementById("totalcost2Sec5").value = "$" +totalcost2Sec5;

   //third row hour result
  var totalHour3Sec5 = s3Sec5 * hour3Sec5;
  document.getElementById("h3outSec5").value = totalHour3Sec5; //result for hour2

  //third row total cost3 calculation
  var totalcost3Sec5 = window.perHour3 * totalHour3Sec5;
  console.log("totalcost3Sec5 " +totalcost3Sec5);
  document.getElementById("totalcost3Sec5").value = "$" +totalcost3Sec5;


  //final table answer:
 var finalTotalCostSec5 = totalCostInput1Sec3 + totalcost2Sec5 + totalcost3Sec5;
 document.getElementById("FinalresultSec5").value = "$" +finalTotalCostSec5;

 
 //this is for passing the final result for section5
 var fCostSection5 = finalTotalCostSec5;
  finalResSec5(fCostSection5);
}

//this will pass the final cost Section 5 to the end
function finalResSec5(n){
  var finalCostSec5 = n;
  console.log("Final REsult for Section 5: " + finalCostSec5);
  window.FinalCostSec5 = finalCostSec5;
  console.log("Final Window REsult for Section5 " +window.FinalCostSec5);
}

//-----------------------------------------------------------------------------------------------------------
//Do not touch above code for section 5


//Sixth section starts 

//button part  for Sixth section

function calcSec6() {
  
  //input variables for first row
  var s1Sec6 = parseFloat(document.getElementById("stffN1Sec6").value);
  var hour1Sec6 = parseFloat(document.getElementById("totalhoursN1Sec6").value);
  //var peryearRM1 = parseFloat(document.getElementById("peryearN1").value);
  //console.log(peryearRM1);
   
   //input variables for second row
   var s2Sec6 = parseFloat(document.getElementById("stffN2Sec6").value);
   var hour2Sec6 = parseFloat(document.getElementById("totalhoursN2Sec6").value);
   //var peryearRM2 = parseFloat(document.getElementById("peryearN2").value);
   //console.log(peryearRM2);

   //input variables for third row
   var s3Sec6 = parseFloat(document.getElementById("stffN3Sec6").value);
   var hour3Sec6 = parseFloat(document.getElementById("totalhoursN3Sec6").value);
   //var peryearRM3 = parseFloat(document.getElementById("peryearN3").value);
  // console.log(peryearRM3);
  
  //------------------------------------------------------------------------------------------
  //calculation and result part

  //first row hour result 
   var totalHour1Sec6 = s1Sec6 * hour1Sec6;
  document.getElementById("h1outSec6").value = totalHour1Sec6; //result for Hour1

   //console.log(totalHour1)
   //window.perHour1 passing value from second section row 1
  console.log("Window " + window.perHour1);

  //first row total cost1 calculation
  var totalcost1Sec6 = window.perHour1 * totalHour1Sec6;
  console.log("totalcost1Sec6 " +totalcost1Sec6);
  document.getElementById("totalcost1Sec6").value = "$" +totalcost1Sec6;

 

   //second row hour result 
  var totalHour2Sec6 = s2Sec6 * hour2Sec6;
  document.getElementById("h2outSec6").value = totalHour2Sec6; //result for hour2

   //second row total cost2 calculation
  var totalcost2Sec6 = window.perHour2 * totalHour2Sec6;
  console.log("totalcost2Sec6 " +totalcost2Sec6);
  document.getElementById("totalcost2Sec6").value = "$" +totalcost2Sec6;

   //third row hour result
  var totalHour3Sec6 = s3Sec6 * hour3Sec6;
  document.getElementById("h3outSec6").value = totalHour3Sec6; //result for hour2

  //third row total cost3 calculation
  var totalcost3Sec6 = window.perHour3 * totalHour3Sec6;
  console.log("totalcost3Sec6 " +totalcost3Sec6);
  document.getElementById("totalcost3Sec6").value = "$" +totalcost3Sec6;


  //final table answer:
 var finalTotalCostSec6 = totalcost1Sec6 + totalcost2Sec6 + totalcost3Sec6;
 document.getElementById("FinalresultSec6").value = "$" +finalTotalCostSec6;

 
 //this is for passing the final result for section6
 // var fCostSection6 = finalTotalCostSec6;
 //  finalResSec5(fCostSection6);


//***************************************************************************

  //for Final end Result

  var sec3Final = window.FinalCostSec3;
  var sec4Final = window.FinalCostSec4;
  var sec5Final = window.FinalCostSec5;
  var sec6Final = finalTotalCostSec6;

   var finalSumEnd1 = sec3Final + sec4Final + sec5Final + sec6Final;

  //end output 1
  console.log("Final End Result01 : " +finalSumEnd1)
  document.getElementById("endoutput1").value = finalSumEnd1 + " RM";

  //end output 2
  var c9 =window.perHour1 * 50 * 40;
  console.log("C9 Result: " + c9)

  var CostAsPercentageEnd2 = ((finalSumEnd1 / c9) * 100);
  document.getElementById("endoutput2").value = CostAsPercentageEnd2 + "%";

  //end output 3
  var tenPercent = 10;

  var tenPersentFinal3 = finalSumEnd1 * tenPercent;
  document.getElementById("endoutput3").value = tenPersentFinal3;

  //end output 4
  var withOutTenFinalREsult4 = tenPersentFinal3 / tenPercent;
  document.getElementById("endoutput4").value = withOutTenFinalREsult4;

}

//this will pass the final cost Section 3 to the end
// function finalResSec5(n){
//   var finalCostSec6 = n;
//   console.log("Final REsult for Section 6: " + finalCostSec6);
//   window.FinalCostSec6 = finalCostSec6;
//   console.log("Final Window REsult for Section6 " +window.FinalCostSec6);


// }

//-----------------------------------------------------------------------------------------------------------
//Do not touch above code for section 6

