const confirmationResult = yield firebase_app
            .auth()
            .createUserWithEmailAndPassword(email, password);