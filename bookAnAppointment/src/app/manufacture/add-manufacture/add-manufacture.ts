import { Component } from '@angular/core';
import { Manufacturer } from '../model/manufacture.model';
import { Router } from '@angular/router';
import { ManufectureService } from '../manufecture-service';

@Component({
  selector: 'app-add-manufacture',
  standalone: false,
  templateUrl: './add-manufacture.html',
  styleUrl: './add-manufacture.css'
})
export class AddManufacture {

 manufacturer: Manufacturer = new Manufacturer();
  errorMessage: string | undefined = '';
  successMessage: string = '';

  constructor(private manufacturerService: ManufectureService,
     private router: Router) {}

  onSubmit(): void {
    this.manufacturerService.createManufacturer(this.manufacturer).subscribe(
      (response) => {
        if (response.successful) {
          this.successMessage = 'Manufacturer added successfully!';
          setTimeout(() => this.router.navigate(['/viewmenu']), 2000); // Redirect after 2 seconds
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Failed to add manufacturer: ' + error.message;
      }
    );
  }
}
