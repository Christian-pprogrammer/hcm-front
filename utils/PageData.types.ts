export interface Account {
    id: number;
    MinistryCountry: string;
    ShortMinDesc: string;
    MinUrl : string;
}
export const AccountDisplayName:Account[] = [{
    id: 1,
    MinistryCountry:"MINISANTE",
    ShortMinDesc : "Ministry of Health of Rwanda",
    MinUrl : 'https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg'
},{
    id: 2,
    MinistryCountry:"UGANDA",
    ShortMinDesc : "Ministry of Health of Uganda",
    MinUrl : 'https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg'
},{
    id: 3,
    MinistryCountry:"KENYA",
    ShortMinDesc : "Ministry of Health of Kenya",
    MinUrl : 'https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg'
},{
    id: 4,
    MinistryCountry:"ZAMBIA",
    ShortMinDesc : "Ministry of Health of Zambia",
    MinUrl : 'https://www.moh.gov.rw/fileadmin/Minaffet/resources/public/images/Coat_of_arms_of_Rwanda.svg'

}]
export interface Reviews{
    id:number;
    ReviewerName: string;
    ReviewDesc : string;
    ReviewProffession : string;
    ReviewUrl : string;
}
export const Opinions:Reviews[]=[{
    id:1,
    ReviewerName : "Dr Maxwell Simons",
    ReviewDesc : "“Text message-based health interventions provide patients with reminders, education, or self-management assistance for a broad spectrum of health conditions. Interventions are most frequently used as a part of broader health promotion efforts or to help individuals manage chronic diseases1. Text messages may be standardized or tailored to specific patients and sent at varied frequencies based on the intervention2. Text messaging can be combined with other approaches or delivered as part of a stepped care or progressive intervention that is tailored to patients’ needs, beginning with the least intensive treatment and moving to more intensive, and often expensive, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients”",
    ReviewProffession : "Senior Director of FAISAL Hospital",
    ReviewUrl : "https://www.kindpng.com/picc/m/62-625002_female-doctor-transparent-background-hd-png-download.png"
},{
    id:2,
    ReviewerName : "Dr Margaret Kims",
    ReviewDesc : "“Text message-based health interventions provide patients with reminders, education, or self-management assistance for a broad spectrum of health conditions. Interventions are most frequently used as a part of broader health promotion efforts or to help individuals manage chronic diseases1. Text messages may be standardized or tailored to specific patients and sent at varied frequencies based on the intervention2. Text messaging can be combined with other approaches or delivered as part of a stepped care or progressive intervention that is tailored to patients’ needs, beginning with the least intensive treatment and moving to more intensive, and often expensive, treatments as needed1. Text message software and smartphone apps can be integrated into electronic health records (EHRs) to send alerts and reminders to patients”",
    ReviewProffession : "Senior Director of CHUK Hospital",
    ReviewUrl : "https://www.kindpng.com/picc/m/62-625002_female-doctor-transparent-background-hd-png-download.png"
}]