import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import type { UserTypes } from 'src/schemas';

export const AuthContext = createParamDecorator((key: keyof UserTypes.Context | undefined, context: ExecutionContext) => {
	const getUser = context.switchToHttp().getRequest().user as UserTypes.Context;
	return key ? getUser[key] : getUser;
});
