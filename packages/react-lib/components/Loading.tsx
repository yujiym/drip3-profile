const LoadingText = ({ text = 'DRIPPING...' }) => (
  <div className="flex justify-center items-center min-h-screen w-full">
    <h1
      data-text={text}
      className="loading font-ss text-4xl"
      style={{ color: '#b4ace3' }}
    >
      <style jsx>
        {`
          .loading {
            position: relative;
            color: #b4ace3;
          }

          .loading::before {
            content: attr(data-text);
            position: absolute;
            overflow: hidden;
            white-space: nowrap;
            max-width: 7em;
            color: var(--c-primary);
            opacity: 70%;
            animation: loading 5500ms linear;
          }

          @keyframes loading {
            0% {
              max-width: 0;
            }
          }
        `}
      </style>
      {text}
    </h1>
  </div>
)

export default LoadingText
