export interface ApiResponse<T> {
  status: string
  code: number
  message: string
  metadata: T | null | string
}

export type EventResponse = ApiResponse<MetadataEvent[]>
export type NewsResponse = ApiResponse<MetadataNews>
export type SiteConfigResponse = ApiResponse<MetadataInfo>
export interface MetadataEvent {
  name: string
  type: number
  total_points: number
  game_event_gifts: {
    id: number
    milestone: number
    open: boolean
    claimed_gift: boolean
    game_gift_detail: {
      code: string
      display_name: string
    }
  }[]
}

export interface MetadataInfo {
  game_register_count: number
  followers_count: number
  link_game_portal: any
  link_fanpage: string
  link_fb_group: string
  link_app_store: string
  link_gg_play: string
}

export interface MetadataNews {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
  items: {
    author_avatar: string | null
    author_name: string
    path: string
    short_desc: string
    show_at: string
    thumbnail: string
    title: string
    user_id: string | null
    news_category: news_category
  }
}

export interface itemNews {
  author_avatar: string | null
  author_name: string
  path: string
  short_desc: string
  show_at: string
  thumbnail: string
  title: string
  user_id: string | null
  news_category: news_category
}

export interface news_category {
  parent: null | string
  path: string
  title: string
}
