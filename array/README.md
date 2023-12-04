# key data structures in JavaScript:

* Array:  

An ordered list of values where each element is identified by an index. Arrays are versatile and can old elements of different types.   

```
let myArray = [1, 'two', 3.0, { key: 'value' }];

```
* Object:

An unordered collection of key-value pairs, where keys are strings or symbols, and values can be of any data type.  

```
let myObject = { key1: 'value1', key2: 42, key3: ['a', 'b', 'c'] };

```
* Map:

A collection of key-value pairs where keys can be of any data type. Map provides methods for efficient key-based operations.   

```
let myMap = new Map();
myMap.set('name', 'John');
myMap.set('age', 30);

```

---------------------------------------------------------------------------------------------------
while both *objects and *maps are used for key-value pairs in JavaScript, maps provide more flexibility in terms of key types, maintain insertion order, and offer a built-in way to get the size. The choice between them depends on the specific requirements of your use case. If you need to work with arbitrary key types and maintain order, a map might be a better choice. If you primarily work with string keys and don't need to maintain order, an object may be more suitable.

-----------------------------------------------------------------------------------------------------


* Set:

A collection of unique values, where each value must be unique within the set.   

```
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // Won't be added, as 1 is already in the set
```
* String:

A primitive data type that represents a sequence of characters.   

```
let myString = 'Hello, World!';
```
* Typed Arrays:

Arrays with elements of a specific data type, providing a way to work with raw binary data in a more structured manner.   
```
let intArray = new Int32Array([1, 2, 3, 4]);
```
