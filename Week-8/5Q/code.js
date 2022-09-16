/* 
space complexity O(n).
time complexity O(n).

*/

var findJudge = function(N, trust) {
    let length = trust.length;
    if (!length) {
        return 1;
    };
    let hash = {};
    let hash2 = {};
    
    for (let i = 0; i < length; i++) {
        let man = trust[i];
        hash2[man[0]] = true;
        if (hash[man[1]]) {
            hash[man[1]] += 1;
        } else {
            hash[man[1]] = 1;
        };
    };
    for (let i in hash) {
        if (hash[i] == N - 1 && !hash2[i]) {
            return i;
        };
    };
    return -1;
};