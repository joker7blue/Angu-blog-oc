export class Post {

    constructor(
        public id: number,
        public title: String,
        public content: String,
        public loveIt: number,
        public donotloveIt: number,
        public categorie: String,
        public image: String,
        public created_at: Date) {
        
    }
}