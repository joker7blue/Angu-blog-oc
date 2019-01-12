import { Injectable } from '@angular/core';
import { and } from '@angular/router/src/utils/collection';
import { Subject } from 'rxjs';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<any[]>();
  postCategorieSubject = new Subject<any[]>();

  private AllPost :Post[] = [
    {
      id: 1,
      title: 'Cristiano ronaldo: un virage inattendu',
      content: 'Apres 9 ans passées au real madrid , ronaldo veux relever un nouveau defi.',
      loveIt: 2,
      donotloveIt: 1,
      categorie: 'sport',
      image: '../../assets/Images_cool/ronaldo.jpg',
      created_at: new Date()
    },
    {
      id: 2,
      title: 'Leo Messi: Barcelone ne peu se passer de lui.',
      content: 'En effet, le Fc Barcelone ne peu decidement pas se passer du meilleur joueur du monde',
      loveIt: 2,
      donotloveIt: 2,
      categorie: 'sport',
      image: '../../assets/Images_cool/messi.jpg',
      created_at: new Date()
    },
    {
      id: 3,
      title: 'Les grandes ambitions pour le cameroun.',
      content: 'Le president de la republique du cameroun lance le projet des grandes ambitions.',
      loveIt: 2,
      donotloveIt: 2,
      categorie: 'politique',
      image: '../../assets/Images_cool/paul biya.jpg',
      created_at: new Date()
    }
  ];

  constructor() { }

  emmitPostSubject() {
    this.postSubject.next(this.AllPost.slice());
  }

  getPostForCategorie(name: string) {

    const postToReturn = [];
    for (const post of this.AllPost) {
      if (post.categorie == name) {
        postToReturn.push(post);
      }
    }
    console.log(postToReturn);

    this.postCategorieSubject.next(postToReturn.slice());
  }

  getPostForId(categorie: string, id: number) {

    const postToReturn = this.AllPost.find(

      (post) => {

        return post.id == id && post.categorie == categorie;
      }
    );

    return postToReturn;
  }

  getPostOnlyForId(id: number) {

    const postToReturn: Post = this.AllPost.find(

      (post) => {
        return post.id == id;
      }
    );

    return postToReturn;
  }

  love(id: number){
    const postToLove: Post = this.getPostOnlyForId(id);

    postToLove.loveIt++;
    this.emmitPostSubject();
  }

  donotlove(id: number){
    const postToLove = this.getPostOnlyForId(id);

    postToLove.donotloveIt++;
    this.emmitPostSubject();
  }

  addPost(title: String, content: String, categorie: String){

    const postToAdd: Post = {

      id: this.AllPost[this.AllPost.length - 1].id + 1,
      title: title,
      content: content,
      loveIt: 0,
      donotloveIt: 0,
      categorie: categorie,
      image: '',
      created_at: new Date()
    }

   /*  postToAdd.title = title;
    postToAdd.content = content;
    postToAdd.image = '';
    postToAdd.categorie = categorie;  *///'sport'

    this.AllPost.push(postToAdd);

    this.emmitPostSubject();
  }
}
