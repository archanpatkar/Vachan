const v = require("../vachan");
const promisesAplusTests = require("promises-aplus-tests");

function deferred()
{
    let p = new v.P();
    return {
        promise:p,
        resolve:(v) => p.resolve(v),
        reject:(v) => p.reject(v)
    };
}

const adapter = {};
adapter.resolved = v.P.resolve;
adapter.rejected = v.P.reject;
adapter.deferred = deferred;

promisesAplusTests(adapter, (err) => {});