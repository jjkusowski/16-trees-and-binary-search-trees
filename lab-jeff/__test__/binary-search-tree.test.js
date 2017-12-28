'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');




describe('remove', () => {
  test('Node removed has no children.  Should remove reference from parent node.', () => {
    let bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.insert(8);
    bst.insert(16);
    bst.remove(16);

    expect(bst.right).toEqual(null);
  });

  test('Node removed has 1 child.  Parent node should now reference removed node\'s child', () => {
    let bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.insert(8);
    bst.insert(16);
    bst.insert(14);
    expect(bst.right.value).toEqual(16);
    bst.remove(16);

    expect(bst.right.value).toEqual(14);


  });

  test('Node removed has 2 children.  Should find the smallest value on the removed node\'s right tree, replace it\'s value, and remove the node that moved', () => {
    let bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.insert(8);
    bst.insert(16);
    expect(bst.left.value).toEqual(5);
    bst.remove(5);
    expect(bst.left.value).toEqual(8);

  });
  test('Node to be removed is the root and has no children', () => {
    let bst = new BinarySearchTree(10);
    bst.remove(10);
    expect(bst.value).toBeNull();
  });

  test('Node to be removed is the root and has 1 child', () => {
    let bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.remove(10);
    expect(bst.value).toEqual(5);
    expect(bst.left.value).toEqual(2);
  });

  test('Node to be removed is the root and has 2 children', () => {
    let bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.insert(8);
    bst.insert(16);
    bst.remove(10);
    expect(bst.value).toEqual(16);
    expect(bst.right).toBeNull();
  });
  test('value to be removed is not in the tree. Should return null', () => {
    let bst = new BinarySearchTree(10);
    bst.insert(5);
    bst.insert(2);
    bst.insert(8);
    bst.insert(16);
    expect(bst.remove(100)).toBeNull();
  });
});
