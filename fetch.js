const {log: _} = console;
// Q36: Write an example of fetching data with XMLHttpRequest:
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/gaearon/repos");

// xhr.send();

xhr.onload = function(){
  if(xhr.status !== 200){
    _("Error " + xhr.status + xhr.statusText)
  } else{
    _("Success ", xhr.response);
  }
}

xhr.onerror = function(){
  _("xhr request failed.")
}

// Q37: fetch the same data as above using fetch api:
const response = fetch("https://api.github.com/users/gaearon/repos").then(res=>res.json()).then(data=>_("Success >>> ", data)).catch(e=>_("Error >>> ", e))


