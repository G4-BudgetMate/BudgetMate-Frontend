// Validation utilities for forms and inputs

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with isValid and message
 */
export const validatePassword = (password) => {
    if (!password) {
        return { isValid: false, message: 'Password is required' };
    }
    if (password.length < 6) {
        return { isValid: false, message: 'Password must be at least 6 characters' };
    }
    return { isValid: true, message: 'Password is valid' };
};

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @param {string} fieldName - Name of the field
 * @returns {object} Validation result
 */
export const validateRequired = (value, fieldName = 'This field') => {
    if (value === null || value === undefined || value === '') {
        return { isValid: false, message: `${fieldName} is required` };
    }
    return { isValid: true, message: '' };
};

/**
 * Validate number input
 * @param {any} value - Value to validate
 * @param {object} options - Validation options (min, max)
 * @returns {object} Validation result
 */
export const validateNumber = (value, options = {}) => {
    const { min, max, fieldName = 'Value' } = options;

    if (value === null || value === undefined || value === '') {
        return { isValid: false, message: `${fieldName} is required` };
    }

    const numValue = Number(value);

    if (isNaN(numValue)) {
        return { isValid: false, message: `${fieldName} must be a number` };
    }

    if (min !== undefined && numValue < min) {
        return { isValid: false, message: `${fieldName} must be at least ${min}` };
    }

    if (max !== undefined && numValue > max) {
        return { isValid: false, message: `${fieldName} must be at most ${max}` };
    }

    return { isValid: true, message: '' };
};

/**
 * Validate amount (positive number)
 * @param {any} amount - Amount to validate
 * @returns {object} Validation result
 */
export const validateAmount = (amount) => {
    return validateNumber(amount, { min: 0.01, fieldName: 'Amount' });
};

/**
 * Validate percentage (0-100)
 * @param {any} percentage - Percentage to validate
 * @returns {object} Validation result
 */
export const validatePercentage = (percentage) => {
    return validateNumber(percentage, { min: 0, max: 100, fieldName: 'Percentage' });
};

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {object} Validation result
 */
export const validateUsername = (username) => {
    if (!username) {
        return { isValid: false, message: 'Username is required' };
    }
    if (username.length < 3) {
        return { isValid: false, message: 'Username must be at least 3 characters' };
    }
    if (username.length > 20) {
        return { isValid: false, message: 'Username must be at most 20 characters' };
    }
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        return { isValid: false, message: 'Username can only contain letters, numbers, and underscores' };
    }
    return { isValid: true, message: '' };
};

/**
 * Validate form data
 * @param {object} data - Form data to validate
 * @param {object} rules - Validation rules
 * @returns {object} Validation result with errors object
 */
export const validateForm = (data, rules) => {
    const errors = {};
    let isValid = true;

    Object.keys(rules).forEach((field) => {
        const rule = rules[field];
        const value = data[field];

        if (rule.required) {
            const result = validateRequired(value, rule.label || field);
            if (!result.isValid) {
                errors[field] = result.message;
                isValid = false;
                return;
            }
        }

        if (rule.type === 'email' && value) {
            if (!isValidEmail(value)) {
                errors[field] = 'Invalid email format';
                isValid = false;
            }
        }

        if (rule.type === 'number' && value) {
            const result = validateNumber(value, {
                min: rule.min,
                max: rule.max,
                fieldName: rule.label || field,
            });
            if (!result.isValid) {
                errors[field] = result.message;
                isValid = false;
            }
        }
    });

    return { isValid, errors };
};
