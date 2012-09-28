/**
 * 快捷菜单控制器
 *
 */
Ext.define('Menu.controller.Menu', {
	extend: 'Ext.app.Controller',
	requires: [
		'Menu.view.MenuItemButton',
		'Menu.view.MenuButton'
	],

	config: {
	    routes: {
	            'contact': 'showContact',
                     'main':'showMain'
	        },

		refs: {
			menubutton: 'menubutton',
			menuitembutton: 'menuitembutton'
		},

		control: {
			menubutton: {
				tap: 'onMenuButtonTap'
			},
			menuitembutton: {
				tap: 'onMenuItemButtonTap'
			}
		}
	},





	/**
	 *
	 * @param {} button
	 */
	onMenuItemButtonTap: function(button) {
		var	menuButton = Ext.ComponentQuery.query('menubutton')[0];
		button.addCls('tapped');
		debugger;
		//menuButton.fireEvent('hide');
		this.closeMenu(menuButton);
		this.redirectTo(button.getRoute());
	},

	/**
	 *
	 * @param {} menuButton
	 */
	onMenuButtonTap: function(menuButton) {
		if (!menuButton.getIsOpen()) {
			// open menu
			this.openMenu(menuButton);
		} else {
			// close Menu
			this.closeMenu(menuButton);
		}
	},


	openMenu: function(menuButton) {
	    Ext.Viewport.setMasked(true);
	     debugger;
	     var el = document.createElement("div"); 
	     el.setAttribute("class","s-bbox");
	     el.setAttribute("id","bg");
	     Ext.Viewport.element.appendChild(el);
	   
                    
		var	items = Ext.ComponentQuery.query('menuitembutton'),
			bottom = menuButton.getBottom(),
			left = menuButton.getLeft(),
			radius = 150,
			abschnitte = items.length - 1
			winkel = 130 / abschnitte;
		
		menuButton.replaceCls('close', 'open');
		
		if(items.length=='1'){
		    items[0].addCls('menuitembutton');
		    items[0].replaceCls('close', 'open');
		    var left= document.body.clientWidth*0.45;
		    var bottom= document.body.clientHeight*0.3;
		    items[0].setLeft(left);
		    items[0].setBottom(bottom);
		    items[0].fireEvent('show');
		}
		else{
		
		Ext.each(items, function(item, index) {
			item.addCls('menuitembutton');
			item.replaceCls('close', 'open');
                           debugger;
			var currentAngle = (155 - (winkel * (abschnitte - index))),
				radiant = Math.PI / 180,
				currnetRadiant = radiant * currentAngle,
				x = Math.round(Math.cos(currnetRadiant) * radius),
				y = Math.round(Math.sin(currnetRadiant) * radius);

			item.setLeft(left + x);
			item.setBottom(bottom + y);
			item.fireEvent('show');
		});
		}

		menuButton.setIsOpen(true);
	},

	closeMenu: function(menuButton) {
	    Ext.Viewport.setMasked(false);
	   debugger;
	    Ext.get("bg").destroy();
		var	items = Ext.ComponentQuery.query('menuitembutton');

		menuButton.replaceCls('open', 'close');
		 var left= document.body.clientWidth*0.45;
		 var bottom= 8;
		Ext.each(items, function(item, index) {
			if (item.getCls().indexOf('tapped') === -1) {
				item.replaceCls('open', 'close');
				item.setLeft(left);
				item.setBottom(bottom);
				item.fireEvent('hide');
			} else {

				var task = Ext.create(
					'Ext.util.DelayedTask',
					function() {
						item.removeCls('menuitembutton');
						item.setLeft(left);
						item.setBottom(bottom);
						
						item.removeCls('tapped');
					}
				);
				item.fireEvent('hide');
				task.delay(900);

			}
		});
		menuButton.setIsOpen(false);
	},
	showContact:function(){
	   

	    
	},
	showMain:function(){
	 
	}
});