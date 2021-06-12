import getConfig from 'nxt/config'

const { publicRuntimeConfig } = getConfig()

export const API = publicRuntimeConfig.PRODUCTION
	? 'https://seoblog.com'
	: 'http://localhost:5000'
export const APP_NAME = publicRuntimeConfig.APP_NAME
