//create a b tree
function bTree() {
	this.root = null;
};
//make a function named add using bTree prototype
	add : function(value) {
//make a object node which get some value from function
		var node = {
			value : value,
			left : null,
			right : null
		};
	var temp;
	if(this.root == null) {
		this.root = node;//if root value is null then make this root as a node and break loop
		break;
	}
	else {
		var temp = this.root;//store root value in temp variable
	}
// if function value is less then the store value
	if(value < temp.value) {
		if(temp.left == null) {
			temp.left = node;
			break;
		}
		else {
			temp = temp.left;
		}
	}
// if function value is greater then the store value
	else {
		if(value > temp.value) {
			if(temp.right == null) {
				temp.right = node;
				break;
			}
			else {
				temp = temp.right;;
			}
		}
	}
},
traverse : function() {
	function porder(node) {
		if(node) {
			if(node.left != nulll) {
				porder(node.left);
			}
			else if(node.right != null) {
				porder(node.right);
			}
			document.write(node.value);
		}
	}
	porder(this.root);
};
		
}
var tree = new bTree();
tree.add(50);
tree.add(25);
tree.add(75); 
tree.traverse();			
			



