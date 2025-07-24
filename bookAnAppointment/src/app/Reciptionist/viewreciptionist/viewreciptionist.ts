import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../model/reciptionistModel';
import { ReciptionistService } from '../reciptionist-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewreciptionist',
  standalone: false,
  templateUrl: './viewreciptionist.html',
  styleUrl: './viewreciptionist.css'
})
export class Viewreciptionist implements OnInit {
 reciptionist:any;
profile!: ReceptionistModel;

  constructor(private receptionistService: ReciptionistService,
      private  router : Router,
  private cdr : ChangeDetectorRef
  ) { }

  
  ngOnInit(): void {

      this.loadAllReciptionist();
      

  }

  loadAllReciptionist(){

    this.reciptionist = this.receptionistService. getReciptionist();

  }
 deleteReciptionist(id: string): void {
    this.receptionistService.deleteReciptionist(id).subscribe({
      next: () => {

        console.log("reciptionist deleted");
        this.loadAllReciptionist();
        this.cdr.reattach();
      },
      error: (err) => {
        console.log( err);
      }
    });
 
  }
}


  



  

