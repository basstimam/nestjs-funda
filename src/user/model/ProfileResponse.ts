export interface ProfileResponse {
    userId: string;
    username: string;
    role: {
        roleId: string;
        name: string;
    };
    email: string;
    phone: string;
    address: string;
    birthdayDate: string;
    createdAt: string;
    updatedAt: string;
}