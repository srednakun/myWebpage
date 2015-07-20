var funnyFolder = "./funny/";
var fileExtenstion = ".jpg";




$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: funnyFolder,
    success: function (data) {
        //Lsit all png file names in the page
        $(data).find("a:contains(" + fileExtenstion + ")").each(function () {

            var filename = this.href.replace(window.location.host, "").replace("http:///", "");
            var splitFile = filename.split("_");
            var memeType = splitFile[0];

            switch(memeType)
            {
                case 'grumpy':
                    $("#grumpyMeme").append($("<li><img src=\"" + funnyFolder + fileName + "\"/></li>"));
                    break;
                
                case 'keanu':
                    $("#keanuMeme").append($("<li><img src=\"" + funnyFolder + fileName + "\"/></li>"));
                    break;
                
                case 'raptor':
                    $("#raptorMeme").append($("<li><img src=\"" + funnyFolder + fileName + "\"/></li>"));
                    break;
                
                case 'code':
                    $("#codeMeme").append($("<li><img src=\"" + funnyFolder + fileName + "\"/></li>"));
                    break;        
            }
        });
    }   
});