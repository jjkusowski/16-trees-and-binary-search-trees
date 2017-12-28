'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if(typeof value !== 'number')
      throw new TypeError('Binary Search Tree - value should be a number');

    if(this.value === value)
      throw new Error('Binary Search Tree - value is already present');

    if(value < this.value){
      if(!this.left){
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value); // vinicio - recursive call
      return;
    }
    if(!this.right){
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
    return;
  }

  find(value){
    if(value === this.value)
      return this;

    // vinicio - checking right sub-tre
    if(value > this.value){
      if(this.right !== null)
        return this.right.find(value);
      else
        return null;
    }
    if(this.left !== null)
      return this.left.find(value);
    else
      return null;
  }

  findMin(node){
    while(node.left)
      node = node.left;
    return node;
  }

  findParent(value, root){

    console.log('root: ', root);

    if(value === root.value){
      return 'root';
    }
    if(value < this.value){
      if(this.left.value === value){
        return this;
      }
      return this.left.findParent(value);
    }
    if(this.right.value === value){
      return this;
    }
    return this.right.findParent(value);

  }

  remove(value, root = null){
    let parent;
    if(root === null) {
      root = this;
    }
    if(!this.find(value)){
      return null;
    }

    if(this.value === value){ //value is found

      if(this === root){ //node to be removed is the root
        console.log('node to remove is root');
        if(this.right && this.left){//root to be removed and has 2 children
          let minRight = this.findMin(this.right);
          this.value = minRight.value;
          root = this;
          if(this.right === minRight){
            this.right = null;
            return;
          }
          return minRight.remove(minRight.value, root);
        } else if(this.right || this.left){//root to be removed and has 1 child
          if(this.right){
            this.value = this.right.value;
            this.right.remove(this.right.value);
            return;
          } else {
            this.value = this.left.value;
            this.left.remove(this.left.value);
            return;
          }
        } else{//root to be removed and has no children
          root = null;
          this.value = null;
          return;
        }
      } else { //if the node to be removed is not the root


        console.log('value found.  node = ', this);
        parent = root.findParent(value, root);
        console.log('parent: ', parent);
        if(this.right && this.left){ //node to remove has 2 children
          let minRight = this.findMin(this.right);
          this.value = minRight.value;
          return minRight.remove(minRight.value, root);
        } else if (this.right || this.left){ // node to remove has 1 child
          if(parent.left === this){
            if(this.left){
              parent.left = this.left;
              return;
            } else {
              parent.left = this.right;
              return;
            }
          } else {
            if(this.left){
              parent.right = this.left;
              return;
            } else {
              parent.right = this.right;
              return;
            }
          }
        } else {//node to remove has no children
          if(parent.left === this){
            parent.left = null;
            this.value = null;
            return;

          } else {
            parent.right = null;
            return;
          }

        }

      }

    }
    if(value < this.value)
      return this.left.remove(value, root);

    return this.right.remove(value, root);


  }
}
module.exports = BinarySearchTree;
