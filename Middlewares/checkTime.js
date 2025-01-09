function checkTime(req,res,next) {
const now =new Date();
const nowText = now.toLocaleString();
console.log(nowText);

  next();  
}

module.exports = checkTime;