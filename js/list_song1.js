
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var arrSongs = JSON.parse(xhr.responseText);
            var content = '';
            for (var i = 0; i < arrSongs.length; i++) {
                var song = arrSongs[i];
                content += '<div class="song-item row">';
                content += '<div class="song-index">' + (i + 1) + '</div>';
                content += '<div class="song-thumbnail">';
                content += '<img src="' + song.thumbnail + '" alt="">';
                content += '</div>';
                content += '<div class="song-infor">';
                content += '<div class="song-name">' + song.name + '</div>';

                content += '<div class="song-singer">' + song.singer + '</div>';
                content += '</div>';
                content += '<div class="song-control" onclick="playSong (\'' + song.link + '\')"><i class="fas fa-play-circle fa-3x"></i>';
                content += '<a class="current-play" href="#"><i class="fal fa-info"></i></a>';
                content += '</div>';
                content += '</div>';
            }
            document.getElementById('list-song').innerHTML += content;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs/get-free-songs', true);
    xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
    xhr.send();
    function playSong(link) {
        var audioPlayer = document.getElementsByTagName('audio')[0];
        audioPlayer.src = link;
        audioPlayer.play();
        var textPlaySong = document.getElementById('text-playsong');
        // textPlaySong.innerHTML = '<div class="song-name">' + song.name + '</div>';
        textPlaySong.innerHTML = 'avava';
        console.log(textPlaySong);
    }

    // function f() {
    //     document.getElementById('text-playsong').innerHTML += '<div class="song-name">' + song.name + '</div>';
    // }