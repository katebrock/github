$.ajaxSetup({
  headers: {
    "Authorization": "token " + token
  }
});
console.log('get requests');

//jQuery selector

var body = $('body')


//jQuery methods (like for ajax)
function processData(data) {
  //process data
}

$.getJSON('https://api.github.com/users/katebrock/repos').done(function(data, status, xhrObject) {
  console.log(data);
  //do the work with this data in here
  processData(data)
})
$.getJSON('https://api.github.com/users/katebrock').done(function(data, status, xhrObject) {
  console.log(data);
  // var avatar= data.avatar_url;
  // $(".avatar").attr("src", avatar)
  //
  // var fullname= data.Name;
  // $("#login").html(fullname);

  var location= data.location;
  $("span").html(location);

  processData(data)
})

// text append prepend html
