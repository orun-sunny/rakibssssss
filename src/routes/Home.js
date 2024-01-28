
import Hero from "../components/Hero"
import Destination from "../components/Destination"
import Trip from "../components/Trip"
import Footer from "../components/Footer"
import Team from "../components/Team"
import Navbar from "../components/Navbar/Navbar"
import Button from "../components/ButtonAll"
import Carousel from "../components/Carousel/Carousel"


function Home() {

    return (
        <>
            <section
                className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
            >    <Navbar></Navbar>


                <div className="flex flex-col justify-center text-center items-center h-3/4">

                    <div className="text-xl">
                        {/* <Button></Button> */}

                    </div>
                </div>
            </section>

            <Destination />


            <Trip></Trip>

            <Team></Team>

            <Footer></Footer>
        </>
    )
}

export default Home;
