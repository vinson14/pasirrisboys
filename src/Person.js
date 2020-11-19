function Person(props) {
    const style = { backgroundImage: `url(${props.img})` };

    return (
        <div className="row person-row">
            <div
                className="col-12 col-md-6 p-5 person-picture"
                style={style}
            ></div>
            <div className="col-12 col-md-6 p-3 bg-dark d-flex align-items-center justify-content-center">
                <h5 className="pri-font m-0 text-white"> ${props.winnings}</h5>
            </div>
        </div>
    );
}

export default Person;
