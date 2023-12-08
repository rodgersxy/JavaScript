# Asynchronous

* Timeouts and Intervals
* Callbacks
* Promises
* async await
* Event Loop


## Timeouts and Intervals

Timeouts and intervals are two asynchronous techniques used in JavaScript to execute code after a specified delay.  

### Timeouts:
 A timeout is a function that is scheduled to execute after a specified amount of time has elapsed. It is typically used to delay a specific action or to perform a task after an event has occurred. 

 ```
 setTimeout(function() {
  console.log("This message will be displayed after 5 seconds");
}, 5000);
 ``` 
 ### Intervals: 
 An interval is a function that is scheduled to execute repeatedly at a specified interval. It is typically used to perform a task periodically.

 ```
 setInterval(function() {
  console.log("This message will be displayed every 2 seconds");
}, 2000);
 ```

Both timeouts and intervals are non-blocking, meaning that they allow other code to continue executing while the timer is running. This is important for maintaining a responsive user interface.   

# Callback function

Any function that is passed as an argument to another function is called a ```callback function in JavaScript```

```
function getData(callback) {
  setTimeout(function() {
    var data = { name: "John Doe", age: 30 };
    callback(data);
  }, 500);
}

getData(function(data) {
  console.log("Data received:", data);
});
```

In this example, the getData function takes a callback function as an argument. The callback function is called after 500 milliseconds, passing the retrieved data as an argument.  

# Promises

Promises are a more structured way to handle asynchronous operations in JavaScript. They provide a way to chain together multiple asynchronous tasks and to handle errors that may occur during execution.   


```
function getData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var data = { name: "Jane Doe", age: 25 };
      resolve(data);
    }, 500);
  });
}

getData().then(function(data) {
  console.log("Data received:", data);
}).catch(function(error) {
  console.error("Error:", error);
});
```
In this example, the getData function returns a promise. The then method is used to handle the successful completion of the promise, and the catch method is used to handle any errors that occur.   