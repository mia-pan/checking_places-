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



//alice
var kLengthApart = function(nums, k) {
  
    //holds index of last "1"
    let prevOneIndex = -k
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
        const spaces_between = i - prevOneIndex
        if (spaces_between < k) {
          return false
        }
        prevOneIndex = i
      }
    }
    return true
  }
  
  let nums = [1,0,0,1,0,0,1]
  let k = 2
  kLengthApart(nums, k)
  
  //sean
  var kLengthApart = function(nums, k) {
      let z = k
      for (i of nums) {
          if (i === 1 && z < k) {
              return false 
          } else if (i === 1) {
              z = 0
          }
              z++
          }
      }
      return true
  };
  
  //tanner
  var kLengthApart = function(nums, k) {
      let i=k
      nums.forEach(num => {
          if(num===0) {++i}
          else {if(i<k) return false
          i=0}
      })
      return true
  };
  
  //josh
  var kLengthApart = function(nums, k) {
      let count = k
      for (num of nums) {
          if (num === 1 && count < k) return false
          num === 1 ? count = 0 : count++
      }
      return true
  };
  
  //Mia 
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