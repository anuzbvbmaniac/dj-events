import Head from "next/head"
import Header from "../../Header"
import Footer from "../../Footer"

const MasterLayout = ({title, description, keywords, children}) => {
    return (
        <div className="bg-gray-900">
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keywords" content={keywords}/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="relative overflow-hidden">

                <Header/>

                <main>
                {children}
                </main>

                <Footer/>

            </div>
        </div>
    )
}

export default MasterLayout


MasterLayout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other musical events',
    keywords: 'dj, musical, hottest parties',
}
