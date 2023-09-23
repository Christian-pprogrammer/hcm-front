import { StringColorFormat } from "@faker-js/faker";

export interface PriceStructure {
    id: number;
    serviceName: string;
    servicePrice: number;
}
export const PriceArr: PriceStructure[] = [{
    id: 1,
    serviceName: "Registration",
    servicePrice: 10.00
}, {
    id: 2,
    serviceName: "System Maintainance",
    servicePrice: 20.00
}, {
    id: 3,
    serviceName: "Daily Session Activities",
    servicePrice: 30.00
}, {
    id: 4,
    serviceName: "SMS Appointments",
    servicePrice: 40.00
}, {
    id: 5,
    serviceName: "Daily Checkup",
    servicePrice: 50.00
}]
export interface IService {
    service_id: string;
    service: string;
    status?: string;
    createdAt?:string;
    updatedAt?:string;
}
export interface NewPriceInt {
    serviceName: string;
    fee: number;
    newfee: number;
}
export const NewPriceStructure: NewPriceInt = {
    serviceName: "",
    fee: 0,
    newfee: 0
}