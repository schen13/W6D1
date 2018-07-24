function sum() {
  let sum = 0;
  let arr = Array.from(arguments);
  arr.forEach((el) => sum = sum + el);
  return sum;
}

function sum2(...args) {
  let sum = 0;
  args.forEach((el) => sum = sum + el);
  return sum;
}

// console.log(sum2(1,2,3,4));
// console.log(sum2(1,2,3,4,5));

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

Function.prototype.myBind = function(ctx) {
  let args = Array.from(arguments).slice(1);
  const myFunc = this;
  // return () => this.apply(ctx, args.concat(Array.from(arguments)));
  const callargs = function() {
    let args2 = Array.from(arguments);
    return myFunc.apply(ctx, args.concat(args2));
  }; return callargs;
};


function stephCurry(numArgs) {
  let result = [];
    const _stephCurry = function(num) {
      result.push(num);
      console.log(result);
      if (result.length === numArgs) {
        return result.reduce((acc, el) => acc + el);
      } else {
        return _stephCurry;
      }
    };
  return _stephCurry;
}

Function.prototype.stephCurry = function(numArgs) {
  let result = [];
  const idk = this;
  const _stephCurry = function(num) {
    result.push(num);
    if (result.length === numArgs) {
      return idk.apply(null, result);
    } else {
      return _stephCurry;
    }
  };
  return _stephCurry;
};

Function.prototype.stephCurry = function(numArgs) {
  let result = [];
  const idk = this;
  const _stephCurry = function(num) {
    result.push(num);
    if (result.length === numArgs) {
      return idk(...result);
    } else {
      return _stephCurry;
    }
  };
  return _stephCurry;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.stephCurry(3)(3)(4)(5));
