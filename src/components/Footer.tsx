import LogoImg from "../assets/images/logo.svg"
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/ahmed-ghaleb-2022'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ahmed-tareq-ali-ghaleb-64b14820a/'
    },
    {
      label: 'Twitter X',
      href: '#'
    },
    {
      label: 'Instagram',
      href: '#'
    },
    {
      label: 'CodePen',
      href: '#'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">Let&apos;s work together today!</h2>
                    
                    <ButtonPrimary 
                      href="mailto:ahmedghaleb199322@gmail.com"
                      label="Start project"
                      icon="chevron_right"
                    />

                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className="mb-2">Sitemap</p>

                        <ul>
                            {sitemap.map(({ label, href }, index) => (
                                <li key={index}>
                                    <a href={href} target="_self" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>

                        <ul>
                            {socials.map(({ label, href }, index) => (
                                <li key={index}>
                                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">{label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="">
                    <img src={LogoImg} width={40} height={40} alt="logo" />
                </a>

                <p className="text-sm text-zinc-500">© 2025 All rights reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer