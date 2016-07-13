var isString = require("@nathanfaucett/is_string"),
    isNullOrUndefined = require("@nathanfaucett/is_null_or_undefined"),
    isNumber = require("@nathanfaucett/is_number"),
    isFunction = require("@nathanfaucett/is_function");


var isNode;


if (typeof(Node) !== "undefined" && isFunction(Node)) {
    isNode = function isNode(value) {
        return value instanceof Node;
    };
} else {
    isNode = function isNode(value) {
        return (!isNullOrUndefined(value) &&
            isNumber(value.nodeType) &&
            isString(value.nodeName)
        );
    };
}


module.exports = isNode;
