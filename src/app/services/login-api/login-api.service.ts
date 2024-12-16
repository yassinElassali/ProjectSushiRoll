import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginAPIService {
  sessionID : string | null = null;

  get isLoggedIn() : boolean {
    return this.sessionID != null;
  }

  async Login(email: string, password: string) : Promise<boolean>{
    // normalmente qui c'è una fetch
    //
    // simuliamone gli errori
    const randomError = Math.random();
    console.log(randomError);
    if (randomError < 0.4) {
      throw new Error('Errore casuale');
    }

    this.sessionID = 'impostato';
    return true;
  }
}
