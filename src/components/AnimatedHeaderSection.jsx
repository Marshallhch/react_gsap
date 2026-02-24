import AnimatedTextLines from './AnimatedTextLines';

const AnimatedHeaderSection = ({ subTitle, title, text, textColor }) => {
  const shouldSplitTitle = title.includes(' ');
  const titleParts = shouldSplitTitle ? title.split(' ') : [title];
  return (
    <div>
      <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%' }}>
        <div className="flex flex-col justify-center gap-12 pt-16 sm:gap-16">
          <p
            className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col gap-12 uppercase banner-text-responsive sm:gap-16 md:block text-black`}
            >
              {titleParts.map((part, index) => (
                <span key={index}>{part} </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 text-black`}>
        <div className="absolute inset-x-0 border-t-2"></div>
        <div className="py-12 sm:py-16 text-end">
          <AnimatedTextLines
            text={text}
            className={`font-light uppercase value-text-responsive`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
