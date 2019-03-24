import { Value } from './../Models/Value';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  baseUrl = 'http://localhost:5000/api/values';

  constructor(private http: HttpClient) { }
  values: any;

  ngOnInit() {
    this.getValues();
  }
  getValues() {
    this.http.get(this.baseUrl).subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
