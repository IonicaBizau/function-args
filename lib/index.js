"use strict";

/**
 * functionArgs
 * Extract the function argument names.
 *
 * @name functionArgs
 * @function
 * @param {Function} fn The function value.
 * @return {Array} The function arguments as array.
 */
module.exports = function functionArgs (fn) {
    if (typeof fn !== "function") {
        return [];
    }
    let str = fn.toString()
      , index = null
      , argsStr = ""
      ;

    let split = x => x.split(",");

    let getArgs = _ => {
        if (argsStr.charAt(0) === "(") {
            argsStr = argsStr.slice(1, -1);
        }
        return split(argsStr).filter(x => x.trim());
    }

    if (~(index = str.indexOf("=>"))) {
        argsStr = str.substring(0, index).trim();
    } else {
        argsStr = str.substring(
            str.indexOf("("),
            str.indexOf(")") + 1
        );
    }

    return getArgs();
};
