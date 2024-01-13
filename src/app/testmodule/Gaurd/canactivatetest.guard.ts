import { CanActivateChildFn } from '@angular/router';

export const canactivatetestGuard: CanActivateChildFn = (childRoute, state) => {
  return false;
};
