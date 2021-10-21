$(document).ready(function(event) {
  const hobby = $("#hobby").val();
  const music = $("#music").val();
  const genderPref = $("#gender").val();
  let result;
}

if (genderPref === "Female" && (music==="Country" || hobby==="Skydiving")) {
  result = "Nicole";
}
else if (genderPref==="Male" && (music==="Pop" || hobby==="Hiking")){
  result="Justin";
}
else if (genderPref==="Male" && (music==="Hip Hop/Rap" || hobby==="Playing guitar")){
  result="Timothee";
}
else if (genderPref ==="Either/or" && (music==="Hip Hop/Rap" || music==="Country" || music==="Playing guitar")) {
  result="Any";  
}
else {}result="None";