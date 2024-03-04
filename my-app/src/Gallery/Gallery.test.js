import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from './Gallery';

describe('Gallery Component', () => {
  it('renders the Gallery component', () => {
    render(<Gallery />);
    const galleryTitle = screen.getByText('Gallery');
    expect(galleryTitle).toBeInTheDocument();
  });

  it('displays all images in the gallery', () => {
    render(<Gallery />);
    const galleryImages = screen.getAllByAltText(/Image \d+/);
    expect(galleryImages.length).toBe(10); // Update the value based on the actual number of images
  });

  it('opens the modal when an image is clicked', () => {
    render(<Gallery />);
    const galleryImage = screen.getByAltText('Image 1');
    fireEvent.click(galleryImage);

    const modalImage = screen.getByAltText('Selected Image');
    expect(modalImage).toBeInTheDocument();
  });

  it('closes the modal when clicked outside', () => {
    render(<Gallery />);
    const galleryImage = screen.getByAltText('Image 1');
    fireEvent.click(galleryImage);

    const modal = screen.getByTestId('modal'); // Add data-testid to the modal div
    fireEvent.click(modal);

    const modalImage = screen.queryByAltText('Selected Image');
    expect(modalImage).toBeNull();
  });
});