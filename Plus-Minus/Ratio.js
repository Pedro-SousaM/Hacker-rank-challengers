function plusMinus(arr) {
    const list = arr
        let positive = 0 
        let neuter = 0 
        let negative = 0
        for(var numb of list){
            if(numb>0){positive++} 
            else if(numb<0){negative++} 
            else{neuter++}
        } 
        console.log((positive/list.length).toFixed(6))
        console.log((negative/list.length).toFixed(6)) 
        console.log((neuter/list.length).toFixed(6))

}
