export interface user {
    id: string;
    name: string;
    lastName: string;
    email: number;
    dni: number;
    phoneNumber: string;
    birthdate: Date;
    address: address;
}
export interface transaction {
    id: string;
    senderEmail: string;
    receiverEmail: string;
    value: number;
    type: string;
    comment: string;
    date: Date;
    succeeded: boolean;
}

export interface account {
    id: string;
    email: string;
    cvu: string;
    balance: balance;
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
}
