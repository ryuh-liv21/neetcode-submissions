class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const b = new Set<number>();
for(let i=0;i<nums.length;i++){
b.add(nums[i]);
}
return b.size!==nums.length;
    }
}
