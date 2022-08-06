import { AES } from 'crypto-js';

export const GLOBAL_KEY = "****HCM&342FASfa$2384034&23#@$%34****"
const GLOBAL_KEY_SIMPLE = "****LINK_ADDRESS_ENCRYPTION####**123";

export const encryptText = (text: String) => {
    return AES.encrypt(text, GLOBAL_KEY).toString();
};