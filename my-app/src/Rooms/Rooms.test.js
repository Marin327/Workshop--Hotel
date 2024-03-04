import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Rooms from '../Rooms/Rooms';

describe('Rooms Component', () => {
  it('renders the Rooms component with the correct title and description', () => {
    render(<Rooms />);
    
    // Check if the title is rendered
    const titleElement = screen.getByText('Преживейте Изключителното Удоволствие в Нашите Стаи');
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText('Те са проектирани за вашето удоволствие и уют!');
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders each room with its name, image, price, and reservation button', () => {
    render(<Rooms />);
    
    // Check if each room is rendered with its name, image, price, and reservation button
    const roomElements = screen.getAllByTestId("room");
    expect(roomElements.length).toBe(15); // Adjust the value based on the actual number of rooms

    roomElements.forEach((roomElement, index) => {
      const room = roomsData[index];
      
      // Check if room name is rendered
      const roomNameElement = screen.getByText(room.name);
      expect(roomNameElement).toBeInTheDocument();

      // Check if room image is rendered
      const roomImageElement = screen.getByAltText(`${room.name} - Image 1`);
      expect(roomImageElement).toBeInTheDocument();

      // Check if room price is rendered
      const roomPriceElement = screen.getByText(room.price);
      expect(roomPriceElement).toBeInTheDocument();

      // Check if reservation button is rendered
      const reservationButtonElement = screen.getByText('Резервирай');
      expect(reservationButtonElement).toBeInTheDocument();
    });
  });

  it('opens and closes the gallery overlay when clicking on the room image', () => {
    render(<Rooms />);
    
    // Click on the first room's image
    const roomImageElement = screen.getAllByAltText('Стая Слънчеви поляни')[0];
    fireEvent.click(roomImageElement);

    // Check if the gallery overlay is opened
    const galleryOverlayElement = screen.getByTestId('gallery-overlay');
    expect(galleryOverlayElement).toBeInTheDocument();

    // Click on the close button in the gallery overlay
    const closeButtonElement = screen.getByText('Затвори');
    fireEvent.click(closeButtonElement);

    // Check if the gallery overlay is closed
    expect(galleryOverlayElement).not.toBeInTheDocument();
  });

  it('opens and closes the reservation overlay when clicking on the reservation button', () => {
    render(<Rooms />);
    
    // Click on the first room's reservation button
    const reservationButtonElement = screen.getAllByText('Резервирай')[0];
    fireEvent.click(reservationButtonElement);

    // Check if the reservation overlay is opened
    const reservationOverlayElement = screen.getByTestId('reservation-overlay');
    expect(reservationOverlayElement).toBeInTheDocument();

    // Click on the close button in the reservation overlay
    const closeButtonElement = screen.getByText('Затвори');
    fireEvent.click(closeButtonElement);

    // Check if the reservation overlay is closed
    expect(reservationOverlayElement).not.toBeInTheDocument();
  });
});