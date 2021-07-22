
function display(message) {
    var credential_box = document.querySelector(".credentials-box");
    if (message.hasOwnProperty('state')) {
        credential_box.innerHTML = message.state;
    }
    else {
        credential_box.innerHTML = JSON.stringify(message, null, 2);
    }
}

function validate(token) {
    var request = new XMLHttpRequest();

    request.addEventListener("load", function() {
        var res = JSON.parse(this.response);
        display({
            account: res.login,
            client_id: res.client_id,
            token: token
        });
    });

    request.addEventListener("error", function(res) {
        display({
            type: 'error',
            payload: res
        });
    });

    request.addEventListener("abort", function(res) {
        display({ 'type': 'aborted' });
    });

    request.open("GET", "https://id.twitch.tv/oauth2/validate");
    request.setRequestHeader("Authorization", "OAuth " + token);
    request.send();

    display({
        state: "Validating credentials..."
    });
}

function extract_token() {
    var args = document.location.hash.substr(1).split('&');
    for (var i = 0; i < args.length; ++i) {
        var arg = args[i].split('=');
        if (arg[0] === 'access_token') {
            return arg[1];
        }
    }
    return "";
}

window.addEventListener('load', function(){
    var token = extract_token();
    if (token === "") {
        display({
            state: "Cannot extract token. Refresh and try again.",
        });
    }
    else {
        validate(token);
    }
});
