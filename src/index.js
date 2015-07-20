var isFunction = require("is_function");


var isNode;


if (typeof(Node) !== "undefined" && isFunction(Node)) {
    isNode = function isNode(value) {
        return value instanceof Node;
    };
} else {
    isNode = function isNode(value) {
        return (
            typeof(value) === "object" &&
            typeof(value.nodeType) === "number" &&
            typeof(value.nodeName) === "string"
        );
    };
}


module.exports = isNode;
