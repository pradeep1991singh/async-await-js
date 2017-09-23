async function aysncAwaitTryCatch () {
  try {
    const api = new Api()
    const user = await api.getUser()
    const friends = await api.getFriends(user.id)

    await api.throwError()
    console.log('Error was not thrown')

    const photo = await api.getPhoto(user.id)
    console.log('async/await', { user, friends, photo })
  } catch (err) {
    console.error(err)
  }
}
