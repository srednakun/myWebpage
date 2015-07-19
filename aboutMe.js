var aboutMeFolder = "./aboutMePics/";
var fileExtenstion = ".JPG";
var position = true;



$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: aboutMeFolder,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileExtenstion + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http:///", "");

            if (position)
            {
            	$("#leftPicsList").append($("<li><div style=\"background-image: url('" + aboutMeFolder + filename + "')\" class=\"aboutMePics\"></div></li>"));
                position = false;            
            }
            else
            {
            	$("#rightPicsList").append($("<li><div style=\"background-image: url('" + aboutMeFolder + filename + "')\" class=\"aboutMePics\"></div></li>"));
 				position = true;           
            }

        });
    },

    error: function(xhr, textStatus, errorThrown)
    {
    	alert(errorThrown);
	}
    
});