export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export const socials = {
  github: "https://github.com/fairishayan",
  linkedin: "https://linkedin.com/in/fairishayan",
  facebook: "https://www.facebook.com/fairishayan/",
  instagram: "https://www.instagram.com/fairishayan",
  x: "https://x.com/fairishayan",
  email: "fairishayan@gmail.com",
  phone: "+91 73885 47700",
  location: "Kalyanpur, Lucknow, Uttar Pradesh, India",
};

export const socialLinksList: SocialLink[] = [
  { name: "GitHub", url: socials.github, label: "github.com/fairishayan" },
  { name: "LinkedIn", url: socials.linkedin, label: "linkedin.com/in/fairishayan" },
  { name: "X (Twitter)", url: socials.x, label: "x.com/fairishayan" },
  { name: "Instagram", url: socials.instagram, label: "instagram.com/fairishayan" },
  { name: "Facebook", url: socials.facebook, label: "facebook.com/fairishayan" },
];

