import React from 'react';
import PropTypes from 'prop-types'
import { FlatList, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40
    },
});

const renderItem = ({ item, index, todos, setTodo}) => {
    return <Row
        title={item}
        isF
    />
}

const TaskList = () => {
    const [todos, setTodo] = React.useState([]);
    const renderItemCall = useCallback(({item, index}) => renderItem({item, index, todos, setTodo}));
    return (
        <View style={styles.container}>
            <FlatList
                extraData={todos}
                data={data}
                renderItem={renderItemCall}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

// TaskList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.object).isRequired
// };

export default TaskList;