import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
	const [expanedIndex, setExpandedIndex] = useState(-1);

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expanedIndex;

		const handleClick = (nextIndex) => {
			// Get the latest value in the queue
			setExpandedIndex((currentExpandedIndex) => {
				if (expanedIndex === nextIndex) {
					return -1;
				} else {
					return nextIndex;
				}
			});
		};

		const icon = (
			<span className="text-2xl">
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);

		return (
			<div key={item.id}>
				<div
					className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
					onClick={() => handleClick(index)}
				>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className="border-b p-5">{item.content}</div>}
			</div>
		);
	});

	return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
