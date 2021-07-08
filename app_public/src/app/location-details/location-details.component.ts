import { Component, Input, OnInit } from '@angular/core';

import { Location, Review } from '../location';
import { Loc8rDataService } from '../loc8r-data.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
  providers: [Loc8rDataService]
})
export class LocationDetailsComponent implements OnInit {
  auth: AuthService;
  router: Router;

  @Input() location: Location;

  constructor(
    private loc8rDataService: Loc8rDataService,
    private _auth: AuthService,
    private _router: Router
  ) {
    this.auth = _auth;
    this.router = _router;
  }

  ngOnInit() {
  }

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formVisible: boolean = false;

  public formError: string = '';

  private formIsValid(): boolean {
    // if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
    if (this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit():void {
    this.formError = '';
    console.log(this.auth);
    if (this.formIsValid()) {
      console.log(this.newReview);
      this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview, this.auth.getToken())
      .then((review: Review) => {
        console.log('Review saved', review);
        this.location.reviews.unshift(review);
        this.resetAndHideReviewForm();
      })
    } else {
      this.formError = 'All fields required, please try again';
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

}
