import MasterLayout from "../components/hoc/landing/MasterLayout"
import Hero from "../components/Hero"
import EventList from "../components/EventList"
import CTA from "../components/CTA"

const HomePage = () => {
    return (
        <MasterLayout>
            <Hero/>
            <EventList/>
            <CTA/>
        </MasterLayout>
    )
}

export default HomePage
