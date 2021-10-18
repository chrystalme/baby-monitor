import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Routes from '../../components/Routes';
import store from '../../store';
import Frontpage from '../../components/FrontPage';

describe('FrontPage', () => {
  test('FrontPage component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <Frontpage />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
