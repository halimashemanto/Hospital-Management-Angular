import { Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../model/reciptionistModel';
import { ReciptionistService } from '../reciptionist-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatereciptionist',
  standalone: false,
  templateUrl: './updatereciptionist.html',
  styleUrl: './updatereciptionist.css'
})
export class Updatereciptionist implements OnInit {

  
  profile!: ReceptionistModel;

  constructor(private reciptionistService: ReciptionistService,
     private router: Router) { }

  ngOnInit(): void {
    this.getReciptionist();
  }

  getReciptionist(): void {
    this.reciptionistService.getReciptionist().subscribe((data: ReceptionistModel) => {
      this.profile = data;
    });
  }

  updateReciptionist(): void {
    this.reciptionistService.updateReciptionist(this.profile).subscribe(() => {
      this.router.navigate(['rec']);
    });
  }
}