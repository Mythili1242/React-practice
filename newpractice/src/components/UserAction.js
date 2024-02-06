function UserAction() {
    function apiCallThatCanThrow(){

    }
    try {
      apiCallThatCanThrow();
    } catch (err) {
      throw new Error('New error message', { cause: err });
    }
  }
  
  try {
    UserAction();
  } catch (err) {
    console.log(err);
    console.log(`Cause by: ${err.cause}`);
  }

  export default UserAction;