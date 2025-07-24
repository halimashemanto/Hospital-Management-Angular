import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { AboutHospital } from './about hospital/about-hospital/about-hospital';
import { AboutChairman } from './about hospital/about-chairman/about-chairman';
import { AboutManagingdirector } from './about hospital/about-managingdirector/about-managingdirector';
import { Contact } from './about hospital/contact/contact';
import { ServiceFeatures } from './about hospital/service-features/service-features';
import { HealthCheckUp } from './about hospital/health-check-up/health-check-up';
import { Admin } from './PANEL/admin/admin';
import { Nurse } from './NurseComponent/nurse/nurse';
import { UpdateNurse } from './NurseComponent/update-nurse/update-nurse';
import { AddNurse } from './NurseComponent/add-nurse/add-nurse';
import { AddPatient } from './patient/add-patient/add-patient';
import { ViewPatient } from './patient/view-patient/view-patient';
import { UpdatePatient } from './patient/update-patient/update-patient';
import { DepartmentName } from './dropdown/department-name/department-name';
import { Addreciptionist } from './Reciptionist/addreciptionist/addreciptionist';
import { Viewreciptionist } from './Reciptionist/viewreciptionist/viewreciptionist';
import { Updatereciptionist } from './Reciptionist/updatereciptionist/updatereciptionist';
import { AddDoctorComponent } from './dropdown/add-doctor-component/add-doctor-component';
import { ViewDoctorComponent } from './dropdown/view-doctor-component/view-doctor-component';
import { UpdateDoctorComponent } from './dropdown/update-doctor-component/update-doctor-component';
import { Equipment } from './about hospital/equipment/equipment';
import { UpdateBill } from './BillingProcss/update-bill/update-bill';
import { AddBill } from './BillingProcss/add-bill/add-bill';
import { ViewBill } from './BillingProcss/view-bill/view-bill';
import { AddPrescription } from './Prescription/add-prescription/add-prescription';
import { ViewPrescription } from './Prescription/view-prescription/view-prescription';
import { UpdatePrescription } from './Prescription/update-prescription/update-prescription';
import { AddReport } from './Report/add-report/add-report';
import { ViewReport } from './Report/view-report/view-report';
import { UpdateReport } from './Report/update-report/update-report';
import { AddScheduleSlotComponent } from './Appoinment/add-schedule-slot-component/add-schedule-slot-component';
import { AddAppointmentComponent } from './Appoinment/add-appointment-component/add-appointment-component';
import { AddMedicine } from './Pharmacy/add-medicine/add-medicine';


import { HealthCareOfBangladesh } from './health-care-of-bangladesh/health-care-of-bangladesh';
import { AddTest } from './test/add-test/add-test';
import { ViewTest } from './test/view-test/view-test';
import { UpdateTest } from './test/update-test/update-test';
import { FindDoctorWithoutEditDelete } from './about hospital/find-doctor-without-edit-delete/find-doctor-without-edit-delete';
import { DepartmentForShowing } from './about hospital/department-for-showing/department-for-showing';
import { DoctorPanel } from './PANEL/doctor-panel/doctor-panel';
import { NursePanel } from './PANEL/nurse-panel/nurse-panel';
import { ReceptionistPanel } from './PANEL/receptionist-panel/receptionist-panel';
import { Logout } from './auth/logout/logout';
import { AddManufacture } from './manufacture/add-manufacture/add-manufacture';
import { ViewManufacture } from './manufacture/view-manufacture/view-manufacture';
import { UpdateManufacture } from './manufacture/update-manufacture/update-manufacture';
import { NurseProfile } from './profile/nurse-profile/nurse-profile';
import { AdminProfile } from './profile/admin-profile/admin-profile';
import { ReceptionistProfile } from './profile/receptionist-profile/receptionist-profile';
import { DoctorProfile } from './profile/doctor-profile/doctor-profile';
import { Home } from './home/home';





@NgModule({
  declarations: [
    App,
    Registration,
    Login, 
    AboutHospital,
    AboutChairman,
    AboutManagingdirector,
    Contact,
    ServiceFeatures,
    HealthCheckUp,
    Admin,
    Nurse,
    UpdateNurse,
    AddNurse,
    AddPatient,
    ViewPatient,
    UpdatePatient,
    DepartmentName,
    Addreciptionist,
    Viewreciptionist,
    Updatereciptionist,
    AddDoctorComponent,
    ViewDoctorComponent,
    UpdateDoctorComponent,
    Equipment,
    UpdateBill,
    AddBill,
    ViewBill,
    AddPrescription,
    ViewPrescription,
    UpdatePrescription,
    AddReport,
    ViewReport,
    UpdateReport,
    AddScheduleSlotComponent,
    AddAppointmentComponent,
    AddMedicine,
   
 
    HealthCareOfBangladesh,
    AddTest,
    ViewTest,
    UpdateTest,
    FindDoctorWithoutEditDelete,
    DepartmentForShowing,
    DoctorPanel,
    NursePanel,
    ReceptionistPanel,
    Logout,
    AddManufacture,
    ViewManufacture,
    UpdateManufacture,
    NurseProfile,
    AdminProfile,
    ReceptionistProfile,
    DoctorProfile,
    Home

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
