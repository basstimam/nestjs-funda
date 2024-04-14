import { StatusService, userStatusService } from './../status/status.service';
import { Inject, Injectable, Query, Req, Res } from '@nestjs/common';
import { ProfileResponse } from '../model/ProfileResponse';
import { faker } from '@faker-js/faker';
import { Request, Response } from 'express';


@Injectable()
export class UserService {

    @Inject()
    private userStatusService: StatusService

    sayHello(name: string): string {
        return `Hello ${name}`;
    }

    getProfile() { 
        const profileData : ProfileResponse = {
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            role: {
                roleId: "1",
                name: "admin",
            },
            email: faker.internet.email(),
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            birthdayDate: faker.date.birthdate().toLocaleDateString('id-ID'),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    
        return {
            status: userStatusService.send(),
            data: profileData
        };
    }

    setCookie(@Query('name') name: string, @Res() response: Response) {
        response.cookie('name', name, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict'
        })
        response.status(200).send('Cookie has been set')


    }

    getCookie(@Req() request: Request){
        const name = request.cookies.name
        return `Cookie value: ${name}`
    }
}
