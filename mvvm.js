
    var MVVM = function(options) {
        this.dataBindingsObj;
        this.Model = new Model;
        this.ModelView = new ModelView;
        this.observeDOM = observeDOM;

        if(options && typeof options === 'object'){
            if(options.dataBindings){
                this.Model.init(options.dataBindings);
            }
        }
    }

    MVVM.prototype.init = function(){
        this.dataBindingsObj = observeDOM();
    }

    MVVM.prototype.getDataBindings = function(){
        return (this.dataBindings);
    }

    var Model = function(){
        this.dataBindings = {};
    }

    Model.prototype.init = function(dataBindings) {
        if(dataBindings && typeof dataBindings === 'object'){
           this.dataBindings = dataBindings;
        } else {
            console.log('Model is empty');
        }
    }

    var ModelView = function(){
    	//console.log('ModelView');
    }

    var observeDOM = function(){
    	var _nodeList = document.querySelectorAll('[data-bind]'),
    		dataBindingsObj = {};
    	for (var i = 0; i < _nodeList.length; i++) {
    		dataBindingsObj[_nodeList[i].attributes.getNamedItem('data-bind').value] = _nodeList[i];
    	}
    	return dataBindingsObj;
    }

