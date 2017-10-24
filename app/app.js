var App = angular.module('myApp', []);
App.controller('myCtrl', function($scope, $http) {
    $http.get('FunyiroAdatbazis.json')
        .then(function(res){
            $scope.funyirok = res.data;
        });
});


function refreshVagoszelesseg() {
    var x = document.getElementById("vagoszelesseg_range").value;
    document.getElementById("vagoszelessegCurrentValue").innerHTML = (x * 6/5).toString();

}
function refreshHengerurtartalom() {
    var x = document.getElementById("hengerurtartalom_range").value;
    document.getElementById("hengerurtartalomCurrentValue").innerHTML = (x * 6/5).toString();

}
function refreshTomeg() {
    var x = document.getElementById("tomeg_range").value;
    document.getElementById("tomegCurrentValue").innerHTML = (x * 6/5).toString();

}
function disableHajtasValaszto() {
    document.getElementById("benzinHajtas").disabled = true;
    document.getElementById("elektromosHajtas").disabled = true;
}
function enableHajtasValaszto() {
    document.getElementById("benzinHajtas").disabled = false;
    document.getElementById("elektromosHajtas").disabled = false;
}
function createList() {
    var e = document.getElementById("talalatszamok");
    var listaElemszam = e.options[e.selectedIndex].value;
    var listaMagassag = parseInt(listaElemszam  * 80);
    document.getElementById('listaContainer').style.height = listaMagassag + "px";
    document.getElementById('listaContainer').innerHTML = '';
    document.getElementById('listaContainer').innerHTML = '<ul>\n' +
        '        <li ng-repeat="funyiro in funyirok">\n' +
        '            <div class="funyiroListaElem"><div class="elemCim">{{funyiro.megnevezes}}</div>\n' +
        '            <div class="elemKep"><img class="funyiroKep" src="{{funyiro.image.src}}" width=""></div><div class="elemAdatok"><li>{{funyiro.type}}</li></div></div>\n' +
        '        </li>\n' +
        '    </ul>';
}

function homeScreen() {
    window.location.replace('fooldal.html');
}
