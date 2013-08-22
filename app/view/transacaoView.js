Ext.define('Pagwap.view.transacaoView', {
	extend: 'Ext.Panel',
	id: 'Pagwap_view_transacaoView',
	config: {
		renderTo: 'Pagwap_view_Main',
		title: 'Transação',
		items:[{
			      xtype: 'button',
			      ui: 'action',
			      text: 'Simples Teste de Página'
		        },
                {
                    xtype:'textfield',
                    name:'código',
                    label:'CD', 
                    placeHolder:'Código do Estabelimento'
               },        
               {
                    xtype: 'fieldset',
                    title: 'Selecione',
                    items: [
                        {
                            xtype: 'selectfield',
                            label: 'escolha a bandeira',
                            options: [
                                {text: 'Visa',  value: 'um'},
                                {text: 'Master Card', value: 'dois'},
                                {text: 'Dinners',  value: 'tres'},
                                {text: 'American Express',  value: 'quatro'},
                                {text: 'Elo',  value: 'cinco'}
                            ]
                        }
                    ]
                },
                
        
        ]   
	}
});