import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class TokenRefreshGuard extends AuthGuard('jwt-refresh') {}
