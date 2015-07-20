var funnyFolder = "./funny/";
var fileExtenstion = ".jpg";




$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: funnyFolder,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileExtenstion + ")").each(function () {

            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            alert(filename);
/*
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
*/
        });
    },   
});