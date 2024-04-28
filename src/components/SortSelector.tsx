import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (sortOrder: string) => void;
  selectedOrderValue: string;
}

const SortSelector = ({ onSelectedOrder, selectedOrderValue }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const sx = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedOrderValue
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sx?.label || "Relevance"}
        {/* {`order by: ${sx?.label|| 'relevance'}`} 也可以，对比一下*/}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectedOrder(sortOrder.value)}
            key={sortOrder.label}
            value={sortOrder.value}>
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
