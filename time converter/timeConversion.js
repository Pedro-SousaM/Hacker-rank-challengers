function timeConversion(s) {
     Write your code here
    if(s.slice(-2)==PM&&Number(s.slice(0,2))=12){
        return s.slice(0,8)
    }
    else if(s.slice(-2)==PM){
      return  Number(s.slice(0,2))+12 + s.slice(2,8)
    }else if(s.slice(0,2)==12){
        return 00+s.slice(2,8)
    }else {
        return s.slice(0,8)
    }
} 
