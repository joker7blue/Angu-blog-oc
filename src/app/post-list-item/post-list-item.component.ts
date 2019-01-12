import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post-service.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() index: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIt: number;
  @Input() donotloveIt: number;
  @Input() categorie: string;
  @Input() image: string;
  @Input() created_at: Date;


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  love(index){

    this.postService.love(index);
    
  }

  donotlove(index){

    this.postService.donotlove(index);
  }

}
