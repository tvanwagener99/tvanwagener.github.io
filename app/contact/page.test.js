import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from './page';

// Mock fetch
global.fetch = jest.fn();

describe('ContactPage', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the contact form with all required fields', () => {
    render(<ContactPage />);
    
    // Check if all form elements are present
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    expect(screen.getByText(/download my resume/i)).toBeInTheDocument();
  });

  it('updates form fields when user types', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    await userEvent.type(nameInput, 'John Doe');
    await userEvent.type(emailInput, 'john@example.com');
    await userEvent.type(messageInput, 'Hello, this is a test message');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(messageInput).toHaveValue('Hello, this is a test message');
  });

  it('shows loading state when submitting the form', async () => {
    render(<ContactPage />);
    
    // Mock successful fetch response
    global.fetch.mockImplementationOnce(() => 
      new Promise(resolve => 
        setTimeout(() => resolve({ ok: true }), 100)
      )
    );

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check if loading state is shown
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
  });

  it('shows success message after successful form submission', async () => {
    render(<ContactPage />);
    
    // Mock successful fetch response
    global.fetch.mockImplementationOnce(() => 
      Promise.resolve({ ok: true })
    );

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    });

    // Click "Send another message" button
    fireEvent.click(screen.getByRole('button', { name: /send another message/i }));

    // Verify form fields are empty
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });

  it('shows error message when form submission fails', async () => {
    render(<ContactPage />);
    
    // Mock failed fetch response
    global.fetch.mockImplementationOnce(() => 
      Promise.reject(new Error('Failed to send message'))
    );

    // Fill out the form
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });

  it('validates required fields', async () => {
    render(<ContactPage />);
    
    // Try to submit empty form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check if form validation prevents submission
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('validates email format', async () => {
    render(<ContactPage />);
    
    const emailInput = screen.getByLabelText(/email/i);
    
    // Try invalid email
    await userEvent.type(emailInput, 'invalid-email');
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check if form validation prevents submission
    expect(global.fetch).not.toHaveBeenCalled();
    
    // Try valid email
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'valid@email.com');
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/message/i), 'Test message');
    
    // Mock successful fetch response
    global.fetch.mockImplementationOnce(() => 
      Promise.resolve({ ok: true })
    );
    
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check if form was submitted
    expect(global.fetch).toHaveBeenCalled();
  });

  it('sanitizes input by removing < and > characters', async () => {
    render(<ContactPage />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const messageInput = screen.getByLabelText(/message/i);

    // Try to input potentially harmful characters
    await userEvent.type(nameInput, '<script>alert("xss")</script>');
    await userEvent.type(messageInput, '<div>malicious content</div>');

    // Check if sanitization worked
    expect(nameInput).toHaveValue('scriptalert("xss")/script');
    expect(messageInput).toHaveValue('divmalicious content/div');
  });
}); 