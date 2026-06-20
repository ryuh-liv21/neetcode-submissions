class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res= new Array(nums.length+1).fill(1);
         const ress= new Array(nums.length+1).fill(1);
         const huy=nums.length;
         let huy1=1,huy2=1;
         for (let i=huy-1;i>=0;i--){
            huy1*=nums[i];
            res[i]=huy1;
         }
         for (let i=0;i<huy;i++){
            huy2*=nums[i];
            ress[i]=huy2;
         }
         const kq:number[]=[];
         kq.push(res[1]);
         for(let i=1;i<huy-1;i++){
            kq.push(res[i+1]*ress[i-1]);
         }
         kq.push(ress[huy-2]);
         return kq;
    }
}
