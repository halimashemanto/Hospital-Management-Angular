import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/userModel.model';
import { Subscription } from 'rxjs';
import { DoctorProfileService } from '../../profileService/doctor-profile-service';

@Component({
  selector: 'app-doctor-profile',
  standalone: false,
  templateUrl: './doctor-profile.html',
  styleUrl: './doctor-profile.css'
})
export class DoctorProfile  implements OnInit{

 user: UserModel | null = null;
  private subscription = new Subscription();


  constructor(private doctorProfileService: DoctorProfileService) { }
  ngOnInit(): void {
     this.loadAdminProfile();
  }

  loadAdminProfile(): void {
    const subUser = this.doctorProfileService.getDoctorProfile().subscribe({
      next: (res) => {
        this.user = res;       
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });
    this.subscription.add(subUser);
  }


}
