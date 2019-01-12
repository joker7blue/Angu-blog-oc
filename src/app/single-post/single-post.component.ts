import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postF: any;


  constructor(private postService: PostService , private activedRoute: ActivatedRoute) { }

  ngOnInit() {

    let categorie = this.activedRoute.snapshot.params['categorie'];
    let id = this.activedRoute.snapshot.params['id'];

    const post = this.postService.getPostForId(categorie,id);

    this.postF = post;

    console.log(categorie+" ------------------->   "+id);
    console.log(post);

    //$('.parallax').parallax();
  }

  love(index){

    /*const post = this.postService.AllPost.find(
      (value) => index === value.id
    );*/

    this.postF.loveIt++;
    //console.log(post);
    
  }

  donotlove(index){

    /*const post = this.postService.AllPost.find(
      (value) => index === value.id
    );*/

    this.postF.donotloveIt++;
    //console.log(post);
    
  }
}
