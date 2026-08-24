const app = angular.module('myApp', [])

app.controller ('MainController', function () {
    this.title = "Hello World"
    this.message = "This is a generic message"

    this.userName = ""

    this.alias = {name : "Peter Parker", superhero : "Spiderman"}
    this.price = 50000
})