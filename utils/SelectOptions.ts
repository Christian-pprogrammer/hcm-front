interface CategoryType{
    value: string;
    text: string;
    id: number;
}
export const CategoryArr : CategoryType[] =[
    {
        value: "District Based",
        text: "District Based",
        id: 1
    },
    {
        value: "Referal",
        text: "Referal Based",
        id: 2
    },    {
        value: "Metropolitan",
        text: "Metropolitan Based",
        id: 3
    },    {
        value: "Centre de Sante",
        text: "Centre-de-Sante",
        id: 4
    },
]
export const HospitalValues:CategoryType[] =[
{
    value: "CHUB",
    text:"CHUB",
    id: 1
},{
    value: "FAISAL",
    text:"FAISAL",
    id: 2
},{
    value: "CHUK",
    text:"CHUK",
    id: 3
}
]
export const MapStatus:CategoryType[] =[
    {
        value:"Establishment Phase",
        text:"Establishment Phase",
        id: 0
    },
    {
        value : "Active",
        text:"Active",
        id:1
    },{
        value: "Pending",
        text:"Pending",
        id:2
    }
];
export const NewUserStatusArr : CategoryType[] =[
    {
        value:"Establishment Phase",
        text:"Establishment Phase",
        id: 0
    },
    {
        value : "Active",
        text:"Active",
        id:1
    },{
        value: "Pending",
        text:"Pending",
        id:2
    }
];
export const AccountTypeArr : CategoryType[] =[
    {
        value:"",
        text:"Select Acc Type",
        id: 0
    },{
        value:"Appointment-Manager",
        text:"Appointment Manager",
        id: 1
    },
    {
        value : "Schedule-Manager",
        text:"Schedule Manager",
        id:2
    },{
        value: "Doctor",
        text:"Doctor",
        id:3
    }
]
export const MessageType : CategoryType[] =[
    {
        value:"",
        text:"Select Message Template",
        id: 0
    },{
        value:"Send-Appointment-Message",
        text:"Send Appointment Message",
        id: 1
    },{
        value:"Reschedule-Appointment",
        text:"Reschedule Appointment",
        id:2
    },{
        value:"Cancelled-Appointment",
        text:"Cancelled Appointment",
        id:3
    },{
        value:"Reminder",
        text:"Reminder",
        id:4
    }
]