var myApp=angular.module("myApp",["ngRoute","timelineControllers"]);myApp.config(["$routeProvider",function(e){e.when("/main",{templateUrl:"partials/chap0_main.html"}).when("/intro",{templateUrl:"partials/chap1_intro.html"}).when("/timeline",{templateUrl:"partials/chap1_timeline.html",controller:"timelineController"}).when("/chap2",{templateUrl:"partials/chap2_scroll.html",controller:"Chap2Controller"}).when("/details/:itemId",{templateUrl:"partials/details.html",controller:"DetailsController"}).otherwise({redirectTo:"/main"})}]);var timelineControllers=angular.module("timelineControllers",[]);timelineControllers.controller("timelineController",["$scope","$http",function(e,t){t.get("source/timeline.json").success(function(t){e.events=t})}]),timelineControllers.controller("Chap2Controller",["$scope","$http",function(e,t){t.get("source/chap2_scroll.json").success(function(t){e.events=t,document.body.style.width="2100px"})}]),timelineControllers.controller("DetailsController",["$scope","$http","$routeParams",function(e,t,l){t.get("source/chap2_scroll.json").success(function(t){e.events=t,e.whichItem=l.itemId,l.itemId>0?e.prevItem=Number(l.itemId)-1:e.prevItem=e.events.length-1,l.itemId<e.events.length-1?e.nextItem=Number(l.itemId)+1:e.nextItem=0})}]),setInterval(function(){$(".ddd").velocity("callout.shake")},4e3),$(window).scroll(function(){$(".hideme").each(function(e){var t=$(this).offset().left+$(this).outerWidth(),l=$(window).scrollLeft()+$(window).width();1200>t?$(this).velocity({opacity:"1"},100):l>t&&$(this).velocity({opacity:"1","margin-left":"50px"},800)})});