import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

export default () => {
  return (
    <Layout title="revo.js Privacy Policy">
      <Header centered type="secondary">
        <h1>Privacy Policy</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              The primary purpose of this website is to provide you all the
              information you might need to attend revo.js conference. The
              following provides an overview of how we protect your privacy
              during your visit.
            </p>
          </Note>

          <section>
            <h2>How do we gather data?</h2>
            <p>
              Personal information may be collected from you in 2 different
              ways:
            </p>
            <ul className="bullet">
              <li>
                <strong>directly</strong>, through various forms like
                newsletter, ticket purchase form, call for papers, etc. This
                data includes common-sense information used solely to enable us
                to organize revo.js;
              </li>
              <li>
                <strong>indirectly</strong>, through web technologies used
                within our website, like cookies, which will be detailed below;
              </li>
            </ul>
          </section>

          <section>
            <h2>How do we use this data?</h2>
            <p>
              There are various reasons we collect personal data, which also
              describes what we do with it:
            </p>
            <ul>
              <li>
                To provide you with the services you signed up for, or
                requested;
              </li>
              <li>
                For security purposes, to ensure that our site is safe and
                secure;
              </li>
              <li>
                To send emails regarding event updates or important information
                when we have your permission;
              </li>
              {/* <li>
                To personalize our services i.e. remember your previous session
              </li> */}
              <li>
                To optimize Facebook ads based on collected anonymized data, and
                build targeted audiences;
              </li>
              <li>
                For statistical purposes, i.e. website traffic analysis,
                performance of marketing communications;
              </li>
              <li>
                To better understand our visitors’ experience in order to
                improve it;
              </li>
            </ul>
          </section>

          <section>
            <h2>Cookies</h2>

            <p>
              Cookies are files created by websites you visit. They make your
              online experience easier by saving browsing information. With
              cookies, sites can keep you signed in, remember your site
              preferences, and give you locally relevant content.
            </p>

            <p>
              Cookies do not cause any damage to your computer and do not
              contain any viruses. Our cookies remain stored on your computer
              for a certain period of time.
            </p>

            <p>We use several types of cookies:</p>

            <ul className="bullet">
              <li>
                <strong>Required cookies</strong> which are essential for the
                normal functioning of the website i.e. session cookies. These
                cookies do not track you and cannot be opted out of.
              </li>
              <li>
                <strong>Performance and Analytics</strong> used by 3rd party
                analytics tools like Google Analytics, to help us analyze how
                our site is used, through compiled reports. These data are
                exclusively used by us for website activity and performance
                analysis.
              </li>
              {/* <li>
                Functionality cookies – these remember your preferred language,
                understand your preferences, enable our Youtube videos and
                Social Media buttons to function properly. Whithout these the
                website loses some functionality, but they are optional.
              </li> */}
              <li>
                <strong>Tracking cookies</strong> used by Facebook Pixel to
                create Custom Audiences for our Facebook event ads. The data
                collected in this way is anonymous to us, however, this data is
                stored and processed by Facebook. Facebook may link this
                information to your Facebook account and also use it for its own
                promotional purposes, in accordance with{" "}
                <a
                  href="https://www.facebook.com/about/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook’s Data Policy
                </a>
                .
              </li>
            </ul>

            <p>
              You can delete or disable cookies through your browser settings at
              any time. See detailed below for your browser:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647?hl=en&amp;p=cpn_cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/en-us/help/4027947/windows-delete-cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft Edge
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/exp/enable-and-disable-cookies-website-preferences"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/en-us/HT201265"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Safari
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>3rd party services</h2>

            <p>
              Personal data collected by us is considered confidential and will
              never be sold or leased to third parties. It is used solely to
              enable us to organize this conference.
            </p>

            <p>
              Below is the full list of 3rd party services we use, which comply
              to GDPR regulations:
            </p>
            <ul>
              <li>
                <a
                  href="https://ti.to/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ti.to
                </a>
              </li>
              <li>
                <a
                  href="https://mailchimp.com/legal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mailchimp
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/analytics/answer/7105316"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/security/gdpr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Forms
                </a>
              </li>
              <li>
                <a
                  href="https://www.paypal.com/en/webapps/mpp/ua/privacy-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PayPal
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/about/privacyshield"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2>Get in touch</h2>

            <p>
              Feel free to contact us regarding any information you cannot find
              on this page or if you have any questions about how we handle your
              data at{" "}
              <a href="mailto:info@revojs.ro?subject=[privacy]">
                info@revojs.ro
              </a>
              .
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
