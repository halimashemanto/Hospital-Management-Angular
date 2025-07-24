import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleSlotService {

  private apiUrl = 'http://localhost:3000/ScheduleSlot';

  constructor(private http: HttpClient) { }

  createSlot(slot: ScheduleSlot): Observable<ScheduleSlot> {
    return this.http.post<ScheduleSlot>(this.apiUrl, slot);
  }

  getSlotsByDoctor(doctorId: string): Observable<ScheduleSlot[]> {
    return this.http.get<ScheduleSlot[]>(`${this.apiUrl}?doctorId=${doctorId}`);
  }


  updateSlot(slot: ScheduleSlot): Observable<ScheduleSlot> {
    return this.http.put<ScheduleSlot>(`${this.apiUrl}/${slot.id}`, slot);
  }

  getAvailableSlots(doctorId: string): Observable<ScheduleSlot[]> {
    return this.http.get<ScheduleSlot[]>(`${this.apiUrl}?doctorId=${doctorId}&isBooked=false`);
  }

}
