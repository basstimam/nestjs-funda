import { StatusService, userStatusService } from './../status/status.service';
import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  HttpStatus,
  Inject,
  Param,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { url } from 'inspector';
import { ProfileResponse } from '../model/ProfileResponse';
import { faker } from '@faker-js/faker';
import { Request, Response, response } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  @Inject()
  private userService: UserService;
  

  @Get('/profile')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async getProfileFromService() {
      
      return await this.userService.getProfile();

  }

  @Get('/admin')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/user/profile',
      statusCode: 301,
    };
  }

  @Get('/set-cookie')
  async setCookie(@Query('name') name: string, @Res() response: Response) {
    return await this.userService.setCookie(name, response);
  }

  @Get('/get-cookie')
  async getCookie(@Req() request: Request) {
    return await this.userService.getCookie(request);
  }
}
