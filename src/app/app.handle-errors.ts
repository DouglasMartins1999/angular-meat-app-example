import { Response } from '@angular/http'
import { Observable } from 'rxjs';

export class ErrorHandler {

    static handle(error: Response | any){
        let errorMessage: string;
        if(error instanceof Response){
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url}: ${error.statusText}`
        }
        else {
            errorMessage = error.toString;
        }
        console.error(errorMessage)
        return Observable.throw(errorMessage);
    }

}