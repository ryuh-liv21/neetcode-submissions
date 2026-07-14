class Solution {
public:
    bool isPalindrome(string s) {
        string ss = "";

        for (int i = 0; i < s.length(); i++) {
            if (isalnum(s[i])) {
                ss += tolower(s[i]);
            }
        }

        for (int i = 0; i < ss.length() / 2; i++) {
            if (ss[i] != ss[ss.length() - 1 - i]) {
                return false;
            }
        }

        return true;
    }
};