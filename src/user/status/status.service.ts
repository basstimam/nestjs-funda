import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {
    send(){
        console.info('User fetched successfully!')
        let statusCode:number =  200
        return statusCode

    }
}

export const userStatusService = new StatusService()
