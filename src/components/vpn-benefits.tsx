"use client";

import { vpnBenefits } from "@/constants/data";
import { useState } from "react";
import { Button } from "./ui/button";

const VpnBenefits = () => {
  const [selectedFaq, setSelectedFaq] = useState<string | null>(
    vpnBenefits[0].id
  );
  return (
    <div className="w-full">
      <h2 className="text-3xl font-semibold">Why you should use a VPN</h2>
      {/* Questions & Answers */}
      <div className="mt-6 space-y-4">
        {vpnBenefits.map((benefit) => (
          <div key={benefit.id} className="relative">
            <div
              className={`absolute left-0 top-0 w-[2px] transition-all duration-300 h-full ${
                selectedFaq === benefit.id ? "bg-signature" : "bg-gray-500"
              }`}
            />

            {/* Question */}
            <Button
              variant={"ghost"}
              className={`block text-left w-full h-full text-xl font-medium transition-all duration-300 pl-4 ${
                selectedFaq === benefit.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
              onClick={() =>
                setSelectedFaq(selectedFaq === benefit.id ? null : benefit.id)
              }
            >
              {benefit.question}
            </Button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                selectedFaq === benefit.id
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-muted-foreground pl-6">{benefit.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VpnBenefits;
