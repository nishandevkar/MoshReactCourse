interface DropdownProps {
	dropdownItems: string[];
	onSelectCategory: (category: string) => void;
	selectedCategory: string;
}
const Dropdown = ({
	dropdownItems,
	onSelectCategory,
	selectedCategory,
}: DropdownProps) => {
	return (
		<div>
			<div className="m-5">
				<select
					defaultValue={selectedCategory}
					className="form-select"
					onChange={(event) => onSelectCategory(event.target.value)}
				>
					{dropdownItems.map((dropdownItem) =>
						dropdownItem ? (
							<option value={dropdownItem} key={dropdownItem}>
								{dropdownItem}
							</option>
						) : (
							<option value={"All Categories"} key={""}>
								{"All Categories"}
							</option>
						)
					)}
				</select>
			</div>
		</div>
	);
};

export default Dropdown;
