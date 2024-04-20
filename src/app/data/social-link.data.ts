import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, instagram, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/umesh-coder',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://www.linkedin.com/in/umeshs09/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:umeshshelare@gmail.com?subject=Hi Umesh Shelare!',
    color: '#e74c3c',
  },
  {
    name: 'Instagram',
    path: instagram,
    link: 'https://instagram.com/mrckvnflrs',
    color: '#E52765',
  },
];

export default socialLinkData;
