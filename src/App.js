import React from "react";

function App() {
    function Card() {



        return (

            <div>



                <div className="Cards">
                    <div className="card">
                        <img src="https://wallpapercave.com/wp/wp4056410.jpg" alt="myPic" className="card__img" />

                        <div className="card_info">
                            <span className="card_category">A netflix original series:</span>
                            <h3 className="Card_title">DarK</h3>
                            <a href="https://www.netflix.com/pk/title/81396409"
                                target="_blank">
                                <button>Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>



            </div>






        )


    }
}
ReactDOM.render(
    <>
        <Card />
        <Card />
        <Card />
        <Card />
    </>,
    document.getElementById("root")

);

export default App