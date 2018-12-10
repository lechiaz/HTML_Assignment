// var MY_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-mine';
// document.addEventListener('DOMContentLoaded', function () {
//     loadSongs();
// });
//
// function loadSongs() {
//     var xmlHttpRequest = new XMLHttpRequest();
//     xmlHttpRequest.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             var listSong = JSON.parse(this.responseText);
//             var content = '';
//             for (var i = 0; i < listSong.length; i++) {
//                 content += '<div class="song-item">';
//                 content += '<div class="song-index">' + (i + 1) + '</div>';
//                 content += '<div class="song-thumbnail">';
//                 content += '<img src="' + listSong[i].thumbnail + '" alt="">';
//                 content += '</div>';
//                 content += '<div class="song-infor">';
//                 content += '<div class="song-name">' + listSong[i].name + '</div>';
//                 content += '<div class="song-singer">' + listSong[i].singer + '</div>';
//                 content += '</div>';
//                 content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
//                 content += '<div class="song-control"><a href="song-detail.html?id=' + listSong[i].id + '">Detail</a></div>';
//                 content += '</div>';
//             }
//             document.getElementById('list-song').innerHTML = content;
//         }
//     }
//     xmlHttpRequest.open('GET', MY_API, true);
//     xmlHttpRequest.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
//     xmlHttpRequest.send();
// }
//
// function playSong(link, name, singer) {
//     document.getElementById('my-mp3').src = link;
//     document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
// }
//
//

var token = localStorage.getItem('token-key');
if (token == null || token.length == 0) {
    location.href = 'login.html';
}
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
            content += '<div class="song-control" onclick="playSong (\'' + song.link + '\')">Play</div>';
            content += '<div class="song-control"><a href="#">Detail</a></div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML += content;
    }
};
// xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
xhr.open('GET', 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs/get-mine/', true);
xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
xhr.send();
function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}
