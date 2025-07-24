import { Component } from '@angular/core';
import { NurseModel } from '../../NurseComponent/modelnurse/nurseModel';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { NurseService } from '../../NurseComponent/nurse-service';

@Component({
  selector: 'app-nurse-panel',
  standalone: false,
  templateUrl: './nurse-panel.html',
  styleUrl: './nurse-panel.css'
})
export class NursePanel {
  nurse: NurseModel | null = null;
  private subscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService, // ✅ fixed spelling
    private router: Router,
    private nurseService: NurseService
  ) { }

  ngOnInit(): void {
   this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.nurseService.getNurseProfile().subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.nurse = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

