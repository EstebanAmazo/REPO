const ROLES = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};
const PERMISSIONS = {
  [ROLES.USER]: ['read'],
  [ROLES.ADMIN]: ['read', 'write', 'delete']
};
export default {
  ROLES,
  PERMISSIONS
};