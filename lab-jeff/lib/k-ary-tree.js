'use strict';

const KAryTree = function(value){
  this.value = value;
  this._children = [];// vinicio - you could sort this
};

KAryTree.prototype.appendChild = function(tree){
  if(!(tree instanceof KAryTree))
    throw new TypeError('must insert a k-ary tree');

  this._children.push(tree);
};

KAryTree.prototype.breadthFirstFind = function(value){
  let queue = [];
  queue.push(this);

  let current = null;

  while(queue.length > 0){
    current = queue.shift();

    if(current.value === value){
      return current;
    }

    for(let child of current._children)
      queue.push(child);
  }
  return null;
};

KAryTree.prototype.breadthFirstToString = function(){
  let queue = [];
  queue.push(this);

  let current = null;
  let str = '';

  while(queue.length > 0){
    current = queue.shift();

    str += `${current.value}\n`;

    for(let child of current._children)
      queue.push(child);
  }
  return str;
};

KAryTree.prototype.depthFirstToArray = function(){
  let stack = [];
  stack.push(this);

  let current = null;
  let array = [];

  while(stack.length > 0){
    current = stack.pop();

    array.push(current.value);

    for(let child of current._children)
      stack.push(child);
  }
  return array;
};

module.exports = KAryTree;
