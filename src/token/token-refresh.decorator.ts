import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const TokenRefreshContext = createParamDecorator((_, context: ExecutionContext) => {
	return context.switchToHttp().getRequest().user as { isNew: boolean; token: string };
});
