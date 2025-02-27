"use client";

import { useState } from "react";
import { appLinks, plans, plansText } from "@/constants/data";
import Heading from "../heading";
import { Button } from "../ui/button";
import Link from "next/link";

const PlansSection = () => {
  const defaultPlan = plans.find((plan) => plan.mostPopular) || plans[0];
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);

  return (
    <div id="pricing" className="pt-10">
      <Heading heading={plansText.heading} subheading={plansText.subheading} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan.id === plan.id}
            onSelect={() => setSelectedPlan(plan)}
          />
        ))}
      </div>
    </div>
  );
};

export default PlansSection;

const PlanCard = ({
  plan,
  isSelected,
  onSelect,
}: {
  plan: SubscriptionPlan;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const {
    title,
    price,
    discountPercentage,
    originalPrice,
    billedAmount,
    billingCycle,
    buttonText,
    guaranteeText,
    mostPopular,
  } = plan;

  return (
    <div
      onClick={onSelect}
      className={`relative flex flex-col items-center bg-secondary p-8 rounded-lg shadow-lg text-center space-y-4 cursor-pointer transition-all duration-200 ${
        isSelected ? "border-4 border-signature scale-105 shadow-xl" : ""
      }`}
    >
      {/* Most Popular Badge */}
      {mostPopular && (
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-signature text-white text-sm px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* Plan Title */}
      <h3 className="text-lg font-semibold">{title}</h3>

      {/* Discount Badge */}
      <span className="bg-foreground text-background text-sm px-3 py-1 rounded-full inline-block mt-2">
        Save {discountPercentage}%
      </span>

      {/* Price */}
      <p className="text-3xl font-bold mt-4">
        ${price.toFixed(2)}
        <span className="text-lg font-normal">/month</span>
      </p>

      {/* Billed Amount */}
      <p className="text-muted-foreground text-sm mt-1">
        Billed{" "}
        {discountPercentage > 0 && (
          <span className="line-through">${originalPrice.toFixed(2)}</span>
        )}{" "}
        ${billedAmount.toFixed(2)} {billingCycle}
      </p>

      {/* Select Plan Button */}
      <Link href={appLinks.playstore} target="_blank" rel="noopener noreferrer" className="w-full">
        <Button
          variant={isSelected ? "signature" : "default"}
          className="px-4 py-2 rounded-lg mt-4 w-full font-semibold"
        >
          {buttonText}
        </Button>
      </Link>

      {/* Guarantee */}
      <p className="text-muted-foreground text-sm flex items-center justify-center mt-3">
        ✅ {guaranteeText}
      </p>
    </div>
  );
};
