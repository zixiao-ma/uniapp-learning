export function uniToPromise(method='request',options={}){
  return new Promise((resolve,reject)=>{
    options.success = resolve;
    options.fail = reject
    uni[method](options)
  })
}