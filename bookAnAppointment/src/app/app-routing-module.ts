import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { AboutHospital } from './about hospital/about-hospital/about-hospital';
import { AboutChairman } from './about hospital/about-chairman/about-chairman';
import { AboutManagingdirector } from './about hospital/about-managingdirector/about-managingdirector';
import { Contact } from './about hospital/contact/contact';
import { ServiceFeatures } from './about hospital/service-features/service-features';
import { HealthCheckUp } from './about hospital/health-check-up/health-check-up';
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
import { AddBill } from './BillingProcss/add-bill/add-bill';
import { AddPrescription } from './Prescription/add-prescription/add-prescription';
import { ViewPrescription } from './Prescription/view-prescription/view-prescription';
import { ViewBill } from './BillingProcss/view-bill/view-bill';
import { UpdatePrescription } from './Prescription/update-prescription/update-prescription';
import { AddReport } from './Report/add-report/add-report';
import { ViewReport } from './Report/view-report/view-report';
import { UpdateReport } from './Report/update-report/update-report';
import { AddScheduleSlotComponent } from './Appoinment/add-schedule-slot-component/add-schedule-slot-component';
import { AddAppointmentComponent } from './Appoinment/add-appointment-component/add-appointment-component';
import { HealthCareOfBangladesh } from './health-care-of-bangladesh/health-care-of-bangladesh';
import { Admin } from './PANEL/admin/admin';
import { AddTest } from './test/add-test/add-test';
import { FindDoctorWithoutEditDelete } from './about hospital/find-doctor-without-edit-delete/find-doctor-without-edit-delete';
import { DepartmentForShowing } from './about hospital/department-for-showing/department-for-showing';
import { DoctorPanel } from './PANEL/doctor-panel/doctor-panel';
import { NursePanel } from './PANEL/nurse-panel/nurse-panel';
import { ReceptionistPanel } from './PANEL/receptionist-panel/receptionist-panel';
import { Logout } from './auth/logout/logout';
import { adminGuard } from './gurde/admin-guard';
import { receptionistGurd } from './gurde/receptionist-guard';
import { nurseGurd } from './gurde/nurse-guard';
import { doctorGurd } from './gurde/doctor-guard';
import { authGuard } from './gurde/auth-guard';
import { bothGuard } from './gurde/both-guard';
import { AddManufacture } from './manufacture/add-manufacture/add-manufacture';
import { ViewManufacture } from './manufacture/view-manufacture/view-manufacture';
import { UpdateManufacture } from './manufacture/update-manufacture/update-manufacture';
import { AddMedicine } from './Pharmacy/add-medicine/add-medicine';

import { AdminProfile } from './profile/admin-profile/admin-profile';
import { DoctorProfile } from './profile/doctor-profile/doctor-profile';
import { NurseProfile } from './profile/nurse-profile/nurse-profile';
import { ReceptionistProfile } from './profile/receptionist-profile/receptionist-profile';
import { recAdminGurde } from './gurde/rec-admin-guard';
import { Home } from './home/home';


const routes: Routes = [

    // { path: '**', redirectTo: '', pathMatch: 'full' },


  { path: '', component: Home },
  { path: 'home ', component: Home },

  // auth
  { path: 'reg', component: Registration },
  { path: 'login', component: Login  },
  {path: 'logout', component:Logout},

  // about hospital
  { path: 'aboutUs', component: AboutHospital  },
  { path: 'aboutC', component: AboutChairman  },
  { path: 'aboutMD', component: AboutManagingdirector  },
  { path: 'service', component: ServiceFeatures  },
  { path: 'health', component: HealthCheckUp  },
  { path: 'contact', component: Contact  },
  { path: 'eq', component: Equipment  },
  { path: 'hcb', component: HealthCareOfBangladesh  },
  { path: 'finddoctor', component: FindDoctorWithoutEditDelete  },
  { path: 'department', component: DepartmentForShowing  },

  // nurse
  { path: 'an', component: AddNurse,  canActivate:[bothGuard]},  //nurse & admin bothgurde
  { path: 'n', component: Nurse,  canActivate:[adminGuard]},
  { path: 'un/:id', component: UpdateNurse ,  canActivate:[bothGuard] },

  // patient
  { path: 'addp', component: AddPatient, canActivate:[doctorGurd] },
  { path: 'viewp', component: ViewPatient, canActivate:[authGuard] }, //doctor & admin authgurde
  { path: 'up/:id', component: UpdatePatient, canActivate:[doctorGurd] },
  
  // Doctor/Department

  { path: 'dep', component:DepartmentName,  canActivate:[adminGuard]},
  { path: 'editDepartment', component:DepartmentName, canActivate:[adminGuard]},
  { path: 'adddoc', component:AddDoctorComponent,  canActivate:[authGuard] },
  { path: 'viewdoc', component:ViewDoctorComponent, canActivate:[authGuard] },
  { path: 'edit-doctor/:id', component:UpdateDoctorComponent, canActivate:[adminGuard]},

  //Reciptionsist
  { path: 'rec', component:Addreciptionist, canActivate:[receptionistGurd] },
  { path: 'viewrec', component:Viewreciptionist, canActivate:[adminGuard] },
  { path: 'uprec', component:Updatereciptionist, canActivate:[adminGuard] },

  // Invoice
  { path: 'addbill', component:AddBill, canActivate: [recAdminGurde] },
   { path: 'addtest', component:AddTest,  canActivate:[adminGuard]},
 
   // Prescription
  { path: 'addprescription', component:AddPrescription, canActivate:[doctorGurd]},
   {path:'addmedi', component:AddMedicine ,canActivate:[authGuard]},
  { path: 'viewprescription', component:ViewPrescription, canActivate:[doctorGurd] },
  { path: 'upprescription/:id', component:UpdatePrescription, canActivate:[doctorGurd] },
 
     // Report
  { path: 'addreport', component:AddReport, canActivate:[doctorGurd] },
  { path: 'viewreport', component:ViewReport, canActivate:[authGuard] },
  { path: 'upreport/:id', component:UpdateReport, canActivate:[doctorGurd] },

  //appointment
  { path: 'addslot', component:AddScheduleSlotComponent, canActivate:[recAdminGurde] },
  { path: 'addapp', component:AddAppointmentComponent,  },

  
 //Panel for every section
   { path: 'admin', component:Admin,  canActivate: [adminGuard] },
 { path: 'doctorpanel', component:DoctorPanel, canActivate: [doctorGurd] },
  { path: 'nursepanel', component:NursePanel,  canActivate: [nurseGurd]},
  { path: 'recpanel', component:ReceptionistPanel,  canActivate: [receptionistGurd]},

  //manufecture

  {path:'addmenu', component:AddManufacture},
  {path:'viewmenu', component:ViewManufacture},
  {path:'uomenu/:id', component:UpdateManufacture},


 //profile
  {path:'adminprofile', component:AdminProfile},
  {path:'doctorprofile', component:DoctorProfile},
  {path:'nurseprofile', component:NurseProfile},
  {path:'recprofile', component:ReceptionistProfile},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
