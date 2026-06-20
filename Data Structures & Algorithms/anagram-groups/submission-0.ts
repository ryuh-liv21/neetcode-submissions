class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
const mp= new Map<string,string[]>();
for(let i=0;i<strs.length;i++){
    let huy=strs[i].split("").sort().join("");
    if(!mp.has(huy)){
        mp.set(huy,[]);
    }
    mp.get(huy)!.push(strs[i]);
}
return Array.from(mp.values());
    }
}
