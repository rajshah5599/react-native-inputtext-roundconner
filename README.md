# React Native Email and Password Input Components

<div style="display: flex; justify-content: space-between; margin: 10px;">
  <img src="Img/1.png" alt="Input Empty" width="150" height="375">
  <img src="Img/2.png" alt="Input Email Error" width="150" height="375">
  <img src="Img/3.png" alt="Input Password Error Minimum 6 Character Count" width="150" height="375">
</div>

<div style="display: flex; justify-content: space-between; margin: 10px;">
  <img src="Img/4.png" alt="Email and Password validate" width="150" height="375">
  <img src="Img/5.png" alt="Password Hidden" width="150" height="375">
</div>

This repository contains reusable React Native components for handling email and password input fields. The components provide features like validation, show/hide password functionality, and customizable styling.

## Components

### 1. `EmailInputText`

A component for handling email input. It includes:

- Email validation
- Customizable title, placeholder, and styles
- Conditional styling based on email validity and editability
- Show/hide password functionality (optional)

#### Usage Example:

```jsx
import { EmailInputText } from 'react-native-inputtext-roundconner';

 const [getEmail, setEmail] = useState('')
 
// Inside your component
<EmailInputText
  title="Email"
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
  value={emailValue}
  onChangeText={(newEmail) => setEmailValue(newEmail)}
  maxLength={50}
  // Additional props can be passed
/>
```

### 2. `PasswordInputText`

A component for handling password input. It includes:

- Customizable title, placeholder, and styles
- Conditional styling based on password validity and editability
- Show/hide password functionality (optional)

#### Usage Example:

```jsx
import { PasswordInputText } from 'react-native-inputtext-roundconner';

  const [getPassword, setPassword] = useState('')
  const [getShowPassword, setShowPassword] = useState(false)

  const ShowPassword = () => {
    setShowPassword(!getShowPassword)
  }

// Inside your component
<PasswordInputText
  title="Password"
  placeholder="Enter your password"
  value={getPassword}
  secureTextEntry={true}
  passwordShow={getShowPassword}
  onPressShowPassword={() => ShowPassword()}
  onChangeText={(newPassword) => setPassword(newPassword)}
  maxLength={50}
  // Additional props can be passed
/>
```

## Styling

The components come with default styling that can be customized. Styling options include border color, background color, and more.
