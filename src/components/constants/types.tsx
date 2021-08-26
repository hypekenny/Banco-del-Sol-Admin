export interface user {
    id: string;
    name: string;
    lastName: string;
    email: string;
    dni: number;
    phoneNumber: string;
    birthdate: string;
    address: address;
    condition: string;
}
export interface transaction {
    id: string;
    senderEmail: string;
    receiverEmail: string;
    value: number;
    type: string;
    comment: string;
    date: Date;
    condition: string;
}

export interface account {
    id: string;
    email: string;
    cvu: string;
    balance: balance;
    condition: string;
}

export interface address {
    street: string;
    number: string;
    zipCode: string;
    city: string;
    province: string;
}

export interface balance {
    amount: number;
    history: Array<transaction>;
}

export interface action {
    type: string;
    payload: any;
}

export interface rootState {
    user: user[];
    account: account[];
    transaction: transaction[];
    token: string;
    loged: boolean;
}

export interface monthType {
    name: string;
    recarga: number;
    transferencia: number;
    dailyData: dayType[];
    transactionsId: string[];
}
export interface dayType {
    name: string;
    number: number;
    recarga: number;
    transferencia: number;
}
