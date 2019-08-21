export class Utils {

    /**
     * @param val Check for null Object
     */
    public static isObject(val) {
        if (val === null) {
            return false;
        }
        return ((typeof val === 'function') || (typeof val === 'object'));
    }

    /**
     * Parse JSON string
     */
    public static parseJSON(data) {
        data = data || '';
        return JSON.parse(data);
    }

    /**
     * Check empty object
     */
    public static checkEmptyObject(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Check if the string is empty or null
     */
    public static checkNotNullAndNotEmpty(data: any) {
        if (data !== null && data !== '') {
            return true;
        }
        return false;
    }

    /**
      * Check if the variable is undefined
      */
    public static isUndefined(data: any) {

        if (data === 'undefined') {
            return true;
        }
        return false;
    }


    /**
      * Searches for a given substring
      */
    public static contains(str:  string, substring:  string, fromIndex:  number) {
        return str.indexOf(substring, fromIndex) !== -1;
    }

    /**
      * "Safer" String.toLowerCase()
      */
     public static lowerCase(str: string) {
        return str.toLowerCase();
    }

    /**
     * "Safer" String.toUpperCase()
     */
    public static upperCase(str: string) {
        return str.toUpperCase();
    }

    /**
     * UPPERCASE first char of each word.
     */
    public static properCase(str: string) {
        return this.lowerCase(str).replace(/^\w|\s\w/g, this.upperCase);
    }

    /**
     * UPPERCASE first char of each sentence and lowercase other chars.
     */
    public static sentenceCase(str: string) {
        // Replace first char of each sentence (new line or after '.\s+') to
        // UPPERCASE
        return this.lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, this.upperCase);
    }

    /**
     * Is email?
     */
    public static isEmail(str: string) {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(str);
    }
}
