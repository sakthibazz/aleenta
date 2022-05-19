import { makeStyles, withStyles } from "@material-ui/core/styles";

import { 
    Accordion, 
    AccordionDetails, 
    // MuiAccordionSummary, 
    Container, 
    Grid,
    Typography,
    } from '@material-ui/core'
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import React, { Component } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
   root:{
    width: "100%",
    padding: "2%",
   },
    MuiAccordionRoot: { before: { backgroundColor: "#FEEDD4" } },
    
  }));

  const AccordionSummary = withStyles({
    root: {
      // margin: "0",
      // padding:'0',
      backgroundColor: "#FEEDD4",
      color: "black",   
    },
    content: {
      color:"black"
    },
    expanded: {},
  })(MuiAccordionSummary);


const TearmsAndConditions = () => {

    const classes = useStyles();
    return ( 
        <>
            <Grid container  className= "additionalMeditationContainer"  style={{paddingTop:"4%",paddingLeft:"15%"}}>
                <div className={classes.root}>
                    <Accordion style={{width:"80%"}}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon style={{ color: "Black" }} />}
                        >
                            <Typography>Terms and Conditions</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            <Grid item xs={12} md={12} >
                                <h6 style={{paddingTop:"1%"}}>
                                    Please read these Terms of Service carefully before accessing or using our website. 
                                    By accessing or using any part of the site, you agree to be bound by these Terms of Service.
                                </h6>
                                <h4 style={{paddingTop:"1%"}}>
                                    GENERAL CONDITIONS
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    We reserve the right to refuse service to anyone for any reason at any time. 
                                    You understand that your content (not including credit card information), 
                                    may be transferred unencrypted and involve (a) transmissions over various networks; 
                                    and (b) changes to conform and adapt to the technical requirements of connecting networks or devices. 
                                    Credit card information 
                                    is always encrypted during transfer over networks.
                                </p>
                                <p>
                                    You agree not to reproduce, duplicate, copy, sell, resell or exploit any 
                                    portion of the Service, use of the Service, or access to the Service or any 
                                    contact on the website through which the service is provided, 
                                    without express wrote permission by us.
                                </p>
                                <p>
                                    The headings used in this agreement are included for convenience only and will 
                                    not limit or otherwise affect these Terms.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    ACCURACY OF BILLING AND ACCOUNT INFORMATION
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    Upon payment of the Program Registration fees – in part or whole, 
                                    depending on the Program – Aleenta Well-Being shall deliver the terms 
                                    of use of the Program and grant you access to the Program. The invoice may be 
                                    provided to you along with the email confirmation or within two (2) months thereafter. 
                                    This shall be period’s proof of 
                                    delivery against the successful payment of fees.
                                </p>
                                <p>
                                    Owing to certain exceptional circumstances, if 
                                    Aleenta Well-Being has granted you access to a Program pending payment, 
                                    and Aleenta Well-Being does not receive payments within the stipulated time periods, 
                                    Aleenta Well-Being may, at its own discretion, withdraw your 
                                    access to the Program without giving any prior notice.
                                </p>
                                <p>
                                    You understand and agree that all information provided by you is accurate, 
                                    current, and complete and that you will maintain and update your information to keep 
                                    it accurate, current, and complete. You acknowledge that if any information provided by 
                                    you is untrue, inaccurate, not current, or incomplete, we reserve the right to terminate 
                                    your use of the Platform 
                                    and your enrolment into a Program, to the extent applicable.
                                </p>
                                <p>
                                    In addition to the registration process, 
                                    as part of your use of the Platform or participation in the Programs, 
                                    we may obtain certain information about you and your performance in the Programs. 
                                    Some of this information may be Personally Identifiable Information. 
                                    We may use, maintain, and store this 
                                    information to provide certain services to you now and in the future.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    PERSONAL INFORMATION
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    Your submission of personal information through the store 
                                    is governed by our Privacy Policy
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    USE OF PROGRAMS
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    Aleenta Well-Being reserves the right to cancel or reschedule any 
                                    Program or live sessions or to alter, modify or rearrange the schedule 
                                    of topics and other such evaluations of progress. You also understand 
                                    that Aleenta Well-Being at its sole discretion, may limit, suspend, or 
                                    terminate your use of the Platform or Programs or live sessions. 
                                    You also understand that Aleenta Well-Being may modify or discontinue all 
                                    services related to its Programs at its sole discretion. You agree that Aleenta 
                                    Well-Being shall not be liable to you or any third party for any such modification, 
                                    suspension, or discontinuance. Nothing in these Terms shall be construed to obligate 
                                    Aleenta Well-Being to maintain and support the Platform or Programs or any part or 
                                    portion thereof or any associated services.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    MODIFICATIONS TO THE SERVICE AND PRICES
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    Aleenta Well-Being reserves the right to change prices for all our 
                                    Programs offer ordeals. These changes are done due to market conditions, 
                                    price changes, errors in advertisements, and other extenuating circumstances. 
                                    However, the price you paid at 
                                    the time of purchase still holds for you.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    CONTACT INFORMATION
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    Questions about the Terms of Service should be sent to us at: programs@aleenta.in.
                                </p>


                            </Grid>
                        </Grid>
                    </AccordionDetails>
                    </Accordion>


                    <Accordion style={{width:"80%"}}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon style={{ color: "Black" }} />}
                        >
                            <Typography>Privacy Policy</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            <Grid item xs={12} md={12} >
                                <h4 style={{paddingTop:"1%"}}>
                                    WHAT DO WE DO WITH YOUR INFORMATION?
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    When you register with our Aleenta Well-Being, 
                                    as part of the registration process, we collect the personal information you give us such as 
                                    your name, address and email address, age, gender.
                                </p>
                                <p>
                                    Please read this Privacy Policy carefully, 
                                    as it governs how you use Aleenta Well-Being or its affiliate products. 
                                    If you do not agree to this Privacy Policy, please do not use Aleenta Well-Being.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    HOW DO YOU GET MY CONSENT?
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                When you provide us with personal information to complete a transaction, verify your credit or debit card, place a registration, we imply that you consent to our collecting it and using it for that specific reason only.
                                </p>
                                <p>
                                If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    HOW DO I WITHDRAW MY CONSENT?
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    If after you opt-in, you change your mind, you may withdraw 
                                    your consent for us to contact you, for the continued collection, 
                                    use or disclosure of your information, 
                                    at any time, by contacting us at: programs@aleenta.in .
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    PAYMENT
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    We use Razorpay for processing payments. We/Razorpay do 
                                    not store your card data on their servers. The data is 
                                    encrypted through the Payment Card Industry Data Security Standard (PCI-DSS) when processing payment. 
                                    Your purchase transaction data is only used as long as is necessary to complete your purchase transaction. 
                                    After that is complete, 
                                    your purchase transaction information is not saved.
                                </p>
                                <p>
                                    Our payment gateway adheres to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.
                                </p>
                                <p>
                                    PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.
                                </p>
                                <p>
                                    For more insight, you may also want to read terms and conditions of razorpay on https://razorpay.com
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    TYPES OF PERSONAL DATA COLLECTED
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    The Personal Data that we collect about you depends on 
                                    the context of your interactions with us, the program, 
                                    services and features that you use, and the applicable laws.
                                </p>
                                <p>
                                    Personal Data is stored in personnel files or 
                                    within the electronic records (on servers in India or other countries) of Aleenta Well-Being. 
                                    The following types of Personal Data may 
                                    be held by the Company, as appropriate, on relevant individuals:
                                </p>
                                <ul>
                                    <li>
                                        <p>Personal Identification Data First Name, Last name </p> 
                                    </li>
                                    <li>
                                        <p>Personal Characteristics Age, Gender, Date of Birth</p>
                                    </li>
                                    <li>
                                        <p>Contact Data Postal address, Email address, Phone number</p>
                                    </li>
                                    <li>
                                        <p>Inquiries Personal Data stated in the form – for example: Name, address, phone number, age , gender Subject of Inquiry </p>                                     <p></p>
                                        <p>Recordings of calls with users showing interest in our Program. Information about your interactions with us. </p>
                                    </li>
                                </ul>

                                <h4 style={{paddingTop:"1%"}}>
                                    SECURITY
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    To protect your personal information, we take reasonable 
                                    precautions and follow company best practices to make sure it is not 
                                    inappropriately lost, misused, accessed, disclosed, altered or destroyed.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    COOKIES
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    We use cookies to maintain session of your user. It is not used to personally 
                                    identify you on other websites.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    CONTACTING ALEENTA WELL-BEING
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    If you have any questions about this privacy policy or your 
                                    dealings with the Aleenta Well-Being, you can reach out to us using the 
                                    Aleenta Well-Being Help and Support page at: programs@aleenta.in
                                </p>
                                <p>
                                    India Aleenta Well-Being Bangalore.
                                </p>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                    </Accordion>


                    <Accordion style={{width:"80%",marginTop:"0%"}}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon style={{ color: "Black" }} />}
                        >
                            <Typography>Refund Policy</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            <Grid item xs={12} md={12} >
                                <h4 style={{paddingTop:"1%"}}>
                                    REFUNDS
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    Our policy lasts 30 days. If 30 days have gone by since your registration, 
                                    unfortunately we can’t offer you a refund or exchange.
                                </p>
                                <p>
                                    To complete your refund, we require a receipt or proof of registration.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    REFUNDS (IF APPLICABLE)
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    If you are approved as eligible for refund, then your 
                                    refund will be processed, and a credit will automatically be applied to your credit card or 
                                    original method of payment, within a certain amount of days.
                                </p>

                                <h4 style={{paddingTop:"1%"}}>
                                    LATE OR MISSING REFUNDS (IF APPLICABLE)
                                </h4>
                                <p style={{paddingTop:"1%"}}>
                                    If you haven’t received a refund yet, first 
                                    check your bank account again.
                                </p>
                                <p>
                                    Then contact your credit or debit card company, 
                                    it may take some time before your refund is officially posted.
                                </p>
                                <p>
                                    Next contact your bank. There is often some processing time before a refund is posted.
                                </p>
                                <p>
                                    If you’ve done all of this and you still have not 
                                    received your refund yet, please contact us at: programs@aleenta.in.
                                </p>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                    </Accordion>
                </div>
            </Grid>
        </>
     );
}
 
export default TearmsAndConditions;