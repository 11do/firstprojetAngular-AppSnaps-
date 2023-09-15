import{ Injectable} from '@angular/core';
import { Facesnap } from '../model/face-snap.model';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  mySnaps: Facesnap[] = [new Facesnap(
    3,
    "Archibal",
    "Mon meilleur ami!",
    new Date(),
    0,
    "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg"

  ),

  new Facesnap(
  1,
    " three Rock",
    "un endroit magnifique pour randone",
    new Date,
    6,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',





  ),

  new Facesnap(
    2,
    "un bon repas",
    "Mmmh que c'est bon",
    new Date,
    3,
    'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    "yaounde"


  )]
  static snapFaceSnapById: any;


getAllFaceSnaps():Facesnap[] {
  return this.mySnaps;

}

snapFaceSnapsById(facesnapId:number) : void{
  const faceSnap = this.mySnaps.find(faceSnap  => faceSnap.id===facesnapId );
  if(faceSnap){
    faceSnap.snaps++;
  }else{
    throw new Error("FaceSnap not find");
  }
}

}

