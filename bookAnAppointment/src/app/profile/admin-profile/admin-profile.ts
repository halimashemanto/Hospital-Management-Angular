import { Component, OnInit } from '@angular/core';
import { AdminProfileService } from '../../profileService/admin-profile-service';
import { Subscription } from 'rxjs';
import { UserModel } from '../../model/userModel.model';

@Component({
  selector: 'app-admin-profile',
  standalone: false,
  templateUrl: './admin-profile.html',
  styleUrl: './admin-profile.css'
})
export class AdminProfile implements OnInit {

  user: UserModel | null = null;
  private subscription = new Subscription();


  constructor(private adminProfileService: AdminProfileService) { }
  ngOnInit(): void {
     this.loadAdminProfile();
  }

  loadAdminProfile(): void {
    const subUser = this.adminProfileService.getAdminProfile().subscribe({
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