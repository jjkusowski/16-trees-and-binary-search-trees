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

  remove(value, node){
    if(!node) node = this;

    if(value < node.value){
      if(node.left){
        this.remove(value, node.left); // might be node.remove?
      }
    } else if (value > node.value){
      if(node.right){
        this.remove(value, node.right);
      }
    } else {
      if(!node.left && !node.right)
        node = null;

      
    }
  }
}
module.exports = BinarySearchTree;
