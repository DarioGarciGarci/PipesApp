import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    transform(value: string, enMayus: boolean = true): string {
        // if (enMayus) {
        //     return value.toUpperCase();
        // } else {
        //     return value.toLowerCase();
        // }
        return (enMayus) ? value.toUpperCase() : value.toLowerCase();
    }

}
