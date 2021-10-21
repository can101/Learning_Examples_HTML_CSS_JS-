try {
    // console.log(myFunction());
    console.log(user.name);
    if (!user.email) {
        throw new Error('user email undefined');
    }

} catch (e) {
    console.log(e);
    console.log(e.name);
    console.log(e.message);
    console.log(e instanceof TypeError);
    console.log(e instanceof ReferenceError);
    console.log(typeof e);

} finally {
    console.log('finally bolck working');
}