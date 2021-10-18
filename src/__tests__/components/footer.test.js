import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Routes from '../../components/Routes';
import store from '../../store';
import Footer from '../../components/Footer';

describe('Footer', () => {
  test('Footer component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <Footer />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
