/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {

   const toSleep = new Promise(resolve => setTimeout(() => resolve(2),millis));
   return toSleep.then(result => {});
};

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */