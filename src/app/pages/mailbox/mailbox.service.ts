import { Injectable } from '@angular/core';

export class Mail {
    constructor(public id: number,
                public sender: string,
                public senderPhoto: string,
                public senderMail: string,
                public subject: string,
                public date:string,
                public body: string,
                public attachment:boolean,
                public attachments: string[],
                public unread: boolean,
                public sent: boolean,
                public starred: boolean,
                public draft: boolean,
                public trash: boolean,
                public selected:boolean) { }
}

let Mails = [
  new Mail(
      1, 
      'Prabhakaran Dasarathan', 
      'assets/img/app/envato.jpg',
      'prabhakrand75d@gmail.com', 
      'Your updated item has been approved',
      '3:58 PM',
      '<p>Congratulations! Your update to AdminCLI - Angular 6 Admin Template. '+
      'You can view your item here: </p>'+
      '<p><a href="http://www.admincli.com" target="blank">http://www.admincli.com</a></p>' +
      '<p>Thanks for your submission!</p>' +
      '<p>Regards,<br> AdminCLI Team</p>', 
      false,
      [],
      true,
      false,
      false,
      false,
      false,
      false 
  ),
  new Mail(
      2,
      'Vertivel',
      'assets/img/profile/bruno.jpg',
      'vertirvelan@gmail.com',
      'Your Service Request has been closed successfully',
      '8:10 AM',
      '<p>Dear Customer,   <br/><br/>'+
 
      'Thank you for contact with us.<br/>'+
       
      'Your service request  19053911 has been resolved.<br/>'+
       
      'We thank you for giving us an opportunity to serve you and we look forward to your continued patronage.<br/>'+
       
      'For any further queries, please call our helpdesk numbers as below and quote the above mentioned service request number.<br/>'+
       
      '•  Retail & SME banking customers: 76605005011 <br/>'+
      '•  Corporate banking customers: 16752660614 <br/> <br/>'+
       
      'Assuring you of our best services.<br/>'+
       
      'Sincerely, <br/>'+
      'Team Birla Limited.</p>',
      true,
      ['assets/img/app/snow.jpg', 'assets/img/app/sample.jpg'],
      true,
      false,
      true,
      false,
      false,
      false 
  ),
  new Mail(
      3,
      'Ramkumar Ram',
      'assets/img/app/google-platform.jpg',
      'sriramram@gmail.com',
      'Ramkumar, Waiting for Someone Special!',
      'Jan 5',      
      '<p> Dear Prabahkaran <br/>'+ 
      
      'Mohini is looking for a Life Partner. She can be among your matching preference, see if you connect with each other. <br/><br/>'+ 
      
      'Name: Mohini <br/>'+ 
      'Age: 23 <br/>'+ 
      'Profession: Fashion Designer <br/>'+ 
      'Mohini Profile: I’m Mohini, a 23 years old Fashion Designer. I am looking for a caring, confident & cultured life partner who is compatible. <br/><br/>'+ 
      
      'You can be my Someone Special! <br/>'+ 
      '<a href="http://www.hai.com">Connect with me & chat! </a><br/><br/>'+ 
      
      'Regards, <br/>'+ 
      'Mohini</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      4,
      'Krithick Madhavan',
      'assets/img/app/vs.jpg',
      'krithithimadav@gmail.com',
      'Final settlement slip last month',
      '24.12.2016',
      '<p>Dear Krithik Madhavan, <br/>'+

      'Please find attached Final Settlement Payslip. <br/>'+
      
      'If any notice period deduction has been deducted, the notice period deduction is calculated on the gross salary. <br/>'+
      
      'Please quote your CBSI Employee ID while sending any queries regarding salary to payroll-in@globalcomp.com <br/><br/>'+
      
      'Regards, <br/>'+
      'Santosh Babu <br/><br/>'+
      
      'Note: <br/>'+
      'To open this Payslip, you require a 7 character password. <br/>'+
      'Your password consists of the first 3 letters of your name in Upper case, followed by your date and month of birth/date (DDMM format). <br/>'+
      
      'For example, if your name is John and the date of birth is 25-Aug-1975, then your password will be JOH2508.  <br/>'+
      
      'To open this secure encrypted file, you require Adobe Acrobat Reader version 6.0 or above... <br/>',
      
      false,
      [],
      true,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      5,
      'Draft',
      '',
      '',
      'no subject',
      '4:46 PM',
      '',
      false,
      [],
      false,
      false,
      false,
      true,
      false,
      false
  ),
  new Mail(
      6,
      'Raghu Dinesh',
      '',
      '',
      'Password Reset',
      'Jan 7',
      'Hello Raghu Dinesh <br/><br/>'+
      'Please click on the URL below to change your password.<br/>'+
      
      '<a href="#">Click Here</a>',
      false,
      [],
      false,
      false,
      false,
      true,
      false,
      false
  ),
  new Mail(
      7,
      'MailChimp',
      'assets/img/app/mailchimp.jpg',
      'hello@mailchimp.com',
      'Our 2016 annual report',
      '22.12.2016',
      '<p>For our 2016 annual report, we let our design team run wild with our most fun facts and proudest moments from the year. From GIFs in email campaigns to physical tons of infrastructure added to dollars raised for charity, it’s our year in numbers.</p>' +
      '<p>We’re proud of our new features, our customer support tickets solved, and our philanthropy in Atlanta. But we’re even more proud of you and the billions of emails you’ve sent to grow your businesses your way in 2016. Keep up the good work!</p>' +
      '<p>Cheers to the new year,</p>' +
      '<p>MailChimp</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      8,
      'Bluehost',
      'assets/img/app/bluehost.jpg',
      'no-reply@e.bluehost.com',
      'Your domain privacy may be at risk',
      '20.12.2016',
      '<h4>New ICANN Rules Require Accurate Contact Information</h4>'+
      '<p>Your domain information may be at risk. However, you can protect your information with domain privacy.</p>' +
      '<p>Protect yourself with Domain Privacy.</p>'+
      '<p><small>Only $11.88 per year.**</small></p>' +
      '<p><a href="http://bluehost.com/" target="blank" class="btn btn-success">Get started</a></p>',
      false,
      [],
      false,
      false,
      true,
      false,
      false,
      false
  ),
  new Mail(
      9,
      'Vimeo',
      'assets/img/users/default-user.jpg',
      'vimeo@email.vimeo.com',
      'The year\'s best videos and milestones',
      '20.12.2016',
      '<h4>Now presenting: 2016\'s best videos</h4>'+
      '<p>Every day, the world\'s best creators upload their videos to Vimeo. And now, the most inventive, most striking, most all-around mind-blowing videos of 2016 are in. Enjoy, wondrous humans.</p>' +
      '<p><a href="https://vimeo.com/blog/post/The-Top-Videos-of-2016?utm_source=email&utm_medium=vimeo-decembernewsletter-201612&utm_campaign=30389" target="blank" class="btn btn-info">See the list</a></p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      10,
      'Andy Dufresne',
      'assets/img/profile/adam.jpg',
      'andy.dufresne@gmail.com',
      'The Shawshank Redemption',
      '18.11.2016',
      '<p>From Wikipedia, the free encyclopedia</p>' +
      '<p>The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont. and starring Tim Robbins and Morgan Freeman. Adapted from the Stephen King novella Rita Hayworth and Shawshank Redemption, the film tells the story of Andy Dufresne, '+
      'a banker who is sentenced to life in Shawshank State Penitentiary for the murder of his wife and her lover, despite his claims of innocence. During his time at the prison, he befriends a fellow inmate, Ellis Boyd "Red" Redding, '+
      'and finds himself protected by the guards after the warden begins using him in his money-laundering operation.</p>',
      false,
      [],
      false,
      true,
      false,
      false,
      false,
      false
  ),
  new Mail(
      11,
      'The Envato Team',
      'assets/img/app/envato.jpg',
      'donotreply@envato.com',
      'Author Driven Pricing on ThemeForest, CodeCanyon and 3DOcean',
      '05.09.2016',
      '<h5>Hey Envato Community Members!</h5>' + 
      '<p>As many of you know, over the past 12 months we have been rolling out Author Driven Pricing (ADP) across a range of different categories on Envato Market. So far this has included GraphicRiver and a handful of categories within ThemeForest.</p>' +
      '<p>In a few weeks, we\'ll be moving on to the next stage of our Author Driven Pricing project. This will involve introducing ADP to three new areas of Envato Market. These areas are:</p>' +
      '<ul><li>All remaining ThemeForest categories (including WordPress). </li><li>All categories on CodeCanyon.</li><li>All categories on 3DOcean</li></ul>' +
      '<p>We strongly recommend reading the full announcement on our forums where you will find:</p>' +
      '<ul><li>More details about the change.</li><li>How ADP has impacted pricing on previous categories.</li><li>Technical details regarding how to set prices.</li> <li>Why we’ve made the change. </li></ul>' +
      '<p>You will also be able to ask any questions you might have.</p>' +
      '<p>We will send you another email to let you know when this feature goes live.</p>' +
      '<p>All the best,</p>'+
      '<p>The Envato Team</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      12,
      'Jonathan Cantu',
      'assets/img/avatars/avatar-1.png',
      'JCantu@billingsleyco.com',
      'Ability to Customize',
      '02.09.2016',
      '<p>Hi,</p><p>Upon purchases, will I have the ability to modify color palette, font, etc. beyond your own design?</p><p>Thanks</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  ),
  new Mail(
      13,
      'Jennifer Adam',
      'assets/img/profile/julia.jpg',
      'jenniferadam2009@gmail.com',
      'Guest Post Request - 2016 !!!',
      '09.05.2016',
      '<p>Dear Customer,   <br/><br/>'+
 
      'Thank you for contact with us.<br/>'+
       
      'Your service request  19053911 has been resolved.<br/>'+
       
      'We thank you for giving us an opportunity to serve you and we look forward to your continued patronage.<br/>'+
       
      'For any further queries, please call our helpdesk numbers as below and quote the above mentioned service request number.<br/>'+
       
      '•  Retail & SME banking customers: 76605005011 <br/>'+
      '•  Corporate banking customers: 16752660614 <br/> <br/>'+
       
      'Assuring you of our best services.<br/>'+
       
      'Sincerely, <br/>'+
      'Team Birla Limited.</p>',
      false,
      [],
      false,
      false,
      false,
      false,
      false,
      false
  )
];

@Injectable()
export class MailboxService {

    public getAllMails() {
         return Mails.filter(mail => mail.sent == false && mail.draft == false && mail.trash == false);
    }
   
    public getStarredMails() {
         return Mails.filter(mail => mail.starred == true);
    }

    public getSentMails() {
         return Mails.filter(mail => mail.sent == true);
    }

    public getDraftMails() {
         return Mails.filter(mail => mail.draft == true);
    }

    public getTrashMails() {
         return Mails.filter(mail => mail.trash == true);
    }

    public getMail(id: number | string) {
        return Mails.find(mail => mail.id === +id);
    }
}