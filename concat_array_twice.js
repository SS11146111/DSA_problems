const a = [1,2,3,4];

let len = a.length;

for(let i=0;i<len;i++)
    {
        a[len+i] = a[i];
    }

for(let i=0;i<a.length;i++)
    console.log(a[i]);
