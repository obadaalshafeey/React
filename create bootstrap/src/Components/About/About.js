import Alert from 'react-bootstrap/Alert';

function BasicExample(props) {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
      <h1>{props.raghad}</h1>
    </>
  );
}

export default BasicExample;