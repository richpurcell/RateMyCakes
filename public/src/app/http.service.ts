import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  // '/cakes -> Retrieve all Cakes -> GET
  getCakes(){
    // Remove the lines of code where we make the variable 'tempObservable' and subscribe to it.
    // tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    // Return the observable to wherever the getCakes method was invoked.
    return this._http.get('/cakes');
  }
  // '/cakes/:id' -> Retrieve a Cake by ID  -> GET
  getOneCake(id: string){
    return this._http.get(`/cakes/${id}`);
  }
  // '/cakes' -> Create a Cake -> POST
  postCakeToServer(data: any){
    return this._http.post('/cakes', data);
  }
  // '/cakes/:id' -> Update a Cake by ID -> PUT
  editOneCake(id: string, data: any){
    return this._http.put(`/cakes/${id}`, data);
  }
  // '/cakes/:id' -> Delete a Cake by ID -> DELETE
  deleteOneCake(id: string){
    return this._http.delete(`/cakes/${id}`);
  }
}

