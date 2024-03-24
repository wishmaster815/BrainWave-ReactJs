import React from "react";
import Section from "./Section";
import { socials } from "../constants";
const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className=" container flex justify-between items-center gap-10 max-sm:flex-col">
        <p>{new Date().getFullYear()} All Rights Reserved.</p>
        <div className=" flex-wrap gap-5 flex">
          {socials.map((item) => (
            <a
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
