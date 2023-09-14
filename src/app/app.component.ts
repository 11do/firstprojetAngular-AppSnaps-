import { Component,OnInit } from '@angular/core';
import { Facesnap } from './model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mySnap!:Facesnap;
  myOthderSnap!: Facesnap;
  mySnap2!:Facesnap;

  ngOnInit() {
    this.mySnap = new Facesnap(
      "Archibal",
      "Mon meilleur ami!",
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"

    );

  }
}

