class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const mp = new Map<number, number>();

    for(let i = 0; i < nums.length; i++){
        const need = target - nums[i];

        if(mp.has(need)){
            return [mp.get(need)!, i];
        }

        mp.set(nums[i], i);
    }

    return [];
    }
}
