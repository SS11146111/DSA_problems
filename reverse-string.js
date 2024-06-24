let s = ['h','e','l','l','o'];
let h = ['h','a','n','n','a','h'];

var reverseString = function(s) {
    for(let i=0;i<s.length/2;i++)
    {
        let t = s[i];
        s[i] = s[s.length-i-1];
        s[s.length-i-1] = t;
    }
   console.log(s);
};

reverseString(s);
reverseString(h);
