"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Container from "./container";
import Subscribe from "./subscribe";
import Brand from "./brand";
import { footerLinks } from "@/constants/data";
import Link from "next/link";

const Footer = ({ subscribe = true }: { subscribe?: boolean }) => {
  return (
    <div className="relative mt-32">
      {subscribe && (
        <div className="absolute w-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Subscribe />
        </div>
      )}
      <div className="bg-signature min-h-96 py-16 pt-32">
        <Container className="h-full flex items-center">
          <div className="w-full flex flex-col md:flex-row justify-between gap-8">
            {/* Vynox VPN Info */}
            <div className="flex flex-col gap-8">
              <div>
                <Brand short />
                <p className="text-primary mt-2">
                  Vynox VPN is a private virtual network that has unique
                  features and high security.
                </p>
              </div>
              <div className="flex gap-4">
                <FaFacebookF
                  size={35}
                  className="p-2 bg-primary text-signature rounded-full cursor-pointer hover:bg-secondary"
                />
                <FaTwitter
                  size={35}
                  className="p-2 bg-primary text-signature rounded-full cursor-pointer hover:bg-secondary"
                />
                <FaInstagram
                  size={35}
                  className="p-2 bg-primary text-signature rounded-full cursor-pointer hover:bg-secondary"
                />
              </div>
              <p>©2025vynoxVPN</p>
            </div>

            {/* Product Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((category) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-lg font-semibold">{category.title}</h4>
                  <ul className="space-y-2 text-primary">
                    {category.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="hover:text-background">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
