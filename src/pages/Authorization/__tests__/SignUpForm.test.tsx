import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from '../SignUp/form/SignUpForm';
import * as useAuth from '../../../store/hooks/useAuth';

describe('SignUp form', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);
  let firstNameInput;
  let lastNameInput;
  let emailInput;
  let passwordInput;
  let confirmPasswordInput;
  let button;

  it('inputs and button are in the document', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>,
    );

    firstNameInput = screen.getByPlaceholderText('First Name');
    lastNameInput = screen.getByPlaceholderText('Last Name');
    emailInput = screen.getByPlaceholderText('Email');
    passwordInput = screen.getByPlaceholderText('Password');
    confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    button = screen.getByRole('submit-button');

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should take correct parameters', async () => {
    const registrationMock = jest.fn();
    jest.spyOn(useAuth, 'useAuth').mockImplementation(() => ({
      signIn: () => undefined,
      signUp: (values) => registrationMock(values),
    }));

    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>,
    );

    firstNameInput = screen.getByPlaceholderText('First Name');
    lastNameInput = screen.getByPlaceholderText('Last Name');
    emailInput = screen.getByPlaceholderText('Email');
    passwordInput = screen.getByPlaceholderText('Password');
    confirmPasswordInput = screen.getByPlaceholderText('Confirm Password');
    button = screen.getByRole('submit-button');

    userEvent.type(firstNameInput, 'Test');
    userEvent.type(lastNameInput, 'Test');
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'test123456');
    userEvent.type(confirmPasswordInput, 'test123456');
    userEvent.click(button);

    await waitFor(() => {
      expect(registrationMock).toHaveBeenCalledWith({
        firstName: 'Test',
        lastName: 'Test',
        userName: 'test@test.com',
        password: 'test123456',
      });
    });
  });
});
