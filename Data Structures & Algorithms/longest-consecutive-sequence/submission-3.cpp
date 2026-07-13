class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        unordered_set<int> dcm(nums.begin(),nums.end());
        int ans=0;
        for(auto x:dcm){
            if(!dcm.count(x-1)){
                int len=1;
                int y=x;
                while(dcm.count(y+1)){
                    y++;
                    len++;
                }
                ans=max(ans,len);
            }
        }
        return ans;
    }
};
