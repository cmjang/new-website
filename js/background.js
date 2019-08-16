var t = 0;
function setBackground(){
    switch (t%4){
        case 0 : {
            $('body').css("background","url('./pic/1.jpg') no-repeat center center fixed");
            break;
        }
        case 1 : {
            $('body').css("background","url('./pic/2.jpg') no-repeat center center fixed");
            break;
        }
        case 2 :{
            $('body').css("background","url('./pic/3.jpg') no-repeat center center fixed");
            break;
        }
        case 3 : {
            $('body').css("background","url('./pic/4.jpg') no-repeat center center fixed");
            break;
        }       
    }
    t = setTimeout(function(){
        setBackground();
    },5000);
}
