const scrollLinks = document.querySelectorAll('a[href*="#"]');

for (let link of scrollLinks) {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const blockId = link.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth"
        });
    });
}

jQuery(document).ready(function() {
    $(document).ready(function(){
        $('.news-slider').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
        });
      });
        // $('.page-slider').slick({
        //     dots: true,
        //     vertical: true,
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     autoplay: true,
        //     autoplaySpeed: 4000,
        // });
})


let mymap = L.map('Map').setView([50.0147909, 36.22811], 15);

let customIcon = L.icon({
    iconUrl: 'location-man.svg',
    iconSize: [38,60],
});

let marker = L.marker([50.0147909, 36.22811], {icon: customIcon}).addTo(mymap);

L.tileLayer(' https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

    marker.bindPopup(`<a href="https://nure.ua/en/">KNURE, student-programmer monument</a>`).openPopup();
    L.control.locate().addTo(mymap);

// https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw