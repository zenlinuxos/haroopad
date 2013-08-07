window.MenuBarHelp = function () {
	var gui = require('nw.gui');
	var shell = gui.Shell;
	
	var Help = new gui.Menu();

	function open(url) {
		shell.openExternal(url);
	}

	Help.append(
	    new gui.MenuItem({
	        label: 'Haroopad Help',
		      click: function() {
		      	(process.platform === 'darwin') ?
		      	window.parent.ee.emit('menu.help.about') :
						open('http://pad.haroopress.com/page.html');
		      }
	    })
	);
	Help.append(
	    new gui.MenuItem({
	        label: 'Markdown Syntax Help',
		      click: function() {
		      	(process.platform === 'darwin') ?
		      	window.parent.ee.emit('menu.help.syntax') :
		        open('http://pad.haroopress.com/page.html#syntax');
		      }
	    })
	);
	Help.append(
	    new gui.MenuItem({
	        label: 'Haroopad Shortcut Help',
		      click: function() {
		      	(process.platform === 'darwin') ?
		      	window.parent.ee.emit('menu.help.shortcut') :
		        open('http://pad.haroopress.com/page.html#show-shortcuts');
		      }
	    })
	);
	Help.append(
		new gui.MenuItem({
      type: 'separator'
  	})
	);

	Help.append(
	    new gui.MenuItem({
	        label: 'Release Notes',
		      click: function() {
		        open('http://pad.haroopress.com/page.html#release-notes');
		      }
	    })
	);
	Help.append(
	    new gui.MenuItem({
	        label: 'Acknowledgements',
		      click: function() {
		      	(process.platform === 'darwin') ?
		      	window.parent.ee.emit('menu.help.acknowledgements') :
		        open('http://pad.haroopress.com/page.html#acknowledgements');
		      }
	    })
	);
	Help.append(
		new gui.MenuItem({
      type: 'separator'
  	})
	);

	Help.append(
	    new gui.MenuItem({
	        label: 'Haroopad Website',
		      click: function() {
					open('http://pad.haroopress.com/');
		      }
	    })
	);
	Help.append(
	    new gui.MenuItem({
	        label: 'User echo',
		      click: function() {
					open('http://haroopad.userecho.com/');
		      }
	    })
	);
	Help.append(
		new gui.MenuItem({
      type: 'separator'
  	})
	);
	Help.append(
	    new gui.MenuItem({
	        label: 'Boost up! Donate',
		      click: function() {
					open('http://pad.haroopress.com/page.html#grow-up-donate');
		      }
	    })
	);

	return new gui.MenuItem({ label: 'Help', submenu: Help });
};