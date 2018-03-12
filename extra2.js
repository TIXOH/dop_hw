function toCapitalCase (str) {
	if (!str){ console.log("Empty string!"); }
	else{
		var arr=str.split(', ');
		for (var i=0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
		}
		arr=arr.join(',');
		console.log(arr);
	}
}
toCapitalCase("one, two, three");