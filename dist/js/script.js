

// добавление цены в плашку цены
	var priceHolder = document.getElementById("price-holder");
	var priceTotal = 0;


function openTab(evt, tabId) {

	var i, tabcontent, tablinks, tabShown, tabChecks;


	tabcontent = document.getElementsByClassName("tab-content");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("site-type-tabs__tab");
	for (i = 0; i < tablinks.length; i++) {
		// tablinks[i].className = tablinks[i].className.replace("site-type-tabs__tab_active", "");
		tablinks[i].classList.remove("site-type-tabs__tab_active");
	}

	tabShown = document.getElementById(tabId);
	tabShown.style.display = "block";
	evt.currentTarget.className += " site-type-tabs__tab_active";

	var tabChecks = document.getElementsByClassName("toggle-round");
	for (i = 0; i < tabChecks.length; i++) {
		tabChecks[i].checked = false;
	}


	if (tabId == "promo") {
		priceTotal = 40000;
	}
	else if (tabId == "corp") {
		priceTotal = 60000;
	}
	else if (tabId == "shop") {
		priceTotal = 80000;
	}
	else {
		priceHolder.innerHTML = 0;		
	}
	priceHolder.innerHTML = priceTotal;
}

function addFeature(modificator) {
	if (event.currentTarget.checked) {
		priceTotal += modificator;	
	}
	else if (!event.currentTarget.checked) {
		priceTotal -= modificator;
	}
	
	priceHolder.innerHTML = priceTotal;
}


// слайдер кол-ва страниц

var rangeSlider, output;

rangeSlider = document.getElementById("range-slider");
output = document.getElementById("output");
output.innerHTML = rangeSlider.value;

rangeSlider.oninput = function() {
	output.innerHTML = this.value;
}