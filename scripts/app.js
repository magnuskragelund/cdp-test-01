var appInsights = window.appInsights || function (config) {
    function s(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } }
    var t = { config: config }, r = document, f = window, e = "script", n = r.createElement(e), i, u; for (n.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", r.getElementsByTagName(e)[0].parentNode.appendChild(n), t.cookie = r.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; i.length;)s("track" + i.pop());
    return config.disableExceptionTracking || (i = "onerror", s("_" + i), u = f[i], f[i] = function (config, r, f, e, n) { var s = u && u(config, r, f, e, n); return s !== !0 && t["_" + i](config, r, f, e, n), s }), t
}({
    instrumentationKey: "c3e291a5-1e64-42f9-aae0-1421afb145c4"
});

let testCustomEvent = { 
    name: "myCustomEvent", 
    user_Id: "preben-01",
    properties: { 
        customProperty1: "customValue1", 
        customProperty2: "customValue2" 
    } 
}

appInsights.trackEvent(testCustomEvent);