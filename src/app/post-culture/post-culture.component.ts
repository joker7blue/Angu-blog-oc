import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-post-culture',
  templateUrl: './post-culture.component.html',
  styleUrls: ['./post-culture.component.css']
})
export class PostCultureComponent implements OnInit {

  culturePosts: any[];
  tailleAllCulturePost = 0;

  constructor(private postService: PostService) { }

  ngOnInit() {

    //this.culturePosts = this.postService.getPostForCategorie('culture');
  }

}
