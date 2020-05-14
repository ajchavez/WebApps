function uploadImg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            console.log(input.files[0])
            $('#image').attr('src', e.target.result).width(150).height(150);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function start(){
    console.log($('#image').attr('src'))
    document.cookie = "img="+$('#image').attr('src')
    
    
    
    
    
    console.log(document.cookie)
}
