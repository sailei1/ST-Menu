Ext.define('Menu.view.MenuButton', {
	extend: 'Ext.Button',
	alias: 'widget.menubutton',
	xtype: 'menubutton',

	config: {
	        style:'padding:10px;',
		iconCls: 'add',
		ui : 'pathmenu',
		iconMask: true,
		height: 50,
		width: 50,
		zIndex:'98',
		cls: 'menubutton',
		isOpen: false,
		listeners:{'initialize':function(){
		       debugger;
			   this.setLeft(document.body.clientWidth*0.43);
			   this.setBottom(8);
                             var left=parseInt(this.getLeft())-parseInt(5);
				var div = document.createElement("div"); 
				var style="position:absolute; padding: 10px; height: 62px !important; width: 62px !important; z-index: 97 !important; left: "+left+"px !important; bottom: 5px !important; background:url(images/roB.png) 0 0 no-repeat;background-size:100% 100%;"
				div.setAttribute("style",style);
				div.setAttribute("id","radius")
				document.body.appendChild(div);

			   
			},
			'resize':function(){
			   
			    this.setLeft(document.body.clientWidth*0.43);
			    this.setBottom(8);
				var div = document.getElementById("radius"); 
				var style="position:absolute; padding: 10px; height: 62px !important; width: 62px !important; z-index: 97 !important; left: "+this.getLeft()+"px !important; bottom: 5px !important; background:url(images/roB.png) 0 0 no-repeat;background-size:100% 100%;"
				div.setAttribute("style",style);
				document.body.appendChild(div);
			}
			},
	}
});