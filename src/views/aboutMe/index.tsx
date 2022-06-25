import imageMaggie from "../../img/maggie.jpg";
import imageMaggieOcchiali from "../../img/maggieOcchiali.jpg";
import meAndMaggie from "../../img/meAndMaggie.jpg";

export default function AboutMe() {
    return (
        <>
            <div className="container">
                <div id="carouselExampleInterval" className="carousel slide carousel-fade mt-2 border border-3" data-bs-ride="carousel" style={{ width: 'fit-content', maxHeight: 400, margin: 'auto' }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={imageMaggie}
                                className="d-block"
                                alt="..."
                                style={{ maxHeight: 400 }}
                                />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={imageMaggieOcchiali}
                                className="d-block"
                                alt="..."
                                style={{ maxHeight: 400 }}
                                />
                        </div>
                        <div className="carousel-item">
                            <img src={meAndMaggie }
                                className="d-block"
                                alt="..."
                                style={{ maxHeight: 400 }}
                                />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
