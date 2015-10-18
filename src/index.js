var isString = require("is_string"),
    isNullOrUndefined = require("is_null_or_undefined"),
    isNumber = require("is_number"),
    isFunction = require("is_function");


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
