import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    // Clear name error when user starts typing
    if (errors.name) {
      setErrors(prev => ({ ...prev, name: "" }));
    }
  };
  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Clear email error only when user types a valid email
    if (errors.email && newEmail.trim() && isValidEmail(newEmail.trim())) {
      setErrors(prev => ({ ...prev, email: "" }));
    }
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    // Clear message error when user starts typing
    if (errors.message) {
      setErrors(prev => ({ ...prev, message: "" }));
    }
  };

  // Handle email field blur for immediate validation
  const handleEmailBlur = () => {
    if (email.trim() && !isValidEmail(email.trim())) {
      setErrors(prev => ({ ...prev, email: "Please enter a valid email address" }));
    }
  };
  const isValidEmail = (email) => {
    // More comprehensive email regex that catches common mistakes
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Successfully");
          setShowToast(true);
          setIsSubmitting(false);

          // Hide toast after 3 seconds
          setTimeout(() => {
            setShowToast(false);
            setSuccess("");
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setErrors({ submit: "Failed to send message. Please try again." });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="relative">
      {/* Toast Notification - Fixed position at top center */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-successgreen text-white px-6 py-4 rounded-lg shadow-lg border border-lightcyan w-96 max-w-sm sm:max-w-md md:max-w-lg animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-successgreen font-bold text-sm">✓</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg">Message Received!</p>
              <p className="text-sm opacity-90">
                Thank you for reaching out. We have received your message and
                will get back to you at your email address as soon as possible.{" "}
              </p>
            </div>
          </div>
        </div>
      )}

      <p className="text-cyan">{success}</p>
      
            {/* General error message */}
      {errors.submit && (
        <div className="bg-lightpink border border-lightred text-errorred px-4 py-3 rounded mb-4">
          {errors.submit}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className={`h-12 rounded-lg bg-white px-2 text-darktext w-full border-2 ${
              errors.name ? 'border-lightred' : 'border-transparent'
            }`}
            value={name}
            onChange={handleName}
          />
          {errors.name && (
            <p className="text-lightred text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className={`h-12 text-darktext rounded-lg bg-white px-2 w-full border-2 ${
              errors.email ? 'border-lightred' : 'border-transparent'
            }`}
            value={email}
            onChange={handleEmail}
            onBlur={handleEmailBlur}
          />
          {errors.email && (
            <p className="text-lightred text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <textarea
            type="text"
            name="message"
            rows="9"
            cols="50"
            placeholder="Message"
            className={`rounded-lg bg-white p-2 text-darktext w-full border-2 ${
              errors.message ? 'border-lightred' : 'border-transparent'
            }`}
            value={message}
            onChange={handleMessage}
          />
          {errors.message && (
            <p className="text-lightred text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl transition-all duration-500 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-cyan hover:bg-lightcyan hover:border-lightcyan active:bg-deepcyan active:scale-95 active:shadow-lg'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
