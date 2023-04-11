function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	//Verify Username and Password
	if (username == "UCR" && password == process.env.UCR_KEY) {
		//Create a session with a randomly generated token
		var token = generateToken(20);
		sessionStorage.setItem("Token", token);

		//Login Success redirect to the homepage
		window.location.href = "index.html";
	}
	//If Username is empty check
	else if (username == "") {
		alert("Please enter a username");
	}
	//If Password is empty check
	else if (password == "") {
		alert("Please enter a password");
	}
	//If Invalid username or password
	else {
		alert("Invalid username or password");
	}
}

function generateToken(length) {
	//Generate a random token
	var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var token = '';
	for (var i = 0; i < length; i++) {
		token += chars[Math.floor(Math.random() * chars.length)];
	}
	return token;
}

function checkLogin() {
	//Is the User logged in with a valid token?
	var token = sessionStorage.getItem("Token");
	if (!token || token.length != 20) {
		//If not logged in, then go to the login screen
		window.location.href = "login.html";
	}
}