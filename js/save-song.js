// var CREATE_SONG_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs';
//
// document.addEventListener('DOMContentLoaded', function () {
//     var songForm = document.forms['song-form'];
//     if (songForm == null || songForm['btn-submit'] == null) {
//         alert('Vui lòng thử lại!');
//         return;
//     }
//     songForm['btn-submit'].onclick = function () {
//         var txtName = songForm['name'];
//         var txtDescription = songForm['description'];
//         var txtSinger = songForm['singer'];
//         var txtAuthor = songForm['author'];
//         var txtThumbnail = songForm['thumbnail'];
//         var txtLink = songForm['link'];
//         if (txtName == null
//             || txtDescription == null
//             || txtSinger == null
//             || txtAuthor == null
//             || txtThumbnail == null
//             || txtLink == null) {
//             alert('Vui lòng thử lại!');
//             return;
//         }
//
//         var jsSong = {
//             name: txtName.value,
//             description: txtDescription.value,
//             singer: txtSinger.value,
//             author: txtAuthor.value,
//             thumbnail: txtThumbnail.value,
//             link: txtLink.value
//         }
//         createSong(jsSong);
//     }
// });
//
// function createSong(jsSong) {
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201) {
//             var song = JSON.parse(this.responseText);
//             alert(`Lưu thành công bài hát ${song.name}`);
//         }
//     }
//     xhr.open('POST', CREATE_SONG_API, true);
//     xhr.setRequestHeader("Content-type", "application/json");
//     xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
//     xhr.send(JSON.stringify(jsSong));
// }
//
//


var token = localStorage.getItem('token-key');
if (token == null || token.length == 0) {
    location.href = 'login.html';
}
var btnSubmit = document.forms['song-form'] ['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        //gui du lieu di
        doCreateSong();
    }
}

function doCreateSong() {
    var _name = document.forms['song-form'] ['name'].value;
    var _singer = document.forms['song-form'] ['singer'].value;
    var _author = document.forms['song-form'] ['author'].value;
    var _thumbnail = document.forms['song-form'] ['thumbnail'].value;
    var _link = document.forms['song-form'] ['link'].value;
    var _description = document.forms['song-form'] ['description'].value;

    var songInformation = {
        name: _name,
        singer: _singer,
        author: _author,
        thumbnail: _thumbnail,
        link: _link,
        description: _description
    };

    var jsonSongInformation = JSON.stringify(songInformation);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var responseData = JSON.parse(xhr.responseText);
            alert('success');
        } else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            alert('save fails' + xhr.responseText);
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Authorization", "Basic " + localStorage.getItem('token-key'));
    xhr.send(jsonSongInformation);

};

function validateForm() {
    // Lưu trữ trạng thái validate của cả form.
    var isValid = true;
    // Lưu trữ trạng thái validate của first name.
    var isValidName = true;
    var isValidSinger = true;
    var isValidAuthor = true;
    var isValidThumbnail = true;
    var isValidLink = true;


    // Lấy ra input text có tên là 'firstName' nằm trong form 'register-form'.
    var txtName = document.forms['song-form']['name'];
    // Lấy ra phần tử span nằm kế tiếp của txtName. (dùng để hiển thị thông báo lỗi)
    var msgName = txtName.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtName.value == null || txtName.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgName.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgName.classList.add('msg-error');
        // Chuyển nội dung text.
        msgName.innerHTML = 'Name is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok.';
    }

    var txtSinger = document.forms['song-form'] ['singer'];
    var msgSinger = txtSinger.nextElementSibling;
    if (txtSinger.value == null || txtSinger.value.length == 0){
        msgSinger.classList.remove('msg-success');
        msgSinger.classList.add('msg-error');
        msgSinger.innerHTML = 'Singer is required';
        isValidSinger = false;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Ok.';
    }

    var txtAuthor = document.forms['song-form'] ['author'];
    var msgAuthor = txtAuthor.nextElementSibling;
    if (txtAuthor.value == null || txtAuthor.value.length == 0){
        msgAuthor.classList.remove('msg-success');
        msgAuthor.classList.add('msg-error');
        msgAuthor.innerHTML = 'Author is required';
        isValidAuthor = false;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Ok.';
    }
    var txtThumbnail = document.forms['song-form'] ['thumbnail'];
        var msgThumbnail = txtThumbnail.nextElementSibling;
        if (txtThumbnail.value == null || txtThumbnail.value.length == 0){
            msgThumbnail.classList.remove('msg-success');
            msgThumbnail.classList.add('msg-error');
            msgThumbnail.innerHTML = 'Thumbnail is required';
            isValidThumbnail = false;
        } else {
            msgThumbnail.classList.remove('msg-error');
            msgThumbnail.classList.add('msg-success');
            msgThumbnail.innerHTML = 'Ok.';
        }

    var txtLink = document.forms['song-form'] ['link'];
            var msgLink = txtLink.nextElementSibling;
            if (txtLink.value == null || txtLink.value.length == 0){
                msgLink.classList.remove('msg-success');
                msgLink.classList.add('msg-error');
                msgLink.innerHTML = 'Link is required';
                isValidLink = false;
            } else {
                msgLink.classList.remove('msg-error');
                msgLink.classList.add('msg-success');
                msgLink.innerHTML = 'Ok.';
            }

        isValid = isValid && isValidSinger && isValidAuthor && isValidThumbnail && isValidLink ;
    return isValid;
}



















