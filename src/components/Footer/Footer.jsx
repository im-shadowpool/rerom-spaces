"use client";
import "./Footer.css";

import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinLine, RiWhatsappLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".social-link");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  const [hoverCircle, setHoverCircle] = useState({
    left: 0,
    top: 0,
    visible: false,
  });

  const handleEnter = (e) => {
    if (!socialIconsRef.current) return;

    const wrapperRect = socialIconsRef.current.getBoundingClientRect();
    const iconRect = e.currentTarget.getBoundingClientRect();

    // center of the hovered icon relative to the wrapper
    const left = iconRect.left - wrapperRect.left + iconRect.width / 2;
    const top = iconRect.top - wrapperRect.top + iconRect.height / 2;

    setHoverCircle({
      left,
      top,
      visible: true,
    });
  };

  const handleLeaveWrapper = () => {
    setHoverCircle((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <img
                  src="/logos/reromspaces-logo-light.png"
                  alt="reromspaces logo"
                />
                {/* <Copy delay={0.1}>
                  <h3 className="lg">
                    Rerom<span>Spaces</span>
                  </h3>
                </Copy> */}
              </div>
              <Copy delay={0.2}>
                <h2>Crafted with creativity, precision, and passion.</h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Index</h3>
                </a>
                <a
                  href="/studio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/studio");
                  }}
                >
                  <h3>Our Space</h3>
                </a>
                <a
                  href="/spaces"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/spaces");
                  }}
                >
                  <h3>Crafts</h3>
                </a>
                <a
                  href="/blueprints"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/blueprints");
                  }}
                >
                  <h3>Blueprints</h3>
                </a>
                <a
                  href="/connect"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/connect");
                  }}
                >
                  <h3>Your Space</h3>
                </a>
              </Copy>
            </div>
          </div>
        </div>
        <div className="container footer-socials">
          <div className="footer-meta-col">
            <div
              className="footer-socials-wrapper"
              ref={socialIconsRef}
              onMouseLeave={handleLeaveWrapper}
            >
              {/* Shared moving circle */}
              <span
                className={`socials-hover-circle ${
                  hoverCircle.visible ? "is-visible" : ""
                }`}
                style={{
                  left: hoverCircle.left,
                  top: hoverCircle.top,
                }}
              />

              <a
                href=""
                target="_blank"
                className="social-link"
                onMouseEnter={handleEnter}
              >
                <div className="icon">
                  <RiLinkedinLine />
                </div>
              </a>
              <a
                href=""
                target="_blank"
                className="social-link"
                onMouseEnter={handleEnter}
              >
                <div className="icon">
                  <RiInstagramLine />
                </div>
              </a>
              <a
                href=""
                target="_blank"
                className="social-link"
                onMouseEnter={handleEnter}
              >
                <div className="icon">
                  <RiWhatsappLine />
                </div>
              </a>
              <a
                href=""
                target="_blank"
                className="social-link"
                onMouseEnter={handleEnter}
              >
                <div className="icon">
                  <RiYoutubeLine />
                </div>
              </a>
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>hello@reromspaces.com</p>
              <p>+91 83176 87898</p>
            </Copy>
          </div>
        </div>
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-header">
            <h3>
              Rerom<span>Spaces</span>
            </h3>
          </div>
          <div className="footer-copyright">
            <p>
              <span>ReromSpaces.com</span>
            </p>
            <p>Made together with our clients.</p>
            <p>All rights reserverd &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
