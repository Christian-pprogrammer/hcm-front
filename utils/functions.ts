import Router from "next/router";
import moment from "moment";
import { UrlObject } from "url";

import { doubleDecryption, doubleEncryption } from "./encryption-decryption";
import SortTables from "./sort-tables";

export const updateJavaScriptObject = (details1: any, details2: any) => {
    const outputObject: any = {};
    Object.keys(details1)
        .forEach(obj => outputObject[obj] =
            (details2.hasOwnProperty(obj) ? details2[obj] : details1[obj]));
    return outputObject;
}

export const dateFormat = (date: Date) => ({
    fromNow() {
        return moment(date).fromNow();
    },

    onlyDate() {
        return moment(date).format("MMM Do YY");
    }
});

export const find_date_difference = (date1: { getTime: () => number; }, date2: { getTime: () => number; }) => {
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return [Difference_In_Time, Difference_In_Days]
}

export const goto = (link: string | UrlObject) => (Router.push(link).then());

export const handleDoubleDecryptionPath = (encrypted: string, KEY: string) => {
    const decrypted = doubleDecryption(encrypted, KEY)
    if (!decrypted)
        Router.push("/404");
    else
        return decrypted

}

export const gotoPath = (path: any, id: string, addition: any) => {
    if (addition) {
        return { pathname: path, query: { subject: doubleEncryption(id), addition: addition } }
    } else {
        return { pathname: path, query: { subject: doubleEncryption(id) } }
    }
}


export const gotoPathDirect = (path: string, id: string, addition: any) => {
    return path + "/" + doubleEncryption(id)
}


export const gotoPathDirectCustomized = (path: any) => {
    return path
}

export function sortAlphabetically(data: any[], prop: string | number) {
    data.sort(function (a: { [x: string]: number; }, b: { [x: string]: number; }) {
        if (a[prop] < b[prop]) {
            return -1;
        }
        if (a[prop] > b[prop]) {
            return 1;
        }
        return 0;
    })

    return data;
}

export function openInNewTabWinBrowser(url: string | URL | undefined) {
    var win: any = window.open(url, '_blank');
    win.focus();
}

export const filterData = (array: any, prop: string | number, val: any) => {
    const arr = [...array];


    if (val === 'ALL') return arr;


    if (val.constructor === Array)
        return arr.filter((item) => {
            return val.includes(item);
        });


    return arr.filter((item) => {
        return item[prop] === val
    });
}

export const isThisFormValid = (form: { [x: string]: any; }) => {
    let keys = Object.keys(form)
    for (const key of keys) if (!form[key]) return false
    return true
}

export const sortData = (data: any, prop: string | number, order: any) => {
    const copy = [...data];

    const structured = copy.map(item => {
        return {
            id: item['_id'],
            value: item[prop]
        };
    });

    return SortTables(structured, copy, order);
}

export const splitArray = (array: any, chunks = 2) => {
    const items = [...array];

    const split: any = [[], []]

    const per = Math.ceil(items.length / 2)

    for (let i = 0; i < chunks; i++) {
        for (let j = 0; j < per; j++) {
            const value = items[j + i * per]
            if (!value) continue
            split[i].push(value);
        }
    }

    return split;
}

export const toDate = (timestamp: any) => {
    return (new Date(parseInt(timestamp)))
}

export const getFormattedDate = (date: Date) => {
    return dateFormat(date).onlyDate()
}
