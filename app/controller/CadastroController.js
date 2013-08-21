Ext.define('Pagwap.controller.CadastroController', {
	extend: 'Ext.app.Controller',
	init: function(){
		var me = this;

		me.control({
			'button[id=Pagwap_cadastroView_btnAvancar]': {
				tap: me.avancarCadastro
			}
		});
	},

	avancarCadastro: function(){
		var usuario = APP.getController('FacebookController').userData;
		console.log();

		Ext.Msg.alert('Olá '+usuario.name, 'Você já pode fazer transações aí em '+usuario.location.name, Ext.emptyFn);
                //Ext.Msg.alert('Obrigado'+usuario.name,'poe usar nossa ferramenta. Gostaria de saber de saber mais sobre nossos produtos? clique aqui',Ext.emptyFn); 

		Ext.getCmp('Pagwap_view_MainNavigation').push(
			Ext.create('Pagwap.view.transacaoView')
		);
	}

});
