function checkSyntax() {
    const code = document.getElementById("codeInput").value;
    const stack = [];
    const pairs = {
      ")": "(",
      "}": "{",
      "]": "["
    };
  
    for (let ch of code) {
      if (["(", "{", "["].includes(ch)) {
        stack.push(ch);
      } else if ([")", "}", "]"].includes(ch)) {
        if (stack.pop() !== pairs[ch]) {
          document.getElementById("result").innerHTML = 
            "<span class='invalid'>❌ Invalid Syntax: Mismatched or Extra Closing Symbol</span>";
          return;
        }
      }
    }
  
    if (stack.length === 0) {
      document.getElementById("result").innerHTML = 
        "<span class='valid'>✅ Syntax is Valid!</span>";
    } else {
      document.getElementById("result").innerHTML = 
        "<span class='invalid'>❌ Invalid Syntax: Missing Closing Symbol</span>";
    }
  }
  