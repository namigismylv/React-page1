import Service_aboutMe_innovation from "../service_aboutMe_innovation_sections/service_aboutMe_innovation"
import Education from "../education_section/education"
import Portfolio from "../portfolio_section/portfolio"
import Client_brand_blog from "../client_brand_blog_section/client_brand_blog"
import Subscribe from "../subscribe_section/subscribe"
function Main(){
    return(

    <main>
        <Service_aboutMe_innovation/>
        <Education/>
        <Portfolio/>
        <Client_brand_blog/>
        <Subscribe/>
    </main>

    )
}
export default Main