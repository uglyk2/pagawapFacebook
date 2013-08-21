Ext.define('Pagwap.view.loginView', {
	extend: 'Ext.Panel',
	id: 'Pagwap_view_loginView',
	config: {
		renderTo: 'Pagwap_view_Main',
		title: 'Mercancia - Pagwap',
		layout: 'vbox',
		items: [{
			xtype: 'panel',
			flex: 9,
			html: '<div align="center">Bem Vindo(a) ao Pagwap faça seu login para continuar</div>'
		}, {
			xtype: 'button',
			flex: 1,
			text: 'Logar com Facebook',
			ui: 'action',
			id: 'Pagwap_btnLogin'
		}]
	}
});