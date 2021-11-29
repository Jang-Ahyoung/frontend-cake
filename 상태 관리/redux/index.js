import ReactDOM from 'react-dom';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}> {/* store 전달 */}
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);