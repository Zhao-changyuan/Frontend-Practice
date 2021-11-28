System.register(["mod"], function (exports_1, context_1) {
    "use strict";
    var m, t;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (m_1) {
                m = m_1;
            }
        ],
        execute: function () {
            exports_1("t", t = m.something = 1);
        }
    };
});
