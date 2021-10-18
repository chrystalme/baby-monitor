import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Routes from '../../components/Routes';
import store from '../../store';
import TrackItDate from '../../components/TrackItDate';

describe('TrackItDate', () => {
  test('TrackItDate component is rendered correctly', () => {
    const component = render(
      <Provider store={store}>
        <Routes>
          <TrackItDate createdAt="22-07-2021" prev={() => undefined} next={() => undefined} />
          ,
        </Routes>
        ,
      </Provider>,

    );
    expect(component).toMatchSnapshot();
  });
});
