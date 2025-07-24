import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../dropdown/model/departmentModel';
import { Doctor } from '../dropdown/model/doctorModel';
import { DepartmentService } from '../dropdown/department-service';
import { DoctorService } from '../dropdown/doctor-service';
import { ScheduleSlotService } from '../Appoinment/schedule-slot-service';
import { AppointmentService } from '../Appoinment/appointment-service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  appointmentForm: FormGroup;

  departments: Department[] = [];
  doctors: Doctor[] = [];     // ✅ should be an array!
  slots: ScheduleSlot[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private doctorService: DoctorService,
    private slotService: ScheduleSlotService,
    private appointmentService: AppointmentService
  ) {
    this.appointmentForm = this.fb.group({
      departmentId: ['', Validators.required],
      doctorId: ['', Validators.required],
      scheduleSlotId: ['', Validators.required],
      patientName: ['', Validators.required],
      patientContact: ['', Validators.required],
      reason: ['']
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartment().subscribe({
      next: (data) => this.departments = data,
      error: (err) => console.error(err)
    });
  }

  loadDoctors(): void {
    const departmentId = this.appointmentForm.value.departmentId;
    this.doctorService.getDoctorsByDepartment(departmentId).subscribe({
      next: (data) => this.doctors = data,   // ✅ must update the array
      error: (err) => console.error(err)
    });
  }

  loadSlots(): void {
    const doctorId = this.appointmentForm.value.doctorId;
    this.slotService.getAvailableSlots(doctorId).subscribe({   // ✅ only available slots
      next: (data) => this.slots = data,
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.invalid) {
      alert('Fill all fields.');
      return;
    }

    const appt: Appointment = {
      departmentId: this.appointmentForm.value.departmentId,
      doctorId: this.appointmentForm.value.doctorId,
      scheduleSlotId: this.appointmentForm.value.scheduleSlotId,
      patientName: this.appointmentForm.value.patientName,
      patientContact: this.appointmentForm.value.patientContact,
      reason: this.appointmentForm.value.reason
    };

    this.appointmentService.create(appt).subscribe({
      next: () => {
        // Mark slot as booked!
        const selectedSlot = this.slots.find(s => s.id === appt.scheduleSlotId);
        if (selectedSlot) {
          selectedSlot.isBooked = true;
          this.slotService.updateSlot(selectedSlot).subscribe();
        }
        alert('Appointment booked successfully!');
        this.appointmentForm.reset();
        this.slots = [];
        this.doctors = [];
      },
      error: (err) => console.error(err)
    });
  }

}

