function foo(msg)
{
    var wc = msg.payload.split(" ").length;
    console.log("wc:", wc);
    return { wc: wc};
}
function main(msg)
{
    return foo(msg);
}

module.exports.main = main;
