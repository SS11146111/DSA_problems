var filter = function(arr, fn) {
    
    newArr = []
    for(i=0;i<arr.length;i++)
    {
        if(fn(arr[i],i) === true)
            newArr.push(arr[i]);
    }

    return newArr;
};