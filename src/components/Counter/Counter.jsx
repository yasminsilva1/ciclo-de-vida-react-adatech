import React from "react";

export class Counter extends React.Component {
	constructor() {
		super();
		this.state = { counter: 0 };
		console.log("Construindo a classe Counter...");
	}

	//! O método componentWillMount() não é mais seguro de se utilizar!
	UNSAFE_componentWillMount() {
		console.log("O nosso componente contador será montado!");
	}

	componentDidMount() {
		console.log("O componente foi montado! ✅");

		document.addEventListener("scroll", this.consoleScroll);
	}

	// método chamado sempre que uma prop ou estado for atualizado!
	shouldComponentUpdate() {
		return true;
	}

	//! O método componentWillUpdate() não é mais seguro de se utilizar!
	UNSAFE_componentWillUpdate() {
		console.log("O componente será atualizado!");
	}

	componentDidUpdate() {
		console.log("O componente Counter foi atualizado! ✅");
	}

	componentWillUnmount() {
		console.log("O componente Counter será desmontado...");

		document.removeEventListener("scroll", this.consoleScroll);
	}

	consoleScroll() {
		console.log("Rolando a página...");
	}

	render() {
		console.log("Renderizando o componente Counter...");
		return (
			<div>
				<h1>{this.state.counter}</h1>

				<button
					onClick={() => {
						this.setState({ counter: this.state.counter - 1 });
					}}>
					Diminuir
				</button>

				<button
					onClick={() => {
						this.setState({ counter: this.state.counter + 1 });
					}}>
					Aumentar
				</button>
			</div>
		);
	}
}
