import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Routes from '../../components/Routes';
import store from '../../store';
import AddMeasure from '../../components/AddMeasure';

describe('Footer', () => {
  test('Footer component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <AddMeasure
            unit="cm"
            header="Add measure"
            value={35}
            changeHandler={() => undefined}
            type="Head circumference"
            increment={() => undefined}
            decrement={() => undefined}
          />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
