import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/userModel.model';
import { NurseProfileService } from '../../profileService/nurse-profile-service';
import { Subscription } from 'rxjs';
import { NurseModel } from '../../NurseComponent/modelnurse/nurseModel';

@Component({
  selector: 'app-nurse-profile',
  standalone: false,
  templateUrl: './nurse-profile.html',
  styleUrl: './nurse-profile.css'
})
export class NurseProfile implements OnInit{

 user: NurseModel | null = null;
  private subscription = new Subscription();


  constructor(private nurseProfileService: NurseProfileService) { }
  ngOnInit(): void {
     this.loadNurseProfile();
  }

  loadNurseProfile(): void {
    const subUser = this.nurseProfileService.getNurseProfile().subscribe({
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
