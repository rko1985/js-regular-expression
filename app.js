let re;
//literal characters
re = /hello/;
re = /hello/i;

//metacharacter symbols
re = /^h/i; //must start with
re = / world$/i; //must end with
re = /^hello$/i; //must begin and end with
re = /^h.llo$/i; //matches any ONE character
re = /h*llo$/i; //matches any character 0 or more times
re = /gre?a?y/i; //Optional character
re = /gre?a?y\?/i; //Escape character

//brackets [] - character sets
re = /gr[ae]y/i //must be an a or e
re = /[GF]ray/i //must be an a or e
re = /[^GF]ray/i //match anything except Go r F
re = /[A-Z]ray/ //match any uppercase letter
re = /[a-z]ray/ //match any lowercase letter
re = /[A-Za-z]ray/ //match any letter
re = /[0-9]ray/ //match any digit

//Braces {} - quantifiers
re = /Hel{2}o/i; //must occur exactly {m} amount of times
re = /Hel{2,4}o/i; //can have 2 -4 l's
re = /Hel{2,}o/i; // must occur at least 2 times

//Parentheses () - grouping
re = /^([0-9]x){3}$/;

//Shorthand character classes
re = /\w/; //word character - alphanumeric character or _
re = /\w+/; // + is one or more
re = /\W/; // Non-word character
re = /\d/; //matches any digit
re = /\d+/; //matches any digit 0 or more times
re = /\D/; //match any non-digit 
re = /\s/; //match whitespace
re = /\S/; //match non-whitespace
re = /Hell\b/i; //word boundary

//assertions
re = /x(?=y)/; //match x only if it's followed by y
re = /x(?!y)/; //match x only if it's NOT followed by y

const str = 'asdfasdgxsadgasdg';

//log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`)
    }
}

reTest(re, str);