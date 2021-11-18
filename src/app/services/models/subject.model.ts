export interface ISubject{
     id:number;
     name:string;
     code:string;
     teachers:string[];
     isInCurrentSem:boolean;
     color:string;    
    

}
export interface employee{

     id:number;
     name:string;
     department:string;
     salary:number;
     
}
export interface salary{
     employeeId:number;
     month:number;
     salary:number;    
}