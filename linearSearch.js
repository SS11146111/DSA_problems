const target = 78;

const arr = [12,5,6,9,7];

l = arr.length;

const result = linearSearch(arr, target);

function linearSearch(arr,target)
{
    for(i=0;i<l;i++)
        {
            if(arr[i]==target)
                 return `Element found at position ${i+1}`;
    
        }
    
    if(i==l)
        {
            return "Element not found";
        }
}

console.log(result);
