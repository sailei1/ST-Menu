Ext.define("Menu.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.Panel'
    ],
    config: {
        tabBarPosition: 'bottom',
        
       
			listeners:{
	    
	    
	    initialize:function(panel){
             
			debugger;
			var items=[{ title: '首页',
	            iconCls: 'home',
	            loadMask : true,xtype:'panel'},{title: '用户',
		            iconCls: 'user',
		            loadMask : true,xtype:'panel'}];
			panel.setItems(items);
			var b=panel.getTabBar( ).element.down('div[class="x-tab-normal x-tab x-iconalign-center"]').dom;
			var el = document.createElement("div"); 
		 el.setAttribute("class","x-tab x-tab-normal x-iconalign-center");
		   b.parentNode.insertBefore(el,b);
		   Ext.Viewport.add([
					
					{      id:'contact',
						xtype: 'menuitembutton',
						iconCls: 'user',
						t:'测试1',
						route: 'contact'
					},
					{       id:'main',
						xtype: 'menuitembutton',
						t:'测试2',
						iconCls: 'home',
						route: 'main'
					},
					{       id:'user',
						xtype: 'menuitembutton',
						t:'测试3',
						iconCls: 'user',
						route: 'main'
					},
					{       id:'xx',
						xtype: 'menuitembutton',
						t:'测试4',
						iconCls: 'user',
						route: 'main'
					},
					{       id:'xx1',
					        t:'测试5',
						xtype: 'menuitembutton',
						iconCls: 'user',
						route: 'main'
					},
					{	
						xtype: 'menubutton'
					}

				]);
		   
		}}
    }
});
