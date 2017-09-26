angular.module("myapp", ["ui.router"]).config(routing);
routing.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
function routing ($stateProvider, $urlRouterProvider, $locationProvider) {
$stateProvider
.state("home", {
  url: "/",
  templateUrl: "./home.html",
  controller: "formController",
  controllerAs: "vm"
})
.state("submit-new-job", {
  url: "/submit-new-job",
  templateUrl: "./submit-new-job.html",
  controller: "SubmitController",
  controllerAs: "vm"
})
.state("saved-items", {
  url: "/saved-items",
  templateUrl: "./saved-items.html",
  controller: "SavedController",
  controllerAs: "vm"
})
.state("new-features", {
  url: "/new-features",
  templateUrl: "./new-features.html",
  controller: "NewController",
  controllerAs: "vm"
})
$urlRouterProvider.otherwise("/");
$locationProvider.html5Mode(true);
}
