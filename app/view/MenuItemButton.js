/**
 * 快捷菜单选项
 */
Ext.define('Menu.view.MenuItemButton', {
	extend: 'Ext.Button',
	alias: 'widget.menuitembutton',
	xtype: 'menuitembutton',

	config: {
		iconMask: true,
		ui : 'pathmenu',
		t:'',
//		left: document.body.clientWidth*0.45,
//		bottom: document.body.clientHeight*0.07,
		height: 40,
		width: 40,
		zIndex:'97',
		cls: 'menuitembutton',
		isActive: false,
		listeners:{'initialize':function(){
			   this.setLeft(document.body.clientWidth*0.45);
			   this.setBottom(8);
			   var el = document.createElement("div"); 
			   el.id=this.getId()+'-field';
			   el.innerHTML=this.getT();
			   el.setAttribute("class", "s-text");
			   el.setAttribute("style","display:none;");
			   Ext.Viewport.element.appendChild(el);
			},
			'resize':function(){
			   // debugger;
			    this.setLeft(document.body.clientWidth*0.45);
			    this.setBottom(8);
			},
			'show':function(){
			    debugger;
			    var id=this.getId()+'-field';
			    var el=document.getElementById(id);
				   var b=this.getBottom()-20;
				   var  style='left:'+this.getLeft()+'px !important; bottom:'+b+"px !important; ";
				   el.setAttribute("style",style);
			},
			'hide':function(){
			    debugger;
			    var id=this.getId()+'-field';
			    var el=document.getElementById(id);
			    el.setAttribute("style","display:none;");
			    
			}
			},
			route: ''
		
	}
});