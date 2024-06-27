var runningSum = function(nums) {
    let runningSum = new Array();
    let sum =0;
    for(i=0;i<nums.length;i++)
    {
        sum=sum+nums[i];
        runningSum[i] = sum;
    }

    return runningSum
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([10,80,31,4]));