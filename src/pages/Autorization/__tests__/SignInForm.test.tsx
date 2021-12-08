import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import SignInForm from '../SignIn/form/SignInForm';
import * as useLogin from '../../../store/hooks/useLogin';

describe('SignIn', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let passwordInput;
  let emailInput;
  let button;

  it('inputs and button are in the document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );

    passwordInput = screen.getByPlaceholderText(/password/i);
    emailInput = screen.getByPlaceholderText(/email/i);
    button = screen.getByRole('submit-button');

    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('form should submit with correct values', async () => {
    const loginMock = jest.fn();
    jest.spyOn(useLogin, 'useLogin').mockImplementation(() => ({ signIn: (values) => loginMock(values) }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignInForm />
        </BrowserRouter>
      </Provider>,
    );

    passwordInput = screen.getByPlaceholderText(/password/i);
    emailInput = screen.getByPlaceholderText(/email/i);
    button = screen.getByRole('submit-button');

    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'test123456');

    userEvent.click(button);

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith({
        userName: 'test@test.com',
        password: 'test123456',
      });
    });
  });
});
