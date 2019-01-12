import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isAuth;

  constructor(private router: Router) { }

  login(){

    setTimeout(() => {
      this.isAuth = true;
      //M.toast({html: 'Vous etes maintenant connecté...'});

      this.router.navigate(['sport']);
      console.log("You have been logged sucessefully");
    }, 2000);
  }
}
