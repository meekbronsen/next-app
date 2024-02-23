import Welcome from '../../../emails/index'
import {Resend} from 'resend';

const resend =  new Resend(process.env.RESEND_API_KEY);

export async function POST(){
    resend.emails.send({
        from: '...',
        to:'mikolskeezy@gmail.com',
        subject: 'Hello world',
        react: typeof Welcome
    })
}