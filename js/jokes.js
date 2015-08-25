var jokes = ["Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Sometimes we see Spiders when there are none",
             "Reliable Web Developers - Software Training - Decent Chaps",
             "The official Development Blog",
             "<a href='https://www.youtube.com/watch?v=ZVUyyHYkBHk'>Thank You for Reading!</a>",
             "We really, REALLY hate ruby on rails, (or at least some of us do)",
             "git pull origin master",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
             "Software Products - Learning Resources - Development Collective",
            ];
var video_jokes = ["https://www.youtube.com/watch?v=tsfnuyyjaB0"]
var selected_joke = jokes[Math.floor(Math.random() * jokes.length)];
var selected_vid = video_jokes[Math.floor(Math.random() * video_jokes.length)];

$("#m-text").html(selected_joke);
$("#utube")[0].href = selected_vid;

function openTwitter() //so it opens in a new window
{
   window.open("https://twitter.com/dmg_controlsw ", '_blank');
}
function openFacebook()
{
    //when we have a facebook I'll do this
}
function openTube()
{
    window.open(selected_vid, '_blank');
}