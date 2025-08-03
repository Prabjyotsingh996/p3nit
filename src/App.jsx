import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Plus, 
  MessageSquare, 
  Settings, 
  Moon, 
  Sun, 
  Trash2,
  Bot,
  User,
  Menu,
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowLeft,
  Mic,
  MicOff
} from 'lucide-react';

// SignIn Component
const SignIn = ({ onBackToApp, onShowSignup, darkMode }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Welcome back to the English-Kashmiri Translator!');
      onBackToApp();
    } catch (error) {
      alert('Failed to sign in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    alert('Google sign in would be implemented here');
  };

  return (
    <div className={`auth-container min-h-screen relative ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Top Left Logo */}
      <div className="auth-logos absolute top-4 left-4 z-10">
        <div className="logo-container w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
          <img
            src="image/ku logo.png"
            alt="KU Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Top Right Logo */}
      <div className="auth-logos absolute top-1 right-4 z-10">
        <div className="logo-container w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]">
          <img
            src="image/nit logo.png"
            alt="NIT Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Illustration */}
        <div className="auth-illustration hidden lg:flex lg:w-1/3 items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <div
              className={`w-full h-80 rounded-2xl overflow-hidden flex items-center justify-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src="image/i1.png"
                alt="Kashur Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Center Card */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className={`auth-card w-full max-w-md ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } rounded-3xl shadow-2xl p-6 sm:p-8`}>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Welcome <br />
                <span className="text-green-600">Back</span>
              </h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Please sign in to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className={`relative ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">📧</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`auth-input w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              {/* Password Input */}
              <div className={`relative ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  className={`auth-input w-full pl-12 pr-12 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] active:scale-[0.98]'
                } shadow-lg`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className={`w-full py-4 rounded-xl font-medium border transition-all duration-200 flex items-center justify-center gap-3 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                } transform hover:scale-[1.02] active:scale-[0.98] shadow-md`}
              >
                <img 
                  src="https://img.icons8.com/color/20/000000/google-logo.png" 
                  alt="Google" 
                  className="w-5 h-5"
                />
                Google
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Don't have an account?{' '}
                <button
                  onClick={onShowSignup}
                  className="text-green-600 hover:text-green-500 font-medium underline"
                >
                  Sign Up
                </button>
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-4">
              <button
                onClick={onBackToApp}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex lg:w-1/3 items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <div
              className={`w-full h-80 rounded-2xl overflow-hidden flex items-center justify-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src="image/i2.jpg"
                alt="Kashur Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Signup Component
const Signup = ({ onBackToApp, onShowSignIn, darkMode }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Account created successfully! Welcome to the English-Kashmiri Translator!');
      onBackToApp();
    } catch (error) {
      alert('Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    alert('Google sign up would be implemented here');
  };

  return (
    <div className={`min-h-screen relative ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
      {/* Top Left Logo */}
      <div className="absolute top-4 left-4 z-10">
        <div className="w-[150px] h-[150px]">
          <img
            src="image/ku logo.png"
            alt="KU Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Top Right Logo */}
      <div className="absolute top-1 right-4 z-10">
        <div className="w-[150px] h-[150px]">
          <img
            src="image/nit logo.png"
            alt="NIT Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Illustration */}
        <div className="hidden lg:flex lg:w-1/3 items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <div
              className={`w-full h-80 rounded-2xl overflow-hidden flex items-center justify-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src="image/i2.jpg"
                alt="Kashur Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Center Card */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className={`w-full max-w-md ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          } rounded-3xl shadow-2xl p-8`}>
            <div className="text-center mb-8">
              <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's <br />
                <span className="text-green-600">Start</span>
              </h2>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Sign up to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Input */}
              <div className={`relative ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">👤</span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              {/* Email Input */}
              <div className={`relative ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">📧</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              {/* Password Input */}
              <div className={`relative ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-xl border ${
                darkMode ? 'border-gray-600' : 'border-gray-200'
              }`}>
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl">🔒</span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                  className={`w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    darkMode 
                      ? 'bg-gray-700 text-white placeholder-gray-400' 
                      : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transform hover:scale-[1.02] active:scale-[0.98]'
                } shadow-lg`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Sign Up'
                )}
              </button>

              {/* Google Button */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                className={`w-full py-4 rounded-xl font-medium border transition-all duration-200 flex items-center justify-center gap-3 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                } transform hover:scale-[1.02] active:scale-[0.98] shadow-md`}
              >
                <img 
                  src="https://img.icons8.com/color/20/000000/google-logo.png" 
                  alt="Google" 
                  className="w-5 h-5"
                />
                Google
              </button>
            </form>

            {/* Footer */}
            <div className="text-center mt-6">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Already have an account?{' '}
                <button
                  onClick={onShowSignIn}
                  className="text-green-600 hover:text-green-500 font-medium underline"
                >
                  Sign In
                </button>
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="text-center mt-4">
              <button
                onClick={onBackToApp}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden lg:flex lg:w-1/3 items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <div
              className={`w-full h-80 rounded-2xl overflow-hidden flex items-center justify-center ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src="image/i1.png"
                alt="Kashur Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Translator Component
const TranslatorApp = ({ darkMode, toggleDarkMode, onShowSignup, onShowSignIn }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your English-Kashmiri Translator. You can type in English and I'll translate to Kashmiri, or vice versa. You can also use the microphone to speak your message!",
      sender: "assistant",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [conversations, setConversations] = useState([
    { id: 1, title: "Getting Started", timestamp: new Date() }
  ]);
  const [currentConversation, setCurrentConversation] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'en-US';
      
      recognition.onstart = () => {
        setIsRecording(true);
      };
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };
      
      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
        if (event.error === 'not-allowed') {
          alert('Microphone access denied. Please allow microphone access to use voice input.');
        }
      };
      
      setRecognition(recognition);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: input,
        sender: "user",
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      
      if (messages.length === 1) {
        const title = input.length > 30 ? input.substring(0, 30) + '...' : input;
        setConversations(prev => 
          prev.map(conv => 
            conv.id === currentConversation 
              ? { ...conv, title } 
              : conv
          )
        );
      }
      
      const currentInput = input;
      setInput("");
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        const translation = translateText(currentInput);
        const aiResponse = {
          id: Date.now() + 1,
          text: translation,
          sender: "assistant",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1500);
    }
  };

  const toggleRecording = () => {
    if (!recognition) {
      alert('Speech recognition is not supported in your browser. Please use Chrome, Safari, or Edge for voice input.');
      return;
    }

    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const autoResizeTextarea = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
  };

  const startNewConversation = () => {
    const newConversation = {
      id: Date.now(),
      title: "New conversation",
      timestamp: new Date()
    };
    setConversations([newConversation, ...conversations]);
    setCurrentConversation(newConversation.id);
    setMessages([
      {
        id: Date.now(),
        text: "Hello! I'm your English-Kashmiri Translator. You can type in English and I'll translate to Kashmiri, or vice versa. You can also use the microphone to speak your message!",
        sender: "assistant",
        timestamp: new Date()
      }
    ]);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
     {/*nav bar */} 
     <nav className="navbar relative px-4 sm:px-6 py-4 sm:py-9 bg-green-700 dark:bg-green-800 text-white shadow-md">
        {/* Left logos */}
        <div className="navbar-logos absolute left-4 top-1/2 transform -translate-y-1/2 hidden sm:flex items-center gap-1">
          {/* KU Logo */}
          <div className="logo-container w-[250px] h-[270px]">
            <img
              src="image/ku logo.png"
              alt="KU Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* NIT Logo (larger) */}
          <div className="logo-container w-[300px] h-[300px]">
            <img
              src="image/nit logo.png"
              alt="NIT Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <h1 className="navbar-title text-lg sm:text-xl font-bold">English ↔ Kashmiri Translator</h1>
        </div>

        <div className="navbar-buttons absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 sm:gap-3">
          <button
            className="bg-green-600 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-md shadow hover:bg-green-500 transition-colors text-sm"
            onClick={onShowSignup}
          >
            Sign Up
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-green-600 hover:bg-green-500 text-white transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="p-2 rounded-full bg-green-600 hover:bg-green-500 text-white transition-colors"
          >
            <Settings size={18} />
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <div className={`sidebar-width ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } fixed md:relative md:translate-x-0 z-30 w-80 h-full border-r transition-transform duration-300 ease-in-out flex flex-col`}>
          
          <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <button
              onClick={startNewConversation}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                darkMode 
                  ? 'border-gray-600 hover:bg-gray-700 text-white' 
                  : 'border-gray-300 hover:bg-gray-50 text-gray-700'
              }`}
            >
              <Plus size={16} />
              New chat
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setCurrentConversation(conversation.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  currentConversation === conversation.id
                    ? darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    : darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <MessageSquare size={16} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{conversation.title}</p>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {formatTime(conversation.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center gap-2">
              <button
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <Settings size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <header className={`flex items-center justify-between p-4 border-b ${
            darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
          }`}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu size={20} />
              </button>
              <h1 className="text-lg font-semibold">Welcome (خوش آمدید)</h1>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 opacity-0 animate-[fadeIn_0.3s_ease-in-out_forwards] ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'assistant' && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <Bot size={16} />
                  </div>
                )}
                
                <div className={`message-container max-w-[70%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                  <div className={`px-3 py-2 sm:px-4 sm:py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? darkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-500 text-white'
                      : darkMode 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-white text-gray-900 border border-gray-200'
                  }`}>
                    <p className="message-text text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <p className={`text-xs mt-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  } ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>

                {message.sender === 'user' && (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? 'bg-blue-600' : 'bg-blue-500'
                  }`}>
                    <User size={16} className="text-white" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <Bot size={16} />
                </div>
                <div className="max-w-[70%]">
                  <div className={`px-4 py-3 rounded-2xl ${
                    darkMode 
                      ? 'bg-gray-700 text-white' 
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className={`input-container p-3 sm:p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
            <div className={`input-wrapper max-w-4xl mx-auto rounded-2xl border ${
              darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-white'
            } p-2`}>
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    autoResizeTextarea(e);
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message here or use the microphone..."
                  rows={1}
                  className={`input-textarea flex-1 resize-none outline-none text-sm leading-relaxed ${
                    darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  style={{
                    minHeight: '24px',
                    maxHeight: '200px'
                  }}
                />
                
                {/* Microphone Button */}
                <button
                  onClick={toggleRecording}
                  disabled={!recognition}
                  className={`input-buttons p-2 rounded-lg transition-all duration-200 ${
                    isRecording
                      ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                      : recognition
                        ? darkMode 
                          ? 'bg-gray-600 hover:bg-gray-500 text-gray-300' 
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                        : 'bg-gray-300 text-gray-400 cursor-not-allowed'
                  } ${isRecording ? 'shadow-lg shadow-red-500/25' : ''}`}
                  title={isRecording ? 'Stop recording' : 'Start voice input'}
                >
                  {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
                </button>
                
                {/* Send Button */}
                <button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className={`input-buttons p-2 rounded-lg transition-colors ${
                    input.trim()
                      ? darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                      : darkMode 
                        ? 'bg-gray-600 text-gray-400' 
                        : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <Send size={16} />
                </button>
              </div>
              
              {/* Recording indicator */}
              {isRecording && (
                <div className="flex items-center justify-center mt-2 text-sm text-red-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="hidden sm:inline">Listening... Speak now</span>
                    <span className="sm:hidden">Listening...</span>
                  </div>
                </div>
              )}
            </div>
            <p className={`text-xs text-center mt-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <span className="hidden sm:inline">NIT Srinagar • Press and hold mic to speak</span>
              <span className="sm:hidden">NIT Srinagar</span>
            </p>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile First - Base styles for small screens */
        @media (max-width: 640px) {
          .navbar-logos {
            display: none !important;
          }
          
          .navbar-title {
            font-size: 16px !important;
            font-weight: 600 !important;
          }
          
          .navbar-buttons {
            gap: 8px !important;
          }
          
          .navbar-buttons button {
            padding: 6px 12px !important;
            font-size: 12px !important;
          }
          
          .sidebar-width {
            width: 280px !important;
          }
          
          .message-container {
            max-width: 90% !important;
            padding: 12px 16px !important;
          }
          
          .message-text {
            font-size: 14px !important;
            line-height: 1.4 !important;
          }
          
          .input-container {
            padding: 12px !important;
          }
          
          .input-wrapper {
            padding: 8px !important;
          }
          
          .input-textarea {
            font-size: 16px !important; /* Prevents zoom on iOS */
            padding: 8px !important;
          }
          
          .input-buttons {
            padding: 6px !important;
          }
          
          .auth-container {
            padding: 16px !important;
          }
          
          .auth-card {
            padding: 24px !important;
            margin: 16px !important;
          }
          
          .auth-input {
            padding: 12px 40px 12px 40px !important;
            font-size: 16px !important;
          }
          
          .logo-container {
            width: 80px !important;
            height: 80px !important;
          }
        }

        /* Small tablets and large phones */
        @media (min-width: 641px) and (max-width: 768px) {
          .navbar-logos .logo-container:first-child {
            width: 120px !important;
            height: 120px !important;
          }
          
          .navbar-logos .logo-container:last-child {
            width: 140px !important;
            height: 140px !important;
          }
          
          .navbar-title {
            font-size: 18px !important;
          }
          
          .sidebar-width {
            width: 300px !important;
          }
          
          .message-container {
            max-width: 85% !important;
          }
          
          .auth-card {
            max-width: 400px !important;
          }
        }

        /* Medium tablets */
        @media (min-width: 769px) and (max-width: 1024px) {
          .navbar-logos .logo-container:first-child {
            width: 180px !important;
            height: 180px !important;
          }
          
          .navbar-logos .logo-container:last-child {
            width: 200px !important;
            height: 200px !important;
          }
          
          .navbar-title {
            font-size: 19px !important;
          }
          
          .sidebar-width {
            width: 320px !important;
          }
          
          .message-container {
            max-width: 80% !important;
          }
        }

        /* Large tablets and small desktops */
        @media (min-width: 1025px) and (max-width: 1280px) {
          .navbar-logos .logo-container:first-child {
            width: 200px !important;
            height: 200px !important;
          }
          
          .navbar-logos .logo-container:last-child {
            width: 220px !important;
            height: 220px !important;
          }
          
          .sidebar-width {
            width: 340px !important;
          }
        }

        /* Extra large screens */
        @media (min-width: 1281px) {
          .navbar-logos .logo-container:first-child {
            width: 250px !important;
            height: 270px !important;
          }
          
          .navbar-logos .logo-container:last-child {
            width: 300px !important;
            height: 300px !important;
          }
          
          .sidebar-width {
            width: 360px !important;
          }
        }

        /* Landscape orientation adjustments */
        @media (max-height: 600px) and (orientation: landscape) {
          .navbar-logos {
            display: none !important;
          }
          
          .navbar {
            padding: 8px 24px !important;
          }
          
          .auth-logos {
            width: 60px !important;
            height: 60px !important;
          }
          
          .auth-card {
            padding: 20px !important;
          }
          
          .auth-illustration {
            display: none !important;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .logo-container img {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }

        /* Print styles */
        @media print {
          .navbar-buttons,
          .sidebar,
          .input-container {
            display: none !important;
          }
          
          .message-container {
            max-width: 100% !important;
            box-shadow: none !important;
            border: 1px solid #ccc !important;
          }
        }

        /* Dark mode media query support */
        @media (prefers-color-scheme: dark) {
          :root {
            --bg-primary: #111827;
            --bg-secondary: #1f2937;
            --text-primary: #f9fafb;
            --text-secondary: #9ca3af;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus improvements for accessibility */
        @media (prefers-reduced-motion: no-preference) {
          button:focus,
          input:focus,
          textarea:focus {
            transform: scale(1.02);
            transition: transform 0.1s ease;
          }
        }
      `}</style>
    </div>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState('translator'); // 'translator', 'signup', or 'signin'

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const showSignup = () => setCurrentView('signup');
  const showSignIn = () => setCurrentView('signin');
  const showTranslator = () => setCurrentView('translator');

  if (currentView === 'signup') {
    return <Signup onBackToApp={showTranslator} onShowSignIn={showSignIn} darkMode={darkMode} />;
  }

  if (currentView === 'signin') {
    return <SignIn onBackToApp={showTranslator} onShowSignup={showSignup} darkMode={darkMode} />;
  }

  return (
    <TranslatorApp 
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode} 
      onShowSignup={showSignup}
      onShowSignIn={showSignIn} 
    />
  );
};

export default App;