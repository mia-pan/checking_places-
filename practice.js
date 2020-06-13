var kLengthApart = (nums, k) => {
    let prevOne = nums.indexOf(1);
    let temp = prevOne;
    for(let i=temp+1; i < nums.length; i++) {

        if(nums[i] == 1 ) {
            if((i-prevOne-1) < k) {
                return false;
            } else {
                prevOne = i;
            }
        }
    }

    return true;
}



var dailyTemperatures = function(T) {
    let res = [];
    for(let i = 0; i < T.length-1; i++){
        let count = 1;
        for(let j = i+1; j<T.length; j++){   
            if(T[i] < T[j]){
             res.push(count);
             break;
            }
            count++;
            if(j==T.length-1) res.push(0)
        }
    }
    if(T.length > 0) res.push(0);
    return res;
};