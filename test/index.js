var tape = require("tape"),
    isFunction = require("@nathanfaucett/is_function"),
    isNode = require("../src/index");


tape("isNode(value: Any) should return true when the value is a Node", function(assert) {
    var node;

    if (typeof(Node) !== "undefined" && isFunction(Node)) {
        node = document.createElement("div");
        assert.equal(isNode(node), true);
    } else {
        assert.equal(isNode({
            nodeName: "div",
            nodeType: 1
        }), true);
    }

    assert.end();
});
