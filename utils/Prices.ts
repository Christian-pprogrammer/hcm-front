interface PriceStructure{
    id: number;
    serviceName: string;
    servicePrice: number;
}
export const PriceArr :PriceStructure[] = [{
    id: 1,
    serviceName: "Registration",
    servicePrice: 10.00
},{
    id: 2,
    serviceName: "System Maintainance",
    servicePrice: 20.00
},{
    id: 3,
    serviceName: "Daily Session Activities",
    servicePrice: 30.00
},{
    id: 4,
    serviceName: "SMS Appointments",
    servicePrice: 40.00
},{
    id: 5,
    serviceName: "Daily Checkup",
    servicePrice: 50.00
}]