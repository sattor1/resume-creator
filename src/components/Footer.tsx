export const Footer = () => {
  const classes = {
    footer:
      'w-full px-5 py-4 flex items-center justify-center rounded-t-2xl shadow-2xl bg-red',
    text: 'text-[3vw] sm:text-[2vw] md:text-xl font-semibold text-font-light',
    link: 'underline text-[3vw] sm:text-[2vw] md:text-xl',
  };
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p className={classes.text}>
        Copyright © {year}&nbsp;
        <a
          className={classes.link}
          href="https://github.com/sattor1"
          target="_blank"
        >
          Sattor Toshmamadov
        </a>
      </p>
    </footer>
  );
};
