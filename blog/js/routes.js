var route1 = crossroads.addRoute('/blog/{id}', function(id){
  console.log(id);
});


crossroads.parse(document.location.pathname);