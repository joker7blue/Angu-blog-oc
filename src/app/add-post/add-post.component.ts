import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  dafaultCategorie = "sport";

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {

    //$('select').formSelect();
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('select');
      //var instances = M.FormSelect.init(elems, {});
    });
  }

  onSubmit(form: NgForm){
    //console.log(form.value);
    const title = form.value['titlePost'];
    const content = form.value['contentPost'];
    const categorie = 'sport';

    this.postService.addPost(title,content,categorie);

    //this.router.navigate(['']);
  }

}
