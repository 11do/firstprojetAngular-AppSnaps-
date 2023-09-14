import { Component,OnInit,Input} from '@angular/core';
import { Facesnap } from '../model/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
@Input()facesnap!:Facesnap;

  
  buttonText!:String;


  ngOnInit(){

    this.buttonText="oh snap!"
  }

  onAddSnap(){
    if (this.buttonText==="oh snap!"){
      this.facesnap.snaps++;
      this.buttonText="oops , unsnap!";




    }else{
      this.facesnap.snaps--;
      this.buttonText="oh snap!"
    }

    }

  }


