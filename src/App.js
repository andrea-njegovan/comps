import Button from "./Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function App() {
	const handleClick = () => {
		console.log("Click!!");
	};

	return (
		<div>
			<div>
				<Button
					success
					rounded
					outline
					className={"mb-3"}
					onClick={handleClick}
				>
					<GoBell />
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
					<GoCloud />
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
					<GoDatabase />
					See Deal!
				</Button>
			</div>
		</div>
	);
}

export default App;
