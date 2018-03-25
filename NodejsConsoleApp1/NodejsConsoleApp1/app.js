'use strict';

//var o = new Object();

//var p = new Array();
//p.push(12);
//p.push(113);

//console.log(p.length);

function Student(name) {
    this.name = name;
}

Student.prototype.getName = function () {
    console.log("my name is " + this.name);
};
var y = new Student("yishan");
for (var name in y) {
    console.log(name);
}

//console.log(Student.prototype);

//var y = new Student("yishan");
//y.getName = function () {
//    console.log("cat");
//};

//console.log(y.getName());
//console.log(y.__proto__);

//function Name() {
//    console.log("yishan");
//}

//name();
//console.log(name);



var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if(i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};

var reverse = function (x) {
    var input = x.toString();
    var resultString = input.split("").reverse().join("");
    if (resultString[resultString.length - 1] === "-") {
        resultString = resultString.substring(0, resultString.length - 1);
        resultString = "-" + resultString;
    }

    var result = parseInt(resultString);

    if (Math.abs(result) > Math.pow(2, 31) - 1) {
        return 0;
    }

    return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(-2147483648));