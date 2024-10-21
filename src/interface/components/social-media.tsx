import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

const SocialMedia = () => {
  const socialMedias = [
    {
      to: "https://www.facebook.com/magnivertente2012",
      icon: <FacebookLogo weight="bold" />,
    },
    {
      to: "https://www.instagram.com/magnivertente_official",
      icon: <InstagramLogo weight="bold" />,
    },
  ];

  return (
    <ul className="flex gap-4">
      {socialMedias.map(({ to, icon }) => (
        <li key={to}>
          <a href={to} target="_blank" className="text-2xl text-stone-100">
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { SocialMedia };
