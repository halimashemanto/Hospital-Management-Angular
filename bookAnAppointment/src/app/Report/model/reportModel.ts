export class ReportModel {
    id!: string;

    doctorName!: string;
    reportResult!: string;

    description!: string;
    sampleId!: string;
    interpretation!: string;
    patientName!: string;

    testDate!: Date;
    createDate!: Date;
    deliveryDate!: Date;


}