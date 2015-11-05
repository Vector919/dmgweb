/**
* Whitesmoke.js. by damage-control
*/
var content_request_id = location.hash.slice(1, location.hash.length);

// request the content
var request = new XMLHttpRequest();
request.open("GET", "blogs.json", false);
request.send();

var content = JSON.parse(request.responseText);
var current_blog;
content.blogs.map(function (blog) {
    if (blog.shortname === content_request_id) {
        current_blog = blog;
    }
});

if (content_request_id === ""){
    current_blog = content.blogs[0];
}
var context = {
    blogs: content.blogs,
    current_blog: current_blog
};

$("#content").html(
    nunjucks.renderString($("#content").html(), context)
);
$("#content").show();