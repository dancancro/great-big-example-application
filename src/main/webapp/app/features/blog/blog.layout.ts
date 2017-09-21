export interface BlogPageLayout {
    type: string,
    filters: {
        tag?: string,
        author?: string,
        favorited?: string,
        limit?: number,
        offset?: number
    },
    currentPage: number

}

export const initialBlogPageLayout = {
    type: 'all',
    filters: {
        limit: 10,
        offset: 0
    },
    currentPage: 1
};
