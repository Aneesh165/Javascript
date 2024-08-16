
    let nums = [-1,-1,2,-4,2];
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    console.log(result);
     
    // let n=nums.length;
    // if(n==1){
    //     console.log(nums[0])
    // }
    // if(n==3){
    //     let num=nums.sort((a,b)=>a-b)
    //     let last=num.reduce((a,b)=>a.num!=b.num?b:a)
    //     console.log(last);

    // }
    
    // if(n>3){
    //     let sorted=nums.sort((a,b)=>a-b)
    //     let output=sorted.reduce((a,b)=>a.sorted!=b.sorted?a:b)
    //     console.log(sorted);
    //     console.log(output);

    // }       

