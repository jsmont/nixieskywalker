(function(){
	var app = angular.module('menu',[]);

	app.directive('menuPost',function(){
		return {
			restrict:'E',
			templateUrl: 'directives/menu-post.html'
		};
	});

	var global = {};

	app.controller('mainController',function(){
		this.post = global.post;
		global.post = null;
		
	});

	app.directive('postList',function(){
		return {
			restrict:'E',
			templateUrl: 'directives/post-list.html',
			controller:function(){
				var postHeight = window.innerWidth > 1000? (window.innerWidth - 250)/5 : window.innerWidth;
				var that = this;
				that.posts = [
				];
				for(var i = 0; i < 202;++i){
					that.posts.push({style: {"background-image":"url(\"/img/work"+Math.floor(Math.random()*16 + 1)+".jpg\")",height:postHeight+ 'px'},title:"Wololo"+Math.floor(Math.random()*5 + 1)})
					console.dir(that.posts[i]);
				}

				that.setPost = function(post){
					console.log("POST!");
					global.post = post;
					console.dir(post);
				}
			},
			controllerAs: "list"
		};
	});

	app.directive('postView',function(){
		return {
			restrict: "E",
			templateUrl: "directives/post-view.html",
			controller: function(){
				var that = this;
				that.post = global.post;
			},
			controllerAs:"view"
		};
	});

})();