/**
* Problem: Counter

* Description:
* Given an integer n, return a counter function. This counter function initially returns n
* then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 
* Approach:
- solving this problem relies on one of the most famous concepts which is closure.
- creating a function counter passing n as a parameter.
- retunrn a function this function returns the n value increased by 1 in each call.

* Time & space Complexity:
- Time Complexity is O(1) as no input size here adding 4 as adding 1000 is the same a it is just a calculations
- Time Function: => 1 + 1 = O(1) Constant

- Space Complexity is O(1) as we just initilaize one variable(int) and pass it the param(n) 
**/

// Solution Code //

function counter(n) {
    let int = n
    return function () {
        return int++
    }
}

let result = counter(4);
result()
result()
result()



