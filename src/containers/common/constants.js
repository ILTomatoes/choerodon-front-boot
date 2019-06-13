export const PREFIX_CLS = 'c7n';
export const ACCESS_TOKEN = 'access_token';
export const TOKEN_TYPE = 'token_type';
export const ACCESS_DOMAIN = 'domain';
export const STRING_DEVIDER = '__@.@__';
export const API_HOST = `${process.env.API_HOST}`;
// export const AUTH_HOST = `${process.env.TYPE === 'choerodon' ? `${process.env.AUTH_HOST}/oauth` : `${process.env.AUTH_HOST}`}`;
export const AUTH_HOST = `${process.env.AUTH_HOST}`;
export const CLIENT_ID = `${process.env.CLIENT_ID}`;
export const AUTH_URL = `${process.env.TYPE === 'choerodon' ? `${AUTH_HOST}/oauth/authorize?response_type=token&client_id=${CLIENT_ID}&state=` : `${AUTH_HOST}/login`}`;
// export const AUTH_URL = `${AUTH_HOST}/login`;
// export const AUTH_URL = `${AUTH_HOST}/oauth/authorize?response_type=token&client_id=${CLIENT_ID}&state=`;
export const LOCAL = JSON.parse(process.env.LOCAL || 'true');
export const COOKIE_SERVER = `${process.env.COOKIE_SERVER}`;
export const FILE_SERVER = `${process.env.FILE_SERVER}`;
export const WEBSOCKET_SERVER = `${process.env.WEBSOCKET_SERVER}`;
export const HEADER_TITLE_NAME = `${process.env.HEADER_TITLE_NAME || process.env.TITLE_NAME || 'Choerodon'}`;
export const USE_DASHBOARD = JSON.parse(process.env.USE_DASHBOARD || 'false');
export const USE_GUIDE = JSON.parse(process.env.USE_GUIDE || 'false');
export const MENU_THEME = `${process.env.MENU_THEME || 'light'}`;
export const SERVICES_CONFIG = `${process.env.SERVICES_CONFIG}`;
export const NODE_ENV = `${process.env.NODE_ENV}`;
export const TYPE = `${process.env.TYPE}`;
export const RESOURCES_LEVEL = `${process.env.RESOURCES_LEVEL || ''}`;
export const APIM_GATEWAY = `${process.env.APIM_GATEWAY}`;
export const UI_CONFIGURE = `${process.env.UI_CONFIGURE}`;
export const EMAIL_BLOCK_LIST = `${process.env.EMAIL_BLOCK_LIST}`;
export const OUTWARD = `${process.env.OUTWARD || ''}`;
