import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<div className="row">
				<div className="col border bg-dark fs-1" style={{ height: "100px", color: "white", }}>
					<i className="fa fa-clock"></i>
				</div>
				<div className="col border bg-dark fs-1" style={{ height: "100px", color: "white" }}>
					{props.miles}
				</div>
				<div className="col border bg-dark fs-1" style={{ height: "100px", color: "white" }}>
					{props.centenas}

				</div>
				<div className="col border bg-dark fs-1" style={{ height: "100px", color: "white" }}>
					{props.decimal}
				</div>
				<div className="col border bg-dark fs-1" style={{ height: "100px", color: "white" }}>
					{props.unidad}
				</div>
			</div>

		</div>
	);
};

export default Home;
