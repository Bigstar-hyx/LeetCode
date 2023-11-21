/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let record = new Array(26).fill(0)
    const base = 'a'.charCodeAt()
    for (let i = 0; i < s.length; i++) {
        record[s[i].charCodeAt() - base]++
    }
    for (let i = 0; i < t.length; i++) {
        if (!record[t[i].charCodeAt() - base]) return false
        record[t[i].charCodeAt() - base]--
    }
    if (t.length !== s.length) return false
    return true
};