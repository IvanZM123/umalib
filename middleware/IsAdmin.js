export default function IsAdmin({ store, redirect }) {
    const { type } = store.state.user.fieldsUser;
    if(type == 'admin'){ return }
    else{ return redirect('/profile') }
}
