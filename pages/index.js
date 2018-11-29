import Head from 'next/head';
import '../styles/styles.sass'

export default class extends React.PureComponent {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  toggleStyles(event) {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  render() {
    return (
      <div>
        <Head>
          <title>jvarness</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/static/pic.png" />
            </a>
            <a id="burger" onClick={this.toggleStyles} 
                role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">Elsewhere</a>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a onClick={() => alert('You clicked the button!')} className="button is-primary">Click</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <h1 className="title">Hello World from <a href="https://nextjs.org/">Next.js</a> and <a href="https://bulma.io/">Bulma</a>!</h1>
          </div>
        </section>
      </div>
    )
  }
}