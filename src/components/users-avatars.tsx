import Image from "next/image";
import User from "../../public/images/user.jpg";

const UsersAvatar = () => {
  const avatars = [
    {
      id: 1,
      avatar: User,
    },
    {
      id: 2,
      avatar: User,
    },
    {
      id: 3,
      avatar: User,
    },
    {
      id: 4,
      avatar: User,
    },
    {
      id: 5,
      avatar: User,
    },
    {
      id: 6,
      avatar: User,
    },
  ];
  return (
    <div className="flex -space-x-6">
      {avatars.map((avatar) => (
        <Image
          key={avatar.id}
          src={avatar.avatar}
          alt="User"
          width={50}
          height={50}
          className="rounded-full border-2 border-secondary object-cover w-14 h-14 md:w-20 md:h-20 "
        />
      ))}
    </div>
  );
};

export default UsersAvatar;
