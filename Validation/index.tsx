// Custom trim function to remove leading and trailing whitespaces
const customTrim = (str) => {
    return str.replace(/^\s+|\s+$/g, '');
};

// Email validation function using the custom trim
export const isEmailValid = (email) => {
    let pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Use customTrim
    return pattern.test(String(customTrim(email)).toLowerCase());
};

export const VPasswordCheck = (Password: string) => {
    if (Password.length >= 6) {
        return true;
    }
    return false;
};
