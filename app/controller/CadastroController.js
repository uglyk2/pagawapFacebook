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
		var me = this;

		if(me.validarFormulario()){
			var usuario = APP.getController('FacebookController').userData;

			Ext.Msg.alert('Olá '+usuario.name, 'Você já pode fazer transações aí em '+usuario.location.name, Ext.emptyFn);
	                //Ext.Msg.alert('Obrigado'+usuario.name,'poe usar nossa ferramenta. Gostaria de saber de saber mais sobre nossos produtos? clique aqui',Ext.emptyFn); 

			Ext.getCmp('Pagwap_view_MainNavigation').push(
				Ext.create('Pagwap.view.transacaoView')
			);
		}
		else {
			console.log('Formulário não validado');
		}
	},

	validarFormulario: function(){
		var campoCpf = Ext.getCmp('Pagwap_cadastroView_nfCpf'),
			campoNome = Ext.getCmp('Pagwap_cadastroView_tfNome'),
			campoAg = Ext.getCmp('Pagwap_cadastroView_nfAgencia'),
			campoConta = Ext.getCmp('Pagwap_cadastroView_nfConta')

		if(campoCpf.getValue() == null){
			Ext.Msg.alert('Campo Obrigatório', 'Preencha o campo CPF', Ext.emptyFn);
			return false;
		}
		//dei o cú
		else if (campoAg.getValue() == null) {
			Ext.Msg.alert('Campo Obrigatório', 'Preencha o campo Agencia', Ext.emptyFn);
			return false;
		}
		else if (campoConta.getvalue() == null){
			Ext.Msg.alert('Campo Obrigatório', 'Preencha o campo Conta', Ext.emptyFn);
			return false;
		}

		return true;
	}

});