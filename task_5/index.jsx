import { useSelector } from 'react-redux';

// our redux state
reduxState = {
    isOnline: true,
    userData: {
        name: 'Peter',
        surname: 'Pen'
    }
}

const MainComponent = () => {
    const userData = useSelector(reduxState => reduxState.userData); // subscribe and get only userData object
    // ... no need to change via useSelector -> useSelector prevent rerendering
};
