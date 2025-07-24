
import { Doctor } from "../../dropdown/model/doctorModel";
import { PatientDocModel } from "../../patient/model/patientDocModel";
import { Medicine } from "../../Pharmacy/model/medicine";
import { Test } from "../../test/model/testModel";

export class Prescription {


    id?: string;

    patientId!: PatientDocModel;
    doctorId!: Doctor;
    medicines!: Medicine[];
    tests!: Test[];

    date!: Date;


    note!: string;
    advice!: string;
    height!: string;
    weight!: string;
    bp!: string;
    


}