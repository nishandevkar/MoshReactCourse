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
			<select
				defaultValue={selectedCategory}
				className="form-select"
				onChange={(event) => onSelectCategory(event.target.value)}
			>
				{dropdownItems.map((dropdownItem) => (
					<option value={dropdownItem} key={dropdownItem}>
						{dropdownItem}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
