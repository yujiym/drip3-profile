import Layout from '../components/Layout'

const Home = () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url
    console.log('url', tabs)
    // use `url` here inside the callback because it's asynchronous!
  })

  return (
    <Layout title="HOME" activeTab="home">
      <>
        <p>Home</p>
      </>
    </Layout>
  )
}

export default Home
