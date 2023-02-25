import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// pour recupere un utilisateur connecter
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
