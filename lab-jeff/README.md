# Code 401 lab 16
This lab was to practice with 2 types of trees: Binary Search Trees and K-ary Trees.  Each is located within its one file in the lib folder.

## Code Style
Standard Javascript with ES6.

## Getting Started
Copy the contents of the lib folder into your project directory.  

To use the binary search tree methods, put ```const BinarySearchTree = require('../lib/binary-search-tree');``` into your javacript file.  You will then have access to the methods by using the constructor with the 'new' callout.  For example, ``` let one = new BinarySearchTree(1)``` creates a new instance of a binary search tree where the value is '1'.  To append a node to this tree with the value 2, ```one.insert(2)```.

Similarly for the k-ary-tree methods, put ```const KAryTree = require('../lib/k-ary-tree');```.  The methods are similarly used.

To run the tests, also copy the test folder.  You will also need to install jest via npm at the command line by typing ```npm install -D jest```.  Then, you can type ```npm run test``` to run the tests.

## Binary Search Tree methods
### remove(value, root)
This method has an arity of 2. Externally, only the first argument is passed in, which is the value.  Internally, the root is also passed through to itself when the function is called recursively.
This method has multiple forks.  The first fork is whether the node to be removed is the root or not.  Inside each of those forks are a set of if/else statements which depend on if the node to be removed has 0, 1, or 2 children.
The Big O of space for this method is O(1) as it creates a few new variables, but those are the same no matter how large the tree is.
The Big O of time for this method on average is O(logn) as it must traverse the tree to find the node to remove but it does not have to search the entire tree due to it being a binary search tree.  In the worst case, it would be O(n) if the tree were completely unbalanced.

## KAryTree methods
### breadthFirstFind(value)
This method has an arity of 1.  It must be passed a value to find.
This method traverses the tree in a breadth first fashion, which means it will check all nodes in a level before moving down to the next level.  If the value is not found in the tree, null is returned.
The Big O of space for this method is O(n) because every node gets copied to the queue.
The Big O of time for this method is O(n) because it may have to traverse the entire tree to find the correct node.

### breadthFirstToString()
This method has an arity of 0 as it expects no arguments.
This method traverses the tree in a breadth-first order and adds the value of each element to a string.  Each value is followed by a new line.  The string is returned.
The Big O of space for this method is O(n) because every node gets copied to the queue.
The Big O of time for this method is O(n) because the entire tree is traversed.

### depthFirstToArray()
This method has an arity of 0 as it expects no arguments.
This method traverses the tree in a depth-first order and adds the value of each element to an array.  The array is returned.
The Big O of space for this method is O(n) because every node gets copied to the stack.
The Big O of time for this method is O(n) because the entire tree is traversed.
