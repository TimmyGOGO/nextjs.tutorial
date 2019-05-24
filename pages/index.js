import Fetch from 'isomorphic-unfetch'
import Layout from './../src/components/Layout'
import Prices from './../src/components/Prices'

const Index = (props) => (
  <Layout>
    <div>
      <h1> Welcome to BitzPrices</h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json()

  return {
    bpi: data.bpi
  }

}

export default Index