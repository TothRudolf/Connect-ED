const userCredential = yield firebase_app
            .auth()
            .signInWithEmailAndPassword(email, password);

            yield firebase_app
                .firestore()
                .collection('profiles')
                .doc(userId)
                .set({
                    something: 'some',
                    you: 'you',
                    want: 'want',
                    toAdd: 'toAdd',}
                )