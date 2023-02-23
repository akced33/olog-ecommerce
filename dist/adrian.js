  //Using cookie presence to avoid tracking an employee. Only capture sessions when the cookie is not present
$(document).ready(console.log('ready'));

$(document).ready(function () {
  console.log('here')
  if (document.cookie.split(";").some((item) => item.trim().startsWith("employee="))) {
    console.log('The cookie "employee" exists');
  } else {
    console.log('no "employee" cookie');
  }
});
