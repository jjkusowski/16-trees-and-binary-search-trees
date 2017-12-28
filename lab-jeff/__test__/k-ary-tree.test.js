'use strict';

const KAryTree = require('../lib/k-ary-tree');


let one = new KAryTree(1);
let two = new KAryTree(2);
let three = new KAryTree(3);
let four = new KAryTree(4);
let five = new KAryTree(5);
let six = new KAryTree(6);
let seven = new KAryTree(7);
let eight = new KAryTree(8);

one.appendChild(two);
one.appendChild(three);
one.appendChild(four);

three.appendChild(five);
three.appendChild(six);
three.appendChild(seven);

six.appendChild(eight);

describe('k-ary-tree breadthFirstFind', () =>{
  test('correctly returns a found node', () => {
    expect(one.breadthFirstFind(5)).toEqual(five);
  });

  test('returns null if value not found', () => {
    expect(one.breadthFirstFind(100)).toBeNull();
  });
});

describe('k-ary-tree breadthFirstToString', () => {
  test('returns string of each value as found in breadthfirst order with a new line after each value', () => {
    expect(one.breadthFirstToString()).toEqual('1\n2\n3\n4\n5\n6\n7\n8\n');
  });
  test('returns a single value if called on a tree with only one value', () => {
    expect(two.breadthFirstToString()).toEqual('2\n');
  });
});

describe('k-ary-tree depthFirstToArray', () => {
  test('returns an array of all values in the tree in depth first order', () => {
    expect(one.depthFirstToArray()).toEqual([1, 4, 3, 7, 6, 8, 5, 2]);
  });
  test('returns an array of a single value when called on a tree with no children', () => {
    expect(eight.depthFirstToArray()).toEqual([8]);
  });
});
