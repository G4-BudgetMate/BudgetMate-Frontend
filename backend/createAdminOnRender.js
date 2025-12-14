const axios = require('axios');

const RENDER_BACKEND_URL = 'https://budgetmate-backend-ti71.onrender.com';

const adminData = {
    name: 'Admin',
    email: 'admin@budgetmate.com',
    password: 'admin123', 
    confirmPassword: 'admin123'
};

async function createAdmin() {
    try {
        console.log('Creating admin user on Render backend...');
        console.log(`Backend URL: ${RENDER_BACKEND_URL}`);
        console.log(`Email: ${adminData.email}`);

        const response = await axios.post(
            `${RENDER_BACKEND_URL}/api/auth/admin/create`,
            adminData
        );

        console.log('Admin user created successfully!');
        console.log('User details:', response.data.user);
        console.log('\nYou can now login with:');
        console.log(`   Email: ${adminData.email}`);
        console.log(`   Password: ${adminData.password}`);

    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.data.message);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            console.error('Network error: Could not reach the backend');
            console.error('Make sure your Render backend URL is correct and the service is running');
        } else {
            console.error('Error:', error.message);
        }
    }
}

createAdmin();
