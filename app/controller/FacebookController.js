Ext.define('Pagwap.controller.FacebookController', {
	
	extend: 'Ext.app.Controller',
	
	init: function(){

		var me = this;
		
		me.control({
			'button[id=Pagwap_btnLogin]': {
				tap: me.login
			}
		});

		window.fbAsyncInit = function() {
	            // init the FB JS SDK
		        FB.init({
		          appId      : '183806761801158',                        // App ID from the app dashboard
		          channelUrl : 'https://mercancianews.com.br/pagwapfacebook/', // Channel file for x-domain comms
		          status     : true,                                 // Check Facebook Login status
		          xfbml      : true                                  // Look for social plugins on the page
		        });

		        if(me.getLogin()){
		        	FB.api('/me', function(response) {
			       		me.setUserData(response);
			       		Ext.getCmp('Pagwap_view_Main').add(Ext.create('Pagwap.view.cadastroView'));
			       		//Ext.getCmp('Pagwap_view_Main').add([Ext.create('Pagwap.view.transacaoView')]);
			     	});
		        }
		        else {
		        	Ext.getCmp('Pagwap_view_Main').add(Ext.create('Pagwap.view.loginView'));
		        }

		    };

	      // Load the SDK asynchronously
	      (function(d, s, id){
	         var js, fjs = d.getElementsByTagName(s)[0];
	         if (d.getElementById(id)) {return;}
	         js = d.createElement(s); js.id = id;
	         js.src = "//connect.facebook.net/en_US/all.js";
	         fjs.parentNode.insertBefore(js, fjs);
	       }(document, 'script', 'facebook-jssdk'));
	},

	getLogin: function(){
		var me = this;
		FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token 
            // and signed request each expire
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;

            me.authResponse.uid = uid;
            me.authResponse.accessToken = accessToken;

            return true;
          } else if (response.status === 'not_authorized') {
            // the user is logged in to Facebook, 
            // but has not authenticated your app
            return false;
          } else {
            // the user isn't logged in to Facebook.
            return false;
          }
         });
	},
	
	login: function(){
		var me = this, mainView = Ext.getCmp('Pagwap_view_Main');
		FB.login(function(response) {
		   	if (response.authResponse) {
		     	FB.api('/me', function(response) {
		       		me.setUserData(response);
		       		mainView.removeAll();
		       		mainView.add(Ext.create('Pagwap.view.cadastroView'));
		     	});
		   	} else {
		   		Ext.Msg.alert('Erro ! ', 'É necessário liberar permissão para o Aplicativo.', Ext.emptyFn);
		   	}
		}, {
			scope: 'email,user_location,user_photos'
		});
	},

	user: function(get){

	},

	setUserData: function(data){
		this.userData = data;
	},

	userData: '',

	authResponse: {}

});