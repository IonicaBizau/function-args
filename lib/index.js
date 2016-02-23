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
      , arrowIndex = str.indexOf("=>")
      , paranIndex = str.indexOf("(")
      , paranEndIndex = str.indexOf(")") + 1
      , argsStr = ""
      , getArgs = _ => {
            if (argsStr.charAt(0) === "(") {
                argsStr = argsStr.slice(1, -1);
            }
            return argsStr.split(",").filter(x => x.trim());
        }

    // TODO Improve this. Contributions are welcome. :)
    if (~arrowIndex && (arrowIndex - paranIndex < 5 || !~paranIndex)) {
        argsStr = str.substring(0, arrowIndex).trim();
    } else {
        argsStr = str.substring(
            paranIndex,
            paranEndIndex
        );
    }

    return getArgs();
};
