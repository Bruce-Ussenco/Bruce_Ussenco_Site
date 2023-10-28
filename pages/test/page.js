import NavBar from '/components/navBar.js';

function Home() {
    return (
      <>
        <NavBar/>
        <div className="container">
          <h1>Hello Next.js</h1>
          <p>Let's explore different ways to style Next.js apps</p>
          <p className="t1">text style 002</p>
          <p className="t2">just more text</p>
          <p className="t2">text text text</p>
          <style jsx>{`
            .container {
              margin: 25px;
            }
            p {
              color: blue;
            }
            .t1 {
              color: red;
              font-size: 25px;
            }
            .t2 {
              color: black;
              font-size: 15px;
            }
          `}</style>
          <style jsx global>{`
            /*p {
              font-size: 20px;
            }*/
          `}</style>
        </div>
      </>
    );
  }
   
  export default Home;