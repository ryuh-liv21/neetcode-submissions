class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

    const freq = new Map<number, number>();

    for(const num of nums){
        freq.set(
            num,
            (freq.get(num) || 0) + 1
        );
    }

    const bucket:number[][] =
        Array.from(
            {length: nums.length + 1},
            ()=>[]
        );

    for(const [num,count] of freq){
        bucket[count].push(num);
    }

    const ans:number[] = [];

    for(
        let i = bucket.length - 1;
        i >= 0;
        i--
    ){
        for(const num of bucket[i]){

            ans.push(num);

            if(ans.length === k){
                return ans;
            }
        }
    }

    return ans;
}
    }

