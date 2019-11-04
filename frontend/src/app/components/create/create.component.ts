import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {IssueService} from '../../issue.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm:FormGroup;
  constructor(private issueService:IssueService,private fb:FormBuilder, private router:Router) { 

    this.createForm = this.fb.group({
      title: ['',Validators.required],
      description:'',
      responsible:'',
      severity:'',
      status:''
    })

  }

  ngOnInit() {
  }

  addIssue(title,responsible,description,severity,status){
    this.issueService.AddIssue(title,responsible,description,severity,status).subscribe(() => {
        this.router.navigate(['/list']);
    })
  }
}
