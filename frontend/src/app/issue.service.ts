import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  uri = 'http://localhost:4000';
  constructor(private http:HttpClient) {}

  getIssue(){
    return  this.http.get(`${this.uri}/issue`);
  }
  getIssueByID(id){
      return this.http.get(`${this.uri}/issue/${id}`);
  }

  AddIssue(title,responsible,description,severity,status){

    const issue = {
      title:title,
      responsible:responsible,
      description:description,
      severity:severity,
      status:status
    }

    return this.http.post(`${this.uri}/issue/add`,issue);
  }
  
     UpdateIssue(id,title,responsible,description,severity,status){
      const issue = {
        title:title,
        responsible:responsible,
        description:description,
        severity:severity,
        status:status
      }

    return this.http.post(`${this.uri}/issue/update/${id}`,issue);
  }

    RemoveIssue(id){
      return this.http.get(`${this.uri}/issue/delete/${id}`);
    }

   
   
}
