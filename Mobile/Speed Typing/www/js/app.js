// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: 'templates/main.html'
        })
        .state('start', {
            url: '/start',
            templateUrl: 'templates/start.html',
            controller: 'StartCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html'
        })
        .state('highscore', {
            url: "/highscore",
            templateUrl: "templates/highscore.html"
        });
    $urlRouterProvider.otherwise('/main');
})

app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
})

.controller('StartCtrl', function ($scope, $timeout) {

    var seconds = 10;
    var stopped;
    var currentWord = 0;
    var words = document.querySelectorAll(".word");
    var isPlaying = false;
    var endGame;
    var correctWords = 0;
    var wrongWords = 0;

    $scope.counterMinutes = ('0' + Math.floor(seconds / 60)).slice(-2);
    $scope.counterSeconds = ('0' + seconds % 60).slice(-2);

    $scope.countdown = function () {
        stopped = $timeout(function () {
            if (seconds > 0) {
                if (seconds == 5)
                {
                    document.getElementById("countdown-seonds").className = "red-seconds";
                }
                seconds--;
                $scope.counterMinutes = ('0' + Math.floor(seconds / 60)).slice(-2);
                $scope.counterSeconds = ('0' + seconds % 60).slice(-2);
                $scope.countdown();
            }
            else
            {
                isPlaying = false;
                $scope.showGameDetails();
            }

        }, 1000);
    };

    $scope.checkWord = function (keyEvent) {
        alert(keyEvent.which)
    }

    $scope.check = function ()
    {
        var word = words.item(currentWord);
        var inputUser = document.getElementById("user-input");
        //alert(word.innerText + " " + inputUser.value + "/" + word.innerText.length + " " + inputUser.value.length);
        if (word.innerText.trim() == inputUser.value.trim())
        {
            word.className = "correct-word";
            correctWords++;
        }
        else
        {
            word.className = "wrong-word";
            wrongWords++;
        }

        inputUser.value = "";       
    }

    $scope.showGameDetails = function () {
        document.getElementById("game-details").style.display = "block";
        document.getElementById("background-cover").style.display = "block";

        document.getElementById("correct-words").innerHTML = correctWords;
        document.getElementById("wrong-words").innerHTML = wrongWords;
    }

    $scope.close = function ()
    {
        document.getElementById("game-details").style.display = "none";
        document.getElementById("background-cover").style.display = "none";
    }
})