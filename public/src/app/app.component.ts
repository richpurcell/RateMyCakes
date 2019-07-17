import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  oneCake: any;
  cakes: Object;
  aCake: Object;
  new_cake: any;
  edit: any;
  show: boolean;
  selectedCake: any;
  caketoShow: any;
  avg_stars: Number;
  review: any;
  cakeReviews: any;
  sum: Number;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.cakes = [];
    this.new_cake = {baker: "", imageUrl: "" };
    this.getCakesFromService();
    this.show = false;
    this.edit = {baker: "", imageUrl: ""}
    this.avg_stars = 0;
    this.review = {stars: 5, review: ""};
    this.cakeReviews = [];
  }
  getCakesFromService(){ // I think this is DONE!
    let observable = this._httpService.getCakes();
    observable.subscribe(data => { // can also say obsevable.then(data = {}) then finish off with .catch()
      this.cakes = data; //.reverse();
    });
  }
  cakeToShow(aCake: any){
    this.sum = 0;
    for (let i=0; i<aCake.reviews.length; i++){
      this.sum = this.sum + Number(aCake.reviews[i].stars);
    }
    this.avg_stars = (this.sum/aCake.reviews.length).toFixed(2);
    this.selectedCake = {cake: aCake, reviews: aCake.reviews, average: this.avg_stars};
  }
  showCake(id: string) { // I think this is DONE!
    this.oneCake = id; // Narrowed down to this line
    this.show = true;
    let observable = this._httpService.getOneCake(id);
    observable.subscribe(data => {
      this.edit = data;
      this.avg_stars = this.average_stars(this.oneCake)
    });
  }
  newCake(){ // I think this is DONE!
    let observable = this._httpService.postCakeToServer(this.new_cake);
    observable.subscribe(data => {
      this.new_cake = {baker: "", imageUrl: "" };
      this.getCakesFromService();
    });
  }
  editCake(id: string){ // This route no needed
    this.oneCake = id;
    let observable = this._httpService.editOneCake(this.edit.id, this.edit);
    observable.subscribe(data => {
      this.edit = {baker: "", imageUrl: "" };
      this.getCakesFromService();
    });
  }
  addReviewToCake(id: string){ // I think this is DONE!
    this.oneCake = id;
    let observable = this._httpService.editOneCake(id, this.review);
    observable.subscribe(data => {
      this.review = {stars: 0, review: "" };
      this.getCakesFromService();
    });
  }
  deleteCake(id: string){ // This route no needed
    let observable = this._httpService.deleteOneCake(id);
    observable.subscribe(data => {
      this.getCakesFromService();
    });
  }
}
