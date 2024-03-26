var isValid = function(s) {
    const stack = [];
    
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in map) {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const top = stack.pop();
            if (char !== map[top]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// Example usage:
console.log(isValid("()"));      
console.log(isValid("()[]{}"));   
console.log(isValid("([)]"));    
console.log(isValid("{[]}"));