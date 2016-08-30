var currentKey = document.getElementById("city").value;

function cityChange() {
	currentKey = document.getElementById("city").value;
}

// function redirect(url) {
//
// }

function buildUrl() {
	var searchQuery = document.getElementById("activityString").value;
	a = "https://spreadsheets.google.com/tq?tqx=out:html&"
		+ "tq=SELECT B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V WHERE lower(B) CONTAINS '" + searchQuery.toLowerCase() + "'"
		+ "&key=" + currentKey;
	a = encodeURI(a);
	location.href = a;
	return false;
}
