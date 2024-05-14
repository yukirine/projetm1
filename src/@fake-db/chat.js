// ** Mock Adapter
import mock from 'src/@fake-db/mock'

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2)

const data = {
  profileUser: {
    id: 11,
    avatar: '/images/avatars/1.png',
    fullName: 'John Doe',
    role: 'admin',
    about:
      'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [
    {
      id: 1,
      fullName: 'BeMed Assistance',
      role: 'Assistance',
      about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
      avatar: '/images/avatars/2.png',
      status: 'online'
    },
    {
      id: 2,
      fullName: 'Laurent Breda',
      role: 'Prof',
      avatarColor: 'primary',
      about: 'Au japon...',
      status: 'away'
    }
  ],
  chats: [
    {
      id: 1,
      userId: 1,
      unseenMsgs: 1,
      chat: [
        {
          message: 'Dois-je prendre un doliprane ?',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Oui 👍',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: 'Merci 😇',
          time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
          senderId: 11,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        },
        {
          message: '👍',
          time: previousDay,
          senderId: 1,
          feedback: {
            isSent: true,
            isDelivered: true,
            isSeen: true
          }
        }
      ]
    }
  ]
}

const reorderChats = (arr, from, to) => {
  const item = arr.splice(from, 1)

  // ** Move the item to its new position
  arr.splice(to, 0, item[0])
}

// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------
mock.onGet('/chat/chats-and-contacts').reply(() => {
  const chatsContacts = data.chats.map(chat => {
    const contact = data.contacts.find(c => c.id === chat.userId)

    // @ts-ignore
    contact.chat = { id: chat.id, unseenMsgs: chat.unseenMsgs, lastMessage: chat.chat[chat.chat.length - 1] }

    return contact
  })

  const contactsToShow = data.contacts.filter(co => {
    return !data.chats.some(ch => {
      return co.id === ch.id
    })
  })

  const profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status
  }

  return [200, { chatsContacts, contacts: contactsToShow, profileUser: profileUserData }]
})

// ------------------------------------------------
// GET: Return User Profile
// ------------------------------------------------
mock.onGet('/chat/users/profile-user').reply(() => [200, data.profileUser])

// ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------
mock.onGet('/chat/get-chat').reply(config => {
  // Get event id from URL
  let userId = config.params.id

  //  Convert Id to number
  userId = Number(userId)
  const chat = data.chats.find(c => c.id === userId)
  if (chat) chat.unseenMsgs = 0
  const contact = data.contacts.find(c => c.id === userId)

  // @ts-ignore
  if (contact.chat) contact.chat.unseenMsgs = 0

  return [200, { chat, contact }]
})

// ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------
mock.onPost('/chat/send-msg').reply(config => {
  // Get event from post data
  const { obj } = JSON.parse(config.data).data
  let activeChat = data.chats.find(chat => chat.id === obj.contact.id)

  const newMessageData = {
    senderId: 11,
    time: new Date(),
    message: obj.message,
    feedback: {
      isSent: true,
      isSeen: false,
      isDelivered: false
    }
  }

  // If there's new chat for user create one
  let isNewChat = false
  if (activeChat === undefined) {
    isNewChat = true
    data.chats.push({
      id: obj.contact.id,
      userId: obj.contact.id,
      unseenMsgs: 0,
      chat: [newMessageData]
    })
    activeChat = data.chats[data.chats.length - 1]
  } else {
    activeChat.chat.push(newMessageData)
  }
  const response = { newMessageData, id: obj.contact.id }

  // @ts-ignore
  if (isNewChat) response.chat = activeChat
  reorderChats(
    data.chats,
    data.chats.findIndex(i => i.id === response.id),
    0
  )

  return [201, { response }]
})
