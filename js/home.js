
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var arrSongs = JSON.parse(xhr.responseText);
        var content = '';
            var song = arrSongs[0];
        content += '<div class="song-thumbnail" onclick="playSong (\'' + song.link + '\')">';
            content += '<img src="' + song.thumbnail + '" alt="">';
        content += '</div>';
        content += '<div class="song-infor col-6">';
        content += '<div class="song-name">' + song.name + '</div>';
        content += '<div class="song-singer">' + song.singer + '</div>';
        content += '</div>';
        document.getElementById('latestsong-img01').innerHTML += content;
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
        var arrSongs = JSON.parse(xhr.responseText);
        var content = '';
        var song = arrSongs[1];
        content += '<div class="song-thumbnail" onclick="playSong (\'' + song.link + '\')">';
        content += '<img src="' + song.thumbnail + '" alt="">';
        content += '</div>';
        content += '<div class="song-infor col-4">';
        content += '<div class="song-name">' + song.name + '</div>';
        content += '<div class="song-singer">' + song.singer + '</div>';
        content += '</div>';
        document.getElementById('latestsong-img02').innerHTML += content;
    }
    if (xhr.readyState == 4 && xhr.status == 200) {
        var arrSongs = JSON.parse(xhr.responseText);
        var content = '';
        var song = arrSongs[7];
        content += '<div class="song-thumbnail" onclick="playSong (\'' + song.link + '\')">';
        content += '<img src="' + song.thumbnail + '" alt="">';
        content += '</div>';
        content += '<div class="song-infor col-4 col-s-8">';
        content += '<div class="song-name">' + song.name + '</div>';
        content += '<div class="song-singer">' + song.singer + '</div>';
        content += '</div>';
        document.getElementById('latestsong-img03').innerHTML += content;
    }

    if (xhr.readyState == 4 && xhr.status == 200) {
            var arrSongs = JSON.parse(xhr.responseText);
            var content = '';
                var song = arrSongs[3];
                        content += '<div class="song-thumbnail" onclick="playSong (\'' + song.link + '\')">';
                       content += '<img src="' + song.thumbnail + '" alt="">';
                           content += '</div>';
        content += '<div class="song-infor col-6 col-s-8">';
        content += '<div class="song-name">' + song.name + '</div>';
        content += '<div class="song-singer">' + song.singer + '</div>';
        content += '</div>';
            document.getElementById('latestsong-img04').innerHTML += content;
        }
if (xhr.readyState == 4 && xhr.status == 200) {
            var arrSongs = JSON.parse(xhr.responseText);
            var content = '';
                var song = arrSongs[10];
                        content += '<div class="song-thumbnail" onclick="playSong (\'' + song.link + '\')">';
                       content += '<img src="' + song.thumbnail + '" alt="">';
                           content += '</div>';
        content += '<div class="song-infor col-6 col-s-8">';
        content += '<div class="song-name">' + song.name + '</div>';
        content += '<div class="song-singer">' + song.singer + '</div>';
        content += '</div>';
            document.getElementById('latestsong-img05').innerHTML += content;
        }
    if (xhr.readyState == 4 && xhr.status == 200) {
        var arrSongs = JSON.parse(xhr.responseText);
        var content = '';
        var song = arrSongs[5];
        content += '<div class="song-thumbnail" onclick="playSong (\'' + song.link + '\')">';
        content += '<img src="' + song.thumbnail + '" alt="">';
        content += '</div>';
        content += '<div class="song-infor col-6 col-s-8">';
        content += '<div class="song-name">' + song.name + '</div>';
        content += '<div class="song-singer">' + song.singer + '</div>';
        content += '</div>';
        document.getElementById('latestsong-img06').innerHTML += content;
        // document.getElementById('text-playsong').innerHTML += '<div class="song-name">' + song.name + '</div>';
    }
};

xhr.open('GET', 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs/get-free-songs', true);
xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
xhr.send();
function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}
function f() {
    document.getElementById('text-playsong').innerHTML += '<div class="song-name">' + song.name + '</div>';
    alert("1");
}
