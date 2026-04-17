import { useQueryCache } from '@pinia/colada'

import { useCurrentUser } from '~/composables/useCurrentUser'
import { useReactions } from '~/queries/useReactions'
import { useUpdateReaction } from '~/queries/useUpdateReaction'

export const useItemReaction = (id: string, target: string) => {
  const queryCache = useQueryCache()
  const { data: reactionsData } = useReactions()
  const { currentUser } = useCurrentUser()

  const updateReaction = useUpdateReaction(() => {
    queryCache.invalidateQueries({ key: ['reactions'] })
    // TODO: add likesCount
  })

  const reactions = computed(() => {
    return reactionsData.value
      ? reactionsData.value.data.filter(
          (reaction) => reaction.targetType === target
        )
      : []
  })

  const isReactedAsLike = computed(() => {
    return !!reactions.value.find(
      (reaction) =>
        reaction.type === 'like' &&
        reaction.userId === currentUser.value?.id &&
        reaction.targetId === id
    )
  })

  const isReactedAsDislike = computed(() => {
    return !!reactions.value.find(
      (reaction) =>
        reaction.type === 'dislike' &&
        reaction.userId === currentUser.value?.id &&
        reaction.targetId === id
    )
  })

  const onToggleLike = () => {
    updateReaction.mutate({
      targetType: target,
      targetId: id,
      type: 'like'
    })
  }

  const onToggleDislike = () => {
    updateReaction.mutate({
      targetType: target,
      targetId: id,
      type: 'dislike'
    })
  }

  return {
    isReactedAsLike,
    isReactedAsDislike,
    onToggleLike,
    onToggleDislike
  }
}
