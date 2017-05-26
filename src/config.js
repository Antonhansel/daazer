export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const apiUrl = process.env.API_URL || '/api/';

export const env = process.env.NODE_ENV || 'dev';
