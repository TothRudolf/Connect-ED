type UserCredential = {
    additionalUserInfo?: firebase.auth.AdditionalUserInfo | null;
    credential: firebase.auth.AuthCredential | null;
    operationType?: string | null;
    user: firebase.User | null;
  };