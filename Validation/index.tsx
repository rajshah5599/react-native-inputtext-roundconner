import { trim } from 'lodash'

export const isEmailValid = (email: string) => {
    let pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(String(trim(email)).toLowerCase())
}

export const VPasswordCheck = (Password: string) => {
    if (Password.length >= 6) {
        return true;
    }
    return false;
};
