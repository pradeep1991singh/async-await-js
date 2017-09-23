async function getUserInfo () {
  const api = new Api()
  const user = await api.getUser()
  const friends = await api.getFriends(user.id)
  const photo = await api.getPhoto(user.id)
  return { user, friends, photo }
}

function promiseUserInfo () {
  getUserInfo().then(({ user, friends, photo }) => {
    console.log('promiseUserInfo', { user, friends, photo })
  })
}

async function awaitUserInfo () {
  const { user, friends, photo } = await getUserInfo()
  console.log('awaitUserInfo', { user, friends, photo })
}
