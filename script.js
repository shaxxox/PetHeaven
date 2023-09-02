function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.addEventListener('click', function(event) {
  var mySidenav = document.getElementById('mySidenav');
  var content = document.getElementById('openbtn')
  if (event.target != mySidenav && event.target != content) {
      closeNav();
  }
});

function initMap() {
    var map = new google.maps.Map(document.querySelector('.map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Set the initial map center
        zoom: 12 // Set the initial zoom level
    });
}