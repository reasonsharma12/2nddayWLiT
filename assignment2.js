function findLargeNum(arr){
    if(arr.length==0){
        return null;
    }
    let large=arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]>large){
            large=arr[i];
        }
    }
    return large;
}
