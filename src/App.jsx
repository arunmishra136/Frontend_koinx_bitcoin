
import Header from './components/Header'
import Crypto from './components/Crypto'
import Coin from './components/Coin'
import CoinOverview from './components/Performance'
import TrendingCoins from './components/Footer'
import Team from './components/Team'
import SentimentSection from './components/Sentiment'
import BitcoinInfoPage from './components/Bitinfo'
import TokenomicsPage from './components/Takenomics'
import KoinXPage from './components/Trending'

function App() {
  

  return (
    <>
    <div className="flex">
  {/* Left section with 70% width */}
  <div className="w-[80%]">
    <Header />
    <Crypto />
    <Coin />
    <CoinOverview />
    <SentimentSection />
    <BitcoinInfoPage/>
    <TokenomicsPage />
    <Team />
    <TrendingCoins />
  </div>

  {/* Right section with 30% width */}
  <div className="w-[20%]">
    <KoinXPage />
  </div>
</div>
    </>
  )
}

export default App
