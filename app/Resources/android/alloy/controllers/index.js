function Controller() {
    function clickHH() {
        Titanium.UI.createAlertDialog({
            title: "Helpende hand",
            message: "Nou, gefeliciteerd hoor! succes ermee!"
        }).show();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        fullscreen: "true",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.image = Ti.UI.createImageView({
        id: "image",
        image: "/images/grandpa.jpg",
        width: "100%"
    });
    $.__views.__alloyId0.add($.__views.image);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        top: "0dp",
        color: "#a00",
        font: {
            fontSize: "24dp",
            fontWeight: "normal"
        },
        text: L("welcome"),
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Ik ben helpende hand",
        top: "30",
        width: "100%",
        height: "200",
        backgroundColor: "#008C00"
    });
    $.__views.__alloyId0.add($.__views.button);
    clickHH ? $.__views.button.addEventListener("click", clickHH) : __defers["$.__views.button!click!clickHH"] = true;
    $.__views.button2 = Ti.UI.createButton({
        id: "button2",
        title: "Ik ben oud",
        top: "10",
        width: "100%",
        height: "200",
        backgroundColor: "#4095EF"
    });
    $.__views.__alloyId0.add($.__views.button2);
    clickHH ? $.__views.button2.addEventListener("click", clickHH) : __defers["$.__views.button2!click!clickHH"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.addEventListener("open", function() {
        var activity = $.index.getActivity();
        var actionBar = activity.actionBar;
        actionBar && actionBar.hide();
    });
    $.index.open();
    __defers["$.__views.button!click!clickHH"] && $.__views.button.addEventListener("click", clickHH);
    __defers["$.__views.button2!click!clickHH"] && $.__views.button2.addEventListener("click", clickHH);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;