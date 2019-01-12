import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  postSubscribe: Subscription;

  @Input() AllPost: any[];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postSubscribe = this.postService.postSubject.subscribe(
      (post: any []) => {
        this.AllPost = post;
      }
    );
    
    this.postService.emmitPostSubject();
  }
}
