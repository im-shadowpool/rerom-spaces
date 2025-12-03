"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  <h1>All spaces begin with intention</h1>
                </Copy>
              </div>
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>Support</p>
                    <p>hello@reromspaces.com</p>
                    <p>+91 83176 87898</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>Location</p>
                    <p>Hyderabad, India</p>
                    <p>Chennai, India</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>Reach us</p>
                    <p>Instagram</p>
                    <p>WhatsApp</p>
                  </Copy>
                </div>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Terrene studio workspace"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
