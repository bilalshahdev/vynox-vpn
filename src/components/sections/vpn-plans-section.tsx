"use client";

import { useState } from "react";
import { subscriptionPlans } from "@/constants/data"; // Import plan data
import Heading from "../heading";
import { Button } from "../ui/button";

const VpnPlansSection = () => {
  // Find the most popular plan to set as the default selected plan
  const defaultPlan =
    subscriptionPlans.find((plan) => plan.mostPopular) || subscriptionPlans[0];
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);

  return (
    <div>
      <Heading
        heading={"Choose the Best VPN Plan for You"}
        subheading="Select from our affordable plans and enjoy secure browsing with Vynox VPN."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {subscriptionPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan.id === plan.id}
            onSelect={() => setSelectedPlan(plan)}
          />
        ))}
      </div>

      {/* Selected Plan Summary */}
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold">
          Selected Plan:{" "}
          <span className="text-signature">{selectedPlan.title}</span>
        </p>
      </div>
    </div>
  );
};

export default VpnPlansSection;

// Plan Card Component
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
        isSelected ? "border-4 border-signature scale-105" : ""
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
        Billed <span className="line-through">${originalPrice.toFixed(2)}</span>{" "}
        ${billedAmount.toFixed(2)} {billingCycle}
      </p>

      {/* Select Plan Button */}
      <Button
        variant={isSelected ? "signature" : "default"}
        className="px-4 py-2 rounded-lg mt-4 w-full font-semibold"
      >
        {isSelected ? "Selected" : buttonText}
      </Button>

      {/* Guarantee */}
      <p className="text-muted-foreground text-sm flex items-center justify-center mt-3">
        ✅ {guaranteeText}
      </p>
    </div>
  );
};
