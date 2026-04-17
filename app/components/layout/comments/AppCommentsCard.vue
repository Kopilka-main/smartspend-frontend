<script setup lang="ts"></script>

<template>
  <div class="section-card" :style="{ overflow: 'visible' }">
    <div class="sd-comments-header-row">
      <span class="sd-section-title">Комментарии</span>

      <span class="sd-comments-header-spacer" />

      <div class="csort" :style="{ flexShrink: 0 }">
        <button :class="`c-sort-btn${commentSort === 'new' ? ' active' : ''}`">
          Новые
        </button>
        <button :class="`c-sort-btn${commentSort === 'top' ? ' active' : ''}`">
          Популярные
        </button>
      </div>
    </div>

    <div class="comments-list">
      <div
        v-for="(comment, index) in comments"
        :key="index"
        class="comment-wrap"
      >
        <div class="comment-item">
          <CommentItem
            name="{c.name}"
            ini="{c.ini}"
            navigate="{navigate}"
            avatar-class="c-avatar"
            name-class="c-name"
            date="{c.date}"
          >
            <div class="c-text">{c.text}</div>

            <div class="c-actions">
              <button :class="`c-like${likedComments.has(i) ? ' liked' : ''}`">
                <svg
                  width="11"
                  height="11"
                  :fill="likedComments.has(i) ? 'currentColor' : 'none'"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"
                  />
                  <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                10
              </button>
              <button
                :class="`c-like c-dislike${dislikedComments.has(i) ? ' disliked' : ''}`"
              >
                <svg
                  width="11"
                  height="11"
                  :fill="dislikedComments.has(i) ? 'currentColor' : 'none'"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"
                  />
                  <path
                    d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"
                  />
                </svg>
                10
              </button>
              <button class="c-like c-reply-btn">Ответить</button>
            </div>
          </CommentItem>
        </div>
      </div>
    </div>

    <form class="comments-input">
      <input class="c-input" placeholder="Написать комментарий..." />

      <button type="submit" class="c-submit">Отправить</button>
    </form>
  </div>
</template>
