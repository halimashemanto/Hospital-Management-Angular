import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NurseModel } from '../modelnurse/nurseModel';
import { NurseService } from '../nurse-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-nurse',
  standalone: false,
  templateUrl: './update-nurse.html',
  styleUrl: './update-nurse.css'
})
export class UpdateNurse implements OnInit {

  id: string = '';

  nurse: NurseModel = new NurseModel();

  constructor(
    private nurseService: NurseService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadNurseById();
  }



  loadNurseById() {

    this.nurseService.getNurseById(this.id).subscribe({
      next: (res) => {
        this.nurse = res;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  updateNurse(): void {
    this.nurseService.updateNurse(this.id, this.nurse).subscribe({

      next: () => {
        this.router.navigate(['/n'])

      },


      error: err => {
        console.error(err);
      }
    });
  }


}