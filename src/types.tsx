export interface transaction {
    senderEmail: string;
    receiverEmail: string;
    value: number;
    type: string;
    comment: string;
    date: Date;
    succeeded: boolean;
}
export interface user {
    name: string;
    lastName: string;
    email: number;
    dni: number;
    phoneNumber: string;
    birthdate: Date;
    address: address;
}

export interface address {
    street: string;
    number: string;
    zipCode: string;
    city: string;
    province: string;
}

export interface account {
    email: string;
    cvu: string;
    balance: balance;
}

export interface balance {
    amount: number;
    history: Array<transaction>;
}

export interface action {
    type: string;
    payload: object;
}

export interface rootStore {
    users: [user];
    accounts: [account];
    transactions: [transaction];
}
