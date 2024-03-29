let context = {};

function delegateSet(property,name){
    context.__defineSetter__(name,function(val){
        this[property][name] = val;
    })
}

function delegateGet(property,name){
    context.__defineGetter__(name,function(val){
        return this[property][name]
    })
}


let requestSet =[];
let requestGet = ["query"];
let responseSet = ["body","status"];
let responseGet = responseSet


requestSet.forEach(ele => {
    delegateSet('request', ele);
})

requestGet.forEach(ele => {
    delegateGet('request',ele)
})

responseSet.forEach(ele => {
    delegateSet('response',ele)
})

responseGet.forEach(ele => {
    delegateGet('response',ele)
})

module.exports = context;
