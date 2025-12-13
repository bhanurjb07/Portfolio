import emailjs from '@emailjs/browser';

// Keys from .env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendEmail = async (formData) => {
    try {
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Bhanu Pratap Singh',
        };

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );

        return { success: true, response };
    } catch (error) {
        console.error('EmailJS Error:', error);
        alert(`Failed to send email. Error: ${JSON.stringify(error)}`); // Alert user directly
        return { success: false, error };
    }
};
