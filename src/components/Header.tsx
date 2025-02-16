export const Header = () => {
  const classes = {
    header:
      'w-full py-6 px-4 flex items-center justify-center rounded-b-2xl shadow-2xl bg-red',
    title: 'text-font-light font-black text-[6vw] md:text-5xl uppercase',
  };

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>Resume Creator</h1>
    </header>
  );
};
