Ext.define('Pagwap.view.cadastroView', {
	extend: 'Ext.Panel',
	id: 'Pagwap_view_cadastroView',
	config: {
		renderTo: 'Pagwap_view_Main',
		title: 'Bem Vindo',
		layout: 'fit',
	    items: Ext.create('Ext.form.Panel', {
		    items: [
		        {
		            xtype: 'numberfield',
		            name: 'Cpf',
		            label: 'CPF:',
                    id: 'Pagwap_cadastroView_nfCpf'
		        },
		        {
		            xtype: 'textfield',
		            name: 'Nome',
		            label: 'Titular:',
                    id: 'Pagwap_cadastroView_tfTitular'
		        },
		        {
                    xtype: 'fieldset',
                    title: 'Selecione',
                    items: [
                        {
                            xtype: 'selectfield',
                            label: 'tipo de conta',
                            options: [
                                {text: 'Conta Corrente',  value: 'first'},
                                {text: 'Poupanca',  value: 'second'}
                            ]
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Selecione',
                    items: [
                        {
                            xtype: 'selectfield',
                            label: 'escolha o Banco',
                            options: [
                                {text: 'Banco Bradesco S.A (237)',  value: 'um'},
                                {text: 'Banco do Brasil S.A (1)', value: 'dois'},
                                {text: 'Banco Santander (Brasil)S.A.(33)', value: 'tres'},
                                {text: 'Caixa Economica Federal (104)', value: 'quatro'},
                                {text: 'HSBC Bank Brasil S.A - Banco Multiplo (399)', value: 'cinco'},
                                {text: 'Itau Unibanco S.A(341)', value: 'seis'}
                            ]
                        }
                    ]
                },
                {
                	xtype:'numberfield',
                	name:'Agencia',
                	label:'Agência :',
                    emptyText: 'Caso tenha Dígito coloque Hífen. Ex: 12345-8'
                },
                {
                	xtype:'numberfield',
                    name:'Conta',
                    label:'Conta :',
                    emptyText: 'Caso tenha Dígito coloque Hífen. Ex: 12345-8'
                },
                {
                    xtype: 'button',
			        flex: 1,
			        text: 'Avancar',
			        ui: 'action',
			        id: 'Pagwap_cadastroView_btnAvancar'
			        
                }   
            ]
		})
	}
});


