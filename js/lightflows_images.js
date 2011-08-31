/*$Id: This code adds the images float property back to the image as a class so it can be themed $*/
$(document).ready(function(){
  $(".content img").each(function(i) {
  	var alignment = $(this).css('float');
  	alignment = "img"+alignment;
    $(this).addClass(alignment); /* adds either .imgright or .imgleft class to images */
  });
});
