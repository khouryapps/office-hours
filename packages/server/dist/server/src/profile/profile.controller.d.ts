/// <reference types="multer" />
import { GetProfileResponse, UpdateProfileParams } from '@koh/common';
import { Response } from 'express';
import { Connection } from 'typeorm';
import { NotificationService } from '../notification/notification.service';
import { UserModel } from './user.entity';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private connection;
    private notifService;
    private profileService;
    constructor(connection: Connection, notifService: NotificationService, profileService: ProfileService);
    get(user: UserModel): Promise<GetProfileResponse>;
    patch(userPatch: UpdateProfileParams, user: UserModel): Promise<GetProfileResponse>;
    uploadImage(file: Express.Multer.File, user: UserModel): Promise<void>;
    getImage(photoURL: string, res: Response): Promise<void>;
    deleteProfilePicture(user: UserModel): Promise<void>;
}
