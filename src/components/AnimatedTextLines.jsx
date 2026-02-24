const AnimatedTextLines = ({ text, className }) => {
  // 1. 줄바꿈 문자를 기준으로 문자열 분리
  // 2. 공백만 있는 줄은 제거
  const lines = text.split('\n').filter((line) => line.trim() !== '');
  console.log(lines);
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <span
          className="block leading-relaxed tracking-wide text-pretty"
          key={index}
        >
          {line}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTextLines;
