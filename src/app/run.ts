// export class Run {

//     constructor(
//       public location: string,
//       public distance: number,
//       public time: string,
//       public elevation: number,
//       public calories: number,
//       public pace: string,
//       public heart_rate: number,
//       public first_mile: string,
//       public second_mile: string,
//       public third_mile: string,
//       public fourth_mile: string,
//       public fifth_mile: string,
//       public sixth_mile: string,
//       public notes: string
//     ) {  }
  
//   }

  export interface Run {
    location?: string;
    distance?: number;
    time?: string;
    elevation?: number;
    calories?: number;
    pace?: string;
    heart_rate?: number;
    first_mile?: string;
    second_mile?: string;
    third_mile?: string;
    fourth_mile?: string;
    fifth_mile?: string;
    sixth_mile?: string;
    notes?: string;
    _id?: string;
 }