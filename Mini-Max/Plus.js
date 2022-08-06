function miniMaxSum(arr) {
    let menor = Infinity
    let maior = -Infinity
    for (var numb of arr){
        if(numb<menor){
             menor=numb 
        } 
        if(numb>maior){
            maior=numb
        }
       
    } 
    function r(numb, nevermind){return numb+nevermind}
    console.log(arr.reduce(r, 0)-maior, arr.reduce(r, 0)-menor )
}
