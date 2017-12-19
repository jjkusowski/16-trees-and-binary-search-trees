'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(16);


describe('remove', () => {
  test('should remove the node with the value passed in and restructure the bst', () => {
    expect(bst.remove)
  });
});
