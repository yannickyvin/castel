import App from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    
    return (
      <Component {...pageProps}>
        <style jsx global>{`
          @font-face {
            font-family: 'Pacifico';
            src: url('/fonts/Pacifico-Regular.ttf');
          }

          * {
            font-family: "Pacifico", serif;
            font-weight: 600;
          }
        `}</style>
      </Component>
    );
  }
}

export default MyApp;


