export default function Carn({ title }) {
	return (
		<div>
			<p>{title}</p>
		</div>
	);
}
// import React from "react";
// import ReactDOM from "react-dom";
// class Carn extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { show: false };
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<button
// 					onClick={() => this.setState({ show: !this.state.show })}
// 					className="btn btn-primary"
// 				>
// 					Clique ici
// 				</button>
// 				{this.state.show ? (
// 					<img src="https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg" />
// 				) : null}
// 			</div>
// 		);
// 	}
// }
// ReactDOM.render(<Carn />, document.getElementById("root"));
