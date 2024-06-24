var scoreOfString = function(s) {
    let sum=0;
    for(let i = 1;i<s.length;i++)
    { 
        let t = (s.charCodeAt(i)-s.charCodeAt(i-1));
        if(t<0)
            t=t*(-1);
        sum = sum+t;
        
    }
    return  sum;
    
};

console.log(scoreOfString("hello"));
console.log(scoreOfString("zaz"));