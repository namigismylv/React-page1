import './subscribe.css'
function Subscribe(){
    return(
       <>
       <section id='subscribe'>
        <div className="subscribe__div">
            <div className="subscribe__div__overlay">
            <div className="subscribe__div__text">
            <h3>SUBSCRIBE MY NEWSLETTER</h3>
            <form action="#" id='subscribe__form'>
            <input type="text" placeholder='Enter Your Email' />
            <button>Notify Now</button>
            </form>
            </div>
            </div>
        </div>
       </section>
       </> 
    )
}
export default Subscribe