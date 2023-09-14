import { Component,OnInit } from '@angular/core';
import { Facesnap } from './model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mySnaps!:Facesnap[];



  ngOnInit() {
    this.mySnaps = [new Facesnap(
      "Archibal",
      "Mon meilleur ami!",
      new Date(),
      0,
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"

    ),

    new Facesnap(
      " three Rock",
      "un endroit magnifique pour randone",
      new Date,
      6,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',





    ),

    new Facesnap(
      "un bon repas",
      "Mmmh que c'est bon",
      new Date,
      3,
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      "yaounde"


    )]

    }
  }


