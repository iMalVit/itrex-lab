import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import store from '../../store/store';

describe('router', () => {
  it('should render correct sign in page when click on sign in link', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    userEvent.click(screen.getByText('Sign in'));

    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });
});
