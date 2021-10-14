import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
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

  test('Footer has Add Measure.', () => {
    render(
      <Provider store={store}>
        <Routes>
          <Footer />
        </Routes>
        ,
      </Provider>,

    );
    const anchorElement = screen.getByText(/Add Measure/i);
    expect(anchorElement).toBeInTheDocument();
  });
  test('Footer has Track-it.', () => {
    render(
      <Provider store={store}>
        <Routes>
          <Footer />
        </Routes>
        ,
      </Provider>,

    );
    const anchorElement = screen.getByText(/Track it/i);
    expect(anchorElement).toBeInTheDocument();
  });
  test('Footer has Progress.', () => {
    render(
      <Provider store={store}>
        <Routes>
          <Footer />
        </Routes>
        ,
      </Provider>,

    );
    const anchorElement = screen.getByText(/Your Progress/i);
    expect(anchorElement).toBeInTheDocument();
  });
  test('Footer has More.', () => {
    render(
      <Provider store={store}>
        <Routes>
          <Footer />
        </Routes>
        ,
      </Provider>,

    );
    const anchorElement = screen.getByText(/More/i);
    expect(anchorElement).toBeInTheDocument();
  });
});
