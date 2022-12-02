import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  useColorScheme,
} from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const MenuItems = () => {
  const colorScheme = useColorScheme();

  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text
        style={[
          menuStyles.itemText,
          colorScheme === 'light' ? { color: '#000000' } : { color: '#EEEEEE' },
        ]}
      >
        {name}
      </Text>
      <Text
        style={[
          menuStyles.itemText,
          colorScheme === 'light' ? { color: '#000000' } : { color: '#EEEEEE' },
        ]}
      >
        {price}
      </Text>
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View
      style={
        colorScheme === 'light'
          ? { backgroundColor: '#F4CE14' }
          : { backgroundColor: '#495E57' }
      }
    >
      <Text
        style={[
          menuStyles.sectionHeader,
          colorScheme === 'light' ? { color: '#000000' } : { color: '#EEEEEE' },
        ]}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <View
      style={[
        menuStyles.container,
        colorScheme === 'light'
          ? { backgroundColor: '#EEEEEE' }
          : { backgroundColor: '#222222' },
      ]}
    >
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      ></SectionList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: '600',
    padding: 10,
  },
});

export default MenuItems;
