import { Component, OnInit } from '@angular/core';
import { Manufacturer } from '../model/manufacture.model';
import { ManufectureService } from '../manufecture-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-manufacture',
  standalone: false,
  templateUrl: './view-manufacture.html',
  styleUrl: './view-manufacture.css'
})
export class ViewManufacture implements OnInit {
  manufacturers: Manufacturer[] = [];
  errorMessage: string | undefined = '';

  constructor(
    private manufacturerService: ManufectureService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadManufacturers();
  }

  loadManufacturers(): void {
    this.manufacturerService.getManufacturers().subscribe(
      (response) => {
        if (response) {
          this.manufacturers = response.data.manufacturers; // Adjust based on actual response structure
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Failed to load manufacturers: ' + error.message;
      }
    );
  }

  deleteManufacturer(id: number): void {
    if (confirm('Are you sure you want to delete this manufacturer?')) {
      this.manufacturerService.deleteManufacturer(id).subscribe(
        (response) => {
          if (response.successful) {
            this.loadManufacturers(); // Reload the list after deletion
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          this.errorMessage = 'Failed to delete manufacturer: ' + error.message;
        }
      );
    }
  }

  editManufacturer(id: number): void {
    this.router.navigate([`/manufacturers/update`, id]);
  }
}



