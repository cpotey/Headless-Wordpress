import Link from 'next/link'
import Head from 'next/head'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <header>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    </Head>
    

    <div className="container">
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
      <Link href="/posts">
        <a style={linkStyle}>Blog</a>
      </Link>
    </div>
    <style jsx>{`
        header {
          border-bottom: 1px solid rgb(232, 232, 232);
          padding:20px;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: rgb(153, 153, 153);
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
      <style jsx global>{`
      body { 
        margin:0;
        padding:0;
      }
    `}</style>
  </header>
)

export default Header