import Default from '../components/default'
import Header from '../components/header'

const Home = (): JSX.Element => {
  return (
    <section className="home">
      <Default page="main" />
      <Header />
  </section>
  )
}

export default Home