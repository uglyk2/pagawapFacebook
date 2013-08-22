Ext.define('Pagwap.controller.FacebookController', {
	
	extend: 'Ext.app.Controller',


	//Init é padrão do framework, é a primeira coisa que é executada quando essa controller for iniciada
	init: function(){
		//definimos uma variável me, que será o contexto de toda controller pra conseguirmos acessar outras funções dentro dela
		var me = this;
		
		//definimos o controlador de elementos html que ficará ouvindo possíveis eventos definidos de cada elemento
		me.control({
			//estamos ouvindo tudo o que acontece com o botão btnLogin
			'button[id=Pagwap_btnLogin]': {
				//chama a função login dentro dessa controller, assim que o botão for clicado (tap)
				tap: me.login
			}
		});

		//Quando a API do facebook for carregada
		window.fbAsyncInit = function() {

	            // Inicializando a conexão do javascript com a API
		        FB.init({
		          appId      : '183806761801158',                        
		          channelUrl : 'https://mercancianews.com.br/pagwapfacebook/', 
		          status     : true,                                 
		          xfbml      : true                                  
		        });

		        //Verificamos se o usuário está logado
		        if(me.getLogin()){
		        	//Estando logado pegamos os dados do usuário e gravamos na variável "userData" que está nesta controller
		        	FB.api('/me', function(response) {
			       		me.setUserData(response);
			       		
			       		//setarView, faz uma requisição e verifica se o usuário já está no mercancia ou se é novo e então abre o cadastro ou transação
			       		me.setarView();
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

	setarView: function(){
		var me = this, userdata = me.userData;

		Ext.Ajax.request({
		    url: 'https://www.mercancia.com.br/meucu/',
		    params: {
		        id_facebook: userdata.id
		    },
		    success: function(response){
		        var json = JSON.parse(response.responseText);
		        // process server response here
		        if(json.cadastrado){
		        	Ext.getCmp('Pagwap_view_Main').add([Ext.create('Pagwap.view.transacaoView')]);
		        }
		        else {
		        	Ext.getCmp('Pagwap_view_Main').add(Ext.create('Pagwap.view.cadastroView'));
		        }
		    },
		    failure: function(){
		    	console.log('Falha na requisição talvez não existe a URL ou seilá o capeta baixou');
		    	Ext.getCmp('Pagwap_view_Main').add(Ext.create('Pagwap.view.cadastroView'));
		    }
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