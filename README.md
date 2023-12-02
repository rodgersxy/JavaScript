# JavaScript Async/Await Tutorial – Learn Callbacks, Promises, and Async/Await in JS by Making Ice Cream
---------------------------------------------------------------------------------------------------
## Synchronous vs Asynchronous JavaScript
-------------------------------------------

* Synchronous:  
*In a synchronous sytem, tasks are completed one after another. Assuming you have one hand and you need to complete 20 tasks, so you have to one task at a time.    

* Asynchronous:  
*In this system, tasks are completed independently. Using the same analogy, given 20 tasks, you have 20 hands, so each hand can do each task independently and at the same time.

## what is Callback?  
*When you nest a function inside another function as an argumement, that is called callback   

* callback  
```
function One () {
    //
}
funtion Two (call_one) {
    //
    call_one()
}
Two(One);
```

![ezi9ogz0ergprgkmu68a](https://github.com/rodgersxy/JavaScript/assets/47353893/9e12c497-5285-47ce-abd1-f38a94ea5415)


# Promises
<h4>Pending:</4> This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.   
<h4>Resolved:</h4> This means that your customer has received their food and is happy.   
<h4>Rejected:</h4> This means that your customer didn't receive their order and left the restaurant.  

------------------------------------------------------

```
// Pseudo code demonstrating Promises in JavaScript

// Step 1: Create a new Promise
let myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation, for example, fetching data from an API
  let success = true; // Assume success for this example

  if (success) {
    // If the operation is successful, call resolve
    resolve("Operation completed successfully");
  } else {
    // If the operation fails, call reject
    reject("Operation failed");
  }
});

// Step 2: Use the Promise

// Using .then() to handle success
myPromise.then((result) => {
  // Handle the successful result
  console.log(result);
}).catch((error) => {
  // Handle any errors
  console.error(error);
});

// In a real-world scenario, the asynchronous operation would take time,
// and the .then() and .catch() callbacks would be executed when the
// operation completes or encounters an error.

// Output:
// If the operation is successful, "Operation completed successfully" will be logged.
// If the operation fails, "Operation failed" will be logged.

```
