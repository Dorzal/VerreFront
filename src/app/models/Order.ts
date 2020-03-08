export default class Order {
    id: number;
    lastname : string;
    firstname : string;
    address : string;
    postalCode : string; 
    city: string;
    phone: string; 
    email: string;
    articles: [];
    total : number;
    store : number
}