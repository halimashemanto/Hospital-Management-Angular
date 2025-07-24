import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/userModel.model';
import { Subscription } from 'rxjs';
import { ReceptionistProfileService } from '../../profileService/receptionist-profile-service';

@Component({
  selector: 'app-receptionist-profile',
  standalone: false,
  templateUrl: './receptionist-profile.html',
  styleUrl: './receptionist-profile.css'
})
export class ReceptionistProfile  implements OnInit{

 user: UserModel | null = null;
  private subscription = new Subscription();


  constructor(private receptionistProfileService: ReceptionistProfileService) { }
  ngOnInit(): void {
     this.loadAdminProfile();
  }

  loadAdminProfile(): void {
    const subUser = this.receptionistProfileService.getReceptionistProfile().subscribe({
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

