export const BASE_PATH = '/q';

const PREFIX = BASE_PATH === '/' ? '' : BASE_PATH;

export const LOGIN = `${PREFIX}/login`;
export const LEARNER = `${PREFIX}/learner`;
export const ADMIN = `${PREFIX}/admin`;

export const LEARNER_HOME = `${LEARNER}/mylearning`;
export const ADMIN_HOME = `${ADMIN}/insights`;
