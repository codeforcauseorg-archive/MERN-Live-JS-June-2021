let CustomPage = function ({ which, expiration }) {
    return (
    <div>
      <h1> This is {which} page </h1>
      {expiration ? <h1>Expiring on {expiration}</h1> : <h1>Never expiring</h1>}
    </div>
    );
  }

  export default CustomPage;