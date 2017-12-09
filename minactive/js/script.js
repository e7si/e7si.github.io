function s(){
    inputip = document.getElementById("ip").value;
    google = "https://www.google.co.jp/search?q="
    inurl = "inurl:www.3751chat.com"
    shape = google + inputip + ' ' + inurl;

    window.open(shape, '_blank');
}

function use(){
    $(function(){
        introJs().start();
    });
}