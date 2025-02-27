import { testimonials } from "@/constants/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Heading from "../heading";
import UsersAvatar from "../users-avatars";

const TestimonialSection = () => {
   return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <UsersAvatar/>

        <Heading
        isJsx
          heading={
            <>
              <span className="text-signature">+18 Million Creators</span> using
              Vynox VPN
            </>
          }
          subheading="Our users love using Vynox to build their marketing assets. We empower them to create assets at scale, faster than ever, with cutting-edge technology."
        />
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;

// Testimonial Card Component
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, review, rating, avatar, title } = testimonial;

  return (
    <div className="bg-secondary p-6 rounded-lg shadow-lg">
      {/* Star Rating */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-400" />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mt-3">{title}</h3>

      {/* Review */}
      <p className="text-muted-foreground mt-2 text-sm">{review}</p>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-4">
        <Image
          src={avatar}
          alt={name}
          width={32}
          height={32}
          className="rounded-full object-cover w-8 h-8"
        />
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
};
