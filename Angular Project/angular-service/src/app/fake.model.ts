// may be class or interface is used to map data
// export interface Fake { 
//   userId:number;
//   id:number;
//   title:string;
//   completed:boolean;
// }


// To map our data
export class Fake { 
  constructor(public userId:number,
    public id:number,public title:string,
    public completed:boolean) { }
  }