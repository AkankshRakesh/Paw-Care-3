function submitform(form) {
    event.preventDefault();
	var redalert = document.querySelector(".redalert");
	var username = document.forms["form"]["username"].value;
	var password = document.forms["form"]["password"].value;
	usernamearr = ["akankshrakesh@gmail.com","youaregay@gmail.com","hahawtf@hotmail.com","whyamievendoingthisidkidk@outlook.com"]
	passwordarr = ["ARbrrrr","yesyouare","iaintlaughingbitch","imcrazy1234"]
	var counter = 0;
	for (let i = 0; i<usernamearr.length ; i++){
		if(username = usernamearr[i] && password == passwordarr[i]){
			counter++
		}
	}
	if (counter!=0){
		window.open('https://leetcode.com/problemset/all/', '_self');
	}
	else{
		redalert.style.display = 'block';
	}
}