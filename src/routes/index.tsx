import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';
import { AppLayoutPublic } from '../components/AppLayoutPublic';

export const AppRoutes = () => {
  const isAuthenticated = false;
  
  return isAuthenticated ? (
    <PrivateRoutes />
  ) : (
    <AppLayoutPublic>
      <PublicRoutes />
    </AppLayoutPublic>
  );
};