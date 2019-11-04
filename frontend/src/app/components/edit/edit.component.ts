import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IssueService } from '../../issue.service';
import { issue } from '../../issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:String;
  issue:any = {};
  updateForm:FormGroup;
  constructor(private issueService:IssueService, private Snackbar:MatSnackBar,private fb:FormBuilder,private router:Router, private route:ActivatedRoute) {
    
    this.createForm();

   }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.issueService.getIssueByID(this.id).subscribe(res => {
          this.issue = res;
          this.updateForm.get('title').setValue(this.issue.title);
          this.updateForm.get('responsible').setValue(this.issue.responsible);
          this.updateForm.get('severity').setValue(this.issue.severity);
          this.updateForm.get('description').setValue(this.issue.description);
          this.updateForm.get('status').setValue(this.issue.status);

      })
    })
  }
   createForm(){
     this.updateForm = this.fb.group({
      title: ['',Validators.required],
      description:'',
      responsible:'',
      severity:'',
      status:''
     });
   }

   updateIssue(title,responsible,description,severity,status){
      this.issueService.UpdateIssue(this.id ,title,responsible,description,severity,status).subscribe(res => {
        this.Snackbar.open('Issue Updated Successfully','ok',{
          duration:200
        })
      })
   }
}
