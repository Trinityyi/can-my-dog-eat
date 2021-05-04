import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-8 w-full max-w-2xl mx-auto">
      <p className="disclaimer pb-6 text-sm">
        This website does not provide medical advice. The information, including but not limited to,
        text, graphics, images and other materials contained on this website are for informational
        purposes only. No material on this site is intended to be a substitution for professional
        veterinarian advice, diagnosis or treatment. Always seek the advice of your veterinarian
        with any questions you may have regarding how to feed or medicate your pet. Never disregard
        professional advice or delay in seeking it because of something you have read on this
        website!
      </p>
      <p className="text-sm">
        Designed and developed by{' '}
        <a href="https://github.com/Trinityyi" className="underline">
          Isabelle Viktoria Maciohsek
        </a>{' '}
        &copy; {new Date().getFullYear()} /{' '}
        <a href="https://github.com/Trinityyi/can-my-dog-eat" className="underline">
          Source code
        </a>
        <br /> Built with{' '}
        <a href="https://reactjs.org/" title="ReactJS" rel="nofollow noreferrer" target="_blank">
          ReactJS
        </a>
        , icons made by{' '}
        <a
          href="https://feathericons.com/"
          title="Feather"
          rel="nofollow noreferrer"
          target="_blank"
        >
          Feather
        </a>{' '}
        and{' '}
        <a href="https://www.freepik.com" title="Freepik" rel="nofollow noreferrer" target="_blank">
          Freepik
        </a>{' '}
        from{' '}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          rel="nofollow noreferrer"
          target="_blank"
        >
          www.flaticon.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
