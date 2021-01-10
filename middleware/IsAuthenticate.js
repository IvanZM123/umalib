export default function isAuthenticate ({ store, redirect, route }) {
    const { fieldsUser } = store.state.user;

    if(fieldsUser != undefined){ return }
    else{ redirect('/auth/signin.local') }
}
