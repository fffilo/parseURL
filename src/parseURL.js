/**
 * Parse URL
 *
 * @param  {String} url
 * @return {Object}
 */
window.parseURL = function(url) {
    var el = document.createElement("a");
    el.href = url || document.location.href;

    var result = {
        href     : el.href,            // "http://domain.com:8080/path/to/somewhere/?foo=bar#hash"
        protocol : el.protocol,        // "http:"
        hostname : el.hostname,        // "domain.com"
        port     : el.port || "80",    // "8080"
        pathname : el.pathname,        // "/path/to/somewhere/"
        search   : el.search,          // "?foo=bar"
        data     : {},                 // { foo: "bar" }
        hash     : el.hash,            // "#hash"
        host     : el.host             // "domain.com:8080"
    }

    var arr = el.search.substring(1).split("&");
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) continue;

        var kvl = arr[i].split("=");
        var key = decodeURIComponent(kvl[0]);
        var val = decodeURIComponent(kvl.slice(1).join("="));

        result.data[key] = val;
    }

    return result;
}
