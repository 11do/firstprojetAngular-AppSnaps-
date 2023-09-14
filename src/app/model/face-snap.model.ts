export  class Facesnap{
  title!: String;
  description!:String;
  createDate!:Date;
  snaps!:number;
  imageUrl!:String;
  location?: String;

  constructor( title:String,description:String,createDate:Date,snaps:number,imageUrl:String,location?:String){
    this.title=title;uttonText:String
    this.description=description;
    this.createDate=createDate;
    this.snaps=snaps
    this.imageUrl=imageUrl;
    this.location=location

  }


// andereweise diesen Konstructor zu machen
/*constructor( public title:String,public description:String, public createDate:Date,public snaps:number,public imageUrl:String){
  this.title=title;uttonText:String){}*/


}



