import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    secure: false,
    auth: {
        user: 'abhikrishnaram88@gmail.com',
        pass: 'sTM8pqAkYgQV3Dz7',
    },
});
export const mailOptions = {
    from: 'isrs2023@aims.amrita.edu',
    to: 'isrs2023@aims.amrita.edu',
    bcc: ['abhikrishnaram88@gmail.com', 'debnarayan@aims.amrita.edu'],
};