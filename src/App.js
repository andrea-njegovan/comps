import Button from "./Button";

function App() {
	return (
		<div>
			<div>
				<Button
					success
					rounded
					outline
				>
					Click Me!
				</Button>
			</div>
			<div>
				<Button warning>Buy Now!</Button>
			</div>
			<div>
				<Button
					danger
					outline
				>
					Super!
				</Button>
			</div>
			<div>
				<Button
					secondary
					rounded
					outline
				>
					Click Me!
				</Button>
			</div>
			<div>
				<Button
					primary
					rounded
				>
					See Deal!
				</Button>
			</div>
		</div>
	);
}

export default App;
