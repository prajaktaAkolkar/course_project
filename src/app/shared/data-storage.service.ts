import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recepie } from '../recepie/recepie.model';
import { RecepieService } from '../services/recepie.service';
import { map, tap } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recepieService: RecepieService
  ) {}

  storeRecepies() {
    const recepies = this.recepieService.getRecepies();
    this.http
      .put(
        'https://angular-project-cc7e9-default-rtdb.firebaseio.com/recepies.json',
        recepies
      )
      .subscribe(response=>{
        console.log(response);
      });
  }

  fetchRecepie() {
    return this.http
      .get<Recepie[]>(
        'https://angular-project-cc7e9-default-rtdb.firebaseio.com/recepies.json'
      )
     
      .pipe(
        map((recepies) => {
          return recepies.map((recepie) => {
            return {
              ...recepie,
              ingredients: recepie.ingredients ? recepie.ingredients : [],
            };
          });
        }),
        tap((recepies) => {
          this.recepieService.setRecepies(recepies);
          console.log(recepies)
        })
      )
  }
}
