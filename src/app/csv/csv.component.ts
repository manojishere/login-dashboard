import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CSVRecord } from '../model/CSVRecord';
import { Employee } from '../model/employee';
import {MatSortHeader} from "@angular/material/sort";

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {

  public records: any[] = []; 
  public datasource: any; 
  @ViewChild('csvReader') csvReader: any; 
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;
  /*
  @ViewChild(MatSort, { static: false })
  set sort(v: MatSort) {
   this.datasource.sort = v;
  }
  */

  data = [
    {id: 1, name: 'Rajesh', email: 'rajesh@gmail.com'},
    {id:2, name: 'Paresh', email: 'paresh@gmail.com'},
    {id:3, name: 'Naresh', email: 'naresh@gmail.com'},
    {id:4, name: 'Suresh', email: 'suresh@gmail.com'},
    {id:5, name: 'Karan', email: 'karan@gmail.com'},
  ];
  // displayedColumns = ['ID', 'FirstName', 'LastName', 'Age', 'Position', 'Email', 'Mobile', 'details', 'update', 'delete'];
  displayedColumns = ['id', 'firstName', 'lastName', 'age', 'position', 'email', 'mobile', 'details', 'update', 'delete'];
  
  constructor() { }

  ngOnInit(): void {
  }

  /*
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.datasource.sort = this.sort;
  } 
  */ 

  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result; 
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
        this.datasource = new MatTableDataSource( this.records );
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.id = curruntRecord[0].trim();  
        csvRecord.firstName = curruntRecord[1].trim();  
        csvRecord.lastName = curruntRecord[2].trim();  
        csvRecord.age = curruntRecord[3].trim();  
        csvRecord.position = curruntRecord[4].trim();  
        csvRecord.email = curruntRecord[5].trim();
        csvRecord.mobile = curruntRecord[6].trim();  
        csvArr.push(csvRecord);  
      }  
    } 
    
    return csvArr; 
  }  

  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }

  getData(){
    console.log('inside submit data c');

    let allEmployees: Employee[] = [];
    this.records.forEach((element)=>{
      let emp: Employee = new Employee(); 
      emp.id = element.id;
      emp.firstName = element.firstName;
      emp.age = element.age;
      allEmployees.push( emp );
      //console.log('first name is : ' + element.firstName);
    });

    allEmployees.forEach((element)=>{
      console.log('name is : ' + element.firstName);
    });
  } 
  
  submitData(){
    console.log('inside submit data c');

    let allEmployees: Employee[] = [];
    this.records.forEach((element)=>{
      let emp: Employee = new Employee(); 
      emp.id = element.id;
      emp.firstName = element.firstName;
      emp.lastName = element.lastName;
      emp.age = element.age;
      emp.position = element.position;
      emp.mobile = element.mobile;
      allEmployees.push( emp );
      //console.log('first name is : ' + element.firstName);
    });

    allEmployees.forEach((element)=>{
      console.log('name is : ' + element.firstName);
    });
  } 
  
  public redirectToDetails = (id: string) => {
    console.log('redirectToDetails id : '+ id);
    
  }
  public redirectToUpdate = (id: string) => {
    console.log('redirectToUpdate id : '+ id);
    
  }
  public redirectToDelete = (id: string) => {
    console.log('redirectToDelete id : '+ id);
    
  }  

}
