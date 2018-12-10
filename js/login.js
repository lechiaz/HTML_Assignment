var btnLogin = document.forms ['login-form']['btn-login'];
btnLogin.onclick = function () {
    if (validateForm()) {
        doLogin();
    }
}

function doLogin () {
    var _email = document.forms ['login-form'] ['email'].value;
    var _password = document.forms ['login-form'] ['password'].value;
    var loginInformation = {
        email: _email,
        password: _password,
    }
    var sendDataLogin = JSON.stringify(loginInformation);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var responseData = JSON.parse(xhr.responseText);
            alert ('success');
            localStorage.setItem('token-key',responseData.token);
            document.forms['login-form'].reset();
            location.href = 'home.html';
        } else if (xhr.readyState == 4){
            alert('login fail');
            document.forms['login-form'].reset();
        }
    }
    xhr.open('POST','https://2-dot-backup-server-003.appspot.com/_api/v2/members/authentication',true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendDataLogin);
}


function validateForm() {
    // Lưu trữ trạng thái validate của cả form.
    var isValid = true;

    var isValidEmail = true;
    var txtEmail = document.forms['login-form'] ['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0){
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok.';
    }

    var isValidPassWord = true;
    var txtPassWord = document.forms['login-form'] ['password'];
        var msgPassWord = txtPassWord.nextElementSibling;
        if (txtPassWord.value == null || txtPassWord.value.length == 0){
            msgPassWord.classList.remove('msg-success');
            msgPassWord.classList.add('msg-error');
            msgPassWord.innerHTML = 'Email is required';
            isValidPassWord = false;
        } else {
            msgPassWord.classList.remove('msg-error');
            msgPassWord.classList.add('msg-success');
            msgPassWord.innerHTML = 'Ok.';
        }

    isValid = isValidEmail && isValidPassWord ;
    return isValid;
}
















