import MasterLayout from "../components/hoc/landing/MasterLayout"
import Hero from "../components/Hero"
import EventList from "../components/EventList"
import CTA from "../components/CTA"

const HomePage = () => {
    return (
        <MasterLayout>
            <main className="bg-gray-900">
                <Hero/>
                <EventList/>
                <CTA/>
            </main>

        </MasterLayout>
    )
}

export default HomePage
