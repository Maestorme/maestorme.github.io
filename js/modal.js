var KEYCODE_ESC = 27;
var MAX_PROJ = $('#proj-boxes').children().length;
var projID = 1;

$('.projbox').click(function() {
  $('.modal').css({"display": "block"});
  projID = $(this).attr('id')[1];
  $('.modal-content').css({"background-image": "url(img/combined/"+projID+".jpg)"});
  display_details();
  //window.location.hash += "#project";
});

/*CODE TO EXIT MODAL IF CLICKED OUTSIDE PICTURE*/
$('.modal').click(function(event){

  if ($(event.target).hasClass("modal") || $(event.target).hasClass("navexit")){
    $('.modal').css({"display": "none"});
  }
})

/*CODE TO EXIT MODAL IF ESC IS PRESSED*/
$(document).keyup(function(event){
  if (event.keyCode == KEYCODE_ESC){
    $('.modal').css({"display": "none"});
  }
})

//CODE FOR CLOSE BUTTON
$('.modal-button-close').click(function(){
  $('.modal').css({"display": "none"});
});

//CODE FOR LEFT RIGHT CLOSE BUTTON
$('.modal-button').click(function(){
  if($(this).attr('id') == 'right-button'){
    projID--;
    if (projID < 1){
      projID = MAX_PROJ;
    }
    $('.modal-content').css({"background-image": "url(img/combined/"+projID+".jpg)"});
    display_details();
  }

  else if($(this).attr('id') == 'left-button'){
    projID++;
    if (projID > MAX_PROJ){
      projID = 1;
    }
    
    $('.modal-content').css({"background-image": "url(img/combined/"+projID+".jpg)"});
    display_details();
  }
});

//ANDROID BACK BUTTON THING

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
    event.preventDefault();
    $('.modal').css({"display": "none"});
  }
});

function display_details(){
  //TITLE ON TOP OF MODAL
  if(projID == 4){
    $('#proj-title').html("ROGUELIKE GAME");
    $('#proj-caption').html("- \"With dungeons far more deadly than the Mines of Moria\"");
    $('#proj-text').html("This simple roguelike dungeon-crawler game is the result of some experimentation with the <span class='bolden'>Canvas API in HTML5</span>. It provided an interesting dynamic to making games as opposed to other conventional methods. This helped me learn some excellent skills related to both web development as well as game development. The main feature is the <span class='bolden'>procedural generation</span> of the floors of the dungeon wherein each floor is generated on the fly. I used the <span class='bolden'>'Depth-First Search' algorithm</span> implemented with <span class='bolden'>recursive backtracking</span>. This provides a really good replay value to the game! You can try it out for yourself here:<br><a href='www.github.com' class = 'link-blue-no-underline'>www.github.com</a>");
  }
  else if(projID == 3){
    $('#proj-title').html("MY MOVIE LIST");
    $('#proj-caption').html("- \"The one stop shop for making a list of all the movies and shows that you\'ve watched with data from iMDB!\"");
    $('#proj-text').html("Each one of us in the team always wanted a simple and easy way to track the movies/TV Shows that we've watched and get the information from a reliable database like iMDB. That is exactly what led to the creation of MyMovieList in the <span class='bolden'>'Hello World' hackathon!</span> The user inputs a search keyword and then the website searches the <span class='bolden'>iMDB database using the OMDB API</span> for potential results and displays them. Then, the user has the option to add a movie out of the results into the table down below. It even links to the original iMDB page. I personally worked on the entire <span class='bolden'>front-end and the connection with API</span>. It's as simple, sweet and super useful!<br><a href='https://devpost.com/software/mymovielist' class='link-blue-no-underline'>www.devpost.com/software/mymovielist</a>");
  }
  else if(projID == 2){
    $('#proj-title').html("F1 IN SCHOOLS NATIONALS");
    $('#proj-caption').html("- \"Be Different. Be Speed.\"");
    $('#proj-text').html("F1 in Schools is an <span class='bolden'>international STEM</span> (science, technology, engineering, mathematics) competition, in which groups of 3–6 students have to design and manufacture a miniature \"car\" out of the <span class='bolden'>official F1 Model Block using CAD/CAM design tools.</span> The cars are powered by CO2 cartridges and are timed from the moment they are launched (by pushing a button with a good reaction time) to when they pass the finish line. My team, Traxeleration, <span class='bolden'>placed 2nd in the country after setting a record track time of 1.064s.</span> <span class='bolden'>I was also the graphic designer</span> for the team and oversaw the <span class='bolden'>Pit Display and Design Portfolio</span>, both of which won <span class='bolden'>first place in the country</span>. The team worked for half a year and <span class='bolden'>collected $10,300 through sponsorships from huge multinational companies like Nikon, Indomie and ANTA Sports.</span> We also featured in the <span class='bolden'>national newspaper</span> in the country, Gulf News, and had a radio show. For more information, visit the team's Facebook page or view our Nationals Design Portfolio.<br><a href='https://facebook.com/traxeleration' class = 'link-blue-no-underline'>www.facebook.com/traxeleration</a>");
  }
  else if(projID == 1){
    $('#proj-title').html("F1 IN SCHOOLS REGIONALS");
    $('#proj-caption').html("- \"Be Different. Be Speed.\"");
    $('#proj-text').html("F1 in Schools is an <span class='bolden'>international STEM</span> (science, technology, engineering, mathematics) competition, in which groups of 3–6 students have to design and manufacture a miniature \"car\" out of the <span class='bolden'>official F1 Model Block using CAD/CAM design tools.</span> The cars are powered by CO2 cartridges and are timed from the moment they are launched (by pushing a button with a good reaction time) to when they pass the finish line. In the Dubai regionals, my team Traxeleration placed 3rd in the state. Being the graphic designer of the team, <span class='bolden'>I designed the Design Portfolio which placed first in the state.</span> We colleced a sum of <span class='bolden'>$4300 through sponsorships from companies like Parisvallay Perfumes and Reliable Automatic Doors Systems.</span> For more information, visit the team's Facebook page or view our Regionals Design Portfolio.<br><a href='https://facebook.com/traxeleration' class = 'link-blue-no-underline'>www.facebook.com/traxeleration</a>");
  }
}



