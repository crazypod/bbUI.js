_bbPlayBook_roundPanel = {  
    apply: function(elements) {
		for (var i = 0; i < elements.length; i++) {
			var outerElement = elements[i];
			outerElement.setAttribute('class','bb-playbook-round-panel');
			var items = outerElement.querySelectorAll('[data-bb-type=panel-header]');
			for (var j = 0; j < items.length; j++) {
				if (bb.device.isHiRes) {
					items[j].setAttribute('class','bb-hires-panel-header');
				} else {
					items[j].setAttribute('class','bb-lowres-panel-header');
				}
			}
			// Add our show function
			outerElement.show = function() {
				this.style.display = 'block';
				bb.refresh();
					};
			outerElement.show = outerElement.show.bind(outerElement);
			
			// Add our hide function
			outerElement.hide = function() {
				this.style.display = 'none';
				bb.refresh();
					};
			outerElement.hide = outerElement.hide.bind(outerElement);
			
			// Add remove function
			outerElement.remove = function() {
				this.parentNode.removeChild(this);
				bb.refresh();
					};
			outerElement.remove = outerElement.remove.bind(outerElement);
		}    
    }
};