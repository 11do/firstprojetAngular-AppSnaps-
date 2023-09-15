import { Component,OnInit,Input} from '@angular/core';
import { Facesnap } from '../model/face-snap.model';
import { FaceSnapsService } from '../Services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent implements OnInit {
@Input()facesnap!:Facesnap;


  buttonText!:String;

  constructor(private faceSnapsService : FaceSnapsService){

  }


  ngOnInit(){

    this.buttonText="oh snap!"
  }

  onAddSnap(){
    if (this.buttonText==="oh snap!"){
      this.faceSnapsService.snapFaceSnapsById(this.facesnap.id)
      this.buttonText="oops , unsnap!";




    }else{
      this.facesnap.snaps--;
      this.buttonText="oh snap!"
    }

    }

  }


