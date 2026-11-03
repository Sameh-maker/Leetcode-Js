
/**
* Problem: Sleep

* Description:
* Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
* It can resolve any value.

* Approach:
- solving this problem relies on asynchronouns concept.
- creating a function Sleep passing millis as a parameter.
- return a new promise which has the resolve function.
- set the time to return the resolve value after millis delay.
- use then() method to add the value we want it to resolve after the timeout.

* Time & space Complexity:
- Time Complexity is O(1) as no input size here or any repeated operations.

- Space Complexity is O(1) as there is no nothing to add in the memory or any type of ds.
**/


// Solution Code //

async function sleep(millis) {
    return new Promise((res) => setTimeout(res, millis))
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100