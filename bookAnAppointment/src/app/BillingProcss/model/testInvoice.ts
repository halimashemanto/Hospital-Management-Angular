import { Doctor } from "../../dropdown/model/doctorModel";
import { PatientDocModel } from "../../patient/model/patientDocModel";
import { Test } from "../../test/model/testModel";

export class TestInvoice  {


    id?: string;

    patientId!: PatientDocModel;
    doctorId!: Doctor;
    invoiceDate!: Date;

    tests!: Test[];

    amount!: number;
    discount!: number;

    deliveryDate!: Date;
    deliveryTime!: number;

    totalAmount!: number;
    totalDiscount!: number;

    payable!: number;
    received!: number;
    due!: number;

    status!: boolean;
    preparedBy!: string;
}