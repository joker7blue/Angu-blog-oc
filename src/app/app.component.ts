import { Component } from '@angular/core';
import { PostService } from './services/post-service.service';
import { AppService } from './services/app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fil-Info44';
  isAuth = false;

  constructor(private postService: PostService, private appService: AppService){
  }

  login(){

    this.appService.login();
    this.isAuth = this.appService.isAuth;
  }
}
