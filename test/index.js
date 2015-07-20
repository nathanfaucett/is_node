var tape = require("tape"),
    isNode = require("../src/index");


tape("isNode(value: Any) should return true when the value is a Node", function(assert) {
    assert.equal(isNode({
        nodeName: "div",
        nodeType: 3
    }), true);
    assert.end();
});
