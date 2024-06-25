var appendCharacters = function(s, t) {

    i=0;j=0;

    while(i<s.length && j<t.length)
        {
            if(s[i] == t[j])
                j++;
            i++;
        }
    return t.length - j;
 };
 var x = appendCharacters("abcde","a");
 console.log(x);
 