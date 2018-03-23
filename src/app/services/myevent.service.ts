import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyEventLiteral, MyEvent } from '../models/MyEvent';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/Category';


interface MyEventJson {
  success: boolean,
  evenements: MyEventLiteral[]
}

interface MyCategoryJson {
  success : boolean,
  categories: Category[]

}

@Injectable()
export class MyeventService {

  private service_url: string = "http://localhost/APIS/WS_TP/";

  constructor( private http:HttpClient) {}


  getAllEvents(): Observable<MyEventJson> {

    return this.http.get(this.service_url + "events") as Observable<MyEventJson>;
  }

  addEvent( myevent: MyEvent ) : Observable<{success: boolean, id: number, message: string}> {

    return this.http.post(this.service_url + "event", myevent) as Observable<{success: boolean, id: number, message: string}>;
  }

  getAllEventsByCatId (id : number) : Observable<MyEventJson> {

    return this.http.get (this.service_url + "events/category/" + id) as Observable<MyEventJson>;
  }

  getAllCategories() : Observable<MyCategoryJson> {

    return this.http.get(this.service_url + "categories") as Observable<MyCategoryJson>;
  }

  deleteEvent( id : number ) : Observable<{success: boolean}> {

    return this.http.delete(this.service_url + "event/" + id ) as Observable<{success: boolean}>;
  }

}