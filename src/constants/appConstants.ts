const APPCONSTANTS = {
  APP_TYPE: 'spice',
  HASH_ALGORITM: 'sha512',
  AUTHTOKEN: 'at',
  USER_TENANTID: 'uid',
  APP_VERSION: 'av',
  SECRET_TOKEN: 'sat',
  USERNAME: 'un',
  PASSWORD: 'pw',
  REMEMBER_ME: 'rm',
  TENANT_ID: 'ti',
  ENCRYPTION: {
    ALGM: 'aes-256-gcm',
    IV: 'ncd@123',
    SALT: 'ncd@123',
    ITERATION: 2048,
    KEYLEN: 32,
    DIGEST: 'sha512'
  },
  PAGINATION_RANGE: 5,
  INITIAL_PAGE: 1,
  ROWS_PER_PAGE_OF_TABLE: 10,
  FIRST_NAME_LENGTH: 100,
  LAST_NAME_LENGTH: 100,
  FAMILY_NAME_LENGTH: 100,
  ROLES: {
    SUPER_USER: 'SUPER_USER',
    SUPER_ADMIN: 'SUPER_ADMIN',
    REGION_ADMIN: 'REGION_ADMIN',
    ACCOUNT_ADMIN: 'ACCOUNT_ADMIN',
    OPERATING_UNIT_ADMIN: 'OPERATING_UNIT_ADMIN'
  },
  ALL_ROLES: {
    SUPER_USER: 'SUPER_USER',
    SUPER_ADMIN: 'SUPER_ADMIN',
    REGION_ADMIN: 'REGION_ADMIN',
    ACCOUNT_ADMIN: 'ACCOUNT_ADMIN',
    OPERATING_UNIT_ADMIN: 'OPERATING_UNIT_ADMIN',
    HEALTH_COACH: 'HEALTH_COACH',
    HEALTH_SCREENER: 'HEALTH_SCREENER',
    HRIO: 'HRIO',
    LAB_TECHNICIAN: 'LAB_TECHNICIAN',
    NUTRITIONIST: 'NUTRITIONIST',
    PHARMACIST: 'PHARMACIST',
    PROVIDER: 'PROVIDER',
    NURSE: 'NURSE',
    PHYSICIAN_PRESCRIBER: 'PHYSICIAN_PRESCRIBER',
    REPORT_ADMIN: 'REPORT_ADMIN'
  },
  ROUTE_NAMES: {
    REGION: 'region',
    ACCOUNT: 'account',
    OU: 'OU',
    SITE: 'site'
  },
  IS_SIDEMENU_COLLAPSED: 'isSmCollapsed',
  REGIONS_PER_PAGE: 10,
  MEDICATION_LIST_PER_PAGE: 10,
  OPERATING_UNIT_PER_PAGE: 15,
  SUPERADMINS_PER_PAGE: 10,
  ACCOUNTS_PER_PAGE: 10,
  SITES_PER_PAGE: 15,
  LINK_EXPIRED: 'Link has expired.',
  ACCOUNT_ALREADY_ACTIVATED: 'Your account has been already activated.',
  ALERT: 'Alert',
  PASSWORD_SET_SUCCESS: 'Password has been set successfully.',
  PASSWORD_SET_FAILED: 'Failed to set password. Please try again.',
  PASSWORD_CHANGE_SUCCESS: 'Password has been changed successfully.',
  PASSWORD_CHANGE_FAILED: 'Failed to change the password. Please try again.',
  SUCCESS: 'Success',
  PASSWORD_RESET_EMAIL_SENT_MESSAGE:
    'You will receive the email notification to reset the password if your account exists in our system.',
  OOPS: 'Oops',
  ERROR: 'Error',
  REGION_CREATION_SUCCESS: 'Region created successfully.',
  REGION_CREATION_ERROR: 'Unable to create region. Please try after sometime.',
  REGION_FETCH_ERROR: 'Unable to load regions. Please try after sometime.',
  USER_DETAILS_UPDATE_SUCCESS: 'User details updated successfully.',
  USER_DETAILS_UPDATE_ERROR: 'Unable to update user. Please try after sometime.',
  SITE_FETCH_ERROR: 'Unable to load sites. Please try after sometime.',
  SITE_USERS_FETCH_ERROR: 'Unable to load site users. Please try after sometime.',
  SITE_DETAILS_UPDATE_ERROR: 'Unable to update site details. Please try after sometime.',
  SITE_DETAILS_UPDATE_SUCCESS: 'Site details updated successfully.',
  SITE_USER_CREATE_SUCCESS: 'Site user added successfully.',
  SITE_USER_CREATE_ERROR: 'Unable to add site user. Please try after sometime.',
  SITE_USER_UPDATE_ERROR: 'Unable to update site user. Please try after sometime.',
  SITE_SUMMARY_FETCH_ERROR: 'Unable to load site summary Details. Please try after sometime.',
  SITE_SUMMARY_UPDATE_ERROR: 'Unable to update site summary Details. Please try after sometime.',
  PROFILE_DETAIL_ERROR: 'Unable to fetch user details.  Please try after sometime.',
  SITE_CREATION_SUCCESS: 'Site created successfully',
  SITE_CREATION_ERROR: 'Unable to create site. Please try after sometime.',
  GROUP_UPDATE_SUCCESS: 'Group updated successfully.',
  GROUP_DETAILS_FETCH_ERROR: 'Unable to load group details. Please try after sometime.',
  GROUP_DETAILS_UPDATE_ERROR: 'Unable to update group details. Please try after sometime.',
  GROUP_CREATION_SUCCESS: 'Group created successfully',
  GROUP_CREATION_ERROR: 'Unable to create group. Please try after sometime.',
  MEDICATION_CREATION_SUCCESS: 'Medication created successfully.',
  MEDICATION_CREATION_ERROR: 'Unable to create medication. Please try after sometime.',
  MEDICATION_FETCH_ERROR: 'Unable to load medications. Please try after sometime.',
  MEDICATION_REENTERED_ERROR: 'You have already entered this medication in the form.',
  RESULT_NAME_REENTERED_ERROR: 'You have already entered this result name in the form.',
  RESULT_UNIT_REENTERED_ERROR: 'You have already entered this range in the form.',
  UNSAVED_CHANGES_MESSAGE: 'Please save your edited changes before submitting.',
  MEDICATION_EXISTS_ERROR: 'This medication is already available in the regional database.',
  OU_CREATION_SUCCESS: 'Operating Unit created successfully.',
  OU_CREATION_FAIL: 'Unable to create operating unit. Please try after sometime.',
  OU_FETCH_ERROR: 'Unable to load operating units. Please try after sometime.',
  OU_REST_ERROR: 'unable to reset Operating Unit.',
  NETWORK_ERROR: 'Network Error',
  LOGIN_FAILED_TITLE: 'Login failed',
  LOGIN_FAILED_MESSAGE: 'Unable to login. Please try after sometime.',
  CONNECTION_LOST: 'There is an issue with the connection. Please try after sometime.',
  PASSWORD_RULE: 'Password must contain 6 or more characters, including uppercase, lowercase and number characters.',
  ENTER_PASSWORD: 'Please enter new password.',
  ENTER_CONFIRM_PASSWORD: 'Please enter confirm password.',
  PASSWORD_SHOULD_NOT_MATCH_ACC_NAME: `New password should not match the user's account name.`,
  COMMON_PASSWORDS_ARE_NOT_ALLOWED: 'Common passwords are not allowed.',
  CONFIRM_PASSWORD_SHOULD_MATCH: 'Confirm new password should be match with new password.',
  REGION_DETAIL_FETCH_ERROR: 'Unable to load region summary. Please try after sometime.',
  OPERATING_UNIT_DETAIL_FETCH_ERROR: 'Unable to load operating unit summary. Please try after sometime.',
  OPERATING_UNIT_LIST_FETCH_ERROR: 'Unable to load operating unit list. Please try after sometime.',
  OPERATING_UNIT_UPDATE_SUCCESS: 'Operating Unit updated successfully.',
  OPERATING_UNIT_UPDATE_FAIL: 'Unable to update operating unit. Please try after sometime.',
  OPERATING_UNIT_ADMIN_CREATE_SUCCESS: 'Operating Unit admin created successfully.',
  OPERATING_UNIT_ADMIN_CREATE_FAIL: 'Unable to create operating unit admin. Please try after sometime.',
  OPERATING_UNIT_ADMIN_UPDATE_SUCCESS: 'Operating Unit admin updated successfully.',
  OPERATING_UNIT_ADMIN_UPDATE_FAIL: 'Unable to update operating unit admin. Please try after sometime.',
  MEDICATION_LIST_FETCH_ERROR: 'Unable to load medications list. Please try after sometime.',
  MEDICATION_UPDATE_SUCCESS: 'Medication updated successfully.',
  MEDICATION_UPDATE_FAIL: 'Unable to update medication. Please try after sometime.',
  MEDICATION_DELETE_SUCCESS: 'Medication deleted successfully.',
  MEDICATION_DELETE_FAIL: 'Unable to delete the medication. Please try after sometime.',
  MEDICATION_DELETE_TITLE: 'Delete Medication',
  MEDICATION_DELETE_CONFIRMATION: 'Are you sure want to delete the medication?',
  LOGIN_GENERAL_ERROR: 'Unable to login. Please try after sometime.',
  NO_RECORDS_FOUND: 'No records found',
  SEARCH_USER_ERROR: 'Unable to search the admin. Please try after sometime.',
  REGION_ADMIN_CREATE_SUCCESS: 'Region admin added successfully.',
  REGION_ADMIN_CREATE_FAIL: 'Unable to add region admin. Please try after sometime.',
  REGION_UPDATE_SUCCESS: 'Region summary updated successfully.',
  REGION_UPDATE_FAIL: 'Unable to update region summary. Please try after sometime.',
  REGION_ADMIN_DELETE_SUCCESS: 'Region admin deleted successfully.',
  REGION_ADMIN_DELETE_FAIL: 'Unable to delete region admin. Please try after sometime.',
  REGION_ADMIN_DELETE_CONFIRMATION: 'Are you sure want to delete region admin?',
  REGION_ADMIN_DELETE_TITLE: 'Delete Region Admin',
  SITE_USER_DELETE_CONFIRMATION: 'Are you sure want to delete the site user?',
  USER_DELETE_CONFIRMATION: 'Users will be deleted from all the linked sites. Are you sure to proceed?',
  REGION_TENANT_ERROR: 'Unable to get region information. Please try after sometime.',
  SITE_USER_DELETE_TITLE: 'Delete Site User',
  ACTIVATE_ACCOUNT_CONFIRMATION: 'Are you sure want to activate the account?',
  ACTIVATE_ACCOUNT_TITLE: 'Activate Account',
  SITE_TYPE: [
    { value: 'Clinic', label: 'Clinic' },
    { value: 'Pharmacy', label: 'Pharmacy' },
    { value: 'Community', label: 'Community' },
    { value: 'Workplace', label: 'Workplace' },
    { value: 'Other', label: 'Other' }
  ],
  ADDRESS_USE: [
    { value: 'Home', label: 'Home' },
    { value: 'Work', label: 'Work' },
    { value: 'Temporary', label: 'Temporary' },
    { value: 'Obsolete', label: 'Obsolete' }
  ],
  SITE_ROLES: [
    { value: 'HEALTH_COACH', label: 'Health Coach' },
    { value: 'HEALTH_SCREENER', label: 'Health Screener' },
    { value: 'HRIO', label: 'HRIO' },
    { value: 'LAB_TECHNICIAN', label: 'Lab Technician' },
    { value: 'NUTRITIONIST', label: 'Nutritionist' },
    { value: 'PHARMACIST', label: 'Pharmacist' },
    { value: 'NURSE', label: 'Nurse' },
    { value: 'PHYSICIAN_PRESCRIBER', label: 'Physician Prescriber' },
    { value: 'PROVIDER', label: 'Provider' }
  ],
  SITE_LEVEL: [
    { label: 'Level 1', value: 'Level 1' },
    { label: 'Level 2', value: 'Level 2' },
    { label: 'Level 3', value: 'Level 3' },
    { label: 'Level 4', value: 'Level 4' },
    { label: 'Level 5', value: 'Level 5' },
    { label: 'Level 6', value: 'Level 6' }
  ],
  SEARCH_BY_NAME_EMAIL: 'First Name / Email',
  SEARCH_BY_NAME: 'Search Name',
  SEARCH_BY_EMAIL: 'Search Email',
  OPERATING_UNIT_DELETE_CONFIRMATION: 'Are you sure want to delete the operating unit?',
  OPERATING_UNIT_DELETE_TITLE: 'Delete Operating Unit',
  OPERATING_UNIT_ADMIN_DELETE_SUCCESS: 'Operating Unit admin deleted successfully.',
  OPERATING_UNIT_ADMIN_DELETE_FAIL: 'Unable to delete operating unit admin. Please try after sometime.',
  OPERATING_UNIT_ADMIN_DELETE_CONFIRMATION: 'Are you sure want to delete the operating unit admin?',
  OPERATING_UNIT_ADMIN_DELETE_TITLE: 'Delete Operating Unit Admin',
  GENDER_OPTIONS: [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Non-Binary', label: 'Non-Binary' }
  ],
  ADDRESS_TYPE: [
    { value: 'Postal', label: 'Postal' },
    { value: 'Physical', label: 'Physical' }
  ],
  REGION_DEACTIVATE_SUCCESS: 'Region deactivated successfully.',
  REGION_DEACTIVATE_FAIL: 'Unable to deactivate the region. Please try after sometime.',
  DEACTIVATE_REASON: [
    { label: 'Unable to pay', value: 'Unable to pay' },
    { label: 'Contract expired', value: 'Contract expired' },
    { label: 'Site closure', value: 'Site closure' },
    { label: 'Inactive site', value: 'Inactive site' },
    { label: 'Other', value: 'Other' }
  ],
  SESSION_EXPIRED: 'Session got expired. Please login again.',
  SEARCH_ACCOUNT_ERROR: 'Unable to search the account. Please try after sometime.',
  ACCOUNT_FETCH_ERROR: 'Unable to load accounts. Please try after sometime.',
  DEACTIVATED_RECORDS_FETCH_ERROR: 'Unable to load deactivated records. Please try after sometime.',
  LOCKED_USERS_FETCH_ERROR: 'Unable to load the locked users list. Please try after sometime.',
  SUPERADMIN_FETCH_ERROR: 'Unable to load super admins. Please try after sometime.',
  RESTRICTION_OPTIONS: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ],
  ACCOUNT_CREATION_SUCCESS: 'Account created successfully.',
  ACCOUNT_CREATION_FAIL: 'Unable to create account. Please try after sometime.',
  ACCOUNT_WORKFLOW_MODULE_CREATE_SUCCESS: 'Account workflow module created successfully.',
  ACCOUNT_WORKFLOW_MODULE_CREATE_FAIL: 'Unable to create account workflow module. Please try after sometime.',
  ACCOUNT_WORKFLOW_MODULE_UPDATE_SUCCESS: 'Account workflow module updated successfully.',
  ACCOUNT_WORKFLOW_MODULE_UPDATE_FAIL: 'Unable to update account workflow module. Please try after sometime.',
  ACCOUNT_WORKFLOW_DELETE_TITLE: 'Delete Account workflow',
  ACCOUNT_WORKFLOW_DELETE_CONFIRMATION: 'Are you sure want to delete the account workflow?',
  ACCOUNT_WORKFLOW_DELETE_SUCCESS: 'Account workflow module deleted successfully.',
  ACCOUNT_WORKFLOW_DELETE_ERROR: 'Unable to delete the account workflow. Please try after sometime.',
  ACCOUNT_WORKFLOW_ALREADY_EXISTS: 'Account workflow name already exists.',
  VIEW_REPORTS: [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ],
  DEFAULT_CULTURE: { id: 1, name: 'English - India' },
  FORM_ID: 'formId',
  COUNTRY_ID: 'ci',
  COUNTRY_TENANT_ID: 'cti',
  SUPER_ADMIN_CREATE_SUCCESS: 'Super admin added successfully.',
  SUPER_ADMIN_CREATE_FAIL: 'Unable to add super admin. Please try after sometime.',
  ID: 'id',
  REGION_NAME: 'regionName',
  ACC_ID: 'accId',
  ACCOUNT_ADMIN_DELETE_CONFIRMATION: 'Are you sure want to delete account admin?',
  ACCOUNT_ADMIN_DELETE_TITLE: 'Delete Account Admin',
  ACCOUNT_DETAIL_FETCH_ERROR: 'Unable to load account summary. Please try after sometime.',
  REGION_ADMIN_UPDATE_SUCCESS: 'Region admin updated successfully.',
  REGION_ADMIN_UPDATE_FAIL: 'Unable to update region admin. Please try after sometime.',
  DELETE: 'Delete',
  ADD: 'Add',
  RESET: 'Reset',
  YES: 'Yes',
  NO: 'No',
  SUPER_ADMIN_DELETE_CONFIRMATION: 'Are you sure want to delete super admin?',
  SUPER_ADMIN_DELETE_TITLE: 'Delete Super Admin',
  SUPER_ADMIN_DELETE_SUCCESS: 'Super admin deleted successfully.',
  SUPER_ADMIN_DELETE_FAIL: 'Unable to delete super admin. Please try after sometime.',
  ACCOUNT_UPDATE_SUCCESS: 'Account summary updated successfully.',
  ACCOUNT_UPDATE_FAIL: 'Unable to update account summary. Please try after sometime.',
  ACCOUNT_ADMIN_CREATE_SUCCESS: 'Account admin added successfully.',
  ACCOUNT_ADMIN_CREATE_FAIL: 'Unable to add account admin. Please try after sometime',
  ACCOUNT_ADMIN_UPDATE_SUCCESS: 'Account admin updated successfully.',
  ACCOUNT_ADMIN_UPDATE_FAIL: 'Unable to update account admin. Please try after sometime',
  ACCOUNT_ADMIN_DELETE_SUCCESS: 'Account admin deleted successfully.',
  ACCOUNT_ADMIN_DELETE_FAIL: 'Unable to delete account admin. Please try after sometime.',
  SUPER_ADMIN_UPDATE_TITLE: 'Update Super Admin',
  SUPER_ADMIN_UPDATE_SUCCESS: 'Super admin updated successfully.',
  SUPER_ADMIN_UPDATE_FAIL: 'Unable to update super admin. Please try after sometime.',
  SUPER_ADMIN_FETCH_FAIL: 'Unable to fetch super admin. Please try after sometime.',
  SITE_UPDATE_SUCCESS: 'Site updated successfully.',
  SITE_UPDATE_FAIL: 'Unable to update site. Please try after sometime.',
  SITE_USER_UPDATE_TITLE: 'Update Site User',
  SITE_USER_UPDATE_SUCCESS: 'Site user updated successfully.',
  SITE_USER_UPDATE_FAIL: 'Unable to update site user. Please try after sometime.',
  SITE_USER_FETCH_FAIL: 'Unable to fetch site user. Please try after sometime.',
  SITE_USER_DELETE_SUCCESS: 'Site user deleted successfully.',
  SITE_USER_DELETE_FAIL: 'Unable to delete site user. Please try after sometime.',
  UNLOCK_USER_SUCCESS: 'User unlocked successfully.',
  UNLOCK_USER_FAIL: 'Unable to unlock the user. Please try after sometime.',
  ACCOUNT_ACTIVATE_SUCCESS: 'Account activated successfully.',
  ACCOUNT_ACTIVATE_FAIL: 'Unable to activate the account. Please try after sometime.',
  ACCOUNT_DEACTIVATE_SUCCESS: 'Account deactivated successfully.',
  ACCOUNT_DEACTIVATE_FAIL: 'Unable to deactivate the account. Please try after sometime.',
  ACCOUNT_ADMIN_FETCH_ERROR: 'Unable to load account admins. Please try after sometime.',
  ACCOUNT_ADMIN_DETAIL_FETCH_ERROR: 'Unable to load account admin details. Please try after sometime.',
  OPERATING_UNIT_ADMIN_FETCH_ERROR: 'Unable to load operating unit admins. Please try after sometime.',
  PRIMARY_DISEASE_MANAGED: [
    { value: 'HTN', label: 'HTN' },
    { value: 'Diabetes', label: 'Diabetes' }
  ],
  GROUP_TYPE: [
    { value: 'Virtual Group', label: 'Virtual Group' },
    { value: 'Support Group', label: 'Support Group' },
    { value: 'Intensive Group', label: 'Intensive Group' },
    { value: 'Hybrid Group', label: 'Hybrid Group' },
    { value: 'Mental Health Group', label: 'Mental Health Group' }
  ],
  LABTEST_CREATION_SUCCESS: 'Lab test created successfully.',
  LABTEST_CREATION_ERROR: 'Unable to create lab tests. Please try after sometime.',
  LABTEST_FETCH_ERROR: 'Unable to load lab tests. Please try after sometime.',
  LABTEST_LIST_FETCH_ERROR: 'Unable to load lab tests list. Please try after sometime.',
  LABTEST_UPDATE_SUCCESS: 'Lab test updated successfully.',
  LABTEST_UPDATE_FAIL: 'Unable to update lab test. Please try after sometime.',
  LABTEST_DELETE_SUCCESS: 'Lab test deleted successfully.',
  LABTEST_DELETE_ERROR: 'Unable to delete the lab test. Please try after sometime.',
  LABTEST_RANGE_DELETE_ERROR: 'Unable to delete the lab test range. Please try after sometime.',
  LABTEST_RANGE_FETCH_ERROR: 'Unable to load the lab test range. Please try after sometime.',
  LABTEST_DELETE_TITLE: 'Delete Lab test',
  LABTEST_DELETE_CONFIRMATION: 'Are you sure want to delete the lab test?',
  LABT_RESULT_RANGE_DELETE_TITLE: 'Delete Lab test result range',
  LABT_RESULT_RANGE_DELETE_CONFIRMATION: 'Are you sure want to delete the lab test result range?',
  LABTEST_RESULT_RANGES_CREATE_SUCCESS: 'Labtest result ranges created successfully.',
  LABTEST_RESULT_RANGES_CREATE_FAIL: 'Unable to create lab result ranges. Please try after sometime.',
  LABTEST_RESULT_RANGES_UPDATE_SUCCESS: 'Labtest result ranges updated successfully.',
  LABTEST_RESULT_RANGES_UPDATE_FAIL: 'Unable to update lab result ranges. Please try after sometime.',
  GROUP_FETCH_ERROR: 'Unable to load groups. Please try after sometime.',
  GROUP_DELETE_SUCCESS: 'Group deleted successfully.',
  GROUP_DELETE_FAIL: 'Unable to delete the group. Please try after sometime.',
  GROUP_DELETE_TITLE: 'Delete Group',
  GROUP_DELETE_CONFIRMATION: 'Are you sure want to delete the group?',
  EMAIL_ALREADY_EXISTS_ERR_MSG: 'Email ID already exists',
  EMR_ERR_MSG: 'Email ID already exists in EMR role',
  EMAIL_ALREADY_EXISTS_IN_ORG_ERR_MSG: 'Email ID already exists in different organization',
  EMAIL_DUPLICATION_ERR_MSG: `Multiple users can't have same`,
  SITE_ROLE_NAMES: [
    'HEALTH_COACH',
    'HEALTH_SCREENER',
    'HRIO',
    'LAB_TECHNICIAN',
    'NUTRITIONIST',
    'PHYSICIAN_PRESCRIBER',
    'PHARMACIST',
    'PROVIDER',
    'NURSE'
  ],
  REPORTING_ROLE_NAMES: ['REPORT_ADMIN', 'EMR_FACILITY_ADMIN', 'EMR_REPORTING_ADMIN'],
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',
  LABTEST_REENTERED_ERROR: 'You have already entered this lab test in the form.',
  LABTEST_EXISTS_ERROR: 'This lab test is already available in the regional database.',
  PROGRAM_CREATION_SUCCESS: 'Program created successfully.',
  PROGRAM_CREATION_ERROR: 'Unable to create program. Please try after sometime.',
  PROGRAM_DETAILS_ERROR: 'Unable to fetch program details. Please try after sometime.',
  PROGRAM_UPDATE_SUCCESS: 'Program updated successfully.',
  PROGRAM_UPDATE_ERROR: 'Unable to update program. Please try after sometime.',
  PROGRAM_DELETE_TITLE: 'Delete Program',
  PROGRAM_DELETE_CONFIRMATION: 'Are you sure want to delete the program?',
  PROGRAM_FETCH_ERROR: 'Unable to load programs. Please try after sometime.',
  PROGRAM_DELETE_SUCCESS: 'Program deleted successfully.',
  PROGRAM_DELETE_ERROR: 'Unable to delete the program. Please try after sometime.',
  REGION_CUSTOMIZATION_SCREENS: [
    { name: 'Screening Form' },
    { name: 'Enrollment Form' },
    { name: 'Assessment Form', isCustomIconInvisible: true }
  ],
  FORM_CUSTOMIZATION_SUCCESS: 'Dynamic form customization updated successfully.',
  FORM_CUSTOMIZATION_ERROR: 'Unable to update the dynamic form customization. Please try after sometime.',
  CONSENT_FORM_CUSTOMIZATION_SUCCESS: 'consent form updated successfully.',
  CONSENT_FORM_CUSTOMIZATION_ERROR: 'consent form updation failed. Please try after sometime.',
  DEACTIVATE_CONSENT_SUCCESS: 'consent form deleted successfully.',
  DEACTIVATE_CONSENT_FAILURE: 'consent form deletion failed. Please try after sometime.',
  DEACTIVATE_CONSENT_NO_DATA: 'consent data not found. Please try after sometime.',
  DELETE_CONSENT_CONFIRMATION: 'Are you sure you want to delete the account consent form?',
  DELETE_CONSENT_TITLE: 'Delete confirmation',
  CONSENT_FORM_EMPTY_ERROR: 'Consent data should not be empty.',
  FETCH_CONSENT_FORM_ERROR: 'Unable to fetch the consent form data. Please try after sometime.',
  FETCH_FORM_META_ERROR: 'Unable to fetch the form meta data. Please try after sometime.',
  GROUP_ORDER: {
    bioData: 1,
    bioMetrics: 2,
    glucoseLog: 3,
    phq4: 4,
    bpLog: 5
  },
  VALIDITY_OPTIONS: {
    gone: { key: 'gone', label: 'Hide' },
    visible: { key: 'visible', label: 'Show' }
  },
  NO_FAMILY: 'NO_FAMILY',
  INVALID_CREDENTIALS: 'Invalid credentials'
};

export const ROLE_LABELS = {
  [APPCONSTANTS.ALL_ROLES.SUPER_USER]: 'Super User',
  [APPCONSTANTS.ALL_ROLES.SUPER_ADMIN]: 'Super Admin',
  [APPCONSTANTS.ALL_ROLES.REGION_ADMIN]: 'Region Admin',
  [APPCONSTANTS.ALL_ROLES.ACCOUNT_ADMIN]: 'Account Admin',
  [APPCONSTANTS.ALL_ROLES.OPERATING_UNIT_ADMIN]: 'OU Admin',
  [APPCONSTANTS.ALL_ROLES.HEALTH_COACH]: 'Health Coach',
  [APPCONSTANTS.ALL_ROLES.HEALTH_SCREENER]: 'Health Screener',
  [APPCONSTANTS.ALL_ROLES.HRIO]: 'HRIO',
  [APPCONSTANTS.ALL_ROLES.LAB_TECHNICIAN]: 'Lab Technician',
  [APPCONSTANTS.ALL_ROLES.NUTRITIONIST]: 'Nutritionist',
  [APPCONSTANTS.ALL_ROLES.PHARMACIST]: 'Pharmacist',
  [APPCONSTANTS.ALL_ROLES.PROVIDER]: 'Provider',
  [APPCONSTANTS.ALL_ROLES.NURSE]: 'Nurse',
  [APPCONSTANTS.ALL_ROLES.PHYSICIAN_PRESCRIBER]: 'Physician Prescriber',
  [APPCONSTANTS.ALL_ROLES.REPORT_ADMIN]: 'Report Admin'
};

export default APPCONSTANTS;
