import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NurseService } from '../nurse-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-nurse',
  standalone: false,
  templateUrl: './add-nurse.html',
  styleUrl: './add-nurse.css'
})
export class AddNurse implements OnInit{
  
  nurseForm !: FormGroup;
  

  constructor(
    private formbuilder: FormBuilder,
    private nurseService: NurseService,
      private router: Router){}
    
  

  ngOnInit() {
this.nurseForm = this.formbuilder.group({
      name: ['', Validators.required],
      specialization: [[], Validators.required],
      phone: [[], Validators.required],
      email: [[], Validators.required],
      bod: [[], Validators.required],
      address: [[], Validators.required],
      gender: [[], Validators.required],
      photo: [[], Validators.required],
      
    });
  }

  addNurse():void{
    const n = {...this.nurseForm.value,
      role: 'nurse'
    };
    this.nurseService.saveNurse(n).subscribe({
      next:(res)=>{
        this.nurseForm.reset();
        this.router.navigate(['/n']);

      },
      error:(error)=>{

        console.log(error);
      }

    });
  }
}
