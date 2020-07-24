console.log("hi");
let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = -1;
let string = `
/*
        Hi,我是小汪
        一名前端工程师
        接下来我来演示一下我的前端功底

        首先我需要准备一个div
*/

#div{
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
}

/*把他变圆*/

#div{
  border-radius: 50%
}

/*填上太极色*/

#div{
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)
}

/*太极生两仪*/

#div::before {
  background-color: #fff
}
div::after {
  background-color: #000
}

/*两仪生八卦*/

#div::before {
  background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%)
}
div::after {
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%)}

/*让他动起来*/

#div{
  animation: rotate 2s infinite
}
`;

let str2 = "";
console.log(string.length);

let tt = function tt() {
  setTimeout(() => {
    n += 1;
    if (string[n] === "\n") {
      str2 += "<br>";
    } else if (string[n] === " ") {
      str2 += "&nbsp";
    } else {
      str2 += string[n];
    }

    if (n < string.length) {
      html.innerHTML = str2;
      style.innerHTML = string.substring(0, n + 1);
      scrollTo(0, 9999999);
      html.scrollTo(0, 9999999);
      tt();
    } else {
      return;
    }
  }, 40);
};

tt();

// let t = setInterval(function () {
//   n += 1;
//   if (n + 1 > string.length) {
//     clearInterval(t);
//   }
//   html.innerHTML = string.substring(0, n + 1);
//   console.log(n);
// }, 200);
