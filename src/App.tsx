import Layout from './components/Layout'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import RefinementSlider from './components/RefinementSlider'
import SocialProof from './components/SocialProof'
import PromptPreview from './components/PromptPreview'
import AgentPersona from './components/AgentPersona'
import Footer from './components/Footer'

function App() {
    return (
        <Layout>
            <Navbar />
            <main className="flex-grow">
                <HeroSection />
                <RefinementSlider />
                <SocialProof />
            </main>
            <AgentPersona />
            <PromptPreview />
            <Footer />
        </Layout>
    )
}

export default App
