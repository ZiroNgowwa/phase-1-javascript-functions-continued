// code your solution here

function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`); 
 }
 
 
 const mondayWork = function (work= 'go to the office') {
     return (`This Monday, I will ${work}.`);
 }
 

 function wrapAdjective (test = "*") {  
    return function (adjective = 'special') {
       return (`You are ${test}${adjective}${test}!`);
   };
 }