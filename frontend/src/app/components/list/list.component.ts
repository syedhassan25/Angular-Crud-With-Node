import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../issue.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material'; 

import {issue} from '../../issue.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issue: issue[];
  displayedColumns = ['title','responsible','severity','status','actions'];
  constructor(private issueService:IssueService,private router:Router) { }

  ngOnInit() {
   this.fetchIssues();
  }

  fetchIssues(){
    this.issueService.getIssue().subscribe((data:issue[])=>{
      this.issue = data;
        console.log('fetching Data...');
        console.log(this.issue);
    })
  }

  editIssue(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deleteIssue(id){
    this.issueService.RemoveIssue(id).subscribe(() => {
       this.fetchIssues();
    });
  }

}
