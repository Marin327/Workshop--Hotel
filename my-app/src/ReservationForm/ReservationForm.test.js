import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from '../ReservationForm/ReservationForm';

describe('ReservationForm Component', () => {
  it('renders the ReservationForm component with the correct title and form elements', () => {
    render(<ReservationForm />);
    
    // Check if the title is rendered
    const titleElement = screen.getByText('Направете Резервация');
    expect(titleElement).toBeInTheDocument();

    // Check if all form elements are rendered
    const formElements = screen.getAllByRole('textbox', { name: /Име|Имейл|Телефон|Специални Заявки/i });
    expect(formElements.length).toBe(7); // Update the value based on the actual number of form elements
  });

  it('applies animation to the reservation form with the correct delay', () => {
    render(<ReservationForm />);
    
    // Check if the reservation form has the 'reservation-form' class
    const reservationForm = screen.getByTestId('reservation-form');
    expect(reservationForm).toHaveClass('reservation-form');

    // Check if the reservation form has the correct animation properties
    expect(reservationForm).toHaveStyle({ opacity: 1, transform: 'translateY(0px)' }); // As the animation is completed, opacity should be 1 and translateY should be 0
    expect(reservationForm).toHaveStyleRule('opacity', '0', { delay: 2000 }); // Check if the delay is applied
    expect(reservationForm).toHaveStyleRule('transform', 'translateY(20px)', { delay: 2000 }); // Check if the delay is applied
  });

  it('updates form data on input change', () => {
    render(<ReservationForm />);
    
    // Type values into input elements
    fireEvent.change(screen.getByLabelText('Име:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Имейл:'), { target: { value: 'john.doe@example.com' } });

    // Check if the form data is updated correctly
    expect(screen.getByLabelText('Име:')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Имейл:')).toHaveValue('john.doe@example.com');
  });

  it('submits the form with the correct data when the button is clicked', () => {
    render(<ReservationForm />);
    
    // Type values into input elements
    fireEvent.change(screen.getByLabelText('Име:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Имейл:'), { target: { value: 'john.doe@example.com' } });
    // Add other required form field values here...

    // Submit the form
    fireEvent.click(screen.getByText('Запази'));

    // Check if the form data is logged to the console (replace this with actual form submission logic)
    expect(console.log).toHaveBeenCalledWith('Формата е изпратена:', {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
      specialRequests: '',
    });
  });
});