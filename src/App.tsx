/* eslint-disable @typescript-eslint/no-empty-function */
import './App.css'
import { Notification } from './components/Notification'
import TestIcon from './components/Icons/TestIcon';

function App() {

  return (
    <>
      <Notification.Root>
        <Notification.Icon icon={TestIcon} />
        <Notification.Content text='test description' />
        <Notification.Actions>
          <Notification.Action icon={TestIcon} />
          <Notification.Action icon={TestIcon} />
        </Notification.Actions>
      </Notification.Root>
      <Notification.Root>
        <Notification.Icon icon={TestIcon} />
        <Notification.Content text='test description' />
        <Notification.Actions>
          <Notification.Action icon={TestIcon} />
        </Notification.Actions>
      </Notification.Root>
      <Notification.Root>
        <Notification.Icon icon={TestIcon} />
        <Notification.Content text='test description' />
        <Notification.Actions>
        </Notification.Actions>
      </Notification.Root>

    </>
  )
}

export default App
