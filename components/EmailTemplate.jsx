const EmailTemplate = ({ message }) => {
  console.log(message, 'message');
  return <div className="text-xl">{message}</div>;
};

export default EmailTemplate;
