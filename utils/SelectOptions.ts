export interface ISelectData {
    value: string;
    text: string;
    id: number;
}
export const CategoryArr: ISelectData[] = [
    {
        value: "District Based",
        text: "District Based",
        id: 1
    },
    {
        value: "Referal",
        text: "Referal Based",
        id: 2
    }, {
        value: "Metropolitan",
        text: "Metropolitan Based",
        id: 3
    }, {
        value: "Centre de Sante",
        text: "Centre-de-Sante",
        id: 4
    },
]
export const HospitalValues: ISelectData[] = [
    {
        value: "CHUB",
        text: "CHUB",
        id: 1
    }, {
        value: "FAISAL",
        text: "FAISAL",
        id: 2
    }, {
        value: "CHUK",
        text: "CHUK",
        id: 3
    }
]
export const MapStatus: ISelectData[] = [
    {
        value: "Establishment Phase",
        text: "Establishment Phase",
        id: 0
    },
    {
        value: "Active",
        text: "Active",
        id: 1
    }, {
        value: "Pending",
        text: "Pending",
        id: 2
    }
];
export const NewUserStatusArr: ISelectData[] = [
    {
        value: "Establishment Phase",
        text: "Establishment Phase",
        id: 0
    },
    {
        value: "Active",
        text: "Active",
        id: 1
    }, {
        value: "Pending",
        text: "Pending",
        id: 2
    }
];
export const GenderOptions: ISelectData[] = [
    {
        value: "",
        text: "Select Gender",
        id: 0
    },
    {
        value: "MALE",
        text: "MALE",
        id: 1
    },
    {
        value: "FEMALE",
        text: "FEMALE",
        id: 2
    }
]
export const MessageType: ISelectData[] = [
    {
        value: "",
        text: "Select Message Template",
        id: 0
    }, {
        value: "Send-Appointment-Message",
        text: "Send Appointment Message",
        id: 1
    }, {
        value: "Reschedule-Appointment",
        text: "Reschedule Appointment",
        id: 2
    }, {
        value: "Cancelled-Appointment",
        text: "Cancelled Appointment",
        id: 3
    }, {
        value: "Reminder",
        text: "Reminder",
        id: 4
    }
];
export const CountrieListArr: {
    name: string;
    phone: string;
    code: string;
}[] = [{ "name": "Afghanistan", "phone": "+93", "code": "AF" }, { "name": "Albania", "phone": "+355", "code": "AL" }, { "name": "Algeria", "phone": "+213", "code": "DZ" }, { "name": "American Samoa", "phone": "+1684", "code": "AS" }, { "name": "Andorra", "phone": "+376", "code": "AD" }, { "name": "Angola", "phone": "+244", "code": "AO" }, { "name": "Anguilla", "phone": "+1264", "code": "AI" }, { "name": "Antarctica", "phone": "+672", "code": "AQ" }, { "name": "Antigua and Barbuda", "phone": "+1268", "code": "AG" }, { "name": "Argentina", "phone": "+54", "code": "AR" }, { "name": "Armenia", "phone": "+374", "code": "AM" }, { "name": "Aruba", "phone": "+297", "code": "AW" }, { "name": "Australia", "phone": "+61", "code": "AU" }, { "name": "Austria", "phone": "+43", "code": "AT" }, { "name": "Azerbaijan", "phone": "+994", "code": "AZ" }, { "name": "Bahamas", "phone": "+1242", "code": "BS" }, { "name": "Bahrain", "phone": "+973", "code": "BH" }, { "name": "Bangladesh", "phone": "+880", "code": "BD" }, { "name": "Barbados", "phone": "+1246", "code": "BB" }, { "name": "Belarus", "phone": "+375", "code": "BY" }, { "name": "Belgium", "phone": "+32", "code": "BE" }, { "name": "Belize", "phone": "+501", "code": "BZ" }, { "name": "Benin", "phone": "+229", "code": "BJ" }, { "name": "Bermuda", "phone": "+1441", "code": "BM" }, { "name": "Bhutan", "phone": "+975", "code": "BT" }, { "name": "Bolivia", "phone": "+591", "code": "BO" }, { "name": "Bonaire", "phone": "+5997", "code": "BQ" }, { "name": "Bosnia and Herzegovina", "phone": "+387", "code": "BA" }, { "name": "Botswana", "phone": "+267", "code": "BW" }, { "name": "Bouvet Island", "phone": "+47", "code": "BV" }, { "name": "Brazil", "phone": "+55", "code": "BR" }, { "name": "British Indian Ocean Territory", "phone": "+246", "code": "IO" }, { "name": "British Virgin Islands", "phone": "+1284", "code": "VG" }, { "name": "Brunei", "phone": "+673", "code": "BN" }, { "name": "Bulgaria", "phone": "+359", "code": "BG" }, { "name": "Burkina Faso", "phone": "+226", "code": "BF" }, { "name": "Burundi", "phone": "+257", "code": "BI" }, { "name": "Cambodia", "phone": "+855", "code": "KH" }, { "name": "Cameroon", "phone": "+237", "code": "CM" }, { "name": "Canada", "phone": "+1", "code": "CA" }, { "name": "Cape Verde", "phone": "+238", "code": "CV" }, { "name": "Cayman Islands", "phone": "+1345", "code": "KY" }, { "name": "Central African Republic", "phone": "+236", "code": "CF" }, { "name": "Chad", "phone": "+235", "code": "TD" }, { "name": "Chile", "phone": "+56", "code": "CL" }, { "name": "China", "phone": "+86", "code": "CN" }, { "name": "Christmas Island", "phone": "+61", "code": "CX" }, { "name": "Cocos [Keeling] Islands", "phone": "+61", "code": "CC" }, { "name": "Colombia", "phone": "+57", "code": "CO" }, { "name": "Comoros", "phone": "+269", "code": "KM" }, { "name": "Cook Islands", "phone": "+682", "code": "CK" }, { "name": "Costa Rica", "phone": "+506", "code": "CR" }, { "name": "Croatia", "phone": "+385", "code": "HR" }, { "name": "Cuba", "phone": "+53", "code": "CU" }, { "name": "Curacao", "phone": "+5999", "code": "CW" }, { "name": "Cyprus", "phone": "+357", "code": "CY" }, { "name": "Czech Republic", "phone": "+420", "code": "CZ" }, { "name": "Democratic Republic of the Congo", "phone": "+243", "code": "CD" }, { "name": "Denmark", "phone": "+45", "code": "DK" }, { "name": "Djibouti", "phone": "+253", "code": "DJ" }, { "name": "Dominica", "phone": "+1767", "code": "DM" }, { "name": "Dominican Republic", "phone": "+1809,1829,1849", "code": "DO" }, { "name": "East Timor", "phone": "+670", "code": "TL" }, { "name": "Ecuador", "phone": "+593", "code": "EC" }, { "name": "Egypt", "phone": "+20", "code": "EG" }, { "name": "El Salvador", "phone": "+503", "code": "SV" }, { "name": "Equatorial Guinea", "phone": "+240", "code": "GQ" }, { "name": "Eritrea", "phone": "+291", "code": "ER" }, { "name": "Estonia", "phone": "+372", "code": "EE" }, { "name": "Ethiopia", "phone": "+251", "code": "ET" }, { "name": "Falkland Islands", "phone": "+500", "code": "FK" }, { "name": "Faroe Islands", "phone": "+298", "code": "FO" }, { "name": "Fiji", "phone": "+679", "code": "FJ" }, { "name": "Finland", "phone": "+358", "code": "FI" }, { "name": "France", "phone": "+33", "code": "FR" }, { "name": "French Guiana", "phone": "+594", "code": "GF" }, { "name": "French Polynesia", "phone": "+689", "code": "PF" }, { "name": "French Southern Territories", "phone": "+262", "code": "TF" }, { "name": "Gabon", "phone": "+241", "code": "GA" }, { "name": "Gambia", "phone": "+220", "code": "GM" }, { "name": "Georgia", "phone": "+995", "code": "GE" }, { "name": "Germany", "phone": "+49", "code": "DE" }, { "name": "Ghana", "phone": "+233", "code": "GH" }, { "name": "Gibraltar", "phone": "+350", "code": "GI" }, { "name": "Greece", "phone": "+30", "code": "GR" }, { "name": "Greenland", "phone": "+299", "code": "GL" }, { "name": "Grenada", "phone": "+1473", "code": "GD" }, { "name": "Guadeloupe", "phone": "+590", "code": "GP" }, { "name": "Guam", "phone": "+1671", "code": "GU" }, { "name": "Guatemala", "phone": "+502", "code": "GT" }, { "name": "Guernsey", "phone": "+44", "code": "GG" }, { "name": "Guinea", "phone": "+224", "code": "GN" }, { "name": "Guinea-Bissau", "phone": "+245", "code": "GW" }, { "name": "Guyana", "phone": "+592", "code": "GY" }, { "name": "Haiti", "phone": "+509", "code": "HT" }, { "name": "Heard Island and McDonald Islands", "phone": "+61", "code": "HM" }, { "name": "Honduras", "phone": "+504", "code": "HN" }, { "name": "Hong Kong", "phone": "+852", "code": "HK" }, { "name": "Hungary", "phone": "+36", "code": "HU" }, { "name": "Iceland", "phone": "+354", "code": "IS" }, { "name": "India", "phone": "+91", "code": "IN" }, { "name": "Indonesia", "phone": "+62", "code": "ID" }, { "name": "Iran", "phone": "+98", "code": "IR" }, { "name": "Iraq", "phone": "+964", "code": "IQ" }, { "name": "Ireland", "phone": "+353", "code": "IE" }, { "name": "Isle of Man", "phone": "+44", "code": "IM" }, { "name": "Israel", "phone": "+972", "code": "IL" }, { "name": "Italy", "phone": "+39", "code": "IT" }, { "name": "Ivory Coast", "phone": "+225", "code": "CI" }, { "name": "Jamaica", "phone": "+1876", "code": "JM" }, { "name": "Japan", "phone": "+81", "code": "JP" }, { "name": "Jersey", "phone": "+44", "code": "JE" }, { "name": "Jordan", "phone": "+962", "code": "JO" }, { "name": "Kazakhstan", "phone": "+76,77", "code": "KZ" }, { "name": "Kenya", "phone": "+254", "code": "KE" }, { "name": "Kiribati", "phone": "+686", "code": "KI" }, { "name": "Kosovo", "phone": "+377,381,383,386", "code": "XK" }, { "name": "Kuwait", "phone": "+965", "code": "KW" }, { "name": "Kyrgyzstan", "phone": "+996", "code": "KG" }, { "name": "Laos", "phone": "+856", "code": "LA" }, { "name": "Latvia", "phone": "+371", "code": "LV" }, { "name": "Lebanon", "phone": "+961", "code": "LB" }, { "name": "Lesotho", "phone": "+266", "code": "LS" }, { "name": "Liberia", "phone": "+231", "code": "LR" }, { "name": "Libya", "phone": "+218", "code": "LY" }, { "name": "Liechtenstein", "phone": "+423", "code": "LI" }, { "name": "Lithuania", "phone": "+370", "code": "LT" }, { "name": "Luxembourg", "phone": "+352", "code": "LU" }, { "name": "Macao", "phone": "+853", "code": "MO" }, { "name": "Madagascar", "phone": "+261", "code": "MG" }, { "name": "Malawi", "phone": "+265", "code": "MW" }, { "name": "Malaysia", "phone": "+60", "code": "MY" }, { "name": "Maldives", "phone": "+960", "code": "MV" }, { "name": "Mali", "phone": "+223", "code": "ML" }, { "name": "Malta", "phone": "+356", "code": "MT" }, { "name": "Marshall Islands", "phone": "+692", "code": "MH" }, { "name": "Martinique", "phone": "+596", "code": "MQ" }, { "name": "Mauritania", "phone": "+222", "code": "MR" }, { "name": "Mauritius", "phone": "+230", "code": "MU" }, { "name": "Mayotte", "phone": "+262", "code": "YT" }, { "name": "Mexico", "phone": "+52", "code": "MX" }, { "name": "Micronesia", "phone": "+691", "code": "FM" }, { "name": "Moldova", "phone": "+373", "code": "MD" }, { "name": "Monaco", "phone": "+377", "code": "MC" }, { "name": "Mongolia", "phone": "+976", "code": "MN" }, { "name": "Montenegro", "phone": "+382", "code": "ME" }, { "name": "Montserrat", "phone": "+1664", "code": "MS" }, { "name": "Morocco", "phone": "+212", "code": "MA" }, { "name": "Mozambique", "phone": "+258", "code": "MZ" }, { "name": "Myanmar [Burma]", "phone": "+95", "code": "MM" }, { "name": "Namibia", "phone": "+264", "code": "NA" }, { "name": "Nauru", "phone": "+674", "code": "NR" }, { "name": "Nepal", "phone": "+977", "code": "NP" }, { "name": "Netherlands", "phone": "+31", "code": "NL" }, { "name": "New Caledonia", "phone": "+687", "code": "NC" }, { "name": "New Zealand", "phone": "+64", "code": "NZ" }, { "name": "Nicaragua", "phone": "+505", "code": "NI" }, { "name": "Niger", "phone": "+227", "code": "NE" }, { "name": "Nigeria", "phone": "+234", "code": "NG" }, { "name": "Niue", "phone": "+683", "code": "NU" }, { "name": "Norfolk Island", "phone": "+672", "code": "NF" }, { "name": "North Korea", "phone": "+850", "code": "KP" }, { "name": "North Macedonia", "phone": "+389", "code": "MK" }, { "name": "Northern Mariana Islands", "phone": "+1670", "code": "MP" }, { "name": "Norway", "phone": "+47", "code": "NO" }, { "name": "Oman", "phone": "+968", "code": "OM" }, { "name": "Pakistan", "phone": "+92", "code": "PK" }, { "name": "Palau", "phone": "+680", "code": "PW" }, { "name": "Palestine", "phone": "+970", "code": "PS" }, { "name": "Panama", "phone": "+507", "code": "PA" }, { "name": "Papua New Guinea", "phone": "+675", "code": "PG" }, { "name": "Paraguay", "phone": "+595", "code": "PY" }, { "name": "Peru", "phone": "+51", "code": "PE" }, { "name": "Philippines", "phone": "+63", "code": "PH" }, { "name": "Pitcairn Islands", "phone": "+64", "code": "PN" }, { "name": "Poland", "phone": "+48", "code": "PL" }, { "name": "Portugal", "phone": "+351", "code": "PT" }, { "name": "Puerto Rico", "phone": "+1787,1939", "code": "PR" }, { "name": "Qatar", "phone": "+974", "code": "QA" }, { "name": "Republic of the Congo", "phone": "+242", "code": "CG" }, { "name": "Romania", "phone": "+40", "code": "RO" }, { "name": "Russia", "phone": "+7", "code": "RU" }, { "name": "Rwanda", "phone": "+250", "code": "RW" }, { "name": "Réunion", "phone": "+262", "code": "RE" }, { "name": "Saint Barthélemy", "phone": "+590", "code": "BL" }, { "name": "Saint Helena", "phone": "+290", "code": "SH" }, { "name": "Saint Kitts and Nevis", "phone": "+1869", "code": "KN" }, { "name": "Saint Lucia", "phone": "+1758", "code": "LC" }, { "name": "Saint Martin", "phone": "+590", "code": "MF" }, { "name": "Saint Pierre and Miquelon", "phone": "+508", "code": "PM" }, { "name": "Saint Vincent and the Grenadines", "phone": "+1784", "code": "VC" }, { "name": "Samoa", "phone": "+685", "code": "WS" }, { "name": "San Marino", "phone": "+378", "code": "SM" }, { "name": "Saudi Arabia", "phone": "+966", "code": "SA" }, { "name": "Senegal", "phone": "+221", "code": "SN" }, { "name": "Serbia", "phone": "+381", "code": "RS" }, { "name": "Seychelles", "phone": "+248", "code": "SC" }, { "name": "Sierra Leone", "phone": "+232", "code": "SL" }, { "name": "Singapore", "phone": "+65", "code": "SG" }, { "name": "Sint Maarten", "phone": "+1721", "code": "SX" }, { "name": "Slovakia", "phone": "+421", "code": "SK" }, { "name": "Slovenia", "phone": "+386", "code": "SI" }, { "name": "Solomon Islands", "phone": "+677", "code": "SB" }, { "name": "Somalia", "phone": "+252", "code": "SO" }, { "name": "South Africa", "phone": "+27", "code": "ZA" }, { "name": "South Georgia and the South Sandwich Islands", "phone": "+500", "code": "GS" }, { "name": "South Korea", "phone": "+82", "code": "KR" }, { "name": "South Sudan", "phone": "+211", "code": "SS" }, { "name": "Spain", "phone": "+34", "code": "ES" }, { "name": "Sri Lanka", "phone": "+94", "code": "LK" }, { "name": "Sudan", "phone": "+249", "code": "SD" }, { "name": "Suriname", "phone": "+597", "code": "SR" }, { "name": "Svalbard and Jan Mayen", "phone": "+4779", "code": "SJ" }, { "name": "Swaziland", "phone": "+268", "code": "SZ" }, { "name": "Sweden", "phone": "+46", "code": "SE" }, { "name": "Switzerland", "phone": "+41", "code": "CH" }, { "name": "Syria", "phone": "+963", "code": "SY" }, { "name": "São Tomé and Príncipe", "phone": "+239", "code": "ST" }, { "name": "Taiwan", "phone": "+886", "code": "TW" }, { "name": "Tajikistan", "phone": "+992", "code": "TJ" }, { "name": "Tanzania", "phone": "+255", "code": "TZ" }, { "name": "Thailand", "phone": "+66", "code": "TH" }, { "name": "Togo", "phone": "+228", "code": "TG" }, { "name": "Tokelau", "phone": "+690", "code": "TK" }, { "name": "Tonga", "phone": "+676", "code": "TO" }, { "name": "Trinidad and Tobago", "phone": "+1868", "code": "TT" }, { "name": "Tunisia", "phone": "+216", "code": "TN" }, { "name": "Turkey", "phone": "+90", "code": "TR" }, { "name": "Turkmenistan", "phone": "+993", "code": "TM" }, { "name": "Turks and Caicos Islands", "phone": "+1649", "code": "TC" }, { "name": "Tuvalu", "phone": "+688", "code": "TV" }, { "name": "U.S. Minor Outlying Islands", "phone": "+1", "code": "UM" }, { "name": "U.S. Virgin Islands", "phone": "+1340", "code": "VI" }, { "name": "Uganda", "phone": "+256", "code": "UG" }, { "name": "Ukraine", "phone": "+380", "code": "UA" }, { "name": "United Arab Emirates", "phone": "+971", "code": "AE" }, { "name": "United Kingdom", "phone": "+44", "code": "GB" }, { "name": "United States", "phone": "+1", "code": "US" }, { "name": "Uruguay", "phone": "+598", "code": "UY" }, { "name": "Uzbekistan", "phone": "+998", "code": "UZ" }, { "name": "Vanuatu", "phone": "+678", "code": "VU" }, { "name": "Vatican City", "phone": "+379", "code": "VA" }, { "name": "Venezuela", "phone": "+58", "code": "VE" }, { "name": "Vietnam", "phone": "+84", "code": "VN" }, { "name": "Wallis and Futuna", "phone": "+681", "code": "WF" }, { "name": "Western Sahara", "phone": "+212", "code": "EH" }, { "name": "Yemen", "phone": "+967", "code": "YE" }, { "name": "Zambia", "phone": "+260", "code": "ZM" }, { "name": "Zimbabwe", "phone": "+263", "code": "ZW" }, { "name": "Åland", "phone": "+358", "code": "AX" }]