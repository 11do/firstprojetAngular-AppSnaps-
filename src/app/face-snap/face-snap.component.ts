import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
  title!: String;
  description!:String;
  createDate!:Date;
  snaps!:number;

  ngOnInit(){
    this.title = "Archibal";
    this.description="Mon meilleur ami depuis tout petit !";
    this.createDate= new Date();
    this.snaps = 6;
  }

}
