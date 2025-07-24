import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReciptionistService } from '../reciptionist-service';

@Component({
  selector: 'app-addreciptionist',
  standalone: false,
  templateUrl: './addreciptionist.html',
  styleUrl: './addreciptionist.css'
})
export class Addreciptionist implements OnInit {


  reciptionistGroup !: FormGroup;

  constructor(private reciptionistService: ReciptionistService,
    private formBuilder: FormBuilder,
    private router: Router) { }


  ngOnInit(): void {
    this.reciptionistGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      phone: [''],
      address: [''],
      gender: [''],
      photo: [''],
      employeeId: [''],
      position: [''],
      department: [''],
      workHours: [''],
      role:['']

    });

  }
  
  addReciptionist(): void {

    const reciptionist = { ...this.reciptionistGroup.value, role: 'receptionist' };
    this.reciptionistService.saveReciptionistName(reciptionist).subscribe({

      next: (res) => {
  
        console.log("Saved Reciptionist name", res);
        this.reciptionistGroup.reset();
        this.router.navigate(['/viewrec']);

      },

      error: (error) => {
        console.log(error);
      }

    })

    


  }
}