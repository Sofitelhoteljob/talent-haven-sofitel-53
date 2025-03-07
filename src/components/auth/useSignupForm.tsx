
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ProfileData } from "@/types/auth";

export const useSignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    switch(id) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSelectChange = (field: string, value: string) => {
    switch(field) {
      case "country":
        setCountry(value);
        break;
      case "preferredLanguage":
        setPreferredLanguage(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    if (!country) newErrors.country = "Country is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!preferredLanguage) newErrors.preferredLanguage = "Preferred language is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Create user profile data object that matches the ProfileData type
      const profileData: ProfileData = {
        email,
        full_name: fullName,
        country,
        phone,
        preferred_language: preferredLanguage
      };
      
      await signup(email, password, profileData);
      
      navigate("/login"); // Redirect to login page after successful signup
    } catch (error) {
      // Error is already handled in the signup function
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formState: {
      fullName,
      email,
      password,
      confirmPassword,
      country,
      phone,
      preferredLanguage,
      isLoading,
      errors
    },
    handleInputChange,
    handleSelectChange,
    handleSignup,
    navigate
  };
};
