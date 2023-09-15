import { Component, OnInit } from '@angular/core';
import { Facesnap} from '../model/face-snap.model';
import { FaceSnapsService } from '../Services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  mySnaps!:Facesnap[];

  constructor(private faceSnapsService:FaceSnapsService){}

  ngOnInit(): void {
    this.mySnaps = this.faceSnapsService.getAllFaceSnaps();
  }
}
