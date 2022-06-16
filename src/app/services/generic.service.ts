import { Injectable} from '@angular/core';
import { HttpEventType, HttpParams} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GenericService {
    account = 'account';
    company = 'company';
    home = 'home';
}