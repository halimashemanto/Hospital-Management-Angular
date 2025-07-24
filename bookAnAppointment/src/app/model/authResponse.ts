import { UserModel } from "./userModel.model";


export interface AuthResponse {
    token:string;
    user:UserModel;

}