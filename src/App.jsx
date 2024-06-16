import React from "react";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
	constructor() {
		super();
		this.state = { showCounter: false };
	}

	render() {
		return (
			<div>
				<h1>Ciclo de Vida no React</h1>

				<button
					onClick={() => {
						// fazendo uma espécie de toggle com o showCounter (true/false)
						this.setState({ showCounter: !this.state.showCounter });
					}}>
					{/* Muda o texto do botão de acordo com o valor booleano do showCounter */}
					{this.state.showCounter ? "Remover contador" : "Mostrar contador"}
				</button>

				{/* Se o showCounter estiver como true, então o componente <Counter /> será mostrado na tela, senão ele não mostrará nada */}
				{this.state.showCounter ? <Counter /> : null}
			</div>
		);
	}
}

export default App;
