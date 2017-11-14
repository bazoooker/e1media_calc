

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







var sitePrice, modResponsive, mod1s, modSeo, modYesterday, pages, priceTotal;

sitePrice = 0;
modResponsive = 0;
mod1s = 0;
modSeo = 0;
modYesterday = 0;
pages = document.getElementById("fuck").value;
priceTotal = sitePrice + modResponsive + mod1s + modSeo + modYesterday + pages;


function sitePick(evt, siteId){

	var allTabs, tabContent, tabShown;

	allTabs 	= document.getElementsByClassName("site-type-tabs__tab");
	tabcontent 	= document.getElementsByClassName("tab-content");
	tabShown 	= document.getElementById(siteId);

	// удаляем у всех вкладок класс "active"
	for (var i = 0; i < allTabs.length; i++) {
		allTabs[i].classList.remove("site-type-tabs__tab_active")
	}

	// скрываем все табы
	for (var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}

	// покажем нужную контентную часть таба
	tabShown.style.display = "block";
	evt.currentTarget.className += " site-type-tabs__tab_active";






	1. пометить активность вкладки
		убрать у всех вкладок класс "active"
		текущей дать класс "active"
		показать содержимое таба "active"



	2. сделать ее активной
	3. у всех остальных убрать класс "активная"
	4. Пролистать все элементы "чекбокс" и установить в unchecked
	5. Найти бегунок и установить его положение в ноль
	6. Принять аргумент "цена сайта" и записать его в переменную "цена сайта"
	7. Сделать перерасчет конечной стоимости: цена сайта + модификаторы + стр
	8. Вывести конечную стоимость
}

выборСайта()
1. Пролистать все элементы "чекбокс" и установить в unchecked
2. Найти бегунок и установить его положение в ноль
3. Принять аргумент "цена сайта" и записать его в переменную "цена сайта"
5. Сделать перерасчет конечной стоимости: цена сайта + модификаторы + стр
6. Вывести конечную стоимость

модификатор чекбокс
1. Проверить, checked\unchecked
2. Если checked - записать переданный аргумент в переменную "модификаторы-чекбоксы"
3. Если unchecked - присвоить значение 0
4. Сделать перерасчет конечной стоимости: цена сайта + модификаторы + стр
5. Вывести конечную стоимость

модификатор слайдер
1. При каждом изменении value прибавлять это значение 
к переменной "страницы"
2. При каждом изменении переменной "страницы" делать перерасчет конечной стоимости сайта
3. Выводить конечную стоимость.



// создать переменные для:
// "цена сайта" - цена сайта без допов
// "модификаторы-чекбоксы" - цены на допы
// "страницы" - значение бегунка
// "конечная стоимость" - "цена сайта" + "модификаторы" + "страницы"

