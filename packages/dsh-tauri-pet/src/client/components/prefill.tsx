import { useEffect } from 'react'
import { store } from '../store'

/** conversation.input.left 槽位注入给草稿组件的属性。 */
export interface ConversationInputLeftProps {
  inputActions: {
    setDraft: (text: string) => void
  }
  sessionId: string
}

/** 新建桌宠会话后把 /hatch 提示词一次性填入输入框（取出即消费）。 */
export function PetPrefill({ sessionId, inputActions }: ConversationInputLeftProps): null {
  useEffect(() => {
    const draft = store.pet.takePrefill(sessionId)
    if (draft === undefined)
      return
    inputActions.setDraft(draft)
  }, [inputActions, sessionId])
  return null
}
