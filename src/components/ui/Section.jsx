const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'default',
  ...props 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'
  };
  
  const paddingClasses = {
    none: '',
    sm: 'py-12',
    default: 'py-20',
    lg: 'py-24',
    xl: 'py-32'
  };
  
  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
