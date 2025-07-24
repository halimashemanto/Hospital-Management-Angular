import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleSlotService } from '../schedule-slot-service';
import { Doctor } from '../../dropdown/model/doctorModel';
import { DoctorService } from '../../dropdown/doctor-service';

@Component({
  selector: 'app-add-schedule-slot-component',
  standalone: false,
  templateUrl: './add-schedule-slot-component.html',
  styleUrl: './add-schedule-slot-component.css'
})
export class AddScheduleSlotComponent {

  slotForm: FormGroup;
  doctors: Doctor[] = [];

  constructor(
    private fb: FormBuilder,
    private slotService: ScheduleSlotService,
    private doctorService: DoctorService
  ) {
    this.slotForm = this.fb.group({
      doctorId: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    this.doctorService.getAllDoctorName().subscribe({
      next: (data) => this.doctors = data,
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.slotForm.invalid) {
      alert('Please fill all fields.');
      return;
    }

    const newSlot: ScheduleSlot = {
      doctorId: this.slotForm.value.doctorId,
      date: this.slotForm.value.date,
      startTime: this.slotForm.value.startTime,
      endTime: this.slotForm.value.endTime,
      isBooked: false
    };

    this.slotService.createSlot(newSlot).subscribe({
      next: () => {
        alert('Schedule slot added!');
        this.slotForm.reset();
      },
      error: (err) => console.error(err)
    });
  }

}
