import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'phone'
})
export class PhonePipe implements PipeTransform {

    transform(phoneValue: string): any {
        try {
            let phoneNumber = phoneValue;
            if (String(phoneValue).length === 10) {
                phoneNumber = '(' + phoneValue.substring(0, 3) + ')-' + phoneValue.substring(3, 6) + '-' + phoneValue.substring(6, 10);
            }
            return phoneNumber;
        } catch (error) {
            return phoneValue;
        }
    }

}
