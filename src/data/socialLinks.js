// Social Links

export const socialLinks = {
    linkedin: 'www.linkedin.com/in/bhanurjb',
    github: 'https://github.com/bhanurjb07',
    twitter: 'https://x.com/bhanu_rjb',
    medium: 'https://medium.com/@bs532436',
    instagram: 'https://instagram.com/bhanurjb',
    whatsapp: '9760633056',
    email: 'bhanurjb21@gmail.com',
    phone: '+91 9760633056',
    address: 'Chhalera, Sector 44, Noida, Uttar Pradesh, 201301',
};

// WhatsApp message
export const whatsappConfig = {
    phoneNumber: socialLinks.whatsapp,
    defaultMessage: 'Hi Bhanupratap Singh',
};

//WhatsApp link with pre-filled message
export const getWhatsappLink = (message = whatsappConfig.defaultMessage) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
};

export default socialLinks;
