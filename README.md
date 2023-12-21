# react-native-inputtext-roundconner
=======

# React Native Email and Password Input Components

![Email and Password Input Components Empty](Img/1.png)
![Email and Password Input Components Email Error](Img/2.png)
![Email and Password Input Components Password Error Minimum 6 Character Count](Img/3.png)
![Email and Password Input Components Email and Password validate](Img/4.png)
![Email and Password Input Components Password Hidden](Img/5.png)

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
import { EmailInputText } from './path/to/EmailInputText';

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

### 2. `PwdInputText`

A component for handling password input. It includes:

- Customizable title, placeholder, and styles
- Conditional styling based on password validity and editability
- Show/hide password functionality (optional)

#### Usage Example:

```jsx
import { PwdInputText } from './path/to/PwdInputText';

// Inside your component
<PwdInputText
  title="Password"
  placeholder="Enter your password"
  secureTextEntry={true}
  value={passwordValue}
  onChangeText={(newPassword) => setPasswordValue(newPassword)}
  maxLength={50}
  // Additional props can be passed
/>
```

## Styling

The components come with default styling that can be customized. Styling options include border color, background color, and more.
