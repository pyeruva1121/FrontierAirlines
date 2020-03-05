import { AccountStatuses } from './AccountStatuses';
export interface Account {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    AmountDue: number;
    PaymentDueDate: Date | string | null;
    AccountStatusId: AccountStatuses;
}
