var createCounter = function(init) {
    r = init;
    function increment()
    {
        init++;
        return init;

    }

    function decrement()
    {
        init--;
        return init;

    }

    function reset()
    {
        init = r;
        return init;

    }

   return {
    increment, decrement, reset
   }
    
};


 const counter = createCounter(5)
 console.log(counter.increment()); // 6
 console.log(counter.reset()); // 5
 console.log(counter.decrement()); // 4
 