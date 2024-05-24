import { socialLinks } from '../../data';
import PageLinks from '../PageLinks/PageLinks';
import SocialLink from '../SocialLink/SocialLink';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <SocialLink
              key={id}
              href={href}
              itemClass="footer-icon"
              icon={icon}
            />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Hussein Tirawi
        <span id="date">{currentYear}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
