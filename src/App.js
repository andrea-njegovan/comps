import Accordion from "./components/Accordion";

function App() {
	const items = [
		{
			id: "sdfasfe",
			label: "Can I use React on a project",
			content: "You can use React on any project you want. Happy coding!",
		},
		{
			id: "hrtrthht",
			label: "Can I use JavaScript on a project",
			content: "You can use React on any project you want. Happy coding!",
		},
		{
			id: "kmomokpo",
			label: "Can I use CSS on a project",
			content: "You can use React on any project you want. Happy coding!",
		},
	];

	return <Accordion items={items} />;
}

export default App;
