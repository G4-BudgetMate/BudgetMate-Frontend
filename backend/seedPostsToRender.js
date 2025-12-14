// Script to seed sample community posts to your Render backend
// This will add realistic community posts for testing

const axios = require('axios');

const RENDER_BACKEND_URL = 'https://budgetmate-backend-ti71.onrender.com';

// Admin credentials
const ADMIN_EMAIL = 'admin@budgetmate.com';
const ADMIN_PASSWORD = 'admin123';

// Sample community posts with Gen Z friendly content
const samplePosts = [
    {
        title: "Just hit my first ₱10k savings goal! 🎉",
        content: "Guys, I can't believe it! Started using the 50/30/20 rule three months ago and finally saved ₱10,000! It wasn't easy cutting back on milk tea and online shopping, but totally worth it. Anyone else tracking their progress?",
        category: "Savings"
    },
    {
        title: "Emergency fund saved me from disaster",
        content: "My laptop died last week and I would've been screwed for my online classes. Thank God I had my emergency fund ready! This is your sign to start building yours ASAP. Even ₱500/month adds up!",
        category: "Savings"
    },
    {
        title: "Side hustle ideas that actually work? 💰",
        content: "Looking for legit side hustles to boost my income. Currently doing freelance writing but want to diversify. What's working for you guys? Drop your suggestions!",
        category: "Side Hustles"
    },
    {
        title: "How do you guys resist impulse buying?",
        content: "Shopee/Lazada sales are killing my budget 😭 I see a good deal and my brain goes 'you NEED this'. Any tips for controlling impulse purchases? I really want to stick to my budget this month.",
        category: "Budgeting"
    },
    {
        title: "Started investing at 20 - best decision ever",
        content: "Just wanted to share that I started investing in index funds 6 months ago and it's been amazing watching my money grow. Don't wait until you're older to start! Even small amounts matter. Happy to answer questions for beginners!",
        category: "Budgeting"
    },
    {
        title: "Debt-free journey: Month 3 update",
        content: "Using the debt snowball method to pay off my credit card debt. Started with ₱25k debt, now down to ₱15k! The momentum is real. If you're in debt, don't give up. Small wins lead to big victories! 💪",
        category: "Budgeting"
    },
    {
        title: "Best budgeting apps you've tried?",
        content: "Besides BudgetMate (which is awesome btw), what other apps do you use for tracking expenses? Looking to compare features and see what works best for different needs.",
        category: "Budgeting"
    },
    {
        title: "College student budget tips needed!",
        content: "First year college student here trying to manage my allowance better. Between food, transpo, and school supplies, I'm always broke by week 3. How do you budget as a student? Any hacks?",
        category: "Budgeting"
    },
    {
        title: "Passive income streams that actually work",
        content: "Been researching passive income for months. So far I've tried: dividend stocks (slow but steady), print-on-demand (hit or miss), and affiliate marketing (takes time). What's working for you?",
        category: "Side Hustles"
    },
    {
        title: "Mental health check: Money stress is real",
        content: "Reminder that it's okay to feel stressed about money. You're not alone. Take it one day at a time, celebrate small wins, and don't compare your chapter 1 to someone else's chapter 20. We got this! 💚",
        category: "Mental Health"
    }
];

async function seedPostsToRender() {
    try {
        console.log('Step 1: Logging in as admin...');

        // Login to get auth token
        const loginResponse = await axios.post(
            `${RENDER_BACKEND_URL}/api/auth/login`,
            {
                email: ADMIN_EMAIL,
                password: ADMIN_PASSWORD
            }
        );

        const token = loginResponse.data.token;
        console.log('Logged in successfully!');

        console.log(`\nStep 2: Creating ${samplePosts.length} community posts...`);

        let successCount = 0;
        let errorCount = 0;

        // Create each post
        for (const post of samplePosts) {
            try {
                await axios.post(
                    `${RENDER_BACKEND_URL}/api/posts`,
                    post,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                successCount++;
                console.log(`  ✓ Created: ${post.title}`);
            } catch (error) {
                errorCount++;
                console.error(`  ✗ Failed: ${post.title}`);
                if (error.response?.data) {
                    console.error(`    Error: ${error.response.data.message || JSON.stringify(error.response.data)}`);
                }
            }
        }

        console.log(`\n=== Summary ===`);
        console.log(`Successfully created: ${successCount} posts`);
        if (errorCount > 0) {
            console.log(`Failed: ${errorCount} posts`);
        }
        console.log(`\nGo to the Community tab in your app and pull to refresh!`);

    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.data.message || error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            console.error('Network error: Could not reach the backend');
        } else {
            console.error('Error:', error.message);
        }
    }
}

seedPostsToRender();
