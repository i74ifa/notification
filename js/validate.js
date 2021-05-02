class Validate {
    constructor() {
        this.ExUpper = 'A-Z';
    }
    /**
     * english characters  with underscore and point
     *
     * @param string value
     * @param integer length = 0
     */
    isEnglish(value, length = 0, upper = true) {
        var TOrF;
        var ExUpper = upper ? this.ExUpper : null
        var pat = `^([a-z${ExUpper}0-9- \s]{${length},})*$`;
        pat = new RegExp(pat)
        pat.exec(value) ? (TOrF = true) : (TOrF = false);
        return TOrF;
    }
    /**
     * Arabic characters  with underscore and point
     *
     * @param string value
     * @param integer length = 0
     */
    isArabic(value, length = 0) {
        var TOrF;
        var leng;
        var pat = /^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF - \s]*$/
        leng = value.length >= length;
        pat.exec(value) ? (TOrF = true) : (TOrF = false);
        console.log(leng);
        return (TOrF, leng) ?? false;
    }
    isUsername(value, length = 0, upper = true) {
        var TOrF;
        var ExUpper = upper ? this.ExUpper : null
        var pat = `^([a-z${ExUpper}0-9-_.]{${length},})*$`;
        pat = new RegExp(pat)
        pat.exec(value) ? (TOrF = true) : (TOrF = false);
        return TOrF;
    }
    isEmail(value, upper = false) {
        var TOrF;
        var ExUpper = upper ? this.ExUpper : ''

        var pat = `^([a-z${ExUpper}0-9_.\-]{2,})(@)([a-z${ExUpper}0-9_.-]{1,})(\\.{1})([a-z${ExUpper}0-9_.-]{1,})*$`;
        pat = new RegExp(pat)
        pat.exec(value) ? (TOrF = true) : (TOrF = false);
        return TOrF;
    }
    isInteger(value) {
        return value.isInteger();
    }
}
