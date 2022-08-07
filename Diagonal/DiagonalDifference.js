function diagonalDifference(arr) {
    const l = arr.length-1
    let X1numbers = null 
    let X2numbers = null
    for(var x=0;x<=l; x++ ){
         X1numbers += arr[x][x] 
         X2numbers += arr[x][l-x] 
    } 
    const check = [X1numbers, X2numbers] 
    function compare(a,b){
        if(a>b)return 1; 
        if(a<b)return -1; 
        return 0
    }
    const progressive = check.sort(compare) 
    return progressive[1]-progressive[0]

}
