const app = angular.module('myApp', [])

app.controller ('MainController', function () {
    this.title = 'Welcome to the page'
    this.message = 'Generic AngularJS application'

    this.userName = ""

    this.alias = {name : "Peter Parker", hero : "Spiderman"}
    this.pricing = 50000
})