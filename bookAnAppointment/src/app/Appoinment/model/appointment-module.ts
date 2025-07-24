


interface Appointment {
  id?: string;               // JSON Server generates
  departmentId: string;      // For traceability
  doctorId: string;
  scheduleSlotId: string;    // link to slot
  patientName: string;
  patientContact: string;
  reason: string;
}
