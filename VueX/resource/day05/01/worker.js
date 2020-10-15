this.addEventListener('message',(e) => {
   let numberVal = parseInt(e.data);
   let sum = 0;
   for (let n =0;n<=numberVal;n++) {
     sum += n;
   }
   this.postMessage(sum)
})