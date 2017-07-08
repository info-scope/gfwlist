var fs = require('fs');
fs.readFile("gfwlist.txt", function(e1, t1) {
    fs.readFile("gfwlist.ext", function(e2, t2) {
        var gfwlist = new Buffer(t1.toString(), "base64").toString();
        var gfwlistExt = t2.toString();
        var gfwlistMerge = gfwlist + "\n" + gfwlistExt
        fs.writeFile("gfwlist.merge", new Buffer(gfwlistMerge).toString("base64"), function(e3) {
            console.info("done");
        });
    });
});